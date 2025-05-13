import Link from "next/link";

export default function ContactMe() {
  return (
    <Link href="/contact" className="cursor-default max-w-fit">
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
  );
}
