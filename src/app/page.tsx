import { BottomNav } from "@/components/BottomNav";
import { BrandMarquee } from "@/components/BrandMarquee";
import { CoreStrengths } from "@/components/CoreStrengths";
import { CaseStudies } from "@/components/CaseStudies";
import { ExperienceAccordion } from "@/components/ExperienceAccordion";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pb-24 pt-16 md:pb-0">
        <Hero />
        <BrandMarquee />
        <CoreStrengths />
        <CaseStudies />
        <ExperienceAccordion />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
