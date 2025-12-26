import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Clock } from "lucide-react";

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
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[hsl(222,57%,15%)] via-[hsl(222,47%,18%)] to-[hsl(222,57%,12%)] text-[hsl(40,33%,98%)] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="inline-block text-xs font-medium tracking-widest text-accent uppercase">
                Get Started
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight">
                When you're ready,
                <br />
                <span className="text-accent">we're here.</span>
              </h2>
              <p className="text-lg text-[hsl(40,33%,98%)]/70 leading-relaxed max-w-md">
                Take your time exploring mortgage rate options. Access transparent information and connect with licensed professionals at your own pace.
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

          {/* Right: Infographic stats */}
          <div className="relative">
            {/* Connecting lines (decorative) */}
            <div className="absolute inset-0 hidden lg:block">
              <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M50 75 L200 150 L350 75" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  className="text-[hsl(40,33%,98%)]/10"
                  strokeDasharray="4 4"
                />
                <path 
                  d="M200 150 L200 250" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  className="text-[hsl(40,33%,98%)]/10"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>

            <div className="grid grid-cols-3 gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="relative group"
                >
                  <div className="bg-[hsl(40,33%,98%)]/5 border border-[hsl(40,33%,98%)]/10 rounded-xl p-6 lg:p-8 text-center backdrop-blur-sm hover:bg-[hsl(40,33%,98%)]/10 transition-all duration-300 hover:border-accent/30">
                    {/* Icon circle */}
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <stat.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                    </div>
                    
                    {/* Label */}
                    <p className="font-semibold text-sm lg:text-base mb-1">
                      {stat.label}
                    </p>
                    <p className="text-xs text-[hsl(40,33%,98%)]/50">
                      {stat.sublabel}
                    </p>
                  </div>

                  {/* Connector dot */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent/40 hidden lg:block" />
                </div>
              ))}
            </div>

            {/* Bottom badge */}
            <div className="mt-8 lg:mt-12 flex justify-center">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[hsl(40,33%,98%)]/5 border border-[hsl(40,33%,98%)]/10">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-[hsl(40,33%,98%)]/70">
                  Compliance-first platform
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
