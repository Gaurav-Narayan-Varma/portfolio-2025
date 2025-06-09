import { ExternalLink } from "lucide-react";

export default function SectionOverview({
  title,
  subTitle1,
  subTitle2,
  paragraph1,
  paragraph2,
  paragraph3,
  link,
}: {
  title: string;
  subTitle1?: string;
  subTitle2?: string;
  paragraph1: string;
  paragraph2?: string;
  paragraph3?: string;
  link?: string;
}) {
  return (
    <div className="relative group backdrop-blur-sm bg-gradient-to-br from-white/5 to-transparent p-8 rounded-2xl border border-white/10">
      <div className="flex flex-col gap-10 md:flex-row md:gap-12">
        <div className="flex items-start md:flex-col gap-6 md:w-2/5 justify-between">
          <div className="flex flex-col gap-5">
            <h2 className="page-title after:content-[''] after:block after:w-16 after:h-[2px] after:bg-white/20 after:mt-4">
              {title}
            </h2>
            {subTitle1 && (
              <div className="text-white/60 text-sm font-medium tracking-wide uppercase">
                {subTitle1}
                {subTitle2 && <span className="block mt-1">{subTitle2}</span>}
              </div>
            )}
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-sm font-medium text-white/70 group-hover/link:text-white">
                View codebase
              </span>
              <ExternalLink className="w-4 h-4 opacity-60 group-hover/link:opacity-100 group-hover/link:transform group-hover/link:rotate-45 transition-all duration-300" />
            </a>
          )}
        </div>

        <div className="md:w-3/5">
          <div className="prose prose-invert opacity-80 hover:opacity-100 transition-opacity duration-300 space-y-6">
            <p className="text-base leading-relaxed">{paragraph1}</p>
            {paragraph2 && <p className="text-base leading-relaxed">{paragraph2}</p>}
            {paragraph3 && <p className="text-base leading-relaxed">{paragraph3}</p>}
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />
    </div>
  );
}
