import React from "react";
import { NavItem } from "./nav-item";
import { ExternalLink } from "lucide-react";
import { NavigationItemType } from "~/hooks/use-navigation-items";

// Props
type MobileNavProps = {
  isMobileMenuOpen: boolean;
  navItems: NavigationItemType[];
};

// Komponen Navigasi untuk layar HandPhone
export const MobileNav: React.FC<MobileNavProps> = (props) => {
  // Hanya menampilkan element ketika State isMobileMenu (dari Komponen Header) bernilaai true
  if (props.isMobileMenuOpen)
    return (
      <div className="md:hidden bg-header/95 dark:bg-header-dark/95 backdrop-blur-lg px-6 py-4">
        <nav className="flex flex-col gap-4">
          {/* Navigasi Halaman */}
          {props.navItems.map((navItem, idx) => (
            <NavItem
              key={idx}
              to={navItem.route}
              onClick={() => {}}
              title={navItem.title}
            />
          ))}
          {/* Navigasi CV */}
          <NavItem
            title="Resume"
            to="https://drive.google.com/file/d/your-cv-file-id/view" // ! Ubah dengan Link CV yang asli
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <ExternalLink className="h-3 w-3" />
          </NavItem>
        </nav>
      </div>
    );

  return;
};
