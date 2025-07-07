import { Sun } from "lucide-react";

export const ThemeToggle = () => {
  return (
    <button
      onClick={() => {
        console.log("Toggle Theme");
      }}
      className="p-2 rounded-full border border-accent/20 dark:border-accent-dark/30 text-text-muted dark:text-text-muted-dark hover:text-accent dark:hover:text-accent transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,128,255,0.3)]"
    >
      {/* {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />} */}
      <Sun className="h-5 w-5" />
    </button>
  );
};
