import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-card overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={heroImage} 
          alt="" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-card via-card/98 to-card/90" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-8">
            <span className="inline-block text-sm font-semibold tracking-widest text-accent uppercase">
              Mortgage Marketplace
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-foreground mb-8 font-display">
            Clarity in every rate.
            <br />
            <span className="text-muted-foreground">Confidence in every choice.</span>
          </h1>

          {/* Divider */}
          <div className="w-20 h-1 bg-accent mb-8" />

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
            Make informed mortgage decisions with transparent rate information and direct access to licensed professionals you can trust.
          </p>

          {/* CTA */}
          <Button variant="navy" size="xl" className="group text-lg h-16 px-10">
            Explore Rates
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Trust indicators */}
          <div className="mt-14 pt-8 border-t border-border">
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-base text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="font-medium">Licensed professionals only</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="font-medium">NMLS verified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="font-medium">Compliance-first</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
