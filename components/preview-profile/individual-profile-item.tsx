"use client";

import { DevLinkProfileType } from "@/types/devlinks";
import ProfileCard from "../profile-card/profile-card";

const IndividualProfileItem = ({
  profileData,
}: {
  profileData: DevLinkProfileType;
}) => {
  return (
    <>
      <div
        className={
          "w-full bg-white rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  px-4 py-8"
        }
      >
        <ProfileCard profile={profileData}>
          <ProfileCard.Detail>
            <ProfileCard.Image />
            <ProfileCard.Info />
          </ProfileCard.Detail>

          <ProfileCard.Links />
        </ProfileCard>
      </div>
    </>
  );
};

export default IndividualProfileItem;
