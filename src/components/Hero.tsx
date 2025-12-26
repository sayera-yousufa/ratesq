import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 bg-card">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-8">
            <span className="inline-block text-xs font-medium tracking-widest text-accent uppercase">
              Mortgage Marketplace
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight text-foreground mb-8">
            Clarity in every rate.
            <br />
            <span className="text-muted-foreground">Confidence in every choice.</span>
          </h1>

          {/* Divider */}
          <div className="w-16 h-px bg-border mb-8" />

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10">
            Make informed mortgage decisions with transparent rate information and direct access to licensed professionals you can trust.
          </p>

          {/* CTA */}
          <Button variant="navy" size="xl" className="group">
            Explore Rates
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Licensed professionals only</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>NMLS verified</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Compliance-first</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
