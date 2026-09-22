import { type ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps, type Variants } from "motion/react";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  viewportAmount?: number | "some" | "all";
  once?: boolean;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 24,
  className = "",
  viewportAmount = 0.15,
  once = true,
  ...props
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: yOffset }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, amount: viewportAmount }}
      transition={{
        duration: shouldReduceMotion ? 0.25 : duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  staggerDelay = 0.08,
  delayChildren = 0.05,
  className = "",
  viewportAmount = 0.1,
  once = true,
}: {
  children: ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  viewportAmount?: number | "some" | "all";
  once?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: shouldReduceMotion ? 0 : delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  yOffset = 20,
  duration = 0.5,
}: {
  children: ReactNode;
  className?: string;
  yOffset?: number;
  duration?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

export function StaggerArticle({
  children,
  className = "",
  yOffset = 24,
  duration = 0.55,
}: {
  children: ReactNode;
  className?: string;
  yOffset?: number;
  duration?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  const articleVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.article variants={articleVariants} className={className}>
      {children}
    </motion.article>
  );
}
