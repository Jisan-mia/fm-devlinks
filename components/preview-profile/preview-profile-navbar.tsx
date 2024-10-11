"use client";
import Link from "next/link";

const PreviewProfileNavbar = () => {
  const handleShareLink = async () => {
    await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_APP_URL}/1`);
    alert("Link copied");
  };
  return (
    <header className="main-layout__navbar container h-24 flex items-center">
      <nav className="h-16 w-full bg-background rounded-md flex items-center">
        <div className="flex items-center w-full px-3 justify-between">
          <div>
            <Link
              href={"/profile?tab=profile-edit"}
              className="px-8 py-3 border border-primary text-primary font-semibold text-sm rounded-lg hover:text-primary-foreground hover:bg-primary ring-offset-background focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 transition-all"
            >
              Back to Editor
            </Link>
          </div>
          <div>
            <button
              onClick={handleShareLink}
              className="px-8 py-3 font-semibold text-sm rounded-lg hover:text-primary-foreground ring-offset-background focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 transition-all text-primary-foreground bg-primary border border-transparent hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer"
            >
              Share Link
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default PreviewProfileNavbar;
