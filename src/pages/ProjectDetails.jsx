import { projects } from "@/utils/projects";
import React from "react";
import { useParams } from "react-router-dom";
import ProjectGallery from "../components/ProjectGallery";
import ProjectInfo from "@/components/ProjectInfo";
import bg from '../assets/pdetails.svg'
const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  console.log(project);
  return (
    <section className="project-details overflow-y-scroll mx-auto flex w-full h-screen p-(--space-l) flex-col gap-8 lg:flex-row lg:items-stretch">
      <ProjectGallery project={project} />
      <ProjectInfo project={project} />
    </section>
  );
};

export default ProjectDetails;
