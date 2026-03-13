import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMessageSquare, FiPhone, FiMail, FiX } from "react-icons/fi";

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide CTA when near contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        setIsVisible(rect.top > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const quickLinks = [
    {
      icon: FiMail,
      label: "Email",
      action: "mailto:himanshuhanwat104@gmail.com",
      color: "text-blue-500",
      bgColor: "bg-blue-500/20",
    },
    {
      icon: FiPhone,
      label: "Call",
      action: "tel:+919479662172",
      color: "text-green-500",
      bgColor: "bg-green-500/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    }),
  };

  return (
    <>
      {isVisible && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed bottom-8 right-8 z-40"
        >
          {/* Menu Items */}
          <motion.div
            animate={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none" }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-24 right-0 space-y-3"
          >
            {quickLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={i}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate={isOpen ? "visible" : "hidden"}
                  href={link.action}
                  target={link.action.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-4 rounded-full backdrop-blur-md ${link.bgColor} border border-white/20 hover:border-white/40 transition group cursor-pointer shadow-lg hover:shadow-xl`}
                >
                  <Icon className={`w-5 h-5 ${link.color}`} />
                  <span className="text-sm font-semibold text-light-text dark:text-dark-text opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    {link.label}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Main Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-16 h-16 rounded-full bg-gradient-primary text-white shadow-lg hover:shadow-2xl flex items-center justify-center group"
          >
            <motion.div
              animate={{ rotate: isOpen ? 360 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMessageSquare className="w-6 h-6" />
              )}
            </motion.div>

            {/* Pulse Animation */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full border-2 border-primary/50"
            />
          </motion.button>

          {/* Label */}
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ delay: 1 }}
              className="absolute bottom-20 -right-2 bg-light-surface dark:bg-dark-surface px-4 py-2 rounded-lg whitespace-nowrap text-sm font-semibold text-light-text dark:text-dark-text shadow-lg"
            >
              Let's Talk 👋
            </motion.div>
          )}
        </motion.div>
      )}
    </>
  );
};

export default FloatingCTA;
