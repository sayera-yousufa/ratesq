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
    <section className="py-16 lg:py-20 bg-gradient-to-b from-muted/30 to-muted/60">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground font-display">
            Why RatesQ
          </h2>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="p-8 lg:p-10 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Number indicator */}
              <span className="inline-block text-sm font-bold text-accent tracking-wider mb-5">
                0{index + 1}
              </span>

              {/* Heading */}
              <h3 className="text-2xl font-bold text-foreground mb-4 font-display">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-base leading-relaxed">
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
