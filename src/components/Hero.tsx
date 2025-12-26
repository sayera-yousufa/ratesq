import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-soft/40 to-transparent" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <p className="text-sm font-medium tracking-wide text-accent uppercase animate-fade-in" style={{ animationDelay: "0ms" }}>
                Mortgage Marketplace
              </p>
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-foreground text-balance animate-fade-in"
                style={{ animationDelay: "100ms" }}
              >
                Explore mortgage options with clarity
              </h1>
              <p 
                className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in"
                style={{ animationDelay: "200ms" }}
              >
                A transparent marketplace connecting homebuyers and homeowners with licensed mortgage professionals. No pressure, no hidden agendas.
              </p>
            </div>

            <div 
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              <Button variant="navy" size="xl">
                Explore Rates
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="navy-outline" size="xl">
                For Professionals
              </Button>
            </div>

            {/* Trust indicators */}
            <div 
              className="pt-8 border-t border-border animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Licensed professionals only</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>NMLS verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Compliance-first platform</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual element - Abstract grid pattern */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Grid pattern */}
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-3">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-lg bg-gradient-to-br from-navy-deep/5 to-navy-deep/10 border border-border/50 animate-fade-in-slow"
                    style={{ 
                      animationDelay: `${400 + i * 50}ms`,
                      opacity: 0 
                    }}
                  />
                ))}
              </div>
              {/* Accent overlay */}
              <div className="absolute top-8 left-8 right-8 bottom-8 rounded-2xl bg-gradient-to-br from-teal/10 to-transparent border border-accent/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
