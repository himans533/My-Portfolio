import React from "react";
import { motion } from "framer-motion";
import {
  FiAward,
  FiTrendingUp,
  FiCode,
  FiTarget,
  FiStar,
  FiCheckCircle,
  FiZap,
  FiBriefcase,
} from "react-icons/fi";
import ScrollReveal from "./ui/ScrollReveal";
import GlassmorphicCard from "./ui/GlassmorphicCard";

const Achievements = () => {
  const badges = [
    {
      id: 1,
      icon: FiCode,
      title: "Full Stack Developer",
      description: "Expert in both frontend and backend development",
      level: "Expert",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/30",
    },
    {
      id: 2,
      icon: FiAward,
      title: "Spring Boot Master",
      description: "Advanced expertise in Java Spring Boot framework",
      level: "Advanced",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500/30",
    },
    {
      id: 3,
      icon: FiTrendingUp,
      title: "Performance Optimizer",
      description: "Specialized in system design and optimization",
      level: "Advanced",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
    },
    {
      id: 4,
      icon: FiTarget,
      title: "Microservices Architect",
      description: "Building scalable distributed systems",
      level: "Advanced",
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-500/30",
    },
    {
      id: 5,
      icon: FiZap,
      title: "Quick Learner",
      description: "Master new technologies and frameworks rapidly",
      level: "Expert",
      color: "from-yellow-500 to-orange-500",
      borderColor: "border-yellow-500/30",
    },
    {
      id: 6,
      icon: FiBriefcase,
      title: "Professional Developer",
      description: "1+ years of professional development experience",
      level: "Professional",
      color: "from-indigo-500 to-purple-500",
      borderColor: "border-indigo-500/30",
    },
  ];

  const stats = [
    { label: "Years Experience", value: "1+", icon: FiBriefcase },
    { label: "Projects Completed", value: "5+", icon: FiCheckCircle },
    { label: "Technologies Mastered", value: "15+", icon: FiCode },
    { label: "Success Rate", value: "100%", icon: FiStar },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <section id="achievements" className="section-container relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 right-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-20 text-center">
          <motion.div className="space-y-4 mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-primary flex items-center justify-center gap-2">
                <FiAward className="w-4 h-4" />
                Professional Credentials
              </p>
            </motion.div>

            <h2 className="heading-premium text-gradient">
              Certifications & Expertise
            </h2>

            <p className="subheading">
              Validated expertise across multiple technologies and professional achievements
            </p>

            <motion.div
              className="w-20 h-1 bg-gradient-primary rounded-full mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </ScrollReveal>

        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={badgeVariants}
                whileHover={{ y: -5 }}
                className="glass-card p-6 text-center"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="flex justify-center mb-3"
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>
                <p className="text-2xl md:text-3xl font-bold text-light-text dark:text-dark-text">
                  {stat.value}
                </p>
                <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-wider mt-2">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Badges Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <motion.div key={badge.id} variants={badgeVariants}>
                <GlassmorphicCard className={`p-6 relative overflow-hidden group border ${badge.borderColor} hover:border-white/50 h-full`}>
                  {/* Gradient Background */}
                  <div
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${badge.color} opacity-5 group-hover:opacity-10 rounded-full transition-opacity duration-300`}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ y: -5, rotate: 10 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${badge.color} p-3 flex items-center justify-center text-white mb-4`}
                    >
                      <Icon className="w-7 h-7" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-2">
                      {badge.title}
                    </h3>

                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-4 leading-relaxed">
                      {badge.description}
                    </p>

                    {/* Level Badge */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`inline-block px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r ${badge.color} text-white`}
                    >
                      {badge.level}
                    </motion.div>

                    {/* Hover Accent */}
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className={`absolute top-0 right-0 w-2 h-2 rounded-full bg-gradient-to-r ${badge.color}`}
                    />
                  </div>
                </GlassmorphicCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Summary CTA */}
        <ScrollReveal direction="up" className="mt-16 text-center">
          <GlassmorphicCard className="p-8 md:p-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
              With proven expertise and professional achievements, I'm ready to bring value to your next project.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-glow transition-all"
            >
              Get In Touch
            </motion.a>
          </GlassmorphicCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Achievements;
