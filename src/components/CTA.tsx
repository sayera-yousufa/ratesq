import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-br from-navy-deep to-navy-medium p-10 lg:p-16 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/30 to-transparent" />
          </div>
          
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-primary-foreground">
                Ready to explore your options?
              </h2>
              <p className="text-lg text-primary-foreground/70 max-w-lg">
                Start exploring mortgage rate information and connect with licensed professionals who can provide personalized guidance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
              <Button variant="accent" size="xl">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
