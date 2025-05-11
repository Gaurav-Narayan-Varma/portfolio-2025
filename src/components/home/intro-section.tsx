import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function IntroSection() {
  return (
    <div className="flex flex-col pt-18 px-12 pb-12 gap-8">
      <div className="flex flex-col gap-5">
        <div
          className={`${inter.className} text-4xl font-medium flex flex-col gap-1 -tracking-[0.72px] leading-[45px]`}
        >
          <div>Hey, I'm Gaurav.</div>
          <div>
            I build <span className="text-ds-gray-700">software.</span>
          </div>
        </div>
        <div className="text-base text-white/60 font-medium leading-7 -tracking-[0.16px]">
          With 3+ years of full stack engineering experience, I've built
          products that have impacted thousands of peoples' lives. I care deeply
          about about craft, product excellence, and the impact of my work.
          Currently, I'm a Founding Engineer at Clarity in San Francisco.
          Previously, I've built products at Yhangry and Fleek.
        </div>
      </div>
      <Link href="/contact" className="cursor-default">
        <div className="flex gap-1.5 items-center py-2 px-4 rounded-md bg-ds-gray-100 max-w-fit border border-white/[.12] hover:bg-ds-gray-800 transition-colors duration-150 group">
          <img
            src="/icons/mail.svg"
            alt="Mail"
            className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity duration-150"
          />
          <div className="text-[15px] font-medium text-white/80 group-hover:text-white transition-colors duration-150 leading-[26.25px] -tracking-[0.15px]">
            Contact me
          </div>
        </div>
      </Link>
    </div>
  );
}
