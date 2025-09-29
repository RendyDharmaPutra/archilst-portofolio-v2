import React from "react";
import { NavItem } from "./item";
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
      <div className="md:hidden px-6 py-4 bg-primary-background/95 dark:bg-primary-background-dark/95 backdrop-blur-lg animate">
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
            to="https://drive.google.com/file/d/1j85kLGL466TXXhttdspDRWeqY2TFH9jF/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium flex items-center gap-1"
          >
            <ExternalLink className="h-3 w-3" />
          </NavItem>
        </nav>
      </div>
    );

  return;
};
