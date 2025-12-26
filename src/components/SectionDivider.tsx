interface SectionDividerProps {
  variant?: "line" | "gradient" | "geometric";
  className?: string;
}

const SectionDivider = ({ variant = "gradient", className = "" }: SectionDividerProps) => {
  if (variant === "line") {
    return (
      <div className={`container max-w-7xl mx-auto px-6 lg:px-8 ${className}`}>
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    );
  }

  if (variant === "geometric") {
    return (
      <div className={`relative h-20 overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rotate-45 bg-accent/40" />
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            <div className="w-3 h-3 rotate-45 border border-accent/40" />
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            <div className="w-2 h-2 rotate-45 bg-accent/40" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative h-16 overflow-hidden ${className}`}>
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px">
        <div className="h-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rotate-45 border border-accent/30 bg-background" />
    </div>
  );
};

export default SectionDivider;
