import { useTheme } from "~/context/theme-context";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={() => {
        toggleTheme();
      }}
      className="p-2 rounded-full border border-accent/20 dark:border-accent-dark/30 text-text-muted dark:text-text-muted-dark hover:text-accent dark:hover:text-accent transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,128,255,0.3)]"
    >
      {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
};
