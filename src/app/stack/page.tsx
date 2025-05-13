import { toolCategories } from "@/constants/stackConstants";
import { type Tool } from "@/types/stackTypes";

export default function Stack() {
  return (
    <div className="animate-fade-in px-12 py-18 flex flex-col gap-12 w-full max-w-[1000px]">
      <div className="flex flex-col gap-3">
        <div
          className="page-title"
        >
          My toolbox
        </div>
        <div className="h-[56.6016px] flex flex-col justify-start">
          <div className="page-subtitle">
            Tools and technologies I genuinely enjoy working with and
            confidently recommend.
          </div>
        </div>
      </div>
      {toolCategories.map((toolCategory) => (
        <div key={toolCategory.name}>
          <div className="text-white/60 font-medium text-base -tracking-[.16] leading-7 mb-7">
            {toolCategory.name}
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            {toolCategory.tools.map((tool) => (
              <Tool key={tool.name} tool={tool} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Tool({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.link}
      target="_blank"
      className="flex gap-4 w-full border border-ds-gray-600 bg-ds-gray-100 rounded-xl p-4 items-center transition-colors duration-300 hover:bg-ds-gray-600 cursor-default group"
    >
      <img
        src={tool.image}
        alt={tool.name}
        className="w-10 h-10 rounded-[10px]"
      />
      <div key={tool.name} className="flex flex-col gap-1 w-full">
        <div className="text-white/90 text-[15px] font-medium -tracking-[.15] leading-[22.5px]">
          {tool.name}
        </div>
        <div className="text-white/50 text-sm font-medium -tracking-[.14] leading-[21px]">
          {tool.tag}
        </div>
      </div>
      <img
        src="/icons/external.svg"
        alt="External Link"
        className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45"
      />
    </a>
  );
}
