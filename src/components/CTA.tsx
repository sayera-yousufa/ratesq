import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-foreground leading-tight mb-6">
            When you're ready, we're here.
          </h2>

          {/* Supporting text */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Take your time exploring mortgage rate options. Access transparent information and connect with licensed professionals at your own pace.
          </p>

          {/* Single CTA */}
          <Button variant="navy" size="xl" className="group">
            Explore Rates
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
