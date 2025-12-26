import { Search, Users, FileText } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Explore options",
    description: "Browse current mortgage rate information across multiple lenders and loan types. Understand what's available in today's market.",
  },
  {
    icon: Users,
    number: "02",
    title: "Connect with professionals",
    description: "Match with licensed mortgage professionals who can provide personalized guidance based on your unique situation.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Make informed decisions",
    description: "Receive detailed information and work directly with verified professionals to find the right mortgage solution.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-cream-dark">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-sm font-medium tracking-wide text-accent uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-6">
            A straightforward approach to mortgage exploration
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our platform simplifies the process of understanding your mortgage options without the sales pressure typical of traditional channels.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="group relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border -translate-x-1/2 z-0" />
              )}
              
              <div className="relative bg-card rounded-xl p-8 border border-border hover:border-accent/30 transition-colors duration-300">
                {/* Number */}
                <span className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center bg-navy-deep text-primary-foreground text-xs font-semibold rounded-md">
                  {step.number}
                </span>
                
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-teal-soft mb-6">
                  <step.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
