import { ExternalLink } from "lucide-react";
import Link from "next/link";
import ContactMe from "./contact-me";

export default function IntroSection() {
  return (
    <div className="flex flex-col pt-16 lg:pt-18 px-5 md:px-10 lg:px-12 pb-12 gap-8">
      <div className="flex flex-col gap-5">
        <div className="font-[Inter] text-4xl font-medium flex flex-col gap-1 -tracking-[0.72px] leading-[45px]">
          <div>Hey, I&apos;m Gaurav.</div>
          <div>
            I build <span className="text-ds-gray-700">software.</span>
          </div>
        </div>
        <div className="description-text">
          I&apos;ve built products from 0 to 1 that have impacted thousands of
          peoples&apos; lives. I care deeply about craft, product excellence,
          and the impact of my work. Currently, I build as a founding engineer
          at Clarity in San Francisco. Previously, I&apos;ve built products at
          Yhangry and Fleek.
        </div>
      </div>
      <div className="flex justify-between items-end">
        <ContactMe />
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
      <div className="description-text">
        Looking for quick insights? I designed{" "}
        <Link
          href="/chat"
          className="text-white/60 hover:text-white transition-all duration-300 underline"
        >
          GauravGPT
        </Link>{" "}
        to answer any question about me.
      </div>
    </div>
  );
}
