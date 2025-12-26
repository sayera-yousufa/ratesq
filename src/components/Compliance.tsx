const Compliance = () => {
  return (
    <section id="about" className="py-16 lg:py-20 bg-muted/40">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Left column */}
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-sm font-semibold tracking-widest text-accent uppercase">
                Compliance & Standards
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground font-display">
                Regulatory compliance is foundational
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                RatesQ operates within a strict compliance framework, working exclusively with licensed professionals.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-xl border border-border">
                <span className="text-3xl lg:text-4xl font-bold text-foreground font-display">NMLS</span>
                <p className="text-sm text-muted-foreground mt-2">Verified licensing</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <span className="text-3xl lg:text-4xl font-bold text-foreground font-display">SOC 2</span>
                <p className="text-sm text-muted-foreground mt-2">Security standards</p>
              </div>
            </div>
          </div>

          {/* Right column - Legal text */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <h3 className="font-bold text-foreground mb-4 text-lg font-display">Important Disclosures</h3>
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
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
    </section>
  );
};

export default Compliance;
