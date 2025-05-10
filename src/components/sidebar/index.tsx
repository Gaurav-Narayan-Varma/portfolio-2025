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
    <div className="flex flex-col justify-between h-screen w-[260px] border-r border-ds-gray-300 pt-6 pb-5 px-4.5">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-9">
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
                isExternalLink={item.href.startsWith("http")}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Resume Download */}
      <a
        href="/Gaurav-Varma-Resume-2025.pdf"
        download
        className="bg-ds-gray-500 cursor-default border border-white/[15%] rounded-[5px] h-10.5 flex items-center justify-center gap-2 opacity-80 hover:opacity-100 hover:bg-ds-gray-600 transition-all duration-150 shadow-[inset_0px_0.557334px_1.672px_-1.125px_rgba(255,255,255,0.07),_inset_0px_1.69015px_5.07046px_-2.25px_rgba(255,255,255,0.063),_inset_0px_4.46786px_13.4036px_-3.375px_rgba(255,255,255,0.05),_inset_0px_14px_42px_-4.5px_rgba(255,255,255,0.008)]"
      >
        <img src="/icons/download.svg" alt="Download" className="h-5 w-5" />
        <div className="-tracking-[0.14px] leading-[21px] font-medium text-sm">
          Resume
        </div>
      </a>
    </div>
  );
}
