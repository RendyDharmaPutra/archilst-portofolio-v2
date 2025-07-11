import { FooterContent } from "./footer-content";
import { FooterCopyrights } from "./footer-copyrights";

export const Footer = () => {
  return (
    <footer className="bg-footer dark:bg-footer-dark py-12 px-4 border-t border-accent/20 dark:border-accent-dark/30 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Content Component */}
        <FooterContent />

        {/* Copyright Component */}
        <FooterCopyrights />
      </div>
    </footer>
  );
};
