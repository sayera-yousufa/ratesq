import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-navy-deep overflow-hidden">
      {/* Abstract gradient shapes */}
      <div className="absolute inset-0">
        {/* Large gradient orbs */}
        <div className="absolute top-1/4 -right-20 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-accent/20 to-teal-soft/10 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-teal-soft/15 to-accent/5 blur-3xl" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-navy-medium/50 blur-3xl" />
        
        {/* Subtle geometric lines */}
        <div className="absolute top-20 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-cream/10 to-transparent" />
        <div className="absolute bottom-32 left-1/3 w-32 h-px bg-gradient-to-r from-transparent via-cream/10 to-transparent" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 geometric-grid opacity-[0.03]" />

      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative pt-20">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div className="mb-10">
            <span className="inline-flex items-center gap-4 text-sm font-medium tracking-[0.25em] text-accent uppercase">
              <span className="w-12 h-px bg-accent" />
              Mortgage Marketplace
            </span>
          </div>

          {/* Main headline - CAPS, bold */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-cream mb-10 font-display uppercase leading-[0.95]">
            Find Clarity
            <br />
            <span className="bg-gradient-to-r from-accent via-teal-soft to-accent bg-clip-text text-transparent">
              In Mortgage Rates
            </span>
          </h1>

          {/* Thin divider */}
          <div className="w-24 h-px bg-cream/20 mb-10" />

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-cream/60 leading-relaxed max-w-2xl mb-14 font-light">
            Access transparent rate information and connect directly with licensed mortgage professionals.
          </p>

          {/* CTA - Premium solid button */}
          <Button 
            variant="accent" 
            size="xl" 
            className="group text-base font-semibold tracking-wider uppercase h-16 px-12 shadow-[0_8px_30px_hsl(var(--accent)/0.3)] hover:shadow-[0_12px_40px_hsl(var(--accent)/0.4)] transition-all duration-300"
          >
            Explore Rates
            <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Trust indicators */}
          <div className="mt-20 pt-10 border-t border-cream/10">
            <div className="flex flex-wrap items-center gap-x-16 gap-y-6 text-sm text-cream/40 tracking-wide uppercase">
              {["Licensed Professionals", "NMLS Verified", "Compliance First"].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
