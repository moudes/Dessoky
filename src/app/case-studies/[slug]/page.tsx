import { notFound } from "next/navigation";
import { caseStudies, profile } from "@/data/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const item = caseStudies.find((caseStudy) => caseStudy.slug === params.slug && caseStudy.isVisible);

  if (!item) notFound();

  return (
    <>
      <Header />
      <main className="px-margin-mobile pb-20 pt-24 md:px-8 md:pt-32">
        <article className="mx-auto max-w-container-max">
          <a href="/#case-studies" className="font-heading text-sm font-semibold text-text-muted hover:text-primary">← Back to case studies</a>
          <p className="mt-8 font-heading text-section-title uppercase tracking-widest text-text-muted">{item.eyebrow}</p>
          <h1 className="mt-4 font-heading text-[38px] font-semibold leading-tight tracking-[-0.05em] text-primary md:text-[64px]">{item.title}</h1>
          <p className="mt-6 text-body-lg text-text-muted">{item.summary}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <section className="rounded-[1.5rem] border border-border-low-contrast bg-surface-container-low p-6">
              <h2 className="font-heading text-xl font-semibold text-primary">Problem</h2>
              <p className="mt-4 text-body-md text-text-muted">{item.problem}</p>
            </section>
            <section className="rounded-[1.5rem] border border-border-low-contrast bg-surface-container-lowest p-6">
              <h2 className="font-heading text-xl font-semibold text-primary">Actions</h2>
              <ul className="mt-4 space-y-3 text-body-md text-text-muted">
                {item.actions.map((action) => (
                  <li key={action} className="flex gap-3">
                    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="mt-6 rounded-[1.5rem] border border-border-low-contrast bg-surface-container-low p-6">
            <h2 className="font-heading text-xl font-semibold text-primary">Result signals</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.results.map((result) => (
                <span key={result} className="rounded-full bg-white px-4 py-2 font-heading text-sm font-medium text-primary">{result}</span>
              ))}
            </div>
          </section>

          <div className="mt-6 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border-low-contrast px-3 py-1 font-heading text-label-sm text-text-muted">{tag}</span>
            ))}
          </div>

          <p className="mt-12 text-sm text-text-muted">Prepared as part of {profile.name}'s digital portfolio.</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
