import { motion } from "motion/react";
import { timelineDot, timelineItem, timelineLine } from "../utils/animations";
import { Badge } from "./ui/badge";

const Timeline = () => {
  const mern = ["HTML", "CSS", "JS", "React", "Node.js", "Express", "MongoDB"];

  const react = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Tailwind CSS",
    "shadCN UI",
    "Responsive Web Design",
  ];

  return (
    <div
      id="Experience"
      className="relative mx-auto w-full max-w-6xl overflow-x-hidden px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Vertical Line */}

      <motion.div
        variants={timelineLine}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="absolute left-6 inset-y-0 w-[3px] origin-top bg-gradient-to-b from-purple-700 via-blue-600 to-purple-700 md:left-1/2 md:-translate-x-1/2"
      />

      {/* Left - Grownited */}

      <motion.div
        variants={timelineItem("left")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative mb-16 flex w-full md:w-1/2 md:pr-12"
      >
        <motion.div
          variants={timelineDot}
          className="absolute left-0 top-8 z-20 h-5 w-5 rounded-full bg-purple-500 shadow-[0_0_20px_#9333ea] md:left-auto md:right-[-11px]"
        />

        <div className="ml-14 flex w-[calc(100%-3.5rem)] flex-col items-start gap-(--space-s) rounded-2xl border border-green-500/20 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-700/30 sm:p-6 md:ml-0 md:w-full">
          {/* Header */}

          <div className="flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="min-w-0 break-words text-lg font-semibold text-white sm:text-xl">
              Grownited Pvt Ltd
            </h2>

            <Badge
              className="
                self-start
                rounded-full
                border
                border-teal-500/20
                bg-teal-600/10
                px-4
                py-2
                text-sm
                font-medium
                text-green-300
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-teal-500/60
                hover:bg-teal-600/20
                hover:shadow-lg
                hover:shadow-green-700/30
                sm:px-6
                sm:py-3
              "
            >
              MERN Stack Intern
            </Badge>
          </div>

          {/* Date */}

          <p className="text-sm text-purple-300">Jan 2025 — Apr 2025</p>

          {/* Experience */}

          <ul className="list-inside list-disc space-y-3 text-gray-300">
            <li>
              Learned core frontend technologies like HTML/CSS and JavaScript
              along with React.js library.
            </li>

            <li>
              Got familiar with backend technologies Node.js, Express.js and
              MongoDB database.
            </li>

            <li>
              Gained hands-on experience in full-stack web development using the
              MERN stack.
            </li>
          </ul>

          {/* Technologies */}

          <div className="flex flex-col gap-3">
            <h3 className="text-(length:--fs-0) font-semibold text-white">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-2">
              {mern.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-teal-500/20
                    bg-teal-600/10
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-green-300
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-teal-500/60
                    hover:bg-teal-600/20
                    hover:shadow-lg
                    hover:shadow-green-700/30
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right - Maxgen */}

      <motion.div
        variants={timelineItem("right")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative mb-16 flex w-full md:ml-auto md:w-1/2 md:pl-12"
      >
        <motion.div
          variants={timelineDot}
          className="absolute left-0 top-8 z-20 h-5 w-5 rounded-full bg-blue-500 shadow-[0_0_20px_#3b82f6] md:left-[-10px]"
        />

        <div className="ml-14 flex w-[calc(100%-3.5rem)] flex-col items-start gap-(--space-s) rounded-2xl border border-blue-500/20 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-700/30 sm:p-6 md:ml-0 md:w-full">
          {/* Header */}

          <div className="flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="min-w-0 break-words text-lg font-semibold text-white sm:text-xl">
              Maxgen Technologies
            </h2>

            <Badge
              className="
                self-start
                rounded-full
                border
                border-blue-500/20
                bg-blue-600/10
                px-4
                py-2
                text-sm
                font-medium
                text-blue-300
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500/60
                hover:bg-blue-600/20
                hover:shadow-lg
                hover:shadow-blue-700/30
                sm:px-6
                sm:py-3
              "
            >
              React.js Intern
            </Badge>
          </div>

          {/* Date */}

          <p className="text-sm text-blue-300">Feb 2026 — May 2026</p>

          {/* Experience */}

          <ul className="list-inside list-disc space-y-3 text-gray-300">
            <li>
              Learned core frontend technologies like HTML/CSS and JavaScript
              along with React.js library.
            </li>

            <li>
              Worked on the Fresh Bites food delivery project using Firebase for
              authentication and Zod with React Hook Form for validation.
            </li>

            <li>
              Implemented routing using React Router and integrated shadCN UI
              for elegant and responsive interfaces.
            </li>

            <li>
              Collaborated with mentors to understand professional frontend
              development workflows.
            </li>
          </ul>

          {/* Technologies */}

          <div className="flex flex-col gap-3">
            <h3 className="text-(length:--fs-0) font-semibold text-white">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-2">
              {react.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-blue-500/20
                    bg-blue-600/10
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-blue-300
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-500/60
                    hover:bg-blue-600/20
                    hover:shadow-lg
                    hover:shadow-blue-700/30
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Timeline;
