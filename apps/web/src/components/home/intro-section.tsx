import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function IntroSection() {
  return (
    <div className="flex flex-col pt-16 lg:pt-18 px-5 md:px-10 lg:px-12 pb-12 gap-8">
      <div className="flex flex-col gap-5">
        <div className="font-[Inter] text-4xl font-medium flex flex-col gap-1 -tracking-[0.72px] leading-[45px]">
          I&apos;m Gaurav, and I create software that matters.
        </div>
        <div className="description-text">
          Throughout my career, I&apos;ve taken multiple products from concept to
          launch, touching the lives of thousands. My work is driven by a
          commitment to craftsmanship and delivering exceptional products that
          make a difference. I&apos;m currently working as a founding engineer at
          Clarity in San Francisco, with prior experience building products at
          Yhangry and Fleek.
        </div>
      </div>
      <div className="description-text">
        Want to know more? I designed{" "}
        <Link
          href="/chat"
          className="text-white/60 hover:text-white transition-all duration-300 underline"
        >
          GauravGPT
        </Link>{" "}
        to answer any question about me.
      </div>
      <div className="flex justify-between items-end">
        <a
          href="https://github.com/Gaurav-Narayan-Varma/portfolio-2025"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit text-white/60 text-sm font-medium -tracking-[0.14] leading-[24.5px] flex items-center gap-1 hover:text-white transition-all duration-300"
        >
          Portfolio codebase
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
