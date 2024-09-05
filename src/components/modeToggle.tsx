import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@components/ui/button";

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<"light" | "dark" | "system">(
    "light",
  );

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "light");
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <Button
      variant="outline"
      className="rounded-full"
      size="icon"
      onClick={() => {
        setThemeState(theme === "dark" ? "light" : "dark");
      }}>
      <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
