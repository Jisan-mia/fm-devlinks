import PreviewProfileCover from "@/components/preview-profile/preview-profile-cover";
import PreviewProfileNavbar from "@/components/preview-profile/preview-profile-navbar";

const DeveloperProfilePreview = () => {
  return (
    <main className="relative">
      <PreviewProfileNavbar />
      <PreviewProfileCover />
    </main>
  );
};

export default DeveloperProfilePreview;
