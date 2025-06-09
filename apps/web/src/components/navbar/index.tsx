"use client";

import { Home, Mail, MessageCircle, Package, Wrench } from "lucide-react";
import { usePathname } from "next/navigation";
import NavItem from "./nav-item";
import UserProfileCard from "./profile-chip";

export const mainNavItems = [
  {
    href: "/",
    icon: <Home className="w-4 h-4 opacity-80" />,
    label: "Home",
  },
  {
    href: "/chat",
    icon: <MessageCircle className="w-4 h-4 opacity-80" />,
    label: "GauravGPT",
  },
  {
    href: "/products",
    icon: <Package className="w-4 h-4 opacity-80" />,
    label: "Products",
  },
  {
    href: "/tools",
    icon: <Wrench className="w-4 h-4 opacity-80" />,
    label: "Tools",
  },
  {
    href: "/contact",
    icon: <Mail className="w-4 h-4 opacity-80" />,
    label: "Contact",
  },
  {
    href: "https://www.linkedin.com/in/gaurav-varma-fullstack-engineer/",
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
    <div className="hidden lg:flex top-0 flex-col h-screen fixed justify-between min-w-[260px] border-r border-ds-gray-300 pt-6 pb-5 px-4.5">
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
      </div>
      {/* Creates and triggers a temporary download link */}
      {/* This approach prevents the download URL from showing in the browser's status bar on hover */}
      <button
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/Gaurav-Varma-Resume-2025.pdf";
          link.download = "Gaurav-Varma-Resume-2025.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        className="bg-[#1a1a2e] cursor-default border border-[#232347] rounded-[5px] h-10.5 flex items-center justify-center gap-2 opacity-80 hover:opacity-100 hover:bg-[#232347] transition-all duration-150 shadow-[inset_0px_0.557334px_1.672px_-1.125px_rgba(255,255,255,0.07),_inset_0px_1.69015px_5.07046px_-2.25px_rgba(255,255,255,0.063),_inset_0px_4.46786px_13.4036px_-3.375px_rgba(255,255,255,0.05),_inset_0px_14px_42px_-4.5px_rgba(255,255,255,0.008)] active:bg-ds-gray-200"
      >
        <img src="/icons/download.svg" alt="Download" className="h-5 w-5" />
        <div className="-tracking-[0.14px] leading-[21px] font-medium text-sm">
          Resume
        </div>
      </button>
    </div>
  );
}
