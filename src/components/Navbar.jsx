import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, darkMode } = useTheme();

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 ${theme.navBg} backdrop-blur-md border-b ${theme.navBorder}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold">
            <span className={theme.primary}>The Social </span>
            <span className={theme.textSecondary}>Ayushi</span>
          </div>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth
                offset={35}
                duration={500}
                className={`cursor-pointer ${theme.navText} font-medium hover:${theme.primary} transition-colors`}
              >
                {item.name}
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              to="contact"
              smooth
              offset={-80}
              duration={500}
              className={`inline-flex items-center gap-2 px-5 py-2.5 ${theme.buttonPrimary} ${theme.buttonPrimaryHover} rounded-lg font-semibold cursor-pointer transition-all ${theme.shadow}`}
            >
              Work With Me
              <FiArrowRight />
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg bg-white/90 backdrop-blur-md text-gray-800 
               hover:bg-white transition-colors duration-300`}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>

          {/* ================= MOBILE BUTTONS ================= */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/90 backdrop-blur-md text-gray-800 
               hover:bg-white transition-colors duration-300"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className={theme.text}>
              {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div
            className={`md:hidden mt-2 rounded-xl ${theme.mobileMenuBg} ${theme.shadow}`}
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth
                  offset={-290}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg ${theme.text} hover:bg-gray-100 dark:hover:bg-gray-800 font-medium`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile CTA */}
              <Link
                to="contact"
                smooth
                offset={-80}
                duration={500}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-center gap-2 px-4 py-3 ${theme.buttonPrimary} ${theme.buttonPrimaryHover} rounded-lg font-semibold`}
              >
                Work With Me
                <FiArrowRight />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
