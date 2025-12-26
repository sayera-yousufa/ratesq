import { Search, Users, FileText } from "lucide-react";
import dataVisual from "@/assets/data-visual.jpg";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Explore options",
    description: "Browse current mortgage rate information across multiple lenders and loan types.",
  },
  {
    icon: Users,
    number: "02",
    title: "Connect with professionals",
    description: "Match with licensed mortgage professionals who can provide personalized guidance.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Make informed decisions",
    description: "Receive detailed information and work directly with verified professionals.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-muted/30 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 geometric-dots opacity-20" />
      
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image with institutional styling */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Clean frame */}
              <div className="absolute -inset-4 border border-border/50 rounded-xl" />
              
              {/* Main image */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={dataVisual} 
                  alt="Data visualization" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/30 to-transparent" />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-accent" />
              <span className="text-sm font-medium tracking-[0.25em] text-accent uppercase">Process</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 font-display">
              How It Works
            </h2>
            
            {/* Thin divider */}
            <div className="w-16 h-px bg-border mb-12" />

            {/* Steps - large text blocks with minimal styling */}
            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step.number} className="group">
                  <div className="flex items-start gap-6">
                    {/* Number */}
                    <span className="text-sm font-bold text-accent tracking-wider">{step.number}</span>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3 font-display">
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed font-light">
                        {step.description}
                      </p>
                      
                      {/* Thin divider under each step */}
                      <div className="w-full h-px bg-border/50 mt-8" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
