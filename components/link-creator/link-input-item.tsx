/* eslint-disable @next/next/no-img-element */
import { LinkItemType } from "@/types/devlinks";
import { ChangeEvent, PropsWithChildren, useState } from "react";

import { useLinkCreatorContext } from "@/context/link-creator-context";
import Select, {
  components,
  GroupBase,
  OptionProps,
  SingleValueProps,
} from "react-select";
import { allPlatformOptions, PlatformSelectOptionType } from "./link-inputs";

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

  const handleLinkInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const linkItem = {
      ...link,
      link: e.target.value,
    };

    setDevLinkProfile({
      ...devLinkProfile,
      links: devLinkProfile.links.map((item) =>
        item.id === link.id ? linkItem : item
      ),
    });
  };

  const handleRemoveLink = () => {
    const filteredLinks = devLinkProfile.links.filter(
      (item) => item.id !== link.id
    );
    const reorderedLinks = filteredLinks.map((item, idx) => ({
      ...item,
      id: idx + 1,
      order: idx + 1,
    }));
    setDevLinkProfile({
      ...devLinkProfile,
      links: reorderedLinks,
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
        <button
          onClick={handleRemoveLink}
          className="font-medium text-base text-foreground/80"
        >
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
          htmlFor={`${link.platform}`}
          className="font-medium text-sm text-foreground/80"
        >
          Link
        </label>
        <input
          onChange={(e) => handleLinkInputChange(e)}
          required
          type="url"
          id={`${link.platform}`}
          value={link.link}
          className="w-full basis-[60%] px-3 py-2 bg-white border border-border rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/80 "
        />
      </div>
    </div>
  );
};

export default LinkInputItem;
