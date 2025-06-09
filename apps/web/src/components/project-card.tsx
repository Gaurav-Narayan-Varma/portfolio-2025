import { type Project } from "@/types/projectTypes";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
    return (
      <Link href={`/products/${project.slug}`} className="cursor-default flex flex-col rounded-lg border border-ds-gray-900 overflow-hidden group">
        <div className="aspect-auto overflow-hidden">
          <div className="transition-transform duration-300 scale-105 group-hover:scale-110 h-full w-full origin-center">
            <img
              src={project.overviewImage}
              alt={`${project.name} Overview`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="px-4 py-4.5 bg-[#1a1a2e] group-hover:bg-[#232347] transition-colors duration-150 h-[83.25px] flex items-center gap-4">
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
      </Link>
    );
  }
  