export const HeroImage = () => {
  return (
    <div className="mb-8 flex justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-accent/20 via-primary-accent/5 to-primary-accent/20 dark:from-primary-accent-dark/30 dark:via-primary-accent-dark/10 dark:to-primary-accent-dark/30 rounded-full blur-xl animate-pulse animate"></div>
        {/* Profile Photo */}
        <img
          src="/placeholder.svg?height=200&width=200"
          alt="Profile Image"
          className={`relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-primary-accent/30 dark:border-primary-accent-dark/50 hover:border-primary-accent dark:hover:border-primary-accent-dark hover:shadow-[0_0_30px_rgba(0,128,255,0.4)] hover:scale-105 animate`}
        />
        {/* Decorative Rings */}
        <div className="absolute inset-0 rounded-full border-2 border-primary-accent/15 dark:border-primary-accent-dark/20 animate-ping animate"></div>
        <div className="absolute -inset-2 rounded-full border border-primary-accent/10 dark:border-primary-accent-dark/10 animate"></div>
      </div>
    </div>
  );
};
