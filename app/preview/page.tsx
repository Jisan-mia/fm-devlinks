import PreviewProfileCard from "@/components/preview-profile/preview-profile-card";
import PreviewProfileCover from "@/components/preview-profile/preview-profile-cover";
import PreviewProfileNavbar from "@/components/preview-profile/preview-profile-navbar";

const DeveloperProfilePreview = () => {
  return (
    <main className="relative">
      <PreviewProfileNavbar />
      <PreviewProfileCover />

      <PreviewProfileCard className="px-4" />
    </main>
  );
};

export default DeveloperProfilePreview;
