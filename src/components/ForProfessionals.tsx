import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, BarChart3, Users2 } from "lucide-react";

const benefits = [
  {
    icon: Users2,
    title: "Qualified connections",
    description: "Connect with consumers who are actively exploring mortgage options and ready to engage.",
  },
  {
    icon: BarChart3,
    title: "Transparent analytics",
    description: "Access clear performance data and insights to understand your engagement metrics.",
  },
  {
    icon: Briefcase,
    title: "Compliance support",
    description: "Our platform helps maintain compliance standards, reducing regulatory risk.",
  },
];

const ForProfessionals = () => {
  return (
    <section id="for-professionals" className="py-20 lg:py-32 bg-navy-deep text-primary-foreground">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-sm font-medium tracking-wide text-accent uppercase">
                For Mortgage Professionals
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
                A marketplace built for licensed professionals
              </h2>
              <p className="text-lg text-primary-foreground/70 leading-relaxed">
                RatesQ provides a professional platform for licensed mortgage originators to connect with informed consumers. No lead auctions, no bidding wars—just meaningful connections.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Benefits cards */}
          <div className="space-y-4">
            {benefits.map((benefit) => (
              <div 
                key={benefit.title}
                className="flex gap-5 p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-accent/20">
                  <benefit.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-primary-foreground/60">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForProfessionals;
