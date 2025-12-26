const audiences = [
  {
    title: "Homebuyers & Homeowners",
    points: [
      "Understand your mortgage options before making commitments",
      "Access rate information without sales pressure",
      "Connect directly with licensed professionals when you're ready",
      "Make decisions based on clear, unbiased information",
    ],
  },
  {
    title: "Licensed Mortgage Professionals",
    points: [
      "Reach consumers who are actively exploring their options",
      "Connect with informed, qualified prospects",
      "Operate within a compliance-first environment",
      "Build relationships based on transparency and trust",
    ],
  },
];

const WhoItsFor = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground">
            Who RatesQ Is For
          </h2>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="p-8 lg:p-10 border border-border rounded-lg bg-background"
            >
              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-6">
                {audience.title}
              </h3>

              {/* Divider */}
              <div className="w-10 h-px bg-border mb-6" />

              {/* Points */}
              <ul className="space-y-4">
                {audience.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="text-muted-foreground leading-relaxed"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
