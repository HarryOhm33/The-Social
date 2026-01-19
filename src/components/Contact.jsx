import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiArrowRight,
  FiHome,
  FiUser,
  FiBriefcase,
  FiExternalLink,
} from "react-icons/fi";
import { Link } from "react-scroll";
import { useTheme } from "../contexts/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();

  const contactInfo = {
    email: "info@thesocialayushi.com",
    phone: "+91 7004374521",
    quickLinks: [
      { name: "Home", to: "hero" },
      { name: "About", to: "about" },
      { name: "Services", to: "services" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="contact"
      className={`py-12 md:py-20 lg:py-24 ${theme.background}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${theme.text}`}
          >
            Ready to get started?
          </h2>

          <div className="h-1 w-24 md:w-32 mx-auto mb-8">
            <div
              className={`h-full w-full bg-gradient-to-r ${theme.gradientFrom} ${theme.gradientTo}`}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`text-lg md:text-xl ${theme.textSecondary} max-w-2xl mx-auto mb-8 md:mb-12`}
          >
            Let's start with a conversation about your goals and how we can work
            together.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="inline-block"
          >
            <a
              href={`mailto:${contactInfo.email}`}
              className={`inline-flex items-center justify-center px-8 py-4 ${theme.buttonPrimary} ${theme.buttonPrimaryHover} font-semibold rounded-lg transition-all cursor-pointer group`}
            >
              <span className="text-lg">Get In Touch</span>
              <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className={`pt-8 md:pt-12 border-t ${theme.border}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Brand Info Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3
                  className={`text-2xl md:text-3xl font-bold mb-4 ${theme.text}`}
                >
                  The Social Ayushi
                </h3>
                <p className={`${theme.textSecondary} leading-relaxed mb-4`}>
                  Strategy-led marketing, built with intention.
                </p>
                <p className={`${theme.textMuted} leading-relaxed`}>
                  Helping brands bring structure, clarity, and consistency to
                  their marketing.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <FiMail className={`w-5 h-5 mt-1 mr-3 ${theme.primary}`} />
                  <div>
                    <span
                      className={`block ${theme.textSecondary} font-medium mb-1`}
                    >
                      Email
                    </span>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className={`${theme.accent} hover:${theme.primary} transition-colors`}
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiPhone className={`w-5 h-5 mt-1 mr-3 ${theme.primary}`} />
                  <div>
                    <span
                      className={`block ${theme.textSecondary} font-medium mb-1`}
                    >
                      Phone
                    </span>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                      className={`${theme.accent} hover:${theme.primary} transition-colors`}
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links & Social Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Quick Links */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h4 className={`text-xl font-bold mb-4 ${theme.text}`}>
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {contactInfo.quickLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className={`inline-flex items-center ${theme.textSecondary} hover:${theme.primary} transition-colors cursor-pointer group`}
                      >
                        {link.name === "Home" && (
                          <FiHome className="w-4 h-4 mr-2" />
                        )}
                        {link.name === "About" && (
                          <FiUser className="w-4 h-4 mr-2" />
                        )}
                        {link.name === "Services" && (
                          <FiBriefcase className="w-4 h-4 mr-2" />
                        )}
                        <span>{link.name}</span>
                        <FiArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Get In Touch Section */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h4 className={`text-xl font-bold mb-4 ${theme.text}`}>
                  Get In Touch
                </h4>
                <div className="space-y-4">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className={`flex items-center ${theme.textSecondary} hover:${theme.primary} transition-colors group`}
                  >
                    <FiMail className="w-5 h-5 mr-3" />
                    <span>Email me</span>
                  </a>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                    className={`flex items-center ${theme.textSecondary} hover:${theme.primary} transition-colors group`}
                  >
                    <FiPhone className="w-5 h-5 mr-3" />
                    <span>Call me</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`h-px my-8 md:my-12 ${theme.border}`}
          />

          {/* Copyright & Portfolio Link */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <motion.p
              variants={itemVariants}
              className={`${theme.textMuted} text-sm md:text-base`}
            >
              © 2026 The Social Ayushi. All rights reserved.
            </motion.p>

            <motion.div variants={itemVariants}>
              <a
                href="https://www.behance.net/gallery/238946305/Portfolio-Social-Media-B2B-Marketing-Copywriting"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center ${theme.primary} hover:${theme.secondary} transition-colors group font-medium`}
              >
                <span>View Portfolio on Behance</span>
                <FiExternalLink className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Additional Contact Form (Optional) */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`mt-12 md:mt-16 p-6 md:p-8 rounded-2xl ${theme.cardBg} ${theme.shadow} border ${theme.border} max-w-2xl mx-auto`}
        >
          <h3 className={`text-2xl font-bold mb-6 text-center ${theme.text}`}>
            Send a Message
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full px-4 py-3 rounded-lg ${theme.cardBg} border ${theme.border} ${theme.text} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
              />
              <input
                type="email"
                placeholder="Your Email"
                className={`w-full px-4 py-3 rounded-lg ${theme.cardBg} border ${theme.border} ${theme.text} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="4"
              className={`w-full px-4 py-3 rounded-lg ${theme.cardBg} border ${theme.border} ${theme.text} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none`}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 md:py-4 ${theme.buttonPrimary} ${theme.buttonPrimaryHover} font-semibold rounded-lg transition-all`}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Contact;
