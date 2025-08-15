import { useState } from "react";
import { HeaderTitle } from "./title";
import { DesktopNav } from "./navigation/desktop";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenuBtn } from "./mobile-menu-btn";
import { MobileNav } from "./navigation/mobile";
import { useNavigationItems } from "~/hooks/use-navigation-items";

export const HeaderSection = () => {
  // Mengambil Item Halaman untuk ditampilkan di Komponen Navigasi
  const navItems = useNavigationItems();

  // State untuk menampilkan Komponen MobileMenuBtn
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-background/90 dark:bg-primary-background-dark/90 border-b border-primary-accent/20 dark:border-primary-accent-dark/30 backdrop-blur-md animate">
      <div className="mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
        {/* Logo / Brand */}
        <HeaderTitle />

        {/* Navigation & Controls */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <DesktopNav navItems={navItems} />

          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <MobileMenuBtn setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <MobileNav navItems={navItems} isMobileMenuOpen={isMobileMenuOpen} />
    </header>
  );
};
