import { navItem } from "@/utils/animations";
import { Button } from "./ui/button";
import { motion } from "motion/react";
const NavLinks = () => {
  const links = ["Skills", "Experience", "Projects"];
  return (
    <div className="hidden lg:flex items-center gap-(--space-s) px-(--space-s)">
      {links.map((item, index) => (
        <a href={`#${item}`} className="z-20 cursor-pointer">
          <motion.div
            custom={index}
            variants={navItem}
            initial="hidden"
            animate="show"
            key={item}
          >
            <Button
              variant="link"
              className="text-white text-(length:--fs--1) tracking-wide"
            >
              {item}
            </Button>
          </motion.div>
        </a>
      ))}
      {/* <Button
        variant="link"
        className="text-white text-(length:--fs--1) tracking-wide"
      >
        About
      </Button>
      <Button
        variant="link"
        className="text-white text-(length:--fs--1) tracking-wide"
      >
        Skills
      </Button>
      <Button
        variant="link"
        className="text-white text-(length:--fs--1) tracking-wide"
      >
        Projects
      </Button> */}
    </div>
  );
};

export default NavLinks;
