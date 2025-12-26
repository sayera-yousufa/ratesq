import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeHelp from "@/components/WhatWeHelp";
import HowItWorks from "@/components/HowItWorks";
import WhyRatesQ from "@/components/WhyRatesQ";
import WhoItsFor from "@/components/WhoItsFor";
import Features from "@/components/Features";
import ForProfessionals from "@/components/ForProfessionals";
import Compliance from "@/components/Compliance";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhatWeHelp />
        <HowItWorks />
        <WhyRatesQ />
        <WhoItsFor />
        <Features />
        <ForProfessionals />
        <Compliance />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
