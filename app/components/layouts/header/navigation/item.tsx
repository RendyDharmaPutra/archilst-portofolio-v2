import { Link, LinkProps } from "@remix-run/react";
import React from "react";

// Props
type NavItemProps = LinkProps & {
  title: string;
};

// Komponen setiap Item Halaman
export const NavItem: React.FC<NavItemProps> = ({
  title,
  className,
  ...props
}) => {
  return (
    <Link
      className={`${className} text-secondary-text dark:text-secondary-text-dark hover:text-primary-accent dark:hover:text-primary-accent-dark animate`} // Mengatur nilai className default jika props className kosong. karena className yang didefinisikan di sini tidak terbaca jika className dari props ada nilainya
      {...props}
    >
      {title}
      {props.children}
    </Link>
  );
};
