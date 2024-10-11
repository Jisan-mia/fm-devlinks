import { useProfileCardContext } from "@/context/profile-card-context";
import { cn } from "@/lib/utils";

const ProfileCardInfo = () => {
  const { profile } = useProfileCardContext();

  return (
    <div className="flex flex-col gap-2">
      <h2
        className={cn(
          "h-5 text-xl font-semibold w-[80%] rounded-full text-center bg-[#eeeeee]",
          {
            "bg-transparent h-auto w-full": profile.first_name,
          }
        )}
      >
        {profile?.first_name || ""} {profile?.last_name || ""}
      </h2>
      <p
        className={cn(
          "h-3 text-base font-medium w-[30%] text-center rounded-full bg-[#eeeeee]",
          {
            "bg-transparent h-auto w-full": profile.email,
          }
        )}
      >
        {profile?.email || ""}
      </p>
    </div>
  );
};

export default ProfileCardInfo;
