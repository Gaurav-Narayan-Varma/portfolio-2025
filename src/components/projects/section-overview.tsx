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
    <div className="flex gap-2.5">
      <div className="flex flex-col gap-3 w-1/2 justify-between">
        <div>
          <div className="page-title">{title}</div>
          <div className="text-white/60 text-sm font-medium -tracking-[0.14] leading-[24.5px]">
            {subTitle1} <br /> {subTitle2}
          </div>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-white/60 text-sm font-medium -tracking-[0.14] leading-[24.5px] flex items-center gap-1 hover:text-white transition-all duration-300"
          >
            View Codebase

            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
      <div className="w-1/2 description-text">
        {paragraph1}
        {paragraph2 && (
          <>
            <br />
            <br />
            {paragraph2}
          </>
        )}
        {paragraph3 && (
          <>
            <br />
            <br />
            {paragraph3}
          </>
        )}
      </div>
    </div>
  );
}
