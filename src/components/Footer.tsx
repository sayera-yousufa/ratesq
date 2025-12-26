import ratesqLogo from "@/assets/ratesq-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-deep text-cream/60 overflow-hidden">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 geometric-grid opacity-5" />
      
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 py-12 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={ratesqLogo} 
              alt="RatesQ" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold tracking-tight text-cream font-display">
              RATESQ
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8 text-sm">
            {["About", "Contact", "Privacy Policy", "Terms"].map((link, index) => (
              <a 
                key={index}
                href={`#${link.toLowerCase().replace(' ', '-')}`} 
                className="relative hover:text-cream transition-colors group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-8 border-t border-cream/10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rotate-45 bg-accent/30" />
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <div className="w-2 h-2 rotate-45 border border-accent/30" />
            <div className="w-8 h-px bg-gradient-to-l from-transparent via-accent/30 to-transparent" />
            <div className="w-2 h-2 rotate-45 bg-accent/30" />
          </div>
          <p className="text-xs text-cream/40 text-center max-w-3xl mx-auto leading-relaxed">
            © {currentYear} RatesQ. All rights reserved. RatesQ is not a lender and does not provide mortgage loans. 
            All lending services are provided by licensed third-party institutions. Equal Housing Opportunity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
