/**
 * Fetches real contribution data from GitHub's (undocumented) public
 * contributions endpoint at build time. Returns null on any failure so
 * callers can fall back gracefully instead of breaking the build.
 */

export interface ContributionDay {
  date: string; // YYYY-MM-DD
  level: number; // 0-4, GitHub's own bucketing
  tooltip: string; // e.g. "3 contributions on August 3rd."
}

export interface ContributionData {
  total: number;
  periodLabel: string; // e.g. "in the last year"
  days: ContributionDay[];
}

export async function getGithubContributions(
  username: string
): Promise<ContributionData | null> {
  try {
    const res = await fetch(`https://github.com/users/${username}/contributions`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (portfolio-build-script)' },
    });
    if (!res.ok) return null;
    const html = await res.text();

    const totalMatch = html.match(
      /id="js-contribution-activity-description"[^>]*>\s*([\d,]+)\s*contributions\s*(in the last year|in \d{4})?/
    );
    if (!totalMatch) return null;
    const total = parseInt(totalMatch[1].replace(/,/g, ''), 10);
    const periodLabel = (totalMatch[2] ?? 'in the last year').trim();

    const cellById = new Map<string, { date: string; level: number }>();
    const cellRe =
      /data-date="([^"]+)" id="(contribution-day-component-\d+-\d+)" data-level="(\d)"/g;
    let m: RegExpExecArray | null;
    while ((m = cellRe.exec(html))) {
      cellById.set(m[2], { date: m[1], level: parseInt(m[3], 10) });
    }

    const tooltipById = new Map<string, string>();
    const tooltipRe = /id="tooltip-[^"]*" for="(contribution-day-component-\d+-\d+)"[^>]*>([^<]+)/g;
    while ((m = tooltipRe.exec(html))) {
      tooltipById.set(m[1], m[2].replace(/\s+/g, ' ').trim());
    }

    const days: ContributionDay[] = [];
    for (const [id, cell] of cellById) {
      days.push({
        date: cell.date,
        level: cell.level,
        tooltip: tooltipById.get(id) ?? cell.date,
      });
    }
    days.sort((a, b) => a.date.localeCompare(b.date));

    if (days.length === 0) return null;
    return { total, periodLabel, days };
  } catch {
    return null;
  }
}
