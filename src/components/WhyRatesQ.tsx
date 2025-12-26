const values = [
  {
    title: "Transparency",
    description:
      "Every rate, connection, and process is presented without hidden agendas or undisclosed incentives.",
  },
  {
    title: "Simplicity",
    description:
      "We remove unnecessary friction, presenting information in a straightforward format.",
  },
  {
    title: "Trust & Compliance",
    description:
      "We work exclusively with NMLS-verified professionals and maintain strict regulatory standards.",
  },
];

const WhyRatesQ = () => {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-muted/40 to-muted/60">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground">
            Why RatesQ
          </h2>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="p-6 lg:p-8 bg-card rounded-xl border border-border"
            >
              {/* Number indicator */}
              <span className="inline-block text-xs font-medium text-accent tracking-wider mb-4">
                0{index + 1}
              </span>

              {/* Heading */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRatesQ;
