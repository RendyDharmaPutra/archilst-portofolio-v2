import { FooterContent } from "./content";
import { FooterCopyrights } from "./copyrights";

export const FooterSection = () => {
  return (
    <footer className="py-12 px-4 border-t border-primary-accent/20 dark:border-primary-accent-dark/30 bg-primary-background dark:bg-primary-background-dark animate">
      <div className="max-w-6xl mx-auto">
        {/* Content Component */}
        <FooterContent />

        {/* Copyright Component */}
        <FooterCopyrights />
      </div>
    </footer>
  );
};
