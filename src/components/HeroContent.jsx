import React from "react";
import { Button } from "./ui/button";
import TypeWriter from "./TypeWriter";
import { motion } from "motion/react";
import { fadeUp, heroContent } from "@/utils/animations";
import resume from "../assets/Shashank_Mengar_FlowCV_Resume_2026-08-06.pdf";
const HeroContent = () => {
  return (
    <motion.div
      variants={heroContent}
      initial="hidden"
      animate="show"
      className="flex h-full w-full flex-col items-center gap-(--space-s) px-(--space-s) text-center md:w-1/2 md:items-start md:justify-between md:px-0 md:text-left xl:space-y-s"
    >
      <motion.h1
        variants={fadeUp}
        className="max-w-sm text-(length:--fs-3) leading-tight lg:max-w-full lg:text-(length:--fs-4) xl:text-6xl xl:leading-16.25"
      >
        Hi ! Myself
        <TypeWriter className="text-purple-500">
          &nbsp;Shashank Mengar&nbsp;
        </TypeWriter>
        I am a
        <TypeWriter className="text-blue-700">
          &nbsp;React Developer.
        </TypeWriter>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="max-w-sm text-(length:--fs--1) leading-7 text-gray-300 lg:max-w-full lg:text-(length:--fs-0)"
      >
        I am a Frontend Developer with hands-on experience building responsive
        and user-friendly web apps using frontend technologies like React.js. I
        have completed internships in React.js and MERN stack development with
        experience in API integration, authentication and validations, routing,
        responsive UI development.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="flex w-full max-w-md flex-col gap-(--space-s) md:flex-row"
      >
        <a
          href={resume}
          download="Shashank_Mengar_FlowCV_Resume_2026-08-06.pdf"
        >
          <Button
            variant="link"
            className="w-full grow rounded-md bg-purple-600 p-(--space-s) text-(length:--fs--1) text-white transition-all hover:bg-purple-700 lg:text-(length:--fs-0)"
          >
            Resume
          </Button>
        </a>

        <a href="#Projects">
          <Button
            variant="link"
            className="w-full grow rounded-md bg-white p-(--space-s) text-(length:--fs--1) text-purple-700 transition-all hover:bg-gray-100 lg:text-(length:--fs-0)"
          >
            View Projects
          </Button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
