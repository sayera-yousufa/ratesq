import SectionDivider from "./SectionDivider";

const values = [
  {
    title: "Transparency",
    description:
      "Every rate, connection, and process is presented without hidden agendas or undisclosed incentives.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 12H28" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 12V28" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Simplicity",
    description:
      "We remove unnecessary friction, presenting information in a straightforward format.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 10V16L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Trust & Compliance",
    description:
      "We work exclusively with NMLS-verified professionals and maintain strict regulatory standards.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L4 9V15C4 21.63 9.12 27.79 16 29C22.88 27.79 28 21.63 28 15V9L16 4Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 16L15 19L21 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const WhyRatesQ = () => {
  return (
    <>
      <SectionDivider variant="gradient" />
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-navy-deep via-navy-medium to-navy-deep overflow-hidden">
        {/* Geometric background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 geometric-grid opacity-10" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-teal-soft/10 blur-3xl" />
        </div>

        <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative">
          {/* Section header */}
          <div className="mb-16 lg:mb-20 text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-accent/50" />
              <div className="w-2 h-2 rotate-45 bg-accent" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent/50" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-cream font-display">
              Why RatesQ
            </h2>
          </div>

          {/* Values grid with premium cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group relative p-8 lg:p-10 rounded-2xl bg-cream/5 border border-cream/10 backdrop-blur-sm hover:bg-cream/10 hover:border-accent/30 transition-all duration-500 hover-lift"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <div className="text-accent mb-6">
                    {value.icon}
                  </div>

                  {/* Number indicator */}
                  <span className="inline-block text-sm font-bold text-accent tracking-wider mb-5">
                    0{index + 1}
                  </span>

                  {/* Heading */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-cream mb-4 font-display">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-cream/70 text-base leading-relaxed">
                    {value.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-8 pt-6 border-t border-cream/10">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-transparent group-hover:w-20 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyRatesQ;
