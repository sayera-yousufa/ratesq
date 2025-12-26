import professionalImage from "@/assets/professional-connection.jpg";
import SectionDivider from "./SectionDivider";
import GeometricShapes from "./GeometricShapes";

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
    <>
      <SectionDivider variant="geometric" />
      <section id="for-professionals" className="relative py-20 lg:py-28 bg-card overflow-hidden">
        <GeometricShapes variant="corner" />
        
        <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
            {/* Left: Image with premium styling */}
            <div className="lg:col-span-2">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 border border-accent/20 rounded-2xl" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-xl" />
                
                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-foreground/10">
                  <img 
                    src={professionalImage} 
                    alt="Professional meeting" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/20 to-transparent" />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-3">
              {/* Section header */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rotate-45 bg-accent" />
                  <span className="text-sm font-semibold tracking-widest text-accent uppercase">For You</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-display">
                  Who RatesQ Is For
                </h2>
              </div>

              {/* Audience cards with premium styling */}
              <div className="grid sm:grid-cols-2 gap-6">
                {audiences.map((audience, index) => (
                  <div
                    key={index}
                    className="group relative p-8 rounded-2xl bg-gradient-to-b from-background to-muted/30 border border-border/50 hover-lift"
                  >
                    {/* Gradient glow on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative">
                      {/* Number */}
                      <span className="text-xs font-bold tracking-widest text-accent/60 mb-4 block">
                        0{index + 1}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-6 font-display">
                        {audience.title}
                      </h3>

                      {/* Points */}
                      <ul className="space-y-4">
                        {audience.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start gap-3 text-base text-muted-foreground"
                          >
                            <div className="w-2 h-2 rotate-45 bg-accent mt-2 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>

                      {/* Bottom accent */}
                      <div className="mt-6 pt-6 border-t border-border/50">
                        <div className="w-10 h-0.5 bg-gradient-to-r from-accent to-transparent group-hover:w-16 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoItsFor;
