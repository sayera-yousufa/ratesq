const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#" },
    ],
    resources: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "For Professionals", href: "#for-professionals" },
      { label: "FAQ", href: "#" },
      { label: "Blog", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Licensing", href: "#" },
      { label: "Disclosures", href: "#" },
    ],
  };

  return (
    <footer className="bg-[hsl(222,57%,12%)] text-[hsl(40,33%,98%)]">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 lg:py-20 grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-5">
            <span className="text-2xl font-bold tracking-tight font-display">RatesQ</span>
            <p className="text-base text-[hsl(40,33%,98%)]/60 max-w-xs leading-relaxed">
              A transparent marketplace for mortgage exploration.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-base font-semibold mb-5 font-display">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-base text-[hsl(40,33%,98%)]/60 hover:text-[hsl(40,33%,98%)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-5 font-display">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-base text-[hsl(40,33%,98%)]/60 hover:text-[hsl(40,33%,98%)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-5 font-display">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-base text-[hsl(40,33%,98%)]/60 hover:text-[hsl(40,33%,98%)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-[hsl(40,33%,98%)]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base text-[hsl(40,33%,98%)]/60">
              © {currentYear} RatesQ. All rights reserved.
            </p>
            <p className="text-sm text-[hsl(40,33%,98%)]/40 max-w-xl text-center md:text-right">
              RatesQ is not a lender and does not offer mortgage loans. All lending services are provided by licensed third-party institutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
