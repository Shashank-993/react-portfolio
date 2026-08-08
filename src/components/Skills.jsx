import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import {
  siHtml5,
  siCss,
  siJavascript,
  siReact,
  siTailwindcss,
} from "simple-icons";

const icons = [siHtml5, siCss, siJavascript, siReact, siTailwindcss];

const Skills = () => {
  return (
    <div className="group mx-auto w-full overflow-hidden bg-transparent py-10">
      <div className="carousel-track mx-auto flex w-max animate-scroll gap-8 p-4">
        {[...icons, ...icons].map((icon, index) => (
          <div
            key={index}
            className="flex h-48 w-48 flex-none items-center justify-center overflow-hidden rounded-[20px] bg-purple-900/30 outline outline-purple-700/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-600/40"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105"
              fill={`#${icon.hex}`}
            >
              <path d={icon.path} />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
