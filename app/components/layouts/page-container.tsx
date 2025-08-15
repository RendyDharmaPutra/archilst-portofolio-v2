import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { FooterSection } from "./footer/footer-section";
import { HeaderSection } from "./header/header-section";

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        // key={`theme-${darkMode ? "dark" : "light"}`} // agar berubah tiap ganti theme
        // initial={{ scale: 0.98 }}
        // animate={{ scale: 1 }}
        // exit={{ scale: 0.98 }}
        // transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className={` min-h-screen bg-bg dark:bg-bg-dark text-text dark:text-text-dark transition-colors duration-300`}
      >
        {/* Komponen Header */}
        <HeaderSection />

        {children}

        {/* Komponen Footer */}
        <FooterSection />
      </motion.div>
    </AnimatePresence>
  );
};
