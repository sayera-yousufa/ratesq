import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import GeometricShapes from "./GeometricShapes";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-card via-card to-muted/30 overflow-hidden">
      {/* Geometric background elements */}
      <GeometricShapes variant="hero" />
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 geometric-grid opacity-30" />

      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl">
          {/* Eyebrow with premium styling */}
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-accent uppercase">
              <span className="w-8 h-px bg-accent" />
              Mortgage Marketplace
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-foreground mb-8 font-display">
            Clarity in every rate.
            <br />
            <span className="bg-gradient-to-r from-muted-foreground to-muted-foreground/70 bg-clip-text text-transparent">
              Confidence in every choice.
            </span>
          </h1>

          {/* Geometric accent divider */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-3 h-3 rotate-45 bg-accent" />
            <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-accent/20" />
          </div>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-12">
            Make informed mortgage decisions with transparent rate information and direct access to licensed professionals you can trust.
          </p>

          {/* CTA */}
          <Button variant="navy" size="xl" className="group text-lg h-16 px-10 shadow-xl hover:shadow-2xl transition-all duration-300">
            Explore Rates
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Trust indicators with premium styling */}
          <div className="mt-16 pt-10 border-t border-border/50">
            <div className="flex flex-wrap items-center gap-x-12 gap-y-5 text-base text-muted-foreground">
              {["Licensed professionals only", "NMLS verified", "Compliance-first"].map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-2 h-2 rotate-45 bg-accent group-hover:scale-125 transition-transform" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
