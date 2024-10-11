import { useLinkCreatorContext } from "@/context/link-creator-context";
import { cn } from "@/lib/utils";
import { LinkItemType } from "@/types/devlinks";
import { PlusIcon } from "lucide-react";
import LinkInputs, { allPlatformOptions } from "./link-inputs";

const LinkCreatorLinkEdit = () => {
  const { devLinkProfile, setDevLinkProfile } = useLinkCreatorContext();
  const handleAddLink = () => {
    if (devLinkProfile.links.length === 4) {
      return;
    }

    const unmatchedPlatformOptions = allPlatformOptions.filter(
      (option) =>
        !devLinkProfile.links.some((link) => link.platform === option.label)
    );
    // console.log({ unmatchedPlatformOptions });

    const firstPlatform = unmatchedPlatformOptions[0];

    const linkItem: LinkItemType = {
      platform: firstPlatform.label,
      link: "",
      order: devLinkProfile.links.length + 1,
      id: devLinkProfile.links.length + 1,
      platform_color: firstPlatform.platform_color,
      platform_logo: firstPlatform.icon,
    };

    setDevLinkProfile({
      ...devLinkProfile,
      links: [...devLinkProfile.links, linkItem],
    });
  };
  return (
    <div className="px-5 py-5 flex flex-col gap-4 h-full custom-scrollbar overflow-y-auto max-h-[calc(100vh-122px)] mobile-md:max-h-full pb-[75px]">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">Customize your links</h1>
        <p className="text-foreground/75 text-base font-medium">
          Add/edit/remove links below and then share your profile with the
          world!
        </p>
      </div>

      <div>
        <button
          onClick={handleAddLink}
          className="px-8 py-3 border border-primary text-primary font-semibold text-sm rounded-lg hover:text-primary-foreground hover:bg-primary ring-offset-background focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 transition-all flex items-center text-center gap-1.5 w-full justify-center"
        >
          <PlusIcon className="size-5" />
          Add new link
        </button>
      </div>

      <LinkInputs />

      <LinkCreatorSaveButton className="mobile-md:hidden" />
      <LinkCreatorSaveButton className="hidden container mobile-md:flex fixed left-0 w-full bg-white items-center justify-around z-50 pr-4 bottom-[64px] mobile-md:bottom-[44px]" />
    </div>
  );
};

export default LinkCreatorLinkEdit;

const LinkCreatorSaveButton = ({ className }: { className?: string }) => {
  const { devLinkProfile } = useLinkCreatorContext();

  const handleSaveLinks = () => {
    console.log("saved");
  };
  return (
    <>
      {devLinkProfile?.links?.length > 0 && (
        <div
          onClick={handleSaveLinks}
          className={cn(
            "flex justify-end mt-4 border-t border-border pt-4 absolute pb-4 right-0 left-0 bottom-0 bg-white pr-8",
            className
          )}
        >
          <button className="inline-flex items-center justify-center w-full px-7 py-3 font-semibold leading-6 text-primary-foreground bg-primary border border-transparent rounded-lg md:w-auto hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer text-sm">
            Save
          </button>
        </div>
      )}
    </>
  );
};
