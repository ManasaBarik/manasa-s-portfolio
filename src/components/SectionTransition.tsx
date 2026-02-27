import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
}

const directionVariants = {
  up: { hidden: { opacity: 0, y: 80, rotateX: 6 }, visible: { opacity: 1, y: 0, rotateX: 0 } },
  left: { hidden: { opacity: 0, x: -60, rotateY: 6 }, visible: { opacity: 1, x: 0, rotateY: 0 } },
  right: { hidden: { opacity: 0, x: 60, rotateY: -6 }, visible: { opacity: 1, x: 0, rotateY: 0 } },
};

const SectionTransition = ({ children, className = "", direction = "up", delay = 0 }: SectionTransitionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const variants = directionVariants[direction];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ perspective: 1200 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionTransition;
