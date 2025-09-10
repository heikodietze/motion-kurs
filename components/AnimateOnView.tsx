'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate';

interface AnimateOnViewProps {
  children: React.ReactNode;
  direction?: Direction;
  className?: string;
  delay?: number;
  distance?: number;
}

export default function AnimateOnView({ 
  children, 
  direction = 'up',
  className = "",
  delay = 0,
  distance = 75
}: AnimateOnViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const variants = {
    up: { 
      initial: { opacity: 0, y: distance },
      animate: { opacity: 1, y: 0 }
    },
    down: { 
      initial: { opacity: 0, y: -distance },
      animate: { opacity: 1, y: 0 }
    },
    left: { 
      initial: { opacity: 0, x: distance },
      animate: { opacity: 1, x: 0 }
    },
    right: { 
      initial: { opacity: 0, x: -distance },
      animate: { opacity: 1, x: 0 }
    },
    scale: { 
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 }
    },
    rotate: { 
      initial: { opacity: 0, rotate: -15, scale: 0.9 },
      animate: { opacity: 1, rotate: 0, scale: 1 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={variants[direction].initial}
      animate={isInView ? variants[direction].animate : variants[direction].initial}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: direction === 'scale' || direction === 'rotate' ? 'spring' : 'tween'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}