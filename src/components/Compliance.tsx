const Compliance = () => {
  return (
    <section id="about" className="py-12 lg:py-16 bg-muted/40">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-medium tracking-wide text-accent uppercase">
                Compliance & Standards
              </p>
              <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground">
                Regulatory compliance is foundational
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                RatesQ operates within a strict compliance framework, working exclusively with licensed professionals.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-card rounded-lg border border-border">
                <span className="text-2xl lg:text-3xl font-semibold text-foreground">NMLS</span>
                <p className="text-xs text-muted-foreground mt-1">Verified licensing</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <span className="text-2xl lg:text-3xl font-semibold text-foreground">SOC 2</span>
                <p className="text-xs text-muted-foreground mt-1">Security standards</p>
              </div>
            </div>
          </div>

          {/* Right column - Legal text */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-3 text-sm">Important Disclosures</h3>
            <div className="space-y-3 text-xs text-muted-foreground leading-relaxed">
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
