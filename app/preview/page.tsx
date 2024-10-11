import PreviewProfileCard from "@/components/preview-profile/preview-profile-card";
import PreviewProfileCover from "@/components/preview-profile/preview-profile-cover";
import PreviewProfileNavbar from "@/components/preview-profile/preview-profile-navbar";

const DeveloperProfilePreview = () => {
  return (
    <main className="relative">
      <PreviewProfileNavbar />
      <PreviewProfileCover />

      <PreviewProfileCard />
    </main>
  );
};

export default DeveloperProfilePreview;
