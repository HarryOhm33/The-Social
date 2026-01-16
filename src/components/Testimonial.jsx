import React from "react";
import { motion } from "framer-motion";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useTheme } from "../contexts/ThemeContext";

const Testimonial = () => {
  const { theme } = useTheme();

  const testimonials = [
    {
      name: "Aryan Poddar",
      role: "Founder Office – Floww",
      quote:
        "Ayushi brought structure and clarity to our social media. Her content systems helped simplify complex SaaS messaging and drive consistent engagement.",
      rating: 5,
      photo: "/aryan.jpeg", // Add your image path here
    },
    {
      name: "Samrat Saurav",
      role: "Founder – Learnovate",
      quote:
        "Ayushi works with ownership and a clear process. She brought consistency and direction to our content and branding efforts.",
      rating: 5,
      photo: "/samrat.jpeg", // Add your image path here
    },
    {
      name: "Hari Om",
      role: "Founder – Washingo",
      quote:
        "Ayushi focuses on intent, not just content. Her strategic approach helped us communicate better and build trust with our audience.",
      rating: 5,
      photo: "/hari.jpeg", // Add your image path here
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

  const starVariants = {
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
  };

  return (
    <section
      id="testimonials"
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
            Happy Customers
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
            Hear from brands that have transformed their marketing with
            strategic approach
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              whileHover="hover"
              className="h-full"
            >
              {/* Testimonial Card */}
              <div
                className={`h-full ${theme.cardBg} rounded-2xl ${theme.shadow} border ${theme.border} p-6 md:p-8 flex flex-col relative overflow-hidden`}
              >
                {/* Decorative Quote Mark */}
                <div className="absolute top-4 right-4 opacity-10">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Stars Rating */}
                <motion.div variants={starVariants} className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </motion.div>

                {/* Quote */}
                <div className="flex-1 mb-6 md:mb-8">
                  <p
                    className={`${theme.textSecondary} text-lg leading-relaxed italic`}
                  >
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Divider */}
                <div className="flex items-center mb-6">
                  <div className={`h-px flex-1 ${theme.border}`} />
                  <div className="mx-4">
                    <div
                      className={`w-2 h-2 rounded-full ${theme.primary} bg-current`}
                    />
                  </div>
                  <div className={`h-px flex-1 ${theme.border}`} />
                </div>

                {/* Client Info with Photo */}
                <div className="flex items-center">
                  {/* Client Photo */}
                  <div className="mr-4 flex-shrink-0">
                    <div className="relative">
                      {/* Client Photo Placeholder - Replace with actual image */}
                      <img
                        src={`/src/assets/clients/${testimonial.photo}`} // or use full URL
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-gray-900 shadow-lg"
                      />
                      {/* Photo Upload/Placeholder Container */}
                      <div className="absolute -bottom-1 -right-1">
                        <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white dark:border-gray-900 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Client Details */}
                  <div className="flex-1">
                    <h4 className={`text-xl font-bold mb-1 ${theme.text}`}>
                      {testimonial.name}
                    </h4>
                    <p className={`${theme.textMuted} text-sm md:text-base`}>
                      {testimonial.role}
                    </p>
                  </div>

                  {/* Company Logo/Icon (Optional) */}
                  <div className="ml-2 flex-shrink-0">
                    <div
                      className={`w-10 h-10 rounded-lg ${theme.cardBg} border ${theme.border} 
                flex items-center justify-center opacity-60 ${theme.primary}`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute bottom-0 left-0 right-0 h-1">
                  <div
                    className={`h-full bg-gradient-to-r ${theme.gradientFrom} ${theme.gradientTo}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
