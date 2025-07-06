export const HeroImage = () => {
  return (
    <div className="mb-8 flex justify-center">
      <div className="relative">
        <div className="absolute inset-0 rounded-full blur-xl animate-pulse bg-gradient-to-r from-accent/20 via-accent/5 to-accent/20 dark:from-accent/30 dark:via-accent/10 dark:to-accent/30"></div>
        {/* Profile Photo */}
        <img
          src="/placeholder.svg?height=200&width=200"
          alt="Profile"
          className={`relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 dark:border-accent/50 border-accent/30 hover:border-[#0080FF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,128,255,0.4)] hover:scale-105`}
        />
        {/* Decorative Rings */}
        <div className="absolute inset-0 rounded-full border-2 border-accent/15 dark:border-accent/20 animate-ping"></div>
        <div className="absolute -inset-2 rounded-full border border-accent/10 dark:border-accent/10"></div>
      </div>
    </div>
  );
};
