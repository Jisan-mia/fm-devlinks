"use client";
/* eslint-disable @next/next/no-img-element */
import { LinkItemType } from "@/types/devlinks";
import { PropsWithChildren } from "react";

import Select, {
  components,
  GroupBase,
  OptionProps,
  SingleValueProps,
} from "react-select";

export type PlatformSelectOptionType = {
  value: string;
  label: string;
  icon: string;
};

const allPlatformOptions: PlatformSelectOptionType[] = [
  {
    value: "github",
    label: "Github",
    icon: "https://cdn.simpleicons.org/github/707070",
  },
  {
    value: "linkedin",
    label: "Linkedin",
    icon: "https://cdn.simpleicons.org/linkedin/707070",
  },
  {
    value: "youtube",
    label: "Youtube",
    icon: "https://cdn.simpleicons.org/youtube/707070",
  },
  {
    value: "twitter",
    label: "Twitter",
    icon: "https://cdn.simpleicons.org/x/707070",
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
  icon = props.isSelected ? icon.replace("707070", "FFFFFF") : icon;
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
      <img src={props.data.icon} className="h-5 w-5 mr-2" alt="Platform logo" />
      {props.children}
    </components.SingleValue>
  );
};
const allLinks: LinkItemType[] = [];

const LinkInputs = () => {
  return (
    <div className="flex flex-col gap-3.5">
      <LinkInputItem />
      <LinkInputItem />
    </div>
  );
};

export default LinkInputs;

const LinkInputItem = () => {
  return (
    <div className="bg-[#FAFAFA] px-4 py-4 rounded-lg flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-base text-foreground/70">Link #1</h3>
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
          options={allPlatformOptions}
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
