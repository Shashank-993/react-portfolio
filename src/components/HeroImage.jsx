import { floating, heroImage, pop } from "@/utils/animations";
import myphoto from "../assets/myphotosmall-removebg-preview.png";
import reacticon from "../assets/react.svg";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const HeroImage = () => {
  return (
    <TooltipProvider>
      <motion.div
        variants={heroImage}
        initial="hidden"
        animate="show"
        className="relative w-full max-w-2xs overflow-hidden rounded-2xl xl:max-w-md"
      >
        {/* React Developer Badge */}
        <motion.div
          variants={pop}
          initial="hidden"
          animate="show"
          whileInView={floating}
          className="absolute right-3 top-3 z-10"
        >
          <Badge className="gap-2 bg-transparent p-(--space-xs) text-blue-700 shadow-xl shadow-blue-700/30 backdrop-blur-sm">
            <img src={reacticon} className="h-5 w-5" alt="React" />
            React Developer
          </Badge>
        </motion.div>

        {/* Education Tooltip */}
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="h-full w-full cursor-help"
            >
              <img
                src={myphoto}
                className="h-full w-full object-cover lg:object-fill"
                alt="Shashank Mengar"
              />
            </motion.div>
          </TooltipTrigger>

          <TooltipContent
            side="left"
            className=" border-purple-500/30 bg-[#0f0a1a]/5 px-5 py-4 text-white shadow-2xl shadow-purple-900/40 backdrop-blur-xl"
          >
            <div className="space-y-1">
              <p className="text-sm font-semibold text-purple-300">Education</p>

              <p className="text-base font-medium">
                SAL college of engineering
              </p>
              <p className="text-base font-medium">
                B.E. in Computer Engineering
              </p>

              <p className="text-sm text-gray-400">
                Gujarat Technological University
              </p>

              <p className="text-xs text-blue-500">Computer Engineering</p>
              <p className="text-xs font-semibold text-green-300">CGPA: 7.56</p>
            </div>
          </TooltipContent>
        </Tooltip>
      </motion.div>
    </TooltipProvider>
  );
};

export default HeroImage;
