import ratesqLogo from "@/assets/ratesq-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-deep border-t border-cream/10">
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
          <nav className="flex items-center gap-10 text-sm text-cream/50 tracking-wide uppercase">
            {["About", "Contact", "Privacy", "Terms"].map((link, index) => (
              <a 
                key={index}
                href={`#${link.toLowerCase()}`} 
                className="hover:text-cream transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-cream/10" />

        {/* Disclaimer */}
        <p className="text-xs text-cream/30 text-center max-w-3xl mx-auto leading-relaxed">
          © {currentYear} RatesQ. All rights reserved. RatesQ is not a lender and does not provide mortgage loans. 
          All lending services are provided by licensed third-party institutions. Equal Housing Opportunity.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
