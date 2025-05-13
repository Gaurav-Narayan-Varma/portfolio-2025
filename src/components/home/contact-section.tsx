import ContactMe from "./contact-me";

export default function ContactSection() {
  return (
    <div className="flex flex-col px-12 pt-12 pb-18 gap-8">
      <div className="flex flex-col gap-5">
        <div className="font-[Inter] text-white font-medium text-4xl -tracking-[.72] leading-[45px]">
          Want to work together?
        </div>
        <div className="font-medium text-base -tracking-[.16] leading-7 text-white/60">
          Reach out, let&apos;s chat.
        </div>
      </div>
      <ContactMe />
    </div>
  );
}
