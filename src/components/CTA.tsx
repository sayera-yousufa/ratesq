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
    <section className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[hsl(222,57%,13%)]/95" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="inline-block text-sm font-semibold tracking-widest text-accent uppercase">
                Get Started
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] text-[hsl(40,33%,98%)] font-display">
                When you're ready,
                <br />
                <span className="text-accent">we're here.</span>
              </h2>
              <p className="text-lg lg:text-xl text-[hsl(40,33%,98%)]/70 leading-relaxed max-w-lg">
                Take your time exploring mortgage rate options. Access transparent information at your own pace.
              </p>
            </div>

            <Button 
              variant="accent" 
              size="xl" 
              className="group text-lg h-16 px-10"
            >
              Explore Rates
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-3 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-[hsl(40,33%,98%)]/5 border border-[hsl(40,33%,98%)]/10 rounded-2xl p-6 lg:p-8 text-center backdrop-blur-sm hover:bg-[hsl(40,33%,98%)]/10 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/20 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                <p className="font-bold text-base lg:text-lg text-[hsl(40,33%,98%)] mb-1 font-display">
                  {stat.label}
                </p>
                <p className="text-sm text-[hsl(40,33%,98%)]/50">
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
