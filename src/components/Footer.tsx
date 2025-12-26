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
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-12 lg:py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <span className="text-xl font-semibold tracking-tight">RatesQ</span>
            <p className="text-sm text-primary-foreground/60 max-w-xs">
              A transparent marketplace for mortgage exploration.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} RatesQ. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/40 max-w-lg text-center md:text-right">
              RatesQ is not a lender and does not offer mortgage loans. All lending services are provided by licensed third-party institutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
