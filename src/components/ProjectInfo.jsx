import React from "react";
import { Button } from "./ui/button";
import { Code2 } from "lucide-react";
import { Badge } from "./ui/badge";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectInfo = ({ project }) => {
  return (
    <div className="flex grow flex-col justify-center gap-(--space-l) rounded-3xl border border-purple-500/20 bg-white/5 p-(--space-l) ">
      {/* Title */}

      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          Featured Project
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
          {project.title}
        </h1>

        <p className="max-w-xl leading-8 text-gray-300">
          {project.description}
        </p>
      </div>

      {/* Technologies */}

      <div className="space-y-5">
        <div className="flex items-center gap-2">
          <Code2 className="h-5 w-5 text-blue-400" />

          <h3 className="text-xl font-semibold text-white">
            Technologies Used
          </h3>
        </div>

        <div className="flex flex-wrap items-start gap-3">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              className="
                rounded-full
                border
                border-purple-500/20
                bg-purple-600/10
                px-6
                py-4
                text-sm
                font-medium
                text-purple-300
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-purple-500/60
                hover:bg-purple-600/20
                hover:shadow-lg
                hover:shadow-purple-700/30
              "
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Buttons */}

      <div className="flex flex-col gap-4 pt-4 sm:flex-row">
        <a href={project.live} target="_blank">
          <Button
            className="
            rounded-xl
            bg-purple-600
            px-8
            py-6
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-purple-700
            hover:shadow-xl
            hover:shadow-purple-700/40
          "
          >
            <FaLink className="mr-2 h-4 w-4" />
            Live Demo
          </Button>
        </a>
        <a href={project.github} target="_blank">
          <Button
            variant="outline"
            className="
            rounded-xl
            border-purple-500/30
            bg-white/5
            px-8
            py-6
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-blue-500/50
            hover:bg-blue-600/10
            hover:text-blue-300
            hover:shadow-xl
            hover:shadow-blue-700/30
          "
          >
            <FaGithub className="mr-2 h-6 w-6" />
            GitHub
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ProjectInfo;
