import React from "react";
import { motion } from "framer-motion";
import {
  FiTarget,
  FiBarChart2,
  FiCheckCircle,
  FiRefreshCw,
  FiTrendingUp,
  FiArrowUpRight,
} from "react-icons/fi";
import { useTheme } from "../contexts/ThemeContext";

const About = () => {
  const { theme } = useTheme();

  const steps = [
    {
      icon: FiTarget,
      title: "Understand",
      description: "Deep dive into brand, audience, and business goals.",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: FiBarChart2,
      title: "Strategize",
      description:
        "Build a clear content & messaging framework aligned with growth.",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: FiCheckCircle,
      title: "Execute",
      description: "Create consistent, scalable, high-impact content.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FiRefreshCw,
      title: "Optimize",
      description: "Track performance and continuously improve results.",
      color: "from-cyan-500 to-green-500",
    },
  ];

  const featuredWork = [
    {
      title: "Floww",
      description: "Social Media & Content Ecosystem",
      stats: "+627% IG Growth",
      color: "from-blue-500 to-purple-500",
      icon: FiTrendingUp,
    },
    {
      title: "Atom HR",
      description: "Product Launch Campaign",
      stats: "3× Engagement",
      color: "from-purple-500 to-pink-500",
      icon: FiTrendingUp,
    },
    {
      title: "Startup Mahakumbh",
      description: "Event Branding",
      stats: "200K+ Impressions",
      color: "from-pink-500 to-orange-500",
      icon: FiTrendingUp,
    },
    {
      title: "@thesocialayushi",
      description: "Personal Brand Growth",
      stats: "Strategic Growth",
      color: "from-cyan-500 to-blue-500",
      icon: FiTrendingUp,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const workItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      x: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section
      id="about"
      className={`py-12 md:py-20 lg:py-24 ${theme.background}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2
            className={`text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${theme.text}`}
          >
            My Approach to Marketing
          </h2>

          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-1 w-24 md:w-32 mx-auto mb-6"
          >
            <div
              className={`h-full w-full bg-gradient-to-r ${theme.gradientFrom} ${theme.gradientTo}`}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`text-lg md:text-xl ${theme.textSecondary} max-w-3xl mx-auto`}
          >
            Most brands don't struggle because they lack ideas. They struggle
            because they lack structure.
          </motion.p>
        </motion.div>

        {/* Steps Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 z-0">
            <div
              className={`h-full w-full bg-gradient-to-r ${theme.gradientFrom} ${theme.gradientVia} ${theme.gradientTo} opacity-20`}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                custom={index}
                className="relative"
              >
                {/* Step Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`h-full ${theme.cardBg} rounded-2xl ${theme.shadow} p-6 md:p-8 border ${theme.border} relative overflow-hidden`}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-300">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${step.color}`}
                    />
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full opacity-20`}
                    />
                    <span className={`text-lg font-bold ${theme.primary}`}>
                      {index + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className="mb-4 md:mb-6 relative"
                  >
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-r ${step.color}`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    <h3
                      className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 ${theme.text}`}
                    >
                      {step.title}
                    </h3>

                    {/* Divider */}
                    <div className="flex items-center mb-4 md:mb-6">
                      <div
                        className={`h-1 w-12 bg-gradient-to-r ${step.color} rounded-full`}
                      />
                      <div className="h-px flex-1 ml-3" />
                    </div>

                    <p
                      className={`text-base md:text-lg ${theme.textMuted} leading-relaxed`}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Connector Arrow (Mobile only) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className={`w-8 h-8 ${theme.primary} transform rotate-90`}
                    >
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 md:mt-20 lg:mt-24"
        >
          <div className="text-center mb-10 md:mb-12">
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${theme.text}`}>
              Featured Work
            </h3>
            <div className="h-1 w-20 mx-auto mb-6">
              <div
                className={`h-full w-full bg-gradient-to-r ${theme.gradientFrom} ${theme.gradientTo}`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredWork.map((work, index) => (
              <motion.div
                key={work.title}
                variants={workItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                whileHover="hover"
                className="group"
              >
                <div
                  className={`h-full ${theme.cardBg} rounded-xl ${theme.shadow} border ${theme.border} p-5 md:p-6 relative overflow-hidden transition-all duration-300 group-hover:shadow-xl`}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${work.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Top Icon */}
                  <div className="relative mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${work.color} flex items-center justify-center mb-3`}
                    >
                      <work.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Work Title & Description */}
                  <div className="relative mb-3">
                    <h4
                      className={`text-lg md:text-xl font-bold mb-1 ${theme.text}`}
                    >
                      {work.title}
                    </h4>
                    <p className={`text-sm ${theme.textMuted}`}>
                      {work.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="relative">
                    <div
                      className={`inline-flex items-center px-3 py-1.5 rounded-full ${theme.badgeBg} ${theme.badgeText} text-xs md:text-sm font-semibold`}
                    >
                      <FiArrowUpRight className="w-3 h-3 mr-1" />
                      {work.stats}
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                      <FiArrowUpRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className={`mt-12 md:mt-16 lg:mt-20 p-6 md:p-8 rounded-2xl ${theme.cardBg} ${theme.shadow} border ${theme.border} max-w-4xl mx-auto`}
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h3
                className={`text-2xl md:text-3xl font-bold mb-4 ${theme.text}`}
              >
                Why This Approach Works
              </h3>

              <p className={`${theme.textMuted} leading-relaxed`}>
                Structured systems remove guesswork. Every post serves a clear
                business purpose, with results that are measurable, scalable,
                and focused on long-term brand growth rather than trends.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Structured Systems", value: "Clarity" },
                { label: "Purpose-Driven", value: "Intentional" },
                { label: "Measurable", value: "Trackable" },
                { label: "Scalable Growth", value: "Long-Term" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className={`text-center p-4 rounded-xl border ${
                    theme.border
                  } bg-gradient-to-br ${
                    theme.name === "dark"
                      ? "from-gray-800/50 to-gray-900/50"
                      : "from-white/50 to-gray-50/50"
                  }`}
                >
                  <div className={`text-2xl font-bold ${theme.primary} mb-1`}>
                    {item.value}
                  </div>
                  <div className={`text-sm font-medium ${theme.textSecondary}`}>
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
