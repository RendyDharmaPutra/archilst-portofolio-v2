import { Link, LinkProps, useLocation } from "@remix-run/react";
import React from "react";

// Props
type NavItemProps = Omit<LinkProps, "prefetch"> & {
  title: string;
};

// Komponen setiap Item Halaman
export const NavItem: React.FC<NavItemProps> = ({
  title,
  className,
  ...props
}) => {
  const { pathname } = useLocation();
  const isActive = pathname === props.to;

  return (
    <Link
      className={`${className} ${
        isActive
          ? "text-primary-accent dark:text-primary-accent-dark"
          : "text-secondary-text dark:text-secondary-text-dark"
      } hover:text-primary-accent dark:hover:text-primary-accent-dark animate`} // Mengatur nilai className default jika props className kosong. karena className yang didefinisikan di sini tidak terbaca jika className dari props ada nilainya
      prefetch="intent"
      {...props}
    >
      {title}
      {props.children}
    </Link>
  );
};
