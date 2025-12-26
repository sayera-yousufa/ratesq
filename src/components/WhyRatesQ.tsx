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
    <section className="relative py-24 lg:py-32 bg-navy-deep overflow-hidden">
      {/* Subtle gradient shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-teal-soft/10 blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="mb-20 max-w-2xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-accent" />
            <span className="text-sm font-medium tracking-[0.25em] text-accent uppercase">Our Values</span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-cream font-display">
            Why RatesQ
          </h2>
        </div>

        {/* Values - large text blocks with thin dividers */}
        <div className="grid md:grid-cols-3 gap-0 border-t border-cream/10">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group py-12 lg:py-16 border-b border-cream/10 md:border-b-0 md:border-r last:border-r-0 md:px-10 first:md:pl-0 last:md:pr-0"
            >
              {/* Number */}
              <span className="text-sm font-bold text-accent tracking-wider mb-6 block">
                0{index + 1}
              </span>

              {/* Heading */}
              <h3 className="text-2xl lg:text-3xl font-bold text-cream mb-6 font-display">
                {value.title}
              </h3>

              {/* Thin divider */}
              <div className="w-12 h-px bg-cream/20 mb-6" />

              {/* Description */}
              <p className="text-cream/60 text-lg leading-relaxed font-light">
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
