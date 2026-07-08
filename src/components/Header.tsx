import { profile } from "@/data/content";

const navItems = [
  { label: "Strengths", href: "#strengths" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function IdentityMark() {
  if (profile.avatarSrc) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={profile.avatarSrc}
        alt={`${profile.name} avatar`}
        className="size-10 rounded-2xl border border-border-low-contrast object-cover shadow-sm md:size-11"
      />
    );
  }

  return (
    <span className="grid size-10 place-items-center rounded-2xl border border-border-low-contrast bg-surface-container-lowest font-heading text-sm font-bold text-primary shadow-sm transition-transform group-hover:-translate-y-0.5 md:size-11">
      {profile.initials}
    </span>
  );
}

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border-low-contrast/80 bg-surface/88 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-container-wide items-center justify-between gap-3 px-margin-mobile md:h-[72px] md:px-8">
        <a href="#home" className="group flex min-w-0 items-center gap-3" aria-label="Go to home">
          <IdentityMark />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate font-heading text-[13px] font-semibold text-primary sm:text-sm md:text-[15px]">
              {profile.name}
            </span>
            <span className="mt-1 truncate text-[11px] text-text-muted sm:text-xs">Growth · Ecommerce · Performance</span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 rounded-full border border-border-low-contrast bg-surface-container-lowest p-1 md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 font-heading text-sm text-text-muted transition-colors hover:bg-surface-container-low hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.cvUrl}
          className="shrink-0 rounded-full bg-primary px-3.5 py-2.5 font-heading text-xs font-medium text-on-primary shadow-sm transition-all hover:-translate-y-0.5 hover:opacity-90 sm:px-4 sm:text-sm"
        >
          <span className="sm:hidden">CV</span>
          <span className="hidden sm:inline">Download CV</span>
        </a>
      </div>
    </header>
  );
}
