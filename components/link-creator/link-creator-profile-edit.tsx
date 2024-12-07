import { useLinkCreatorContext } from "@/context/link-creator-context";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const LinkCreatorProfileEdit = () => {
  const router = useRouter();
  const { devLinkProfile, setDevLinkProfile } = useLinkCreatorContext();
  // const [img, setImg] = useState<string | StaticImport>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<string>("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setDevLinkProfile({
        ...devLinkProfile,
        profile_picture: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDevLinkProfile({
      ...devLinkProfile,
      [e.target.id]: e.target.value,
    });
  };

  const isValidForm = () => {
    let isValid = true;
    if (!devLinkProfile.first_name) {
      alert("First name cannot be empty");
      isValid = false;
    } else if (!devLinkProfile.last_name) {
      alert("Last name cannot be empty");
      isValid = false;
    } else if (!devLinkProfile.email) {
      alert("Email cannot be empty");
      isValid = false;
    }
    return isValid;
  };

  const handleSaveProfileDetail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    if (!isValidForm()) {
      return;
    }

    try {
      // perform form validation and request(post) to an api
      setSubmitStatus("Profile details saved successfully");
      router.push("/profile?tab=link-edit");
    } catch (e) {
      console.log(e);
      setSubmitStatus("Failed to save profile details");
    }
  };

  const addImageFallback = () => {
    setDevLinkProfile({
      ...devLinkProfile,
      profile_picture: "",
    });
  };

  return (
    <div
      className="px-5 py-5 flex flex-col gap-4 h-full custom-scrollbar overflow-y-auto max-h-[calc(100vh-122px)] mobile-md:max-h-full pb-[75px]"
      role="region"
      aria-label="Profile Editor"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">Profile Details</h1>
        <p className="text-foreground/75 text-base font-medium">
          Add your details to create a personal touch to your profile
        </p>
      </div>

      <form
        className="flex flex-col gap-5"
        onSubmit={(e) => handleSaveProfileDetail(e)}
        aria-label="Profile Details Form"
      >
        <div className="bg-[#FAFAFA] px-4 py-4 rounded-lg">
          <div className="block">
            <label
              className="flex items-center justify-between gap-1.5 mobile-md:flex-col mobile-md:justify-stretch mobile-md:items-start text-base font-medium"
              htmlFor="profile_picture"
              id="profile-picture-label"
            >
              <span className="basis-[40%]">
                Profile picture
                <span className="text-red-500" aria-hidden="true">
                  *
                </span>
                <span className="sr-only">(required)</span>
              </span>

              <div className="basis-[60%] w-full flex items-center gap-2.5">
                <div className="h-44 w-44 rounded-lg bg-[#EEEEEE] relative flex items-center justify-center cursor-pointer">
                  {devLinkProfile.profile_picture && (
                    <Image
                      src={devLinkProfile.profile_picture}
                      alt="Profile Picture"
                      width={176}
                      height={176}
                      className="w-full h-full object-cover absolute left-0 top-0"
                      onError={addImageFallback}
                    />
                  )}
                  <div className="flex flex-col gap-1.5 items-center z-20">
                    <ImageIcon className="invert-0 size-8" />
                    <span className="invert-0">
                      {devLinkProfile.profile_picture ? "Change" : "Upload"}{" "}
                      Image
                    </span>
                  </div>
                  <input
                    onChange={(e) => handleImageChange(e)}
                    id="profile_picture"
                    required
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    className="inset-0 absolute top-0 left-0 z-30 opacity-0 cursor-pointer"
                    aria-labelledby="profile-picture-label"
                    aria-required="true"
                  />
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
                onChange={(e) => handleInputChange(e)}
                value={devLinkProfile.first_name}
                required
                type="text"
                id="first_name"
                className="w-full basis-[60%] px-3 py-2 bg-white border border-border rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/80"
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
                onChange={(e) => handleInputChange(e)}
                value={devLinkProfile.last_name}
                required
                type="text"
                id="last_name"
                className="w-full basis-[60%] px-3 py-2 bg-white border border-border rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/80"
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
                onChange={(e) => handleInputChange(e)}
                value={devLinkProfile.email}
                required
                type="email"
                id="email"
                className="w-full basis-[60%] px-3 py-2 bg-white border border-border rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/80"
              />
            </label>
          </div>
        </div>

        <div className="flex justify-end mt-4 border-t border-border pt-4 absolute pb-4 right-0 left-0 bottom-0 bg-white pr-8 mobile-md:hidden ">
          <input
            value={"Save"}
            type="submit"
            className="inline-flex items-center justify-center w-full px-7 py-3 font-semibold leading-6 text-primary-foreground bg-primary border border-transparent rounded-lg md:w-auto hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer text-sm"
          />
        </div>

        <div className="hidden container mobile-md:flex fixed mobile-md:bottom-[44px] mobile-sm:bottom-[64px]  left-0 w-full bg-white items-center justify-around z-50 pr-4 mt-4 border-t border-border pt-4 pb-4 right-0">
          <input
            value={"Save"}
            type="submit"
            className="inline-flex items-center justify-center w-full px-7 py-3 font-semibold leading-6 text-primary-foreground bg-primary border border-transparent rounded-lg md:w-auto hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer text-sm"
          />
        </div>

        {submitStatus && (
          <div role="status" aria-live="polite" className="sr-only">
            {submitStatus}
          </div>
        )}

        {errors.form && (
          <div role="alert" className="text-red-500">
            {errors.form}
          </div>
        )}
      </form>
    </div>
  );
};

export default LinkCreatorProfileEdit;
