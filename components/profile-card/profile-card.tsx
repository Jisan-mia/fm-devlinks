import { ProfileCardContext } from "@/context/profile-card-context";
import { DevLinkProfileType } from "@/types/devlinks";
import { PropsWithChildren } from "react";
import ProfileCardDetail from "./profile-card-detail";
import ProfileCardImage from "./profile-card-image";
import ProfileCardInfo from "./profile-card-info";
import ProfileCardLinks from "./profile-card-links";

interface IProfileCardProps {
  profile: DevLinkProfileType;
}

const ProfileCard = ({
  profile,
  children,
}: PropsWithChildren<IProfileCardProps>) => {
  return (
    <ProfileCardContext.Provider value={{ profile }}>
      <div className="w-full h-full px-4 py-4 pt-8 flex flex-col gap-6 ">
        {children}
      </div>
    </ProfileCardContext.Provider>
  );
};

export default ProfileCard;

ProfileCard.Detail = ProfileCardDetail;

ProfileCard.Image = ProfileCardImage;

ProfileCard.Info = ProfileCardInfo;

ProfileCard.Links = ProfileCardLinks;
