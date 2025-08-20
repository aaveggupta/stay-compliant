"use client";

import {
  Building2Icon,
  FileTextIcon,
  HomeIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import Logo from "./Logo";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Dashboard",
    href: "",
    icon: HomeIcon,
  },
  {
    label: "Licenses",
    href: "licenses",
    icon: FileTextIcon,
  },
  {
    label: "Organizations",
    href: "organizations",
    icon: Building2Icon,
  },
  {
    label: "Team",
    href: "team",
    icon: UsersIcon,
  },
  {
    label: "Settings",
    href: "settings",
    icon: SettingsIcon,
  },
];

const DesktopSidebar = () => {
  const pathname = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 0 && pathname.includes(route.href)
    ) || routes[0];

  return (
    <div className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate">
      <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
        <Logo />
      </div>
      <div className="p-2">
        <div className="text-xs text-muted-foreground px-2 py-1">
          License Management
        </div>
      </div>
      <div className="flex flex-col p-2">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={buttonVariants({
              variant:
                activeRoute.href === route.href
                  ? "sidebarActiveItem"
                  : "sidebarItem",
            })}
          >
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopSidebar;
