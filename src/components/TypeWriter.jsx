import { motion } from "motion/react";

export default function TypeWriter({ children, className }) {
  const text = children.split("");

  return (
    <span className={`${className}`}>
      {text.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * 0.03,
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
