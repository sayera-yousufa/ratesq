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
    <section id="how-it-works" className="py-16 lg:py-20 bg-muted/50">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-foreground/5">
              <img 
                src={dataVisual} 
                alt="Data visualization" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-4">
              How It Works
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-10 font-display">
              A straightforward approach to mortgage exploration
            </h2>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <step.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div>
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
  );
};

export default HowItWorks;
