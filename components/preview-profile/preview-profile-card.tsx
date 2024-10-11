"use client";
import { cn } from "@/lib/utils";
import { DevLinkProfileType } from "@/types/devlinks";
import ProfileCard from "../profile-card/profile-card";

export const exampleProfile: DevLinkProfileType = {
  first_name: "Jisan",
  last_name: "Mia",
  email: "jisanmia47@gmail.com",
  profile_picture: "https://cdn.simpleicons.org/github/707070",
  links: [
    {
      platform: "Github",
      link: "https://github.com/Jisan-mia",
      order: 1,
      id: 1,
      platform_color: "#181717",
      platform_logo: "https://cdn.simpleicons.org/github/FFFFFF",
    },
    {
      platform: "Linkedin",
      link: "https://linkedin.com/in/jisan-mia",
      order: 2,
      id: 2,
      platform_color: "#0A66C2",
      platform_logo: "https://cdn.simpleicons.org/linkedin/FFFFFF",
    },
    {
      platform: "twitter",
      link: "https://x.com/jisanmia47",
      order: 3,
      id: 3,
      platform_color: "#000000",
      platform_logo: "https://cdn.simpleicons.org/x/FFFFFF",
    },
  ],
};

interface IPreviewProfileCardProps {
  className?: string;
}
const PreviewProfileCard = ({ className }: IPreviewProfileCardProps) => {
  return (
    <div className="w-full h-full container flex justify-center items-center">
      <div
        className={cn(
          "w-[400px]  bg-white rounded-2xl shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] min-h-[calc(100vh-180px)] mt-8 mobile-sm:w-full",
          className
        )}
      >
        <ProfileCard profile={exampleProfile}>
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

export default PreviewProfileCard;
