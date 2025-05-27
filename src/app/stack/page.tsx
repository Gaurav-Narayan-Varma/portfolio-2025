import { toolCategories } from "@/constants/stackConstants";
import { type Tool } from "@/types/stackTypes";
import cx from "clsx";

export default function Stack() {
  return (
    <div className="animate-fade-in px-5 md:px-10 lg:px-12 pt-[58px] lg:pt-18 pb-18 flex flex-col gap-12 w-full max-w-[1000px] xl:max-w-[1600px]">
      <div className="flex flex-col gap-3">
        <div className="page-title">My toolbox</div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5">
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
        className={cx(
          "w-10 h-10 rounded-[10px] flex-shrink-0",
          tool.bgWhite && "bg-white"
        )}
      />
      <div key={tool.name} className="flex flex-col gap-1 min-w-0 flex-1">
        <div className="text-white/90 text-[15px] font-medium -tracking-[.15] leading-[22.5px]">
          {tool.name}
        </div>
        <div className="text-white/50 text-sm font-medium -tracking-[.14] leading-[21px] truncate">
          {tool.tag}
        </div>
      </div>
      <img
        src="/icons/external.svg"
        alt="External Link"
        className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45 flex-shrink-0"
      />
    </a>
  );
}
