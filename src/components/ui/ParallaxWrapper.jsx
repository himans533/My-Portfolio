import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ParallaxWrapper = ({ children, offset = 50, className = "" }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={className}
      style={{
        y: scrollY * 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxWrapper;
