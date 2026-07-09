"use client";

import { useState } from "react";
import { experienceGroups } from "@/data/content";
import { Icon } from "./Icon";

export function ExperienceAccordion() {
  const [activeKey, setActiveKey] = useState("Full-Time Experience-0");

  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-container-wide px-margin-mobile py-section-gap md:px-8"
    >
      <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
        <p className="mb-3 font-heading text-section-title uppercase tracking-widest text-text-muted">
          Work Experience
        </p>

        <h2 className="font-heading text-[31px] font-semibold leading-tight tracking-[-0.035em] text-primary md:text-headline-xl">
          Experience, kept simple and scannable.
        </h2>

        <p className="mx-auto mt-4 max-w-[620px] text-[15.5px] leading-7 text-text-muted md:text-body-md">
          A clear view of my full-time career journey and selected consulting or
          project-based work across ecommerce, growth, performance marketing,
          and digital execution.
        </p>
      </div>

      <div className="mx-auto max-w-container-max space-y-10">
        {experienceGroups.map((group) => (
          <div key={group.title}>
            <div className="mb-4 rounded-[1.25rem] border border-border-low-contrast bg-surface-container-lowest p-5 shadow-sm md:rounded-[1.45rem] md:p-6">
              <h3 className="font-heading text-[22px] font-semibold leading-tight text-primary md:text-[26px]">
                {group.title}
              </h3>

              {group.description && (
                <p className="mt-2 text-[15px] leading-7 text-text-muted md:text-body-md">
                  {group.description}
                </p>
              )}
            </div>

            <div className="space-y-4">
              {group.items.map((item, index) => {
                const itemKey = `${group.title}-${index}`;
                const isActive = activeKey === itemKey;

                return (
                  <article
                    key={`${group.title}-${item.company}-${item.title}`}
                    className={`overflow-hidden rounded-[1.25rem] border bg-surface-container-lowest shadow-sm transition-all duration-300 md:rounded-[1.45rem] ${
                      isActive
                        ? "border-primary shadow-md"
                        : "border-border-low-contrast"
                    }`}
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary md:p-6"
                      onClick={() => setActiveKey(isActive ? "" : itemKey)}
                      aria-expanded={isActive}
                    >
                      <span className="min-w-0">
                        <span className="block font-heading text-[21px] font-semibold leading-tight text-primary md:text-headline-lg-mobile">
                          {item.title}
                        </span>

                        <span className="mt-1 block font-heading text-sm text-text-muted md:text-label-md">
                          {item.company} — {item.period}
                        </span>
                      </span>

                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-surface-container-low text-primary">
                        <Icon
                          name="expand_more"
                          className={`transition-transform duration-300 ${
                            isActive ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 text-text-muted md:px-6 md:pb-6">
                          <p className="mb-4 text-[15.5px] leading-7 md:text-body-md">
                            {item.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-surface-variant px-3 py-1 font-heading text-label-sm text-primary/80"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
