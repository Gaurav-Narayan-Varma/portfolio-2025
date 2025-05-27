import ProjectCard from "@/components/project-card";
import { projects } from "@/constants/projectConstants";
import Link from "next/link";

export default function ProjectSection() {
  return (
    <div className="flex flex-col py-12 px-5 md:px-10 lg:px-12 gap-8">
      <div className="flex justify-between">
        <div className="description-text">Featured work</div>
        <Link
          href="/projects"
          className="flex items-center gap-x-1.5 group opacity-60 hover:opacity-100 transition-opacity duration-150 cursor-default"
        >
          <div className="leading-7 -tracking-[0.16px]">All projects</div>
          <img
            src="/icons/external.svg"
            alt="Projects Page"
            className="w-4.5 h-4.5 group-hover:rotate-45 transition-transform duration-150"
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
