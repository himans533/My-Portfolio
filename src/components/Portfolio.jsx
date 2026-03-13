import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";
import ProjectCard from "./ui/ProjectCard";
import arrayDestruct from "../assets/portfolio/Ats.png";
import noteTrackerImage from "../assets/portfolio/Note-Tracker.png";
import nexaAiImage from "../assets/portfolio/Nexa-logo.png";
import amazonCloneImage from "../assets/portfolio/Amazon-website.png";
import projectManagementImage from "../assets/portfolio/project-management.png";
import monthChallengeImage from "../assets/portfolio/Month-Challenge-Tacker.png";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "ATS Hiring System",
      description: "Full-stack recruitment system for job posting, candidate tracking, and interview scheduling.",
      image: arrayDestruct,
      technologies: ["React-Native", "Expo-Tool", "MySQL", "REST API"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/hanwat12/Ats-Hiring-System",
      features: [
        "Role-based access control for Admin, Recruiter, and Hiring Manager",
        "Job posting and candidate application management",
        "Resume upload and candidate profile tracking",
        "Interview scheduling and feedback management",
        "Real-time application status tracking",
        "REST API based backend architecture"
      ],
      category: "fullstack"
    },
    {
      id: 2,
      title: "Nexa-AI",
      description: "AI-powered assistant built using the Google Gemini API that allows users to generate intelligent responses, ask questions, and interact with an AI chatbot interface in real time.",
      image: nexaAiImage,
      technologies: ["TypeScript", "Gemini AI API", "HTML", "REST API"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/himans533/NEXA-AI",
      features: [
        "AI chatbot powered by Google Gemini API",
        "Real-time prompt and response interaction",
        "Secure API integration for AI request handling",
        "Clean and responsive user interface",
        "TypeScript-based application architecture",
        "Efficient API request and response management"
      ],
      category: "ai"
    },
    {
      id: 3,
      title: "Project Management Software",
      description: "Enterprise-style project management platform designed to manage projects, team hierarchy, and task tracking with role-based access control for organizations.",
      image: projectManagementImage,
      technologies: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/himans533/Project-Management-Soft",
      features: [
        "Role-based access control for Admin, Manager, and Employees",
        "Project creation and task assignment workflow",
        "Team hierarchy management for organization structure",
        "Real-time project progress and task tracking",
        "Secure authentication and user management system",
        "Dashboard for monitoring project activities"
      ],
      category: "fullstack"
    },
    {
      id: 4,
      title: "Monthly Challenge Management System",
      description: "Spring Boot based REST API for managing monthly coding challenges. The system allows users to create, update, retrieve, and delete challenges using a structured backend architecture.",
      image: monthChallengeImage,
      technologies: ["Java", "Spring Boot", "Spring Data JPA", "Maven", "REST API"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/himans533/Month_Challenge",
      features: [
        "RESTful API for managing monthly challenges",
        "CRUD operations for challenge creation, update, retrieval, and deletion",
        "Layered architecture using Controller, Service, and Repository pattern",
        "Spring Data JPA integration for database interaction",
        "DTO based data structure for challenge management",
        "Maven based project structure with scalable backend design"
      ],
      category: "Full Stack"
    },
    {
      id: 5,
      title: "Note Tracker API",
      description: "Spring Boot based RESTful application for managing personal notes with full CRUD operations and a structured backend architecture.",
      image: noteTrackerImage,
      technologies: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "REST API", "Maven"],
      liveLink: "",
      githubLink: "https://github.com/himans533/NoteTracker",
      features: [
        "REST API for creating, updating, retrieving, and deleting notes",
        "Structured backend architecture using Controller, Service, and Repository layers",
        "Spring Data JPA integration for database management",
        "CRUD operations for efficient note tracking",
        "Scalable Maven-based project configuration",
        "Clean and modular backend code structure"
      ],
      category: "backend"
    },
    {
      id: 6,
      title: "Amazon Clone",
      description: "Frontend e-commerce web application inspired by Amazon that replicates product browsing, responsive layouts, and interactive shopping UI components.",
      image: amazonCloneImage,
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      liveLink: "",
      githubLink: "https://github.com/himans533/Amazon-Clone",
      features: [
        "Responsive Amazon-style e-commerce user interface",
        "Dynamic product listing and product card components",
        "Interactive shopping cart UI experience",
        "Reusable React components for scalable frontend structure",
        "Modern responsive layout using HTML and CSS",
        "Clean frontend architecture for UI replication"
      ],
      category: "frontend"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      name="portfolio"
      className="section-container relative"
    >
      {/* Section Header */}
      <ScrollReveal className="mb-16 md:mb-20">
        <motion.div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              My Portfolio
            </p>
          </motion.div>
          <h2 className="heading-premium text-gradient">
            Featured Projects
          </h2>
          <p className="subheading max-w-lg">Showcasing my best work and technical expertise across frontend, backend, and full-stack development</p>
          <motion.div
            className="w-20 h-1 bg-gradient-primary rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </ScrollReveal>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-3 mb-12 justify-center"
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(category.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${filter === category.id
              ? "bg-gradient-primary text-white shadow-glow"
              : "glass-card text-light-text dark:text-dark-text hover:border-primary/50"
              }`}
          >
            {category.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
                features={project.features}
                delay={idx * 0.05}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Call to Action */}
      <ScrollReveal direction="up" delay={0.4} className="mt-16 text-center">
        <div className="glass-card p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-3">
            Interested in collaborating?
          </h3>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
            I'm always open to interesting projects and freelance opportunities. Let's create
            something amazing together.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-glow transition-all"
          >
            Get In Touch
          </motion.a>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Portfolio;
