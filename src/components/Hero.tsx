import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 bg-card overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={heroImage} 
          alt="" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-card via-card/95 to-card/80" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-6">
            <span className="inline-block text-xs font-medium tracking-widest text-accent uppercase">
              Mortgage Marketplace
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight text-foreground mb-6">
            Clarity in every rate.
            <br />
            <span className="text-muted-foreground">Confidence in every choice.</span>
          </h1>

          {/* Divider */}
          <div className="w-16 h-px bg-border mb-6" />

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mb-8">
            Make informed mortgage decisions with transparent rate information and direct access to licensed professionals you can trust.
          </p>

          {/* CTA */}
          <Button variant="navy" size="xl" className="group">
            Explore Rates
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Trust indicators */}
          <div className="mt-10 pt-6 border-t border-border">
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
