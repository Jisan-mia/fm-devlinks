/* eslint-disable @next/next/no-img-element */
import { useProfileCardContext } from "@/context/profile-card-context";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ProfileCardLinks = () => {
  const { profile } = useProfileCardContext();

  return (
    <div
      className="mt-4 flex flex-col gap-4"
      role="list"
      aria-label="Social Links"
    >
      {profile?.links?.length ? (
        profile.links.map((link) => (
          <Link
            key={link.id}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex justify-between items-center px-4 py-3 rounded-lg text-sm focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none"
            )}
            style={{
              backgroundColor: `${link.platform_color}`,
            }}
            aria-label={`Visit ${link.platform} profile`}
          >
            <p className="text-white text-sm font-normal flex item-center gap-2">
              {/* <Github className="text-white size-5" /> */}
              <img
                src={link.platform_logo}
                alt={`${link.platform} Logo`}
                className="size-5"
              />

              {link.platform}
            </p>
            <ArrowRight className="font-medium size-4 text-white" />
          </Link>
        ))
      ) : (
        <>
          <div className="flex h-[43.99px] justify-between items-center bg-[#eeeeee] rounded-lg text-sm"></div>
          <div className="flex h-[43.99px] justify-between items-center bg-[#eeeeee] rounded-lg text-sm"></div>
          <div className="flex h-[43.99px] justify-between items-center bg-[#eeeeee] rounded-lg text-sm"></div>
        </>
      )}
    </div>
  );
};

export default ProfileCardLinks;
