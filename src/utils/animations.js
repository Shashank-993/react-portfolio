import { easeOut } from "motion/react";

export const navbar = {
  hidden: {
    y: -40,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export const navItem = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
    },
  }),
};

export const heroImage = {
  hidden: {
    x: -70,
    opacity: 0,
    scale: 0.92,
  },
  show: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

export const heroContent = {
  hidden: {
    x: 70,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easeOut,
      staggerChildren: 0.18,
    },
  },
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const pop = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 180,
    },
  },
};

export const floating = {
  y: [-3, 3, -3],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/* timeline animations */

export const timelineItem = (direction = "left") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -80 : 80,
    y: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
});

export const timelineLine = {
  hidden: {
    scaleY: 0,
  },
  show: {
    scaleY: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

export const timelineDot = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 18,
    },
  },
};
