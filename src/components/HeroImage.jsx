import { floating, heroImage, pop } from "@/utils/animations";
import myphoto from "../assets/myphotosmall-removebg-preview.png";
import reacticon from "../assets/react.svg";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { useState } from "react";
import { useEffect } from "react";

const HeroImage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <motion.div
      variants={heroImage}
      initial="hidden"
      animate="show"
      className="relative w-full max-w-2xs xl:max-w-md"
    >
      <div
        className="group relative w-full"
        style={{
          perspective: "1200px",
          WebkitPerspective: "1200px",
        }}
      >
        <div
          className="relative aspect-square w-full cursor-pointer transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-y-180"
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 overflow-hidden rounded-2xl  outline-blue-700/50 outline-offset-4 md:outline-offset-6"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
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

            <img
              src={myphoto}
              className="h-full w-full object-cover"
              alt="Shashank Mengar"
              draggable="false"
            />
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 flex aspect-square flex-col items-center justify-center overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-950 via-[#0f0a1a] to-blue-950 p-6 text-center shadow-2xl shadow-purple-900/30 outline outline-purple-700/30 outline-offset-4 md:outline-offset-6"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.18),transparent_65%)]" />

            <div className="relative z-10 flex flex-col items-center gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
                Education
              </p>

              <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

              <h2 className="text-xl font-bold text-white sm:text-2xl">
                SAL College of Engineering
              </h2>

              <p className="text-base font-medium text-purple-300">
                B.E. in Computer Engineering
              </p>

              <p className="text-sm text-gray-400">
                Gujarat Technological University
              </p>

              <div className="mt-2 flex flex-wrap justify-center gap-2">
                <span className="rounded-full border border-blue-500/20 bg-blue-600/10 px-3 py-1.5 text-xs text-blue-300">
                  Computer Engineering
                </span>

                <span className="rounded-full border border-green-500/20 bg-green-600/10 px-3 py-1.5 text-xs font-semibold text-green-300">
                  CGPA: 7.56
                </span>
              </div>
            </div>
          </div>
        </div>
        {screenWidth <= 768 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.5 }}
            className="mt-4 text-center text-xs tracking-wide text-pink-300"
          >
            Open menu for education details
          </motion.p>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.5 }}
            className="hidden md:block mt-4 text-center text-xs tracking-wide text-pink-300"
          >
            Hover to see education details
          </motion.p>
        )}
        {console.log(screenWidth)}
      </div>
    </motion.div>
  );
};

export default HeroImage;
