import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import HeroImage from "../assets/myphoto.jpeg";
import AnimatedButton from "./ui/AnimatedButton";
import TechBadge from "./ui/TechBadge";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const techStack = [
    "Spring Boot",
    "React",
    "Microservices",
    "MySQL",
    "Docker",
  ];

  return (
    <section
      name="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Parallax Background Effects */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y: scrollY * 0.5 }}
      >
        <motion.div 
          className="absolute left-1/2 top-[-200px] w-[700px] h-[700px] bg-primary/20 blur-[140px] rounded-full -translate-x-1/2 animate-blob"
          style={{ y: scrollY * 0.3 }}
        />
        <motion.div 
          className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full animate-blob"
          style={{ y: scrollY * 0.2 }}
        />
      </motion.div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-14 items-center">
        {/* ===== LEFT CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-semibold border border-emerald-500/20"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-emerald-500"
            />
            Available for Opportunities
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-500 text-transparent bg-clip-text animate-gradient-flow">
              Himanshu Hanwat
            </span>
          </h1>

          {/* Typing Role */}
          <h2 className="text-xl md:text-2xl font-semibold text-primary">
            <ReactTyped
              strings={[
                "Full Stack Developer",
                "Spring Boot Specialist",
                "Backend Architecture Expert",
                "Scalable Software Engineer",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
            I design and build scalable web applications using modern technologies like Spring Boot, React, and Docker. Specialized in backend architecture, microservices, and creating high-performance systems that deliver measurable business value.
          </p>

          {/* Tech Stack Floating Badges */}
          <div className="flex flex-wrap gap-3 pt-2">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -6, scale: 1.08 }}
              >
                <TechBadge>{tech}</TechBadge>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <Link to="portfolio" smooth duration={500}>
              <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.95 }}>
                <AnimatedButton size="lg" className="gap-3 shadow-xl">
                  View Projects
                  <FiArrowRight />
                </AnimatedButton>
              </motion.div>
            </Link>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatedButton variant="secondary" size="lg" className="gap-3">
                <FiDownload />
                Download Resume
              </AnimatedButton>
            </motion.a>
          </div>

          {/* Trust Highlights */}
          <div className="flex gap-8 pt-8 text-sm text-gray-500 dark:text-gray-400">
            <div>
              <p className="font-bold text-xl text-primary">2+</p>
              <p>Years Experience</p>
            </div>
            <div>
              <p className="font-bold text-xl text-primary">5+</p>
              <p>Projects Developed</p>
            </div>
            <div>
              <p className="font-bold text-xl text-primary">100%</p>
              <p>Full Stack
                Development</p>
            </div>
          </div>
        </motion.div>

        {/* ===== RIGHT IMAGE ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="absolute w-80 h-80 bg-gradient-to-r from-teal-400 to-emerald-500 blur-3xl opacity-20 rounded-full" />

          {/* Glass Card */}
          <div className="relative backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/10 p-6 rounded-3xl shadow-2xl">
            <motion.img
              src={HeroImage}
              alt="Himanshu"
              className="w-72 h-72 object-cover rounded-2xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;