import ProjectCard from "@/components/project-card";
import { projects } from "@/constants/projectConstants";

export default function Projects() {
  return (
    <div className="animate-fade-in px-12 py-18 flex flex-col w-full max-w-[1200px] gap-14">
      <div className="flex flex-col gap-3">
        <div className="page-title">
          Recent Products
        </div>
        <div className="page-subtitle">
          Dive into some of my products.
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <div className="font-[Inter] text-[22px] text-white/90 font-medium -tracking-[0.44px] leading-[28.6px]">More coming soon!</div>
    </div>
  );
}
