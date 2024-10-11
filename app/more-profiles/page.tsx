import IndividualProfileItem from "@/components/preview-profile/individual-profile-item";
import Navbar from "@/components/shared/navbar";
import { DevLinkProfileType } from "@/types/devlinks";
import { promises as fs } from "fs";

const MoreProfiles = async () => {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data: DevLinkProfileType[] = JSON.parse(file);

  return (
    <>
      <main className="container">
        <Navbar />
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {data.map((profile, idx) => (
            <IndividualProfileItem key={idx} profileData={profile} />
          ))}
        </div>
      </main>
    </>
  );
};

export default MoreProfiles;
