import { TrendingUp, BarChart3, Users } from "lucide-react";
import GeometricShapes from "./GeometricShapes";

const items = [
  {
    icon: TrendingUp,
    title: "Discover competitive mortgage rates",
    description: "Access current rate information from multiple sources in one place.",
  },
  {
    icon: BarChart3,
    title: "Compare options with confidence",
    description: "Review and evaluate different mortgage products side by side.",
  },
  {
    icon: Users,
    title: "Connect with licensed professionals",
    description: "Reach verified mortgage experts who can guide your decisions.",
  },
];

const WhatWeHelp = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-card overflow-hidden">
      <GeometricShapes variant="corner" />
      
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header with premium styling */}
        <div className="mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rotate-45 bg-accent" />
            <span className="text-sm font-semibold tracking-widest text-accent uppercase">Our Focus</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-display">
            What RatesQ Helps With
          </h2>
        </div>

        {/* Three columns with premium cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group relative p-8 lg:p-10 rounded-2xl bg-gradient-to-b from-background to-muted/30 border border-border/50 hover-lift"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-accent/20" />
              </div>

              <div className="relative space-y-6">
                {/* Icon with premium styling */}
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors duration-300">
                  <item.icon 
                    className="w-7 h-7 text-accent" 
                    strokeWidth={1.5} 
                  />
                </div>

                {/* Number indicator */}
                <span className="text-xs font-bold tracking-widest text-accent/60">
                  0{index + 1}
                </span>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground leading-snug font-display">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeHelp;
