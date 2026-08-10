import { navItem } from "@/utils/animations";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useLenis } from "lenis/react";
const NavLinks = () => {
  const links = ["Skills", "Experience", "Projects"];
  const lenis = useLenis();
  return (
    <div className="hidden z-20 lg:flex items-center gap-(--space-s) px-(--space-s)">
      {links.map((item, index) => (
        <motion.div
          custom={index}
          variants={navItem}
          initial="hidden"
          animate="show"
          key={item}
        >
          <Button
            variant="link"
            onClick={() => lenis?.scrollTo(`#${item}`)}
            className="z-20 text-(length:--fs--1) text-pink-300 tracking-wide cursor-pointer"
          >
            {item}
          </Button>
        </motion.div>
      ))}
    </div>
  );
};

export default NavLinks;
