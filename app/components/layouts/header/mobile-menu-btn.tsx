import React from "react";

type MobileMenuBtnProps = {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileMenuBtn: React.FC<MobileMenuBtnProps> = (props) => {
  return (
    <button
      className="md:hidden text-text dark:text-text-dark hover:text-accent dark:hover:text-accent transition-colors"
      onClick={() => props.setIsMobileMenuOpen((prev) => !prev)}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
};
