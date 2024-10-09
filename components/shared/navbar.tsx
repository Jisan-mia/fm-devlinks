import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="h-24 flex items-center">
      <nav className="h-16 w-full bg-background border border-border rounded-md flex items-center">
        <div className="grid items-center w-full px-1.5 justify-between">
          <div>
            <div className="h-[30px] w-max">
              <Link href={"/"} className="h-full w-full">
                <Image
                  src={"/vercel.svg"}
                  alt="Kotha App logo image"
                  width={2000}
                  height={419}
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
