import { ExternalLink } from "lucide-react";
import { NavItem } from "./item";
import { NavigationItemType } from "~/hooks/use-navigation-items";

// Komponen Navigasi untuk layar Tablet ke atas
export const DesktopNav = ({
  navItems,
}: {
  navItems: NavigationItemType[];
}) => {
  return (
    <nav className="hidden md:flex gap-8">
      {/* Navigasi Halaman */}
      {navItems.map((navItem, idx) => (
        <NavItem key={idx} to={navItem.route} title={navItem.title} />
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
  );
};
