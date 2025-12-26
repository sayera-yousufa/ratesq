import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Clock } from "lucide-react";
import SectionDivider from "./SectionDivider";

const stats = [
  {
    icon: Shield,
    label: "NMLS Verified",
    sublabel: "Professionals",
  },
  {
    icon: Users,
    label: "Direct Access",
    sublabel: "No middlemen",
  },
  {
    icon: Clock,
    label: "Your Timeline",
    sublabel: "No pressure",
  },
];

const CTA = () => {
  return (
    <>
      <SectionDivider variant="geometric" />
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-medium to-navy-deep" />
        
        {/* Geometric overlays */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 geometric-grid opacity-10" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-accent/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-teal-soft/10 blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 border border-cream/10 rotate-45" />
        <div className="absolute bottom-20 right-20 w-12 h-12 border border-cream/10 rotate-12" />
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-accent/20 rotate-45" />

        <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-accent" />
                  <span className="text-sm font-semibold tracking-widest text-accent uppercase">
                    Get Started
                  </span>
                </div>
                <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-cream font-display">
                  When you're ready,
                  <br />
                  <span className="bg-gradient-to-r from-accent to-teal-soft bg-clip-text text-transparent">we're here.</span>
                </h2>
                <p className="text-xl text-cream/70 leading-relaxed max-w-lg">
                  Take your time exploring mortgage rate options. Access transparent information at your own pace.
                </p>
              </div>

              <Button 
                variant="accent" 
                size="xl" 
                className="group text-lg h-16 px-10 shadow-xl glow-accent hover:shadow-2xl transition-all duration-300"
              >
                Explore Rates
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Right: Stats with premium cards */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="group relative bg-cream/5 border border-cream/10 rounded-2xl p-6 lg:p-8 text-center backdrop-blur-sm hover:bg-cream/10 hover:border-accent/30 transition-all duration-500 hover-lift"
                >
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <stat.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                    </div>
                    <p className="font-bold text-lg lg:text-xl text-cream mb-2 font-display">
                      {stat.label}
                    </p>
                    <p className="text-sm text-cream/50">
                      {stat.sublabel}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
