"use client";

import LinkCreatorLinkEdit from "@/components/link-creator/link-creator-link-edit";
import LinkCreatorPreview from "@/components/link-creator/link-creator-preview";
import LinkCreatorProfileEdit from "@/components/link-creator/link-creator-profile-edit";

const DeveloperLinksProfile = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  // shared state

  return (
    <>
      <section className="main-layout__left-preview bg-background rounded-xl h-full w-full grid place-items-center">
        <LinkCreatorPreview />
      </section>

      <section className="main-layout__right-editor relative bg-background rounded-xl h-full w-full">
        {searchParams?.tab === "profile-edit" ? (
          <LinkCreatorProfileEdit />
        ) : (
          searchParams?.tab === "link-edit" && <LinkCreatorLinkEdit />
        )}
      </section>
    </>
  );
};

export default DeveloperLinksProfile;
