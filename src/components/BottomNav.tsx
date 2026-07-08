import { Icon } from "./Icon";

const items = [
  { href: "#home", icon: "home", label: "Home", active: true },
  { href: "#experience", icon: "work", label: "Experience" },
  { href: "#strengths", icon: "psychology", label: "Strengths" },
  { href: "#contact", icon: "mail", label: "Contact" },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around rounded-t-xl border-t border-border-low-contrast bg-surface-container-lowest px-margin-mobile py-2 shadow-md md:hidden">
      {items.map((item) => (
        <a
          key={item.href}
          className={`flex items-center justify-center rounded-lg p-2 transition-transform duration-150 active:scale-95 ${
            item.active ? "bg-surface-variant text-primary" : "text-text-muted hover:text-primary"
          }`}
          href={item.href}
          aria-label={item.label}
        >
          <Icon name={item.icon} filled={item.active} />
        </a>
      ))}
    </nav>
  );
}
