import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

const LinkCreatorPreview = () => {
  return (
    <div className="w-full h-full grid place-items-center">
      {/* outer round */}
      <div className="w-full h-full border p-4 border-border max-h-[90%] relative max-w-[80%] rounded-[2rem]">
        {/* notch */}
        <div className="absolute top-[16px] bg-background left-1/2 w-[28%] h-[18px] translate-x-[-50%] border border-border border-t-0  rounded-b-md  "></div>
        {/* inner round */}
        <div className="border border-border rounded-[calc(2rem-1rem)] h-full custom-scrollbar overflow-auto">
          {/* inner content */}
          <div className="w-full h-full px-4 py-4 pt-8 flex flex-col gap-6 ">
            {/* profile detail */}
            <div className="flex flex-col gap-7 ">
              <div className="flex justify-center">
                <div className="h-24 w-24 rounded-full bg-[#EEEEEE]"></div>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <h2 className="h-5 w-[80%] rounded-full bg-[#eeeeee]"></h2>
                <p className="h-3 w-[30%] rounded-full bg-[#eeeeee]"></p>
              </div>
            </div>

            {/* links */}
            <div className="mt-4 flex flex-col gap-4">
              <Link
                href={""}
                className="flex justify-between items-center px-4 py-3 bg-black rounded-lg text-sm"
              >
                <p className="text-white text-sm font-normal flex item-center gap-2">
                  <Github className="text-white size-5" />
                  Github
                </p>
                <ArrowRight className="font-medium size-4 text-white" />
              </Link>
              <Link
                href={""}
                className="flex justify-between items-center px-4 py-3 bg-black rounded-lg text-sm"
              >
                <p className="text-white text-sm font-normal flex item-center gap-2">
                  <Github className="text-white size-5" />
                  Github
                </p>
                <ArrowRight className="font-medium size-4 text-white" />
              </Link>
              <Link
                href={""}
                className="flex justify-between items-center px-4 py-3 bg-black rounded-lg text-sm"
              >
                <p className="text-white text-sm font-normal flex item-center gap-2">
                  <Github className="text-white size-5" />
                  Github
                </p>
                <ArrowRight className="font-medium size-4 text-white" />
              </Link>
              <div className="flex h-[43.99px] justify-between items-center bg-[#eeeeee] rounded-lg text-sm"></div>

              {/* <div className="flex h-[43.99px] justify-between items-center bg-[#eeeeee] rounded-lg text-sm"></div> */}

              {/* <div className="flex h-[43.99px] justify-between items-center bg-[#eeeeee] rounded-lg text-sm"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkCreatorPreview;
