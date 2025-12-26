import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-navy-deep">
      {/* Abstract gradient shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-accent/15 to-teal-soft/5 blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-teal-soft/10 to-accent/5 blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 geometric-grid opacity-[0.03]" />

      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="w-12 h-px bg-accent" />
            <span className="text-sm font-medium tracking-[0.25em] text-accent uppercase">Get Started</span>
            <span className="w-12 h-px bg-accent" />
          </div>

          {/* Headline */}
          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-cream font-display mb-8 leading-[1.05]">
            Ready to explore
            <br />
            <span className="bg-gradient-to-r from-accent via-teal-soft to-accent bg-clip-text text-transparent">
              your options?
            </span>
          </h2>

          {/* Thin divider */}
          <div className="w-16 h-px bg-cream/20 mx-auto mb-10" />

          {/* Subtext */}
          <p className="text-xl text-cream/60 leading-relaxed mb-14 font-light max-w-xl mx-auto">
            Access transparent mortgage rate information at your own pace. No pressure, no obligations.
          </p>

          {/* CTA Button */}
          <Button 
            variant="accent" 
            size="xl" 
            className="group text-base font-semibold tracking-wider uppercase h-16 px-14 shadow-[0_8px_30px_hsl(var(--accent)/0.3)] hover:shadow-[0_12px_40px_hsl(var(--accent)/0.4)] transition-all duration-300"
          >
            Explore Rates
            <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Trust line */}
          <div className="mt-16 pt-10 border-t border-cream/10">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm text-cream/40 tracking-wide uppercase">
              {["Licensed Only", "NMLS Verified", "No Obligations"].map((item, index) => (
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

export default CTA;
