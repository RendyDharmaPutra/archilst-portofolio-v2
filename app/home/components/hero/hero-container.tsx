import { HeroImage } from "./hero-image";
import { HeroContent } from "./hero-content";
import { HeroContacts } from "./hero-contacts";
import { HeroBackground } from "./hero-background";

export const HeroContainer = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20"
    >
      <HeroBackground />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Profile Photo */}
        <HeroImage />

        {/* Name and Subtitle */}
        <HeroContent />

        {/* Social Links */}
        <HeroContacts />
      </div>
    </section>
  );
};
