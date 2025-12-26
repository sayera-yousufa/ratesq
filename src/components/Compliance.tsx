const Compliance = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 geometric-dots opacity-20" />
      
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-accent" />
              <span className="text-sm font-medium tracking-[0.25em] text-accent uppercase">Standards</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-display mb-6">
              Compliance & Standards
            </h2>
            
            {/* Thin divider */}
            <div className="w-16 h-px bg-border mb-10" />
            
            <p className="text-xl text-muted-foreground leading-relaxed font-light mb-12">
              RatesQ operates within a strict compliance framework, working exclusively with licensed professionals.
            </p>

            {/* Stats - clean institutional styling */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "NMLS", sublabel: "Verified licensing" },
                { label: "SOC 2", sublabel: "Security standards" },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="p-8 bg-muted/50 border border-border/50 rounded-lg"
                >
                  <span className="text-4xl lg:text-5xl font-bold text-foreground font-display block mb-2">
                    {stat.label}
                  </span>
                  <div className="w-8 h-px bg-accent/30 mb-3" />
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">{stat.sublabel}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Legal text */}
          <div className="lg:pt-16">
            <div className="p-10 lg:p-12 bg-muted/30 border border-border/50 rounded-lg">
              <h3 className="font-bold text-foreground text-xl mb-6 font-display">Important Disclosures</h3>
              
              {/* Thin divider */}
              <div className="w-12 h-px bg-border mb-8" />
              
              <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
