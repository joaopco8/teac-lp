"use client";

import { useEffect } from "react";
import { HeroSectionPT } from "@/components/sections/hero-section-pt";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { AboutSectionPT } from "@/components/sections/about-section-pt";
import { PriceSectionPT } from "@/components/sections/price-section-pt";
import { GuaranteeSectionPT } from "@/components/sections/guarantee-section-pt";
import { SergioSection } from "@/components/sections/sergio-section";
import { FaqSectionPT } from "@/components/sections/faq-section-pt";

export default function HomePT() {
  // Aplicar tema escuro ao carregar a página
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a2e]">
      <main className="flex-1">
        <HeroSectionPT />
        <TestimonialsSection />
        <AboutSectionPT />
        <PriceSectionPT />
        <GuaranteeSectionPT />
        <SergioSection />
        <FaqSectionPT />
      </main>
    </div>
  );
} 