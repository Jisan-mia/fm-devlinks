import Link from "next/link";

const NavbarPreviewButton = () => {
  return (
    <div>
      <Link
        href={"/preview"}
        className="px-8 py-3 border border-primary text-primary font-semibold text-sm rounded-lg hover:text-primary-foreground hover:bg-primary ring-offset-background focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 transition-all"
      >
        Preview
      </Link>
    </div>
  );
};

export default NavbarPreviewButton;
