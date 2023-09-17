import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: any;
  delay?: number;
  scale?: number;
}

const AnimatedSection = ({ children, delay = 0, scale = 0.95 }: AnimatedSectionProps) => {

  const variant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: scale },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: delay,
        easeOut: [0, 0.71, 0.2, 1.01],
      }}
      variants={variant}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
