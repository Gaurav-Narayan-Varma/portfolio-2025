import ContactMe from "./contact-me";

export default function IntroSection() {
  return (
    <div className="flex flex-col pt-18 px-12 pb-12 gap-8">
      <div className="flex flex-col gap-5">
        <div className="font-[Inter] text-4xl font-medium flex flex-col gap-1 -tracking-[0.72px] leading-[45px]">
          <div>Hey, I&apos;m Gaurav.</div>
          <div>
            I build <span className="text-ds-gray-700">software.</span>
          </div>
        </div>
        <div className="text-base text-white/60 font-medium leading-7 -tracking-[0.16px]">
          I&apos;ve built products from 0 to 1 that have impacted thousands of
          peoples&apos; lives. I care deeply about craft, product excellence,
          and the impact of my work. Currently, I build as a founding engineer
          at Clarity in San Francisco. Previously, I&apos;ve built products at
          Yhangry and Fleek.
        </div>
      </div>
      <ContactMe />
    </div>
  );
}
