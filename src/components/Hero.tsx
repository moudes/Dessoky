import { heroStats, positioningTags, profile, siteSettings } from "@/data/content";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-margin-mobile pb-14 pt-9 md:px-8 md:pb-24 md:pt-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-[680px] bg-[radial-gradient(circle_at_top_left,#ffffff_0,#f9f9f9_44%,#eeeeee_100%)]" />
      <div className="mx-auto grid w-full max-w-container-wide gap-8 md:grid-cols-[1.06fr_0.94fr] md:items-center">
        <div className="order-2 md:order-1">
          <p className="mb-4 font-heading text-section-title uppercase tracking-widest text-text-muted">{profile.eyebrow}</p>
          <h1 className="max-w-3xl font-heading text-[35px] font-semibold leading-[1.04] tracking-[-0.045em] text-primary sm:text-[48px] md:text-[64px]">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-[16.5px] leading-8 text-text-muted md:text-body-lg">
            <strong className="font-semibold text-primary">{profile.name}</strong> — {profile.summary}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={profile.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 font-heading text-sm font-medium text-on-primary shadow-sm transition-all hover:-translate-y-0.5 hover:opacity-90"
            >
              {profile.primaryCta.label}
            </a>
            <a
              href={profile.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-border-low-contrast bg-surface-container-lowest px-5 py-3 font-heading text-sm font-medium text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary"
            >
              {profile.secondaryCta.label}
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {positioningTags.map((tag) => (
              <span key={tag} className="rounded-full border border-border-low-contrast bg-surface-container-lowest px-3 py-1.5 font-heading text-xs font-medium text-text-muted">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <aside className={`order-1 md:order-2 ${siteSettings.showHeroMediaOnMobile ? "block" : "hidden md:block"}`}>
          <div className="relative mx-auto max-w-[380px] rounded-[1.8rem] border border-border-low-contrast bg-surface-container-lowest p-2.5 shadow-[0_24px_80px_rgba(0,0,0,0.08)] sm:max-w-[430px] md:p-3">
            <div className="overflow-hidden rounded-[1.35rem] bg-surface-container-low md:rounded-[1.5rem]">
              {/* To use your own full photo: put it in /public/profile/profile-photo.jpg and set profile.heroImage to "/profile/profile-photo.jpg". */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="aspect-[4/4.25] w-full object-cover grayscale md:aspect-[4/4.35]" src={profile.heroImage} alt={profile.heroImageAlt} />
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/70 bg-white/88 p-3.5 shadow-lg backdrop-blur-xl md:bottom-5 md:left-5 md:right-5 md:p-4">
              <p className="font-heading text-[13px] font-semibold leading-snug text-primary md:text-sm">{profile.role}</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-surface-container-lowest p-2.5 text-center md:p-3">
                    <p className="font-heading text-[13px] font-semibold text-primary md:text-sm">{stat.value}</p>
                    <p className="mt-1 text-[9px] uppercase tracking-wide text-text-muted md:text-[10px]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
