import { useProfileCardContext } from "@/context/profile-card-context";
import Image from "next/image";

const ProfileCardImage = () => {
  const { profile } = useProfileCardContext();
  const addImageFallback = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = "/logomain.png";
  };
  return (
    <div className="flex justify-center">
      {profile?.profile_picture ? (
        <div className="h-24 w-24 rounded-full relative ring-4 ring-primary ">
          <Image
            src={profile.profile_picture}
            fill
            alt="Profile Picture"
            className="w-full h-full object-cover rounded-full shadow-sm"
            unoptimized
            onError={(e) => addImageFallback(e)}
          />
        </div>
      ) : (
        <div className="h-24 w-24 rounded-full bg-[#EEEEEE]"></div>
      )}
    </div>
  );
};

export default ProfileCardImage;
