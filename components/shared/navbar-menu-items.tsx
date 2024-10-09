"use client";
import { cn } from "@/lib/utils";
import { NavItemType } from "@/types/navitem";
import { CircleUserRound, LinkIcon, Users } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
  const searchParam = useSearchParams();
  const tabQueryString = searchParam.get("tab");
  const [selectedNavItem, setSelectedNavItem] = useState("");
  useEffect(() => {
    if (tabQueryString) {
      const findNavItem = navItems.find(
        (item) => item?.query?.tab === tabQueryString
      );
      if (findNavItem) {
        setSelectedNavItem(findNavItem.label);
      }
    } else {
      setSelectedNavItem(navItems[0].label);
    }
    console.log({ selectedNavItem });
  }, [tabQueryString, selectedNavItem]);

  return (
    <ul className="flex items-center justify-center ">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.label}>
            <Link
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
