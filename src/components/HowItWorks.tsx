import { Search, Users, FileText } from "lucide-react";
import dataVisual from "@/assets/data-visual.jpg";
import SectionDivider from "./SectionDivider";

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
    <>
      <SectionDivider variant="geometric" />
      <section id="how-it-works" className="relative py-20 lg:py-28 bg-gradient-to-b from-muted/40 via-muted/60 to-muted/40 overflow-hidden">
        {/* Background geometric pattern */}
        <div className="absolute inset-0 geometric-dots opacity-30" />
        
        <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Image with premium frame */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-accent/20 rounded-3xl" />
                <div className="absolute -inset-8 border border-accent/10 rounded-3xl" />
                
                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-foreground/10 glow-accent">
                  <img 
                    src={dataVisual} 
                    alt="Data visualization" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/20 to-transparent" />
                </div>

                {/* Floating accent */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/10 rounded-2xl rotate-12" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rotate-45 bg-accent" />
                <span className="text-sm font-semibold tracking-widest text-accent uppercase">How It Works</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-12 font-display">
                A straightforward approach to mortgage exploration
              </h2>

              {/* Steps with premium styling */}
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div 
                    key={step.number} 
                    className="group flex gap-6 p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:bg-card hover:border-accent/30 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                      <step.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold tracking-widest text-accent/60">{step.number}</span>
                        <div className="w-8 h-px bg-accent/30" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 font-display">
                        {step.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
