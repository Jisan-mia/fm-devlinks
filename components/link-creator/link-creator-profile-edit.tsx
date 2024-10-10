import { ImageIcon } from "lucide-react";

const LinkCreatorProfileEdit = () => {
  return (
    <div className="px-5 py-5 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">Profile Details</h1>
        <p className="text-foreground/75 text-base font-medium">
          Add your details to create a personal touch to your profile
        </p>
      </div>

      <form className="flex flex-col gap-5">
        <div className="bg-[#FAFAFA] px-4 py-4 rounded-lg">
          <div className="block">
            <label
              className="flex items-center justify-between gap-1.5 mobile-md:flex-col mobile-md:justify-stretch mobile-md:items-start text-base font-medium"
              htmlFor="profile_picture"
            >
              <span className="basis-[40%] after:content-['*'] after:ml-0.5 after:text-red-500">
                Profile picture
              </span>

              <div className="basis-[60%] w-full flex items-center gap-2.5">
                <div className="h-44 w-44 rounded-lg bg-[#EEEEEE] relative flex items-center justify-center cursor-pointer">
                  <input
                    id="profile_picture"
                    required
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    className=" inset-0 absolute top-0 left-0 z-30 opacity-0 cursor-pointer"
                  />
                  <div className="absolute rounded-lg left-0 top-0 z-10 w-full h-full bg-[#000] bg-opacity-50"></div>
                  <div className="flex flex-col gap-1.5 items-center z-20">
                    <ImageIcon className="text-white size-8" />
                    <span className="text-white">Upload Image</span>
                  </div>
                </div>
                <p className="font-medium text-sm">
                  Use PNG, JPG, or JPEG format
                </p>
              </div>
              <div></div>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 bg-[#FAFAFA] px-4 py-4 rounded-lg">
          <div className="block">
            <label
              className="flex items-center justify-between gap-1.5 mobile-md:flex-col mobile-md:justify-stretch mobile-md:items-start text-base font-medium"
              htmlFor="first_name"
            >
              <span className="basis-[40%] after:content-['*'] after:ml-0.5 after:text-red-500">
                First Name
              </span>
              <input
                required
                type="text"
                id="first_name"
                className="w-full basis-[60%] px-3 py-2 bg-white border border-border rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/80

      "
              />
            </label>
          </div>
          <div className="block">
            <label
              htmlFor="last_name"
              className="flex items-center justify-between gap-1.5 mobile-md:flex-col mobile-md:justify-stretch mobile-md:items-start text-base font-medium"
            >
              <span className="basis-[40%] after:content-['*'] after:ml-0.5 after:text-red-500">
                Last Name
              </span>
              <input
                required
                type="text"
                id="last_name"
                className="w-full basis-[60%] px-3 py-2 bg-white border border-border rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/80

      "
              />
            </label>
          </div>
          <div className="block">
            <label
              htmlFor="email"
              className="flex items-center justify-between gap-1.5 mobile-md:flex-col mobile-md:justify-stretch mobile-md:items-start text-base font-medium"
            >
              <span className="basis-[40%]  after:content-['*'] after:ml-0.5 after:text-red-500">
                Email
              </span>
              <input
                required
                type="email"
                id="email"
                className="w-full basis-[60%] px-3 py-2 bg-white border border-border rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/80

      "
              />
            </label>
          </div>
        </div>

        <div className="flex justify-end mt-4 border-t border-border pt-4">
          <input
            value={"Submit"}
            type="submit"
            className="inline-flex items-center justify-center w-full px-7 py-3 text-base font-bold leading-6 text-primary-foreground bg-primary border border-transparent rounded-lg md:w-auto hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default LinkCreatorProfileEdit;
