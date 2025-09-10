'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface StaggerGridProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  columns?: number;
}

export default function StaggerGrid({ 
  children, 
  className = "",
  staggerDelay = 0.1,
  columns = 3
}: StaggerGridProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`grid grid-cols-1 md:grid-cols-${columns} gap-6 ${className}`}
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}