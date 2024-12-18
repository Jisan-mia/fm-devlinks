import Link from "next/link";
import { Suspense } from "react";
import LogoSvg from "./logo";
import NavbarMenuItems from "./navbar-menu-items";
import NavbarPreviewButton from "./navbar-preview-btn";

const Navbar = () => {
  return (
    <>
      <header className="main-layout__navbar h-24 flex items-center">
        <nav className="h-16 w-full bg-background rounded-md flex items-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <div className="flex items-center w-full px-3 justify-between">
            <div>
              <Link
                href="/"
                className="h-full w-full inline-block"
                aria-label="DevLinks Home"
              >
                <LogoSvg />
              </Link>
            </div>
            <Suspense>
              <NavbarMenuItems className="mobile-md:hidden" />
            </Suspense>
            <NavbarPreviewButton />
          </div>
        </nav>
      </header>
      <Suspense>
        <NavbarMenuItems className="hidden container mobile-md:flex fixed bottom-0 left-0 w-full  bg-white items-center justify-around z-50" />
      </Suspense>
    </>
  );
};

export default Navbar;
