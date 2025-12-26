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
    <section className="py-12 lg:py-16 bg-card border-t border-border">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground">
            What RatesQ Helps With
          </h2>
        </div>

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {items.map((item, index) => (
            <div key={index} className="space-y-4">
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center">
                <item.icon 
                  className="w-6 h-6 text-accent" 
                  strokeWidth={1.5} 
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-medium text-foreground leading-snug">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
