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
    <section id="how-it-works" className="py-12 lg:py-16 bg-muted/50">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden">
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
            <p className="text-sm font-medium tracking-wide text-accent uppercase mb-3">
              How It Works
            </p>
            <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground mb-8">
              A straightforward approach to mortgage exploration
            </h2>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <step.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
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
