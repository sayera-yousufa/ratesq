const Compliance = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-cream-dark">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-sm font-medium tracking-wide text-accent uppercase">
                Compliance & Standards
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
                Regulatory compliance is foundational, not optional
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                RatesQ operates within a strict compliance framework. We work exclusively with licensed professionals and maintain transparent practices in all consumer interactions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <span className="text-3xl lg:text-4xl font-semibold text-foreground">NMLS</span>
                <p className="text-sm text-muted-foreground">Verified professional licensing</p>
              </div>
              <div className="space-y-2">
                <span className="text-3xl lg:text-4xl font-semibold text-foreground">SOC 2</span>
                <p className="text-sm text-muted-foreground">Security compliance standards</p>
              </div>
            </div>
          </div>

          {/* Right column - Legal text */}
          <div className="space-y-6 text-sm text-muted-foreground">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-3">Important Disclosures</h3>
              <p className="leading-relaxed mb-4">
                RatesQ is a technology platform that connects consumers with licensed mortgage professionals. RatesQ does not provide mortgage loans, rate quotes, or financial advice. All mortgage products and services are provided by licensed third-party lenders and brokers.
              </p>
              <p className="leading-relaxed mb-4">
                Mortgage rates displayed on this platform are for informational purposes only and are subject to change without notice. Actual rates offered to you may differ based on your credit profile, loan amount, property type, and other factors determined by your lender.
              </p>
              <p className="leading-relaxed">
                All mortgage professionals listed on RatesQ are independently licensed and verified through the Nationwide Multistate Licensing System (NMLS). RatesQ does not endorse any specific lender or loan product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
