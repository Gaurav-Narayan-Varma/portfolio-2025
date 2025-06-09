import ProjectCard from "@/components/project-card";
import { projects } from "@/constants/projectConstants";

export default function ProjectSection() {
  return (
    <div className="flex flex-col py-12 px-5 md:px-10 lg:px-12 gap-8">
      <div className="flex justify-between">
        <div className="description-text">My Products</div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
