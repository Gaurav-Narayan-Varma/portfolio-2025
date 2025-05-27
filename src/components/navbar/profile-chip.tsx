import Link from "next/link";

export default function UserProfileCard({ setIsOpen }: { setIsOpen?: (isOpen: boolean) => void }) {
  return (
    <Link href="/" className="cursor-default" onClick={() => setIsOpen?.(false)}>
      <div className="flex gap-3.5">
        <div className="relative flex items-center justify-center w-10.5 h-10.5 overflow-hidden rounded-[10px]">
          <div className="absolute inset-0 rounded-[10px] border border-white/20" />
          <img src="/profile.jpeg" alt="profile" width={42} height={42} />
        </div>
        <div className="flex flex-col">
          <div className="text-white/80 text-[15px] font-medium leading-[26.25px] -tracking-[0.15px]">
            Gaurav Varma
          </div>
          <div className="text-white/60 text-sm font-medium leading-[16.8px] -tracking-[0.28px]">
            Full Stack Engineer
          </div>
        </div>
      </div>
    </Link>
  );
}
