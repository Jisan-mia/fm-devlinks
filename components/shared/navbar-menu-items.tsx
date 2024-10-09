"use client";
import { cn } from "@/lib/utils";
import { CircleUserRound, LinkIcon, LucideIcon, Users } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavItemType = {
  label: string;
  link: string;
  query: {
    [key: string]: string;
  };
  icon: LucideIcon;
};

const navItems: NavItemType[] = [
  {
    label: "Profile Details",
    query: {
      tab: "profile-edit",
    },
    link: "",
    icon: CircleUserRound,
  },
  {
    label: "Links",
    query: {
      tab: "link-edit",
    },
    link: "",
    icon: LinkIcon,
  },
  {
    label: "More Profile",
    link: "/more-profiles",
    query: {},
    icon: Users,
  },
];

const NavbarMenuItems = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(navItems[0].label);
  useEffect(() => {
    console.log({ selectedNavItem });
  }, [selectedNavItem]);

  return (
    <ul className="flex items-center justify-center ">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.label}>
            <Link
              onClick={() => {
                setSelectedNavItem(item.label);
              }}
              className={cn(
                "flex items-center gap-2 px-5 py-3  font-semibold text-sm hover:text-primary hover:bg-[#EFECFF] rounded-lg transition-all text-[#747474] ",
                {
                  "text-primary bg-[#EFECFF]": selectedNavItem === item.label,
                }
              )}
              href={{
                pathname: `${item.link}`,
                query: item.query,
              }}
            >
              <Icon className="size-5" />
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarMenuItems;
