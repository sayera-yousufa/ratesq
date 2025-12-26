import { TrendingUp, BarChart3, Users } from "lucide-react";

const items = [
  {
    icon: TrendingUp,
    title: "Discover rates",
    description: "Access current rate information from multiple sources in one centralized platform.",
  },
  {
    icon: BarChart3,
    title: "Compare confidently",
    description: "Review and evaluate different mortgage products with clear, unbiased data.",
  },
  {
    icon: Users,
    title: "Connect with licensed professionals",
    description: "Reach verified mortgage experts who can provide personalized guidance.",
  },
];

const WhatWeHelp = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 geometric-dots opacity-30" />
      
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-accent" />
            <span className="text-sm font-medium tracking-[0.25em] text-accent uppercase">What We Offer</span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground font-display">
            What RatesQ Helps With
          </h2>
        </div>

        {/* Feature cards - graphic style with subtle gradients */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* Card background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted/80 via-muted/40 to-background border border-border/50 rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-10 lg:p-12">
                {/* Minimal icon */}
                <div className="w-14 h-14 mb-8 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>

                {/* Large title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-5 font-display leading-tight">
                  {item.title}
                </h3>

                {/* Thin divider */}
                <div className="w-12 h-px bg-border mb-6" />

                {/* Description */}
                <p className="text-muted-foreground text-base leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeHelp;
