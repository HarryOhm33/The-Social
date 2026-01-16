import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("portfolio-theme");
      if (savedMode === "dark") return true;
      if (savedMode === "light") return false;

      // Check system preference
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, theme }}>
      <div
        className={`min-h-screen transition-colors duration-300 ${theme.background}`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// Light Theme - Purple based
const lightTheme = {
  name: "light",
  background: "bg-gradient-to-br from-white to-gray-50",
  navBg: "bg-white/80",
  navBorder: "border-gray-200",
  text: "text-gray-900",
  textSecondary: "text-gray-700",
  textMuted: "text-gray-600",
  navText: "text-gray-800",
  primary: "text-purple-600",
  secondary: "text-pink-600",
  accent: "text-gray-500",
  cardBg: "bg-white",
  buttonPrimary: "bg-gradient-to-r from-[#5631C0] to-[#7B5CE1] text-white",
  buttonPrimaryHover: "hover:from-[#4B2BB3] hover:to-[#6A4FD9]",
  buttonSecondary: "border-2 border-[#5631C0] text-[#5631C0]",
  buttonSecondaryHover: "hover:bg-[#5631C0]/10",
  border: "border-gray-200",
  shadow: "shadow-lg",
  badgeBg: "bg-purple-100",
  badgeText: "text-purple-600",
  gradientFrom: "from-purple-500",
  gradientVia: "via-pink-500",
  gradientTo: "to-blue-500",
  mobileMenuBg: "bg-white",
};

// Dark Theme - Purple based
const darkTheme = {
  name: "dark",
  background: "bg-gradient-to-br from-gray-900 to-gray-800",
  navBg: "bg-gray-900/80",
  navBorder: "border-gray-800",
  text: "text-white",
  textSecondary: "text-gray-300",
  textMuted: "text-gray-400",
  navText: "text-white",
  primary: "text-purple-400",
  secondary: "text-pink-400",
  accent: "text-gray-400",
  cardBg: "bg-gray-900",
  buttonPrimary: "bg-gradient-to-r from-[#5631C0] to-[#7B5CE1] text-white",
  buttonPrimaryHover: "hover:from-[#4B2BB3] hover:to-[#6A4FD9]",
  buttonSecondary: "border-2 border-[#5631C0] text-[#5631C0]",
  buttonSecondaryHover: "hover:bg-[#5631C0]/10",
  border: "border-gray-700",
  shadow: "shadow-xl shadow-black/30",
  badgeBg: "bg-purple-900/30",
  badgeText: "text-purple-400",
  gradientFrom: "from-purple-600",
  gradientVia: "via-pink-600",
  gradientTo: "to-blue-600",
  mobileMenuBg: "bg-gray-900",
};
