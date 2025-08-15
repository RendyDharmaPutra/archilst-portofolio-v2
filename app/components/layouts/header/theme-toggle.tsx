import { useTheme } from "~/context/theme-context";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={() => {
        toggleTheme();
      }}
      className="p-2 text-tertiary-text dark:text-tertiary-text-dark hover:text-primary-accent dark:hover:text-primary-accent-dark rounded-full border border-primary-accent/20 dark:border-primary-accent-dark/30 hover:shadow-[0_0_15px_rgba(0,128,255,0.3)] dark:hover:shadow-[0_0_15px_rgba(0,128,255,0.3)] animate"
    >
      {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
};
