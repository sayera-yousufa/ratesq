import SectionDivider from "./SectionDivider";

const Compliance = () => {
  return (
    <>
      <SectionDivider variant="gradient" />
      <section id="about" className="relative py-20 lg:py-28 bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 geometric-dots opacity-20" />
        
        <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left column */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rotate-45 bg-accent" />
                  <span className="text-sm font-semibold tracking-widest text-accent uppercase">
                    Compliance & Standards
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-display">
                  Regulatory compliance is foundational
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  RatesQ operates within a strict compliance framework, working exclusively with licensed professionals.
                </p>
              </div>

              {/* Stats with premium styling */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "NMLS", sublabel: "Verified licensing" },
                  { label: "SOC 2", sublabel: "Security standards" },
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="group relative p-8 rounded-2xl bg-card border border-border/50 hover-lift overflow-hidden"
                  >
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                      <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-accent/20" />
                    </div>
                    
                    <span className="text-4xl lg:text-5xl font-bold text-foreground font-display block mb-3">
                      {stat.label}
                    </span>
                    <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
                    
                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent/20 to-transparent" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Legal text with premium card */}
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 border border-accent/10 rounded-3xl" />
              
              <div className="relative p-10 rounded-2xl bg-card border border-border/50 shadow-xl">
                {/* Header with accent */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L4 7V12C4 17.52 7.48 22.74 12 24C16.52 22.74 20 17.52 20 12V7L12 2Z" />
                      <path d="M9 12L11 14L15 10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-foreground text-xl font-display">Important Disclosures</h3>
                </div>
                
                <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
                  <p>
                    RatesQ is a technology platform that connects consumers with licensed mortgage professionals. RatesQ does not provide mortgage loans, rate quotes, or financial advice.
                  </p>
                  <p>
                    Mortgage rates displayed are for informational purposes only and are subject to change. Actual rates may differ based on your credit profile and other factors.
                  </p>
                  <p>
                    All mortgage professionals are independently licensed and verified through NMLS. RatesQ does not endorse any specific lender or loan product.
                  </p>
                </div>

                {/* Bottom geometric accent */}
                <div className="flex items-center gap-2 mt-8 pt-6 border-t border-border/50">
                  <div className="w-2 h-2 rotate-45 bg-accent/40" />
                  <div className="w-2 h-2 rotate-45 border border-accent/40" />
                  <div className="w-2 h-2 rotate-45 bg-accent/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Compliance;
