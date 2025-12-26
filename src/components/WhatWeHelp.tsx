import { TrendingUp, BarChart3, Users } from "lucide-react";

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
    <section className="py-16 lg:py-20 bg-card border-t border-border">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground font-display">
            What RatesQ Helps With
          </h2>
        </div>

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {items.map((item, index) => (
            <div key={index} className="space-y-5">
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-accent/10">
                <item.icon 
                  className="w-7 h-7 text-accent" 
                  strokeWidth={1.5} 
                />
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground leading-snug font-display">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeHelp;
