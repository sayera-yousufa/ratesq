interface GeometricShapesProps {
  variant?: "hero" | "section" | "corner";
  className?: string;
}

const GeometricShapes = ({ variant = "section", className = "" }: GeometricShapesProps) => {
  if (variant === "hero") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Large diagonal lines */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] border border-accent/10 rotate-45" />
        <div className="absolute -top-60 -right-60 w-[700px] h-[700px] border border-accent/5 rotate-45" />
        
        {/* Floating squares */}
        <div className="absolute top-32 right-1/4 w-8 h-8 rotate-12 border-2 border-accent/20" />
        <div className="absolute bottom-40 right-1/3 w-5 h-5 rotate-45 bg-accent/10" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 geometric-dots opacity-40" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] rounded-full bg-teal-soft/30 blur-3xl" />
      </div>
    );
  }

  if (variant === "corner") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Top right corner accent */}
        <div className="absolute -top-20 -right-20 w-40 h-40">
          <div className="absolute inset-0 border-r-2 border-b-2 border-accent/10 rounded-br-[100px]" />
        </div>
        
        {/* Bottom left corner accent */}
        <div className="absolute -bottom-20 -left-20 w-40 h-40">
          <div className="absolute inset-0 border-l-2 border-t-2 border-accent/10 rounded-tl-[100px]" />
        </div>
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Subtle geometric elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-accent/10 rotate-45" />
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-accent/10 rotate-12" />
      <div className="absolute top-1/2 right-20 w-4 h-4 bg-accent/10 rotate-45" />
      
      {/* Gradient mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />
    </div>
  );
};

export default GeometricShapes;
