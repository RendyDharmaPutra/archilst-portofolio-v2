import { HeroImage } from "./image";
import { HeroContent } from "./content";
import { HeroContacts } from "./contacts";
import { HeroBackground } from "./background";

export const HeroSection = () => {
  return (
    <section
      id="beranda"
      className="relative px-4 pt-20 flex justify-center items-center min-h-screen overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto text-center max-w-4xl">
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
