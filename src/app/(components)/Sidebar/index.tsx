"use client";

import React, { use, useState } from "react";
import Image from "next/image";
import ActionLogo from "@/../public/action-logo-icon.svg";
import { Icon, LockIcon, LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import Link from "next/link";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const sidebarClassNames = `fixed flex-col h-[100%] justify-between shadow-xl
      transition-all duration-300 h-full z-40 dark:bg-black-bg overflow-y-auto bg-white
      w-64 
      `;
  return (
    <div className={sidebarClassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="dark:bg-black-bg z-50 flex min-h-[58px] w-64 items-center justify-start gap-3 bg-white px-6 pt-3">
          <Image src={ActionLogo} alt="Action Logo" width={20} height={20} />
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            Action
          </div>
        </div>
        {/* TEAM */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-dark-bg">
          <Image
            className="rounded-md"
            src="/logo.png"
            alt="Logo"
            width={30}
            height={30}
          />
          <div>
            <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
              FullStack dev
            </h3>
            <div className="mt-1 flex items-start gap-1.5">
              <LockIcon className="mt-[0.07rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
              <p className="text-xs text-gray-500">Private</p>
            </div>
          </div>
        </div>
        {/* NAVBAR LINKS! */}
      </div>
    </div>
  );
};

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}
const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");
  const screenWidth = window.innerWidth;

  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  return <Link href={href} className="w-full"></Link>;
};
export default Sidebar;
