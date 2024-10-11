import { useLinkCreatorContext } from "@/context/link-creator-context";
import ProfileCard from "../profile-card/profile-card";

const LinkCreatorPreview = () => {
  const { devLinkProfile } = useLinkCreatorContext();
  return (
    <div className="w-full h-full grid place-items-center">
      {/* outer round */}
      <div className="w-full h-full border p-4 border-border max-h-[90%] relative max-w-[80%] rounded-[2rem]">
        {/* notch */}
        <div className="absolute top-[16px] bg-background left-1/2 w-[28%] h-[18px] translate-x-[-50%] border border-border border-t-0  rounded-b-md  "></div>
        {/* inner round */}
        <div className="border border-border rounded-[calc(2rem-1rem)] h-full custom-scrollbar overflow-auto">
          <ProfileCard profile={devLinkProfile}>
            <ProfileCard.Detail>
              <ProfileCard.Image />
              <ProfileCard.Info />
            </ProfileCard.Detail>

            <ProfileCard.Links />
          </ProfileCard>
        </div>
      </div>
    </div>
  );
};

export default LinkCreatorPreview;
