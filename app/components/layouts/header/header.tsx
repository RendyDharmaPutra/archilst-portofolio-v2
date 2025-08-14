import { useState } from "react";
import { HeaderTitle } from "./header-title";
import { DesktopNav } from "./navigation/desktop-nav";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenuBtn } from "./mobile-menu-btn";
import { MobileNav } from "./navigation/mobile-nav";
import { useNavigationItems } from "~/hooks/use-navigation-items";

export const Header = () => {
  // Mengambil Item Halaman untuk ditampilkan di Komponen Navigasi
  const navItems = useNavigationItems();

  // State untuk menampilkan Komponen MobileMenuBtn
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-header/90 dark:bg-header-dark/90 backdrop-blur-md border-b border-accent/20 dark:border-accent-dark/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
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
