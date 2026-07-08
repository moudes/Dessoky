"use client";

import { useEffect, useMemo, useState } from "react";
import { caseStudies, siteSettings, type CaseStudy } from "@/data/content";
import { Icon } from "./Icon";

function CaseVisual({ item }: { item: CaseStudy }) {
  if (item.imageSrc) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={item.imageSrc} alt="" className="h-full min-h-[170px] w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0" />
    );
  }

  return (
    <div className="flex h-full min-h-[170px] items-end bg-[radial-gradient(circle_at_top_left,#ffffff_0,#eeeeee_45%,#dcdcdc_100%)] p-5">
      <div>
        <p className="font-heading text-xs uppercase tracking-widest text-text-muted">Case</p>
        <p className="mt-2 font-heading text-[38px] font-semibold tracking-[-0.06em] text-primary/70">{item.title.slice(0, 2)}</p>
      </div>
    </div>
  );
}

function ActionButton({ item, onOpen }: { item: CaseStudy; onOpen: (item: CaseStudy) => void }) {
  const mode = item.openMode ?? siteSettings.defaultCaseStudyOpenMode;

  if (mode === "external" && item.externalHref) {
    return (
      <a href={item.externalHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-primary">
        Open case <Icon name="arrow_outward" className="text-[18px]" />
      </a>
    );
  }

  if (mode === "page") {
    return (
      <a href={`/case-studies/${item.slug}`} className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-primary">
        View page <Icon name="arrow_forward" className="text-[18px]" />
      </a>
    );
  }

  return (
    <button type="button" onClick={() => onOpen(item)} className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-primary">
      View details <Icon name="add" className="text-[18px]" />
    </button>
  );
}

function CaseModal({ item, onClose }: { item: CaseStudy; onClose: () => void }) {
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/40 p-3 backdrop-blur-sm md:items-center md:p-6" role="dialog" aria-modal="true" aria-label={item.title}>
      <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[1.6rem] bg-surface-container-lowest shadow-2xl md:rounded-[2rem]">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border-low-contrast bg-white/90 p-4 backdrop-blur-md md:p-5">
          <div>
            <p className="font-heading text-xs uppercase tracking-widest text-text-muted">{item.eyebrow}</p>
            <h3 className="mt-1 font-heading text-xl font-semibold tracking-[-0.03em] text-primary md:text-[28px]">{item.title}</h3>
          </div>
          <button type="button" onClick={onClose} className="grid size-10 shrink-0 place-items-center rounded-full bg-surface-container-low text-primary" aria-label="Close case study">
            <Icon name="close" />
          </button>
        </div>

        <div className="p-5 md:p-7">
          <p className="text-body-md text-text-muted">{item.summary}</p>

          <div className="mt-7 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-2xl border border-border-low-contrast bg-surface-container-low p-5">
              <p className="font-heading text-sm font-semibold text-primary">Problem</p>
              <p className="mt-3 text-sm leading-7 text-text-muted">{item.problem}</p>
            </div>
            <div className="rounded-2xl border border-border-low-contrast bg-surface-container-lowest p-5">
              <p className="font-heading text-sm font-semibold text-primary">Actions</p>
              <ul className="mt-3 space-y-3 text-sm leading-7 text-text-muted">
                {item.actions.map((action) => (
                  <li key={action} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-border-low-contrast bg-surface-container-low p-5">
            <p className="font-heading text-sm font-semibold text-primary">Result signals</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.results.map((result) => (
                <span key={result} className="rounded-full bg-white px-3 py-1.5 font-heading text-xs font-medium text-primary">
                  {result}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border-low-contrast px-3 py-1 font-heading text-label-sm text-text-muted">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CaseStudies() {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);
  const visibleCases = useMemo(() => caseStudies.filter((item) => item.isVisible), []);

  if (!siteSettings.showCaseStudies || visibleCases.length === 0) return null;

  return (
    <section id="case-studies" className="mx-auto w-full max-w-container-wide px-margin-mobile py-section-gap md:px-8">
      <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 font-heading text-section-title uppercase tracking-widest text-text-muted">Highlighted Case Studies</p>
          <h2 className="font-heading text-[31px] font-semibold leading-tight tracking-[-0.035em] text-primary md:text-headline-xl">
            Proof points without making the page heavy.
          </h2>
          <p className="mt-4 text-body-md text-text-muted">
            Keep these short on the homepage. Open details in a modal, redirect to a case page, or link externally from the content file.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {visibleCases.map((item) => (
          <article key={item.slug} className="group overflow-hidden rounded-[1.5rem] border border-border-low-contrast bg-surface-container-lowest shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md">
            <div className="h-[170px] overflow-hidden">
              <CaseVisual item={item} />
            </div>
            <div className="p-5">
              <p className="font-heading text-xs font-semibold uppercase tracking-widest text-text-muted">{item.eyebrow}</p>
              <h3 className="mt-3 font-heading text-[22px] font-semibold leading-tight tracking-[-0.03em] text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-text-muted">{item.summary}</p>
              <div className="mt-5 flex items-center justify-between gap-4">
                <ActionButton item={item} onOpen={setActiveCase} />
                <span className="text-xs text-text-muted">{item.tags[0]}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {activeCase ? <CaseModal item={activeCase} onClose={() => setActiveCase(null)} /> : null}
    </section>
  );
}
