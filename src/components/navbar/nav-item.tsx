import clsx from "clsx";
import Link from "next/link";

export default function NavItem({
  href,
  icon,
  label,
  isActive,
  isExternalLink,
}: {
  href: string;
  icon: string;
  label: string;
  isActive: boolean;
  isExternalLink?: boolean;
}) {
  return (
    <Link
      href={href}
      target={isExternalLink ? "_blank" : undefined}
      className={clsx(
        "flex gap-2 p-2 cursor-default rounded-md  border border-transparent h-10 group",
        isActive
          ? "bg-ds-gray-200 border !border-ds-gray-400 opacity-90 transition-all duration-150"
          : "opacity-60 hover:bg-ds-gray-100 hover:opacity-90"
      )}
    >
      <img src={`/icons/${icon}`} alt={label} width={16} height={16} />
      <div className="font-medium -tracking-[0.14px] leading-[21px] text-sm text-white">
        {label}
      </div>
      {isExternalLink && (
        <img
          src="/icons/external.svg"
          alt="External Link"
          className="ml-auto invisible group-hover:visible"
          width={16}
          height={16}
        />
      )}
    </Link>
  );
}
