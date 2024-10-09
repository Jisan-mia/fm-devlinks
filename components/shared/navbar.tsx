import Image from "next/image";
import Link from "next/link";
import NavbarMenuItems from "./navbar-menu-items";
import NavbarPreviewButton from "./navbar-preview-btn";

const Navbar = () => {
  return (
    <header className="main-layout__navbar h-24 flex items-center">
      <nav className="h-16 w-full bg-background rounded-md flex items-center">
        <div className="flex items-center w-full px-3 justify-between">
          <div>
            <div className="h-[30px] w-max">
              <Link href={"/"} className="h-full w-full">
                <Image
                  src={"/vercel.svg"}
                  alt="Kotha App logo image"
                  width={2000}
                  height={419}
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
          </div>
          <NavbarMenuItems />
          <NavbarPreviewButton />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
