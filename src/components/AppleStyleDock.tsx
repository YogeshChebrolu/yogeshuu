import { useEffect, useState } from 'react';
import { Home as HomeIcon, Briefcase, LayoutGrid, User, ScrollText, FileText } from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from './core/dock';

interface NavItem {
  label: string;
  href: string;
}

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Home: HomeIcon,
  Experience: Briefcase,
  Works: LayoutGrid,
  About: User,
  Writing: ScrollText,
  Resume: FileText,
};

const SECTION_IDS = ['home', 'experience', 'works', 'about', 'writing'];

export function AppleStyleDock({ nav }: { nav: NavItem[] }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (window.location.pathname !== '/') return;
    setActiveId('home');
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const isActive = (item: NavItem) => {
    if (item.href === '/') return activeId === 'home';
    if (item.href.startsWith('/#')) return activeId === item.href.slice(2);
    if (typeof window === 'undefined') return false;
    return window.location.pathname.startsWith(item.href);
  };

  return (
    <div className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 px-4">
      <Dock className="items-end pb-2">
        {nav.map((item) => {
          const Icon = ICONS[item.label] ?? HomeIcon;
          const external = item.href.endsWith('.pdf');
          const active = isActive(item);
          return (
            <a
              key={item.label}
              href={item.href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener' : undefined}
              className="relative flex items-center justify-center no-underline"
            >
              <DockItem className="aspect-square rounded-full bg-fill">
                <DockLabel>{item.label}</DockLabel>
                <DockIcon>
                  <Icon className={active ? 'h-full w-full text-fg' : 'h-full w-full text-fg-muted'} />
                </DockIcon>
              </DockItem>
              {active && (
                <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-fg" />
              )}
            </a>
          );
        })}
      </Dock>
    </div>
  );
}
