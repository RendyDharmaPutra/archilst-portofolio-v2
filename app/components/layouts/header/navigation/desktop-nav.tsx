import { ExternalLink } from "lucide-react";
import { NavItem } from "./nav-item";
import { NavigationItemType } from "~/hooks/useNavigationItems";

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
        <NavItem
          key={idx}
          to={navItem.route}
          title={navItem.title}
          className="nav-item font-medium"
        />
      ))}
      {/* Navigasi CV */}
      <NavItem
        title="Resume"
        to="https://drive.google.com/file/d/your-cv-file-id/view" // ! Ubah dengan Link CV yang asli
        target="_blank"
        rel="noopener noreferrer"
        className="nav-item font-medium flex items-center gap-1"
      >
        <ExternalLink className="h-3 w-3" />
      </NavItem>
    </nav>
  );
};
