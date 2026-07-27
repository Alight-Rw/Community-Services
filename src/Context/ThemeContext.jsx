import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "dashboard-theme";

export const dashboardThemes = [
  {
    id: "light",
    name: "Light Theme",
    description: "Clean SaaS workspace",
    swatches: ["#ffffff", "#f6f8fb", "#1961ba"],
  },
  {
    id: "dark",
    name: "Dark Theme",
    description: "Modern analytics dashboard",
    swatches: ["#07111f", "#111c2e", "#38bdf8"],
  },


];

const ThemeContext = createContext(null);

const isSupportedTheme = (theme) =>
  dashboardThemes.some((dashboardTheme) => dashboardTheme.id === theme);

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === "undefined") return "light";

    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    return isSupportedTheme(storedTheme) ? storedTheme : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.dashboardTheme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = (nextTheme) => {
    if (isSupportedTheme(nextTheme)) {
      setThemeState(nextTheme);
    }
  };

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      themes: dashboardThemes,
      activeTheme: dashboardThemes.find((item) => item.id === theme),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
