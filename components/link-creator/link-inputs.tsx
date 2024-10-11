"use client";
import { useLinkCreatorContext } from "@/context/link-creator-context";
/* eslint-disable @next/next/no-img-element */
import { PlatformNameType } from "@/types/devlinks";

import { sortByKeyAsc } from "@/lib/utils";
import LinkInputItem from "./link-input-item";

export type PlatformSelectOptionType = {
  value: string;
  label: PlatformNameType;
  icon: string;
  platform_color: string;
};

export const allPlatformOptions: PlatformSelectOptionType[] = [
  {
    value: "github",
    label: "Github",
    icon: "https://cdn.simpleicons.org/github/FFFFFF",
    platform_color: "#181717",
  },
  {
    value: "linkedin",
    label: "Linkedin",
    icon: "https://cdn.simpleicons.org/linkedin/FFFFFF",
    platform_color: "#0A66C2",
  },
  {
    value: "youtube",
    label: "Youtube",
    icon: "https://cdn.simpleicons.org/youtube/FFFFFF",
    platform_color: "#ee3838",
  },
  {
    value: "twitter",
    label: "Twitter",
    icon: "https://cdn.simpleicons.org/x/FFFFFF",
    platform_color: "#000000",
  },
];

const LinkInputs = () => {
  const { devLinkProfile } = useLinkCreatorContext();
  const sortedDevLinks = sortByKeyAsc(devLinkProfile.links, "order");

  return (
    <div className="flex flex-col gap-3.5 pb-[70px]">
      {devLinkProfile?.links?.length > 0 ? (
        sortedDevLinks.map((link) => (
          <LinkInputItem key={link.id} link={link} />
        ))
      ) : (
        <p>No link added</p>
      )}
    </div>
  );
};

export default LinkInputs;
