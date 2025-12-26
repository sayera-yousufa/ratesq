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
    <section id="for-professionals" className="py-16 lg:py-20 bg-card">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-foreground/5">
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
            <div className="mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground font-display">
                Who RatesQ Is For
              </h2>
            </div>

            {/* Two columns */}
            <div className="grid sm:grid-cols-2 gap-6">
              {audiences.map((audience, index) => (
                <div
                  key={index}
                  className="p-8 border border-border rounded-xl bg-background hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-5 font-display">
                    {audience.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-4">
                    {audience.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex items-start gap-3 text-base text-muted-foreground"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
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
