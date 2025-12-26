import ratesqLogo from "@/assets/ratesq-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(222,57%,10%)] text-[hsl(210,20%,70%)]">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={ratesqLogo} 
              alt="RatesQ" 
              className="h-8 w-auto"
            />
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm">
            <a 
              href="#about" 
              className="hover:text-[hsl(40,33%,95%)] transition-colors"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="hover:text-[hsl(40,33%,95%)] transition-colors"
            >
              Contact
            </a>
            <a 
              href="#privacy" 
              className="hover:text-[hsl(40,33%,95%)] transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              className="hover:text-[hsl(40,33%,95%)] transition-colors"
            >
              Terms
            </a>
          </nav>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-[hsl(210,20%,20%)]">
          <p className="text-xs text-[hsl(210,20%,50%)] text-center max-w-3xl mx-auto leading-relaxed">
            © {currentYear} RatesQ. All rights reserved. RatesQ is not a lender and does not provide mortgage loans. 
            All lending services are provided by licensed third-party institutions. Equal Housing Opportunity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
