"use client";
import { DevLinkProfileType } from "@/types/devlinks";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

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

function getInitialStoredState() {
  if (window?.localStorage !== undefined) {
    const profiles = localStorage.getItem("devLinkProfile");
    return profiles ? JSON.parse(profiles) : devLinkProfileInitialState;
  }
}

export const LinkCreatorProvider = ({ children }: PropsWithChildren) => {
  const [devLinkProfile, setDevLinkProfile] = useState(getInitialStoredState);
  // const [devLinkProfile, dispatch] = useReducer(
  //   linkCreatorReducer,
  //   devLinkProfileInitialState
  // );

  useEffect(() => {
    localStorage.setItem("devLinkProfile", JSON.stringify(devLinkProfile));
  }, [devLinkProfile]);

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
