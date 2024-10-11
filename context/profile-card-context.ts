import { DevLinkProfileType } from "@/types/devlinks";
import { createContext, useContext } from "react";

type ProfileCardContextType = {
  profile: DevLinkProfileType;
};

export const ProfileCardContext = createContext<ProfileCardContextType | null>(
  null
);

export const useProfileCardContext = function () {
  const context = useContext(ProfileCardContext);
  if (!context) {
    throw new Error(
      "useProfileCardContext must be used withing ProfileCard component"
    );
  }

  return context;
};
