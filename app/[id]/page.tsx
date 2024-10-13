import { promises as fs } from "fs";

import IndividualProfile from "@/components/preview-profile/individual-profile";
import PreviewProfileCover from "@/components/preview-profile/preview-profile-cover";

const DevLinkIndividualProfile = async () => {
  const file = await fs.readFile("app/data.json", "utf8");
  const data = JSON.parse(file);
  const firstProfile = data[0];
  console.log(firstProfile);
  return (
    <main className="relative">
      <PreviewProfileCover />

      <IndividualProfile profileData={firstProfile} />
    </main>
  );
};

export default DevLinkIndividualProfile;
