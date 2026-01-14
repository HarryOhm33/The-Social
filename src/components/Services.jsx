import React from "react";
import { motion } from "framer-motion";
import {
  FiCheck,
  FiTrendingUp,
  FiMessageSquare,
  FiPackage,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-scroll";
import { useTheme } from "../contexts/ThemeContext";

const Services = () => {
  const { theme } = useTheme();

  const services = [
    {
      icon: FiTrendingUp,
      title: "Social Media Management",
      description:
        "Designed for brands that want consistency, clarity, and a strong online presence without guessing what to post next.",
      features: [
        "Content strategy & monthly planning",
        "Platform-specific content creation",
        "Caption writing & content optimization",
        "Visual direction & consistency",
        "Performance tracking & insights",
      ],
      buttonText: "Work With Me →",
      color: "from-blue-500 to-cyan-400",
      iconColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: FiMessageSquare,
      title: "Copywriting & Content Strategy",
      description:
        "For brands that need messaging that sounds clear, confident, and intentional — across platforms.",
      features: [
        "Brand voice development",
        "Website & landing page copy",
        "Campaign & content copy",
        "Social media captions with intent",
        "Messaging clarity & refinement",
      ],
      buttonText: "Discuss Your Project →",
      color: "from-purple-500 to-pink-400",
      iconColor: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: FiPackage,
      title: "Full Marketing Package",
      description:
        "A complete, done-for-you marketing system — combining strategy, content, and copy under one roof.",
      features: [
        "Brand & marketing strategy",
        "Social media management",
        "Copywriting & messaging",
        "Content planning & execution",
        "Monthly reporting & optimization",
      ],
      buttonText: "Book a Strategy Call →",
      color: "from-amber-500 to-orange-400",
      iconColor: "bg-gradient-to-br from-amber-500 to-orange-500",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section
      id="services"
      className={`py-12 md:py-20 lg:py-24 ${theme.background}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            My Services
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
            className={`text-lg md:text-xl ${theme.textSecondary} max-w-3xl mx-auto`}
          >
            Comprehensive marketing solutions designed to elevate your brand's
            digital presence
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover="hover"
              className="h-full"
            >
              {/* Service Card */}
              <div
                className={`h-full ${theme.cardBg} rounded-2xl ${theme.shadow} border ${theme.border} overflow-hidden flex flex-col transition-all duration-300 hover:${theme.shadow} hover:scale-[1.02]`}
              >
                {/* Card Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />

                {/* Card Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  {/* Icon and Title */}
                  <div className="flex items-start mb-6">
                    <div
                      className={`w-12 h-12 rounded-lg ${service.iconColor} flex items-center justify-center mr-4 flex-shrink-0`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3
                      className={`text-xl md:text-2xl font-bold ${theme.text} leading-tight`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className={`${theme.textMuted} mb-6 md:mb-8 leading-relaxed flex-1`}
                  >
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="flex items-center mb-6">
                    <div className={`h-px flex-1 ${theme.border}`} />
                  </div>

                  {/* Features List */}
                  <div className="mb-8 space-y-3 md:space-y-4">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        variants={featureVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start"
                      >
                        <div
                          className={`mt-1 mr-3 flex-shrink-0 ${theme.primary}`}
                        >
                          <FiCheck className="w-5 h-5" />
                        </div>
                        <span
                          className={`${theme.textSecondary} text-sm md:text-base`}
                        >
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-auto"
                  >
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className={`inline-flex items-center justify-center w-full py-3 md:py-4 ${theme.buttonPrimary} ${theme.buttonPrimaryHover} font-semibold rounded-lg transition-all cursor-pointer group`}
                    >
                      <span>{service.buttonText}</span>
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className={`mt-16 md:mt-20 p-6 md:p-8 rounded-2xl ${theme.cardBg} ${theme.shadow} border ${theme.border} max-w-4xl mx-auto`}
        >
          <h3
            className={`text-2xl md:text-3xl font-bold mb-6 text-center ${theme.text}`}
          >
            Which Service is Right for You?
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${theme.border}`}>
                  <th className="py-4 px-4 text-left"></th>
                  {services.map((service) => (
                    <th key={service.title} className="py-4 px-4 text-center">
                      <div className={`text-lg font-bold ${theme.text}`}>
                        {service.title.split(" ")[0]}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  "Content Strategy",
                  "Monthly Planning",
                  "Content Creation",
                  "Copywriting",
                  "Performance Tracking",
                  "Monthly Reporting",
                ].map((feature, idx) => (
                  <tr
                    key={feature}
                    className={`border-b ${theme.border} last:border-b-0`}
                  >
                    <td className="py-4 px-4">
                      <span className={`${theme.textSecondary} font-medium`}>
                        {feature}
                      </span>
                    </td>
                    {services.map((service, sIdx) => {
                      const hasFeature = service.features.some((f) =>
                        f
                          .toLowerCase()
                          .includes(feature.toLowerCase().split(" ")[0])
                      );
                      return (
                        <td key={sIdx} className="py-4 px-4 text-center">
                          {hasFeature ? (
                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                              <FiCheck className="w-5 h-5" />
                            </div>
                          ) : (
                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-400">
                              <span>-</span>
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <div
            className={`inline-block ${theme.cardBg} rounded-2xl ${theme.shadow} border ${theme.border} p-6 md:p-8 max-w-2xl mx-auto`}
          >
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${theme.text}`}>
              Not Sure Where to Start?
            </h3>
            <p className={`${theme.textMuted} mb-6 md:mb-8 max-w-lg mx-auto`}>
              Let's discuss your goals and find the perfect solution for your
              brand.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className={`inline-flex items-center justify-center px-8 py-4 ${theme.buttonPrimary} ${theme.buttonPrimaryHover} font-semibold rounded-lg transition-all cursor-pointer`}
              >
                <span className="text-lg">Schedule a Free Consultation</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Services;
