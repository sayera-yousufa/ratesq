const audiences = [
  {
    title: "Homebuyers & Homeowners",
    points: [
      "Understand your mortgage options before making commitments",
      "Access rate information without sales pressure",
      "Connect directly with licensed professionals when ready",
    ],
  },
  {
    title: "Mortgage Professionals",
    points: [
      "Reach consumers actively exploring their options",
      "Connect with informed, qualified prospects",
      "Operate within a compliance-first environment",
    ],
  },
];

const WhoItsFor = () => {
  return (
    <section id="for-professionals" className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Left column - Light background */}
        <div className="relative py-20 lg:py-28 px-6 lg:px-0 bg-background">
          <div className="lg:max-w-xl lg:ml-auto lg:pr-16 xl:pr-24">
            {/* Section indicator */}
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-accent" />
              <span className="text-sm font-medium tracking-[0.25em] text-accent uppercase">For Consumers</span>
            </div>

            {/* Title */}
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-10 font-display leading-tight">
              {audiences[0].title}
            </h3>

            {/* Thin divider */}
            <div className="w-16 h-px bg-border mb-10" />

            {/* Points as large text blocks */}
            <div className="space-y-8">
              {audiences[0].points.map((point, index) => (
                <div key={index} className="flex items-start gap-5">
                  <span className="text-xs font-bold text-accent/60 tracking-wider mt-1">0{index + 1}</span>
                  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-light">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - Darker background */}
        <div className="relative py-20 lg:py-28 px-6 lg:px-0 bg-navy-deep">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
          
          <div className="relative lg:max-w-xl lg:mr-auto lg:pl-16 xl:pl-24">
            {/* Section indicator */}
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-accent" />
              <span className="text-sm font-medium tracking-[0.25em] text-accent uppercase">For Professionals</span>
            </div>

            {/* Title */}
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-cream mb-10 font-display leading-tight">
              {audiences[1].title}
            </h3>

            {/* Thin divider */}
            <div className="w-16 h-px bg-cream/20 mb-10" />

            {/* Points as large text blocks */}
            <div className="space-y-8">
              {audiences[1].points.map((point, index) => (
                <div key={index} className="flex items-start gap-5">
                  <span className="text-xs font-bold text-accent/60 tracking-wider mt-1">0{index + 1}</span>
                  <p className="text-lg lg:text-xl text-cream/70 leading-relaxed font-light">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Center dividing line */}
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-40 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
    </section>
  );
};

export default WhoItsFor;
