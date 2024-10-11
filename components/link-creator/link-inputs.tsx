"use client";
import { useLinkCreatorContext } from "@/context/link-creator-context";
/* eslint-disable @next/next/no-img-element */
import { LinkItemType, PlatformNameType } from "@/types/devlinks";
import { PropsWithChildren, useState } from "react";

import Select, {
  components,
  GroupBase,
  OptionProps,
  SingleValueProps,
} from "react-select";

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

const CustomSelectOption = (
  props: JSX.IntrinsicAttributes &
    OptionProps<
      PlatformSelectOptionType,
      boolean,
      GroupBase<PlatformSelectOptionType>
    >
) => {
  let { icon } = props.data;
  icon = props.isSelected ? icon : icon.replace("FFFFFF", "777777");
  return (
    <components.Option {...props}>
      <div className="flex items-center gap-2">
        <img src={icon} className="h-5 w-5" alt="Platform logo" />
        {props.data.label}
      </div>
    </components.Option>
  );
};

const CustomSelectValue = (
  props: PropsWithChildren<
    SingleValueProps<
      PlatformSelectOptionType,
      boolean,
      GroupBase<PlatformSelectOptionType>
    >
  >
) => {
  return (
    <components.SingleValue {...props}>
      <img
        src={props.data.icon.replace("FFFFFF", "777777")}
        className="h-5 w-5 mr-2"
        alt="Platform logo"
      />
      {props.children}
    </components.SingleValue>
  );
};

const LinkInputs = () => {
  const { devLinkProfile } = useLinkCreatorContext();

  return (
    <div className="flex flex-col gap-3.5 pb-[70px]">
      {devLinkProfile?.links?.length > 0 ? (
        devLinkProfile.links.map((link) => (
          <LinkInputItem key={link.id} link={link} />
        ))
      ) : (
        <p>No link added</p>
      )}
    </div>
  );
};

export default LinkInputs;

const LinkInputItem = ({ link }: { link: LinkItemType }) => {
  const { devLinkProfile, setDevLinkProfile } = useLinkCreatorContext();

  const [selectedVal, setSelectedVal] = useState<PlatformSelectOptionType>({
    value: link.platform.toLowerCase(),
    label: link.platform,
    icon: link.platform_logo,
    platform_color: link.platform_color,
  });
  const handleChange = (value: PlatformSelectOptionType) => {
    setSelectedVal(value);

    const linkItem: LinkItemType = {
      platform: value.label,
      link: "",
      order: link.order,
      id: link.id,
      platform_color: value.platform_color,
      platform_logo: value.icon,
    };

    setDevLinkProfile({
      ...devLinkProfile,
      links: devLinkProfile.links.map((item) =>
        item.id === link.id ? linkItem : item
      ),
    });
  };

  const filterOnlyUnUsedPlatform = (platformItem: PlatformSelectOptionType) => {
    return devLinkProfile.links.some(
      (item) => item.platform === platformItem.label
    );
  };

  return (
    <div className="bg-[#FAFAFA] px-4 py-4 rounded-lg flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-base text-foreground/70">
          Link #{link.order}
        </h3>
        <button className="font-medium text-base text-foreground/80">
          Remove
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <label
          className="font-medium text-sm text-foreground/80"
          htmlFor="platform"
        >
          Platform
        </label>
        <Select
          value={selectedVal}
          // onChange={handleChange}
          onChange={(newVal) =>
            handleChange(newVal as PlatformSelectOptionType)
          }
          options={allPlatformOptions}
          isOptionDisabled={(option) => filterOnlyUnUsedPlatform(option)}
          id="platform"
          isSearchable={false}
          styles={{
            singleValue: (base) => ({
              ...base,
              display: "flex",
              alignItems: "center",
            }),
          }}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: "#6039FE",
            },
          })}
          components={{
            IndicatorSeparator: () => null,
            Option: CustomSelectOption,
            SingleValue: CustomSelectValue,
          }}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="link"
          className="font-medium text-sm text-foreground/80"
        >
          Link
        </label>
        <input
          required
          type="url"
          id="link"
          className="w-full basis-[60%] px-3 py-2 bg-white border border-border rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/80 "
        />
      </div>
    </div>
  );
};
