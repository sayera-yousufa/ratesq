import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/50">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl lg:text-[1.75rem] font-bold tracking-tight text-foreground font-display">
              RatesQ
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <a 
              href="#how-it-works" 
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </a>
            <a 
              href="#for-professionals" 
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              For Professionals
            </a>
            <a 
              href="#about" 
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="default" className="hidden sm:inline-flex text-base">
              Sign In
            </Button>
            <Button variant="navy" size="default" className="text-base">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
