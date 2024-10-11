import { useProfileCardContext } from "@/context/profile-card-context";
import Image from "next/image";

const ProfileCardImage = () => {
  const { profile } = useProfileCardContext();
  return (
    <div className="flex justify-center">
      {profile?.profile_picture ? (
        <div className="h-24 w-24 rounded-full">
          <Image
            src={profile.profile_picture}
            width={24}
            height={24}
            alt="Profile Picture"
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>
      ) : (
        <div className="h-24 w-24 rounded-full bg-[#EEEEEE]"></div>
      )}
    </div>
  );
};

export default ProfileCardImage;
