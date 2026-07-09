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
      <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
        <p className="mb-3 font-heading text-section-title uppercase tracking-widest text-text-muted">
          Work Experience
        </p>

        <h2 className="font-heading text-[30px] font-semibold leading-tight tracking-[-0.035em] text-primary md:text-headline-xl">
          Experience, kept simple and scannable.
        </h2>

        <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-7 text-text-muted md:text-body-md">
          A clear view of my full-time career journey and selected consulting or
          project-based work across ecommerce, growth, performance marketing,
          and digital execution.
        </p>
      </div>

      <div className="mx-auto max-w-container-max space-y-12">
        {experienceGroups.map((group) => (
          <div key={group.title}>
            <div className="mb-4 border-l-2 border-primary/20 pl-4 md:mb-5 md:pl-5">
              <h3 className="font-heading text-[18px] font-semibold leading-tight text-primary md:text-[22px]">
                {group.title}
              </h3>

              {group.description && (
                <p className="mt-1.5 max-w-[640px] text-[14.5px] leading-6 text-text-muted md:text-[15.5px] md:leading-7">
                  {group.description}
                </p>
              )}
            </div>

            <div className="space-y-3">
              {group.items.map((item, index) => {
                const itemKey = `${group.title}-${index}`;
                const isActive = activeKey === itemKey;

                return (
                  <article
                    key={`${group.title}-${item.company}-${item.title}`}
                    className={`overflow-hidden rounded-[1rem] border bg-surface-container-lowest transition-all duration-300 md:rounded-[1.25rem] ${
                      isActive
                        ? "border-primary shadow-sm"
                        : "border-border-low-contrast"
                    }`}
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary md:p-5"
                      onClick={() => setActiveKey(isActive ? "" : itemKey)}
                      aria-expanded={isActive}
                    >
                      <span className="min-w-0">
                        <span className="block font-heading text-[18px] font-semibold leading-tight text-primary md:text-[21px]">
                          {item.title}
                        </span>

                        <span className="mt-1 block font-heading text-[13px] text-text-muted md:text-sm">
                          {item.company} — {item.period}
                        </span>
                      </span>

                      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-surface-container-low text-primary md:size-10">
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
                        <div className="px-4 pb-4 text-text-muted md:px-5 md:pb-5">
                          <p className="mb-4 text-[14.5px] leading-7 md:text-[15.5px]">
                            {item.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-surface-variant px-2.5 py-1 font-heading text-[11.5px] text-primary/80 md:px-3 md:text-label-sm"
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
