import { strengths } from "@/data/content";
import { Icon } from "./Icon";

export function CoreStrengths() {
  return (
    <section id="strengths" className="mx-auto w-full max-w-container-wide px-margin-mobile py-section-gap md:px-8">
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="mb-3 font-heading text-section-title uppercase tracking-widest text-text-muted">Core Strengths</p>
        <h2 className="font-heading text-[31px] font-semibold leading-tight tracking-[-0.035em] text-primary md:text-headline-xl">
          What I can own from strategy to execution.
        </h2>
        <p className="mt-4 text-body-md text-text-muted">
          The strengths are framed around business outcomes: profitable acquisition, ecommerce execution, reporting clarity, and customer journey improvement.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {strengths.map((item) => (
          <article
            key={item.title}
            className="group rounded-[1.35rem] border border-border-low-contrast bg-surface-container-lowest p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md md:rounded-[1.6rem] md:p-7"
          >
            <div className="mb-5 flex items-start justify-between gap-5 md:mb-6">
              <div>
                <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-widest text-text-muted">{item.eyebrow}</p>
                <h3 className="font-heading text-[22px] font-semibold leading-tight tracking-[-0.02em] text-primary md:text-headline-lg-mobile">{item.title}</h3>
              </div>
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-surface-container-low transition-colors group-hover:bg-primary group-hover:text-on-primary md:size-12">
                <Icon name={item.icon} className="text-[25px] md:text-[26px]" filled />
              </span>
            </div>
            <p className="text-[15.5px] leading-7 text-text-muted md:text-body-md">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
