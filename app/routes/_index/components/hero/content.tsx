export const HeroContent = () => {
  return (
    <>
      {/* Name */}
      <h1 className="mb-4 font-bold text-5xl sm:text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-primary-text via-primary-accent to-primary-text dark:from-primary-text-dark dark:via-primary-accent-dark dark:to-primary-text-dark animate">
        RENDY DHARMAPUTRA
      </h1>

      {/* Underline */}
      <div className="mx-auto mb-6 h-1 w-32 bg-gradient-to-r from-transparent via-primary-accent to-transparent dark:from-transparent dark:via-primary-accent-dark dark:to-transparent animate"></div>

      {/* Subtitle */}
      <p className="font-light text-xl md:text-2xl tracking-wide text-secondary-text dark:text-secondary-text-dark animate">
        Software Developer & Programmer
      </p>
    </>
  );
};
