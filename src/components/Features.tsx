import { Shield, Scale, Eye, Lock, CheckCircle, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Compliance-first design",
    description: "Built from the ground up with regulatory requirements in mind. Every interaction follows industry standards.",
  },
  {
    icon: Scale,
    title: "Unbiased information",
    description: "We present options without preference or ranking. You receive objective data to support your decisions.",
  },
  {
    icon: Eye,
    title: "Full transparency",
    description: "Clear disclosure of relationships and compensation. No hidden incentives influencing your options.",
  },
  {
    icon: Lock,
    title: "Data security",
    description: "Enterprise-grade encryption and strict privacy controls protect your sensitive financial information.",
  },
  {
    icon: CheckCircle,
    title: "Verified professionals",
    description: "Every mortgage professional on our platform is NMLS-verified and licensed in their respective states.",
  },
  {
    icon: Clock,
    title: "No pressure timeline",
    description: "Take the time you need. Our platform supports your decision-making process at your own pace.",
  },
];

const Features = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <p className="text-sm font-medium tracking-wide text-accent uppercase mb-4">
            Why RatesQ
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-6">
            Built on principles of trust and transparency
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe the mortgage industry benefits when consumers have access to clear, unbiased information.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="group p-6 lg:p-8 rounded-xl border border-border bg-card hover:bg-muted/50 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-navy-deep/5 mb-5 group-hover:bg-teal-soft transition-colors duration-300">
                <feature.icon className="w-5 h-5 text-navy-deep group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
