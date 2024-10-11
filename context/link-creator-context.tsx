"use client";
import { DevLinkProfileType } from "@/types/devlinks";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type LinkCreatorContextType = {
  devLinkProfile: DevLinkProfileType;
  setDevLinkProfile: React.Dispatch<React.SetStateAction<DevLinkProfileType>>;
};

export const devLinkProfileInitialState: DevLinkProfileType = {
  first_name: "",
  last_name: "",
  email: "",
  profile_picture: "",
  links: [],
};

export const LinkCreatorContext = createContext<LinkCreatorContextType | null>(
  null
);

export const useLinkCreatorContext = () => {
  const context = useContext(LinkCreatorContext);
  if (!context) {
    throw new Error("useLinkCreatorContext must be used withing the provider");
  }
  return context;
};

export const LinkCreatorProvider = ({ children }: PropsWithChildren) => {
  const [devLinkProfile, setDevLinkProfile] = useState(
    devLinkProfileInitialState
  );
  // const [devLinkProfile, dispatch] = useReducer(
  //   linkCreatorReducer,
  //   devLinkProfileInitialState
  // );

  return (
    <LinkCreatorContext.Provider value={{ devLinkProfile, setDevLinkProfile }}>
      {children}
    </LinkCreatorContext.Provider>
  );
};

// export type LinkCreatorReducerActionType = {
//   type: "save-profile" | "save-links";
//   payload?: DevLinkProfileType;
// };

// function linkCreatorReducer(
//   state: DevLinkProfileType,
//   action: LinkCreatorReducerActionType
// ) {
//   switch (action.type) {
//     case "save-profile":
//       return { ...state, ...action.payload };
//     case "save-links":
//       return { ...state, ...action.payload };

//     default:
//       throw Error("Unknown action: " + action.type);
//   }
// }
