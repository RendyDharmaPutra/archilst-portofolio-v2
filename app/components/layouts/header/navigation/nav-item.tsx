import { Link, LinkProps } from "@remix-run/react";
import React from "react";

// Props
type NavItemProps = LinkProps & {
  title: string;
};

// Komponen setiap Item Halaman
export const NavItem: React.FC<NavItemProps> = ({ title, ...props }) => {
  return (
    <Link
      className={`${props.className ? props.className : "nav-item"}`} // Mengatur nilai className default jika props className kosong. karena className yang didefinisikan di sini tidak terbaca jika className dari props ada nilainya
      {...props}
    >
      {title}
      {props.children}
    </Link>
  );
};
