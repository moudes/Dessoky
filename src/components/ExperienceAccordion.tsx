"use client";

import { useState } from "react";
import { experienceGroups } from "@/data/content";
import { Icon } from "./Icon";

export function ExperienceAccordion() {
  const [activeKey, setActiveKey] = useState("Full-Time Experience-0");

  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-container-wide px-margin-mobile py-14 md:px-8 md:py-section-gap"
    >
      <div className="mx-auto mb-9 max-w-2xl text-center md:mb-12">
        <p className="mb-3 font-heading text-section-title uppercase tracking-widest text-text-muted">
          Work Experience
        </p>

        <h2 className="font-heading text-[28px] font-semibold leading-tight tracking-[-0.035em] text-primary md:text-headline-xl">
          Career experience
        </h2>

        <p className="mx-auto mt-3 max-w-[580px] text-[14.5px] leading-7 text-text-muted md:text-body-md">
          Full-time and project-based experience across ecommerce, growth,
          performance marketing, and digital execution.
        </p>
      </div>

      <div className="mx-auto max-w-container-max space-y-11 md:space-y-14">
        {experienceGroups.map((group) => (
          <div key={group.title}>
            <div className="mb-4 md:mb-5">
              <p className="font-heading text-[12px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                {group.title}
              </p>

              {group.description && (
                <p className="mt-1.5 max-w-[620px] text-[14px] leading-6 text-text-muted md:text-[15px] md:leading-7">
                  {group.description}
                </p>
              )}
            </div>

            <div className="divide-y divide-border-low-contrast overflow-hidden rounded-[1.25rem] border border-border-low-contrast bg-surface-container-lowest">
              {group.items.map((item, index) => {
                const itemKey = `${group.title}-${index}`;
                const isActive = activeKey === itemKey;

                return (
                  <article key={`${group.title}-${item.company}-${item.title}`}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors duration-200 hover:bg-surface-container-low focus:outline-none focus-visible:ring-2 focus-visible:ring-primary md:px-5 md:py-4.5"
                      onClick={() => setActiveKey(isActive ? "" : itemKey)}
                      aria-expanded={isActive}
                    >
                      <span className="min-w-0">
                        <span className="block font-heading text-[16.5px] font-semibold leading-tight text-primary md:text-[19px]">
                          {item.title}
                        </span>

                        <span className="mt-1 block text-[12.5px] leading-5 text-text-muted md:text-sm">
                          {item.company} · {item.period}
                        </span>
                      </span>

                      <span
                        className={`grid size-8 shrink-0 place-items-center rounded-full transition-colors duration-200 md:size-9 ${
                          isActive
                            ? "bg-primary text-white"
                            : "bg-surface-container-low text-primary"
                        }`}
                      >
                        <Icon
                          name="expand_more"
                          className={`text-[20px] transition-transform duration-300 ${
                            isActive ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 pb-4 text-text-muted md:px-5 md:pb-5">
                          <p className="text-[14.5px] leading-7 md:text-[15.5px]">
                            {item.description}
                          </p>

                          {item.tags?.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full bg-surface-variant px-2.5 py-1 font-heading text-[11.5px] text-primary/75 md:px-3 md:text-label-sm"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
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
