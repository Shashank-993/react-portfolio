import MobileMenu from "../components/MobileMenu";
import NavMain from "../components/NavMain";
import NavLinks from "../components/NavLinks";
import { navbar} from "@/utils/animations";
import {motion} from "motion/react"
const Nav = () => {
  return (
    <motion.nav variants={navbar} initial="hidden" animate="show" className="relative px-(--space-xs) py-(--space-2xs) w-[85%] max-w-6xl m-(--space-s) overflow-hidden border border-purple-600/30 bg-purple-700/10 rounded-full flex items-center justify-between ">
      <div className="absolute inset-0 bg-gray-500/5" />
      <NavMain />
      <MobileMenu />
      <NavLinks />
    </motion.nav>
  );
};
export default Nav;
