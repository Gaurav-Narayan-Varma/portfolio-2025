import clsx from "clsx";
import Link from "next/link";

export default function NavItem({
  href,
  icon,
  label,
  isActive,
}: {
  href: string;
  icon: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "flex gap-2 p-2 cursor-default rounded-md  border border-transparent ",
        isActive
          ? "bg-ds-gray-200 border !border-ds-gray-400 opacity-90"
          : "opacity-60 hover:bg-ds-gray-100/60 hover:opacity-90"
      )}
    >
      <img src={`/icons/${icon}`} alt={label} width={16} height={16} />
      <div className="font-medium -tracking-[0.14px] leading-[21px] text-sm text-white">
        {label}
      </div>
    </Link>
  );
}
