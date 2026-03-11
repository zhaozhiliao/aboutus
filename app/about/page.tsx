"use client";

import HeroSection from "@/components/sections/HeroSection";
import VideoShowcase from "@/components/sections/VideoShowcase";
import GlobalScale from "@/components/sections/GlobalScale";
import FinancialBacking from "@/components/sections/FinancialBacking";
import EndToEndSolutions from "@/components/sections/EndToEndSolutions";
import ProcurementModels from "@/components/sections/ProcurementModels";
import GlobalFootprint from "@/components/sections/GlobalFootprint";
import Certifications from "@/components/sections/Certifications";
import Testimonials from "@/components/sections/Testimonials";
import TeamSection from "@/components/sections/TeamSection";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <VideoShowcase />
      <GlobalScale />
      <FinancialBacking />
      <EndToEndSolutions />
      <ProcurementModels />
      <GlobalFootprint />
      <Certifications />
      <Testimonials />
      <TeamSection />
      <FAQ />
      <ContactForm />
    </main>
  );
}
