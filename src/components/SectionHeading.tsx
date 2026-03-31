interface SectionHeadingProps {
  children: string;
  className?: string;
}

const SectionHeading = ({ children, className = "" }: SectionHeadingProps) => (
  <div className={`mb-12 ${className}`}>
    <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
      {children}
    </h2>
    <div className="mt-3 h-1 w-12 rounded-full bg-primary" />
  </div>
);

export default SectionHeading;
