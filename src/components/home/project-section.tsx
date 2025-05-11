import Link from "next/link";

type Project = {
  name: string;
  description: string;
  overviewImage: string;
  logoImage: string;
};

const projects: Project[] = [
  {
    name: "Clarity",
    description: "Turn meetings into momentum",
    overviewImage: "/clarity/clarity-overview.png",
    logoImage: "/clarity/clarity-logo.jpeg",
  },
  {
    name: "Yhangry",
    description: "Bringing restaurant magic home",
    overviewImage: "/clarity/clarity-overview.png",
    logoImage: "/yhangry/yhangry-logo.jpeg",
  },
];

export default function ProjectSection() {
  return (
    <div className="flex flex-col p-12 gap-8">
      <div className="flex justify-between">
        <div className="text-white/60 text-base -tracking-[0.16] leading-[28px]">
          Featured work
        </div>
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
      <div className="flex gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-lg border border-ds-gray-900 overflow-hidden group">
      <div className="aspect-auto overflow-hidden">
        <div className="transition-transform duration-300 scale-105 group-hover:scale-110 h-full w-full origin-center">
          <img
            src={project.overviewImage}
            alt={`${project.name} Overview`}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="px-4 py-4.5 bg-ds-gray-100 group-hover:bg-ds-gray-800 transition-colors duration-150 h-[83.25px] flex items-center gap-4">
        <img
          src={project.logoImage}
          alt={`${project.name} Logo`}
          className="w-10.5 h-10.5 rounded-lg"
        />
        <div>
          <div className="leading-[26.25px] -tracking-[0.15px] text-[15px] font-medium text-white">
            {project.name}
          </div>
          <div className="leading-[21px] -tracking-[0.14px] text-sm font-medium text-white/40">
            {project.description}
          </div>
        </div>
      </div>
    </div>
  );
}
