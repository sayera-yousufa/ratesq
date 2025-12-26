import professionalImage from "@/assets/professional-connection.jpg";

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
    title: "Licensed Mortgage Professionals",
    points: [
      "Reach consumers actively exploring their options",
      "Connect with informed, qualified prospects",
      "Operate within a compliance-first environment",
    ],
  },
];

const WhoItsFor = () => {
  return (
    <section className="py-12 lg:py-16 bg-card">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left: Image */}
          <div className="lg:col-span-2">
            <div className="rounded-xl overflow-hidden">
              <img 
                src={professionalImage} 
                alt="Professional meeting" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-3">
            {/* Section header */}
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground">
                Who RatesQ Is For
              </h2>
            </div>

            {/* Two columns */}
            <div className="grid sm:grid-cols-2 gap-6">
              {audiences.map((audience, index) => (
                <div
                  key={index}
                  className="p-6 border border-border rounded-lg bg-background"
                >
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {audience.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-3">
                    {audience.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
