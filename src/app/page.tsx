"use client";

import { useEffect } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { AboutSection } from "@/components/sections/about-section";
import { PriceSection } from "@/components/sections/price-section";
import { GuaranteeSection } from "@/components/sections/guarantee-section";
import { SergioSection } from "@/components/sections/sergio-section";
import { FaqSection } from "@/components/sections/faq-section";

export default function Home() {
  // Aplicar tema escuro ao carregar a página
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a2e]">
      <main className="flex-1">
        <HeroSection />
        <TestimonialsSection />
        <AboutSection />
        <PriceSection />
        <GuaranteeSection />
        <SergioSection />
        <FaqSection />
      </main>
    </div>
  );
}
