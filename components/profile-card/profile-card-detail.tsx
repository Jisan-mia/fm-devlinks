import { PropsWithChildren } from "react";

const ProfileCardDetail = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-7">{children}</div>;
};

export default ProfileCardDetail;
