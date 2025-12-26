const values = [
  {
    title: "Transparency",
    description:
      "We believe clarity builds trust. Every rate, every connection, and every process on our platform is presented without hidden agendas or undisclosed incentives.",
  },
  {
    title: "Simplicity",
    description:
      "Mortgage decisions are complex enough. Our platform removes unnecessary friction, presenting information in a straightforward format that respects your time.",
  },
  {
    title: "Trust & Compliance",
    description:
      "We work exclusively with NMLS-verified professionals and maintain strict adherence to regulatory standards. Compliance is not a feature—it's our foundation.",
  },
];

const WhyRatesQ = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/60 to-muted">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14 lg:mb-20">
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground">
            Why RatesQ
          </h2>
        </div>

        {/* Values grid */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {values.map((value, index) => (
            <div key={index} className="space-y-4">
              {/* Number indicator */}
              <span className="text-xs font-medium text-muted-foreground tracking-wider">
                0{index + 1}
              </span>

              {/* Heading */}
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
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
