import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiAward, FiBookOpen, FiCalendar, FiMapPin, FiExternalLink } from "react-icons/fi";
import ScrollReveal from "./ui/ScrollReveal";
import GlassmorphicCard from "./ui/GlassmorphicCard";
import rajivGandhiUniversityImage from "../assets/portfolio/Rajiv_Gandhi_Proudyogiki_Vishwavidyalaya.jpg";
import rajaShankarShahUniversityImage from "../assets/portfolio/Raja-Shankar-Shah-University.png";
import trubaCollegeImage from "../assets/portfolio/Truba-college.jfif";

const Education = () => {
  const [activeEducation, setActiveEducation] = useState(null);

  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      institution: "Truba College of Science and Technology",
      university: "Rajiv Gandhi Proudyogiki University",
      location: "Bhopal, Madhya Pradesh",
      universityUrl: "https://www.rgpv.ac.in/",
      startYear: 2023,
      endYear: 2025,
      cgpa: "8.1",
      description: "Advanced studies in computer science with focus on software development, database management, and modern technologies. Successfully completed in June 2025 with excellent academic performance.",
      highlights: [
        "Advanced Web Development & Full Stack Technologies",
        "Database Design & Management",
        "Software Architecture & Design Patterns",
        "Cloud Computing & DevOps",
        "Artificial Intelligence & Machine Learning",
        "Mobile Application Development"
      ],
      image: rajivGandhiUniversityImage,
      collegeImage: trubaCollegeImage,
      category: "postgraduate",
      status: "Completed"
    },
    {
      id: 2,
      degree: "Bachelor of Science in Physics, Chemistry, Mathematics (PCM)",
      institution: "Govt. S.S.P. Arts, Commerce & Science College",
      university: "Raja Shankar Shah University",
      location: "Waraseoni, Chhindwara, Madhya Pradesh",
      universityUrl: "https://www.cuc.ac.in/",
      startYear: 2019,
      endYear: 2022,
      cgpa: "N/A",
      description: "Foundational studies in science with strong emphasis on mathematics, physics, and chemistry. Built analytical and problem-solving skills essential for software development.",
      highlights: [
        "Strong Foundation in Mathematics & Physics",
        "Analytical & Logical Thinking",
        "Problem-Solving Skills",
        "Scientific Research Methods",
        "Laboratory & Practical Knowledge",
        "Academic Excellence & Dedication"
      ],
      image: rajaShankarShahUniversityImage,
      category: "undergraduate",
      status: "Completed"
    }
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const renderEducationCard = (edu, idx) => (
    <motion.div
      key={edu.id}
      variants={itemVariants}
      className="w-full"
    >
      <motion.div
        whileHover={{ y: -8 }}
        onClick={() => setActiveEducation(activeEducation === edu.id ? null : edu.id)}
        className="cursor-pointer"
      >
        <GlassmorphicCard className="overflow-hidden h-full hover:border-primary/50 transition-all duration-300">
          {/* Card Header with Status Badge */}
          <div className="relative h-48 overflow-hidden">
            {edu.collegeImage ? (
              // Dual image layout for MCA
              <div className="flex h-full">
                {/* Left side - College Image */}
                <motion.div
                  className="w-1/2 overflow-hidden cursor-pointer group relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => edu.universityUrl && window.open(edu.universityUrl, "_blank")}
                >
                  <img
                    src={edu.collegeImage}
                    alt={edu.institution}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover overlay for college image */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <FiExternalLink className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                {/* Right side - University Image */}
                <motion.div
                  className="w-1/2 overflow-hidden cursor-pointer group relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => edu.universityUrl && window.open(edu.universityUrl, "_blank")}
                >
                  <img
                    src={edu.image}
                    alt={edu.university}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover overlay for university image */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <FiExternalLink className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
              </div>
            ) : (
              // Single image layout for other education
              <motion.div
                className="w-full h-full overflow-hidden cursor-pointer group relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => edu.universityUrl && window.open(edu.universityUrl, "_blank")}
              >
                <img
                  src={edu.image}
                  alt={edu.institution}
                  className="w-full h-full object-cover"
                />
                {/* Hover overlay for single image */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FiExternalLink className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            )}
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 backdrop-blur-md ${
                  edu.status === "Pursuing"
                    ? "bg-emerald-500/90 text-white"
                    : "bg-blue-500/90 text-white"
                }`}
              >
                <FiAward className="w-4 h-4" />
                {edu.status}
              </motion.span>
            </div>

            {/* Category Badge */}
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-800">
                {edu.category === "postgraduate" ? "Post Graduate" : "Under Graduate"}
              </span>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6 space-y-4">
            {/* Degree Title */}
            <div>
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text leading-tight mb-2">
                {edu.degree}
              </h3>
              <p className="text-primary font-semibold text-sm">
                {edu.institution}
              </p>
            </div>

            {/* University & Location */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary">
                <FiMapPin className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>{edu.location}</span>
              </div>
              <div className="flex items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary">
                <FiBookOpen className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>{edu.university}</span>
              </div>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-2 text-sm bg-primary/10 px-3 py-2 rounded-lg w-fit">
              <FiCalendar className="w-4 h-4 text-primary" />
              <span className="font-semibold text-light-text dark:text-dark-text">
                {edu.startYear} - {edu.endYear}
              </span>
            </div>

            {/* CGPA - Only show for PG */}
            {edu.cgpa !== "N/A" && (
              <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-2 rounded-lg w-fit">
                <FiAward className="w-4 h-4 text-emerald-500" />
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  CGPA: {edu.cgpa}
                </span>
              </div>
            )}

            {/* Expandable Content */}
            <motion.div
              initial={false}
              animate={{
                height: activeEducation === edu.id ? "auto" : 0,
                opacity: activeEducation === edu.id ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-3 border-t border-white/10">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  {edu.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">
                    Key Learning Areas
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {edu.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={activeEducation === edu.id ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-2 text-xs"
                      >
                        <span className="text-primary font-bold mt-0.5">✓</span>
                        <span className="text-light-text-secondary dark:text-dark-text-secondary">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Expand/Collapse Indicator */}
            <motion.div
              animate={{ rotate: activeEducation === edu.id ? 180 : 0 }}
              className="flex justify-center mt-4"
            >
              <button className="text-primary font-semibold text-sm hover:text-primary-dark transition-colors">
                {activeEducation === edu.id ? "Show Less" : "View Details"}
              </button>
            </motion.div>
          </div>
        </GlassmorphicCard>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="education" className="section-container relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute -top-40 left-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute -bottom-40 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-20">
          <motion.div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                <FiBookOpen className="w-4 h-4" />
                Education & Qualifications
              </p>
            </motion.div>

            <h2 className="heading-premium text-gradient">
              Academic Journey
            </h2>

            <p className="subheading max-w-2xl">
              Building strong fundamentals in science and advancing expertise through specialized technical education in computer applications.
            </p>

            <motion.div
              className="w-20 h-1 bg-gradient-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </ScrollReveal>

        {/* Timeline Info */}
        <div className="mb-12 p-6 glass-card rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-blue-500/10">
                <FiAward className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="font-bold text-light-text dark:text-dark-text">
                  Master's Degree - Completed
                </p>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  Master of Computer Applications (2023-2025)
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-emerald-500/10">
                <FiAward className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <p className="font-bold text-light-text dark:text-dark-text">
                  Bachelor's Degree
                </p>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  Completed with focus on Science (PCM) in 2022
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Education Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {educationData.map((edu, idx) => renderEducationCard(edu, idx))}
        </motion.div>

        {/* Summary Section */}
        <ScrollReveal direction="up" className="mt-16">
          <GlassmorphicCard className="p-8 md:p-10 text-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-light-text dark:text-dark-text">
                Continuous Learning & Growth
              </h3>
              <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed max-w-3xl mx-auto">
                Beyond formal education, I remain committed to continuous professional development through online courses, certifications, and hands-on project experience. My academic foundation combined with practical industry experience enables me to deliver high-quality, scalable solutions.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
                <div>
                  <p className="text-3xl font-bold text-primary">2</p>
                  <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-widest mt-1">
                    Degrees
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-emerald-500">8.1</p>
                  <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-widest mt-1">
                    MCA CGPA
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">6+</p>
                  <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-widest mt-1">
                    Years Learning
                  </p>
                </div>
              </div>
            </div>
          </GlassmorphicCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Education;
