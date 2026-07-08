import { links, profile } from "@/data/content";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border-low-contrast bg-surface-container-low py-section-gap">
      <div className="mx-auto flex w-full max-w-container-wide flex-col gap-8 px-margin-mobile text-center md:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 font-heading text-section-title uppercase tracking-widest text-text-muted">Contact</p>
          <h2 className="font-heading text-[34px] font-semibold leading-tight tracking-[-0.03em] text-primary md:text-headline-xl">Let’s build a stronger growth system.</h2>
          <p className="mt-4 text-body-md text-text-muted">{profile.footerText}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {links.map((link) => (
            <a key={link.label} className="rounded-full border border-border-low-contrast bg-surface-container-lowest px-4 py-2 font-heading text-sm text-text-muted transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <p className="font-heading text-label-sm text-text-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
