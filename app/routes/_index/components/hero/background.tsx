export const HeroBackground = () => {
  return (
    <>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 via-transparent to-primary-accent/30 dark:from-primary-accent-dark/10 dark:via-transparent dark:to-primary-accent-dark/5 animate"></div>

      {/* Floating Dots */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-accent rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary-accent/60 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-primary-accent/40 rounded-full animate-pulse delay-2000"></div>
      </div>
    </>
  );
};
