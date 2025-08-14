export const HeroContent = () => {
  return (
    <>
      {/* Name */}
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-text via-accent to-text dark:from-text-dark dark:via-accent dark:to-text-dark">
        RENDY DHARMAPUTRA
      </h1>

      {/* Underline */}
      <div className="h-1 w-32 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"></div>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl font-light tracking-wide text-text-secondary dark:text-text-dark/80">
        Software Developer & Programmer
      </p>
    </>
  );
};
