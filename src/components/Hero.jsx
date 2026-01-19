import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-scroll";
import { useTheme } from "../contexts/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="hero"
      className={`min-h-screen flex flex-col ${theme.background}`}
    >
      {/* ================= BOTTOM FULL-WIDTH GIF ================= */}
      <div className="w-full overflow-hidden">
        {/* Desktop / Tablet */}
        <img
          src="/slider.gif"
          alt="Decorative motion strip"
          className="hidden md:block w-full h-[65px] object-fill"
        />

        {/* Mobile */}
        <img
          src="/slider_2.gif"
          alt="Decorative motion strip"
          className="block md:hidden w-full h-[60px] object-fill"
        />
      </div>

      {/* ================= MAIN HERO CONTENT ================= */}
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="space-y-8 order-2 lg:order-1"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`inline-block px-4 py-2 rounded-full ${theme.badgeBg} ${theme.badgeText} text-sm font-medium`}
              >
                Social Media Strategist & Copywriter
              </motion.span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className={theme.text}>Strategy-led marketing, </span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-[#5631C0]"
                >
                  built with intention.
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`text-lg ${theme.textMuted} leading-relaxed max-w-2xl`}
              >
                I help brands bring structure, clarity, and consistency to their
                marketing. No shortcuts. No trend-chasing. Just thoughtful
                marketing done consistently.
              </motion.p>

              {/* Buttons */}
              <div className="flex flex-row sm:flex-row gap-4">
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    to="contact"
                    smooth
                    offset={-80}
                    duration={500}
                    className={`inline-flex items-center px-6 py-4 ${theme.buttonPrimary} ${theme.buttonPrimaryHover} font-semibold rounded-lg cursor-pointer ${theme.shadow}`}
                  >
                    Work With Me
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-2" />
                  </Link>
                </motion.div>

                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <a
                    href="https://www.behance.net/gallery/238946305/Portfolio-Social-Media-B2B-Marketing-Copywriting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-7 py-4 ${theme.buttonSecondary} ${theme.buttonSecondaryHover} font-semibold rounded-lg cursor-pointer ${theme.shadow}`}
                  >
                    View My Work
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Image / GIF */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="relative order-1 lg:order-2"
            >
              <div className={`rounded-2xl overflow-hidden ${theme.shadow}`}>
                <img
                  src="/hero.gif"
                  alt="Ayushi - Social Media Strategist"
                  className="w-full object-contain bg-black"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
