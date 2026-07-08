import { brands, type BrandItem } from "@/data/content";

function BrandLogo({ brand }: { brand: BrandItem }) {
  const content = brand.logoSrc ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={brand.logoSrc}
      alt={brand.name}
      className="max-h-9 w-auto max-w-[150px] object-contain grayscale opacity-70 transition-all group-hover:grayscale-0 group-hover:opacity-100"
    />
  ) : (
    <span className="font-heading text-[26px] font-bold tracking-[-0.03em] opacity-30 grayscale transition-opacity group-hover:opacity-60 md:text-headline-lg">
      {brand.shortName ?? brand.name}
    </span>
  );

  const className = "group inline-flex min-w-[132px] items-center justify-center rounded-2xl px-3 py-2 md:min-w-[160px]";

  if (brand.href) {
    return (
      <a href={brand.href} className={className} aria-label={brand.name} target={brand.href.startsWith("http") ? "_blank" : undefined} rel={brand.href.startsWith("http") ? "noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return <span className={className}>{content}</span>;
}

function BrandRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="marquee-content" aria-hidden={hidden}>
      {brands.map((brand) => (
        <BrandLogo key={brand.name} brand={brand} />
      ))}
    </div>
  );
}

export function BrandMarquee() {
  return (
    <section className="border-y border-border-low-contrast bg-surface-container-lowest py-9 md:py-12" aria-label="Worked with brands">
      <div className="mx-auto mb-5 flex w-full max-w-container-wide flex-col gap-1 px-margin-mobile md:mb-6 md:flex-row md:items-end md:justify-between md:px-8">
        <p className="font-heading text-section-title uppercase tracking-widest text-text-muted">Worked with / trusted by</p>
        <p className="max-w-md text-sm text-text-muted md:text-right">Logo-ready section with text fallback, optional links, and clean alignment.</p>
      </div>
      <div className="marquee-container">
        <BrandRow />
        <BrandRow hidden />
      </div>
    </section>
  );
}
