import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";

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
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[hsl(222,57%,15%)]/95" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="inline-block text-xs font-medium tracking-widest text-accent uppercase">
                Get Started
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight text-[hsl(40,33%,98%)]">
                When you're ready,
                <br />
                <span className="text-accent">we're here.</span>
              </h2>
              <p className="text-base text-[hsl(40,33%,98%)]/70 leading-relaxed max-w-md">
                Take your time exploring mortgage rate options. Access transparent information at your own pace.
              </p>
            </div>

            <Button 
              variant="accent" 
              size="xl" 
              className="group"
            >
              Explore Rates
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-[hsl(40,33%,98%)]/5 border border-[hsl(40,33%,98%)]/10 rounded-xl p-4 lg:p-6 text-center backdrop-blur-sm hover:bg-[hsl(40,33%,98%)]/10 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/20 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <p className="font-semibold text-sm text-[hsl(40,33%,98%)] mb-0.5">
                  {stat.label}
                </p>
                <p className="text-xs text-[hsl(40,33%,98%)]/50">
                  {stat.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
