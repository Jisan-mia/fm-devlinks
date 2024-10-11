"use client";
import { cn } from "@/lib/utils";
import { DevLinkProfileType } from "@/types/devlinks";
import ProfileCard from "../profile-card/profile-card";

interface IPreviewProfileCardProps {
  className?: string;
  profileData: DevLinkProfileType;
}
const IndividualProfile = ({
  className,
  profileData,
}: IPreviewProfileCardProps) => {
  return (
    <div className="w-full h-full container flex justify-center items-center">
      <div
        className={cn(
          "w-[400px]  bg-white rounded-2xl shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] min-h-[calc(100vh-180px)] mobile-sm:w-full mt-24 px-4",
          className
        )}
      >
        <ProfileCard profile={profileData}>
          <ProfileCard.Detail>
            <ProfileCard.Image />
            <ProfileCard.Info />
          </ProfileCard.Detail>

          <ProfileCard.Links />
        </ProfileCard>
      </div>
    </div>
  );
};

export default IndividualProfile;
