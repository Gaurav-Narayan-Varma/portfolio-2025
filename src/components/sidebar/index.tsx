"use client";

import { usePathname } from "next/navigation";
import NavItem from "./nav-item";
import UserProfileCard from "./profile-chip";

const mainNavItems = [
  {
    href: "/",
    icon: "/home.svg",
    label: "Home",
  },
  {
    href: "/projects",
    icon: "/projects.svg",
    label: "Projects",
  },
  {
    href: "/stack",
    icon: "/stack.svg",
    label: "Stack",
  },
];

const connectNavItems = [
  {
    href: "/contact",
    icon: "/contact.svg",
    label: "Contact",
  },
  {
    href: "https://www.linkedin.com/in/gaurav-varma-product-engineer/",
    icon: "/linkedin.svg",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Gaurav-Narayan-Varma",
    icon: "/github.svg",
    label: "GitHub",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-9 h-screen w-[260px] border-r border-ds-gray-300 pt-6 px-4.5">
      <UserProfileCard />

      {/* Main Navigation */}
      <div className="flex flex-col gap-1">
        {mainNavItems.map((item) => (
          <NavItem
            key={item.href}
            {...item}
            isActive={pathname === item.href}
          />
        ))}
      </div>

      {/* Connect Navigation */}
      <div className="flex flex-col gap-4">
        <div className="text-[13px] text-white/40 font-medium -tracking-[0.26px] leading-[13px] pl-2.5">
          Connect
        </div>
        <div className="flex flex-col gap-1">
          {connectNavItems.map((item) => (
            <NavItem
              key={item.href}
              {...item}
              isActive={pathname === item.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
