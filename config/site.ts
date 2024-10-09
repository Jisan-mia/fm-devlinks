import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Dev links",
  author: "jisanmia",
  description: "Dev links - a frontend mentor challenge",
  keywords: ["developer", "frontend", "backend", "fullstack"],
  url: {
    base: `${process.env.NEXT_PUBLIC_APP_URL}`,
    author: "https://jisan.io",
  },
  links: {
    github: "https://github.com/Jisan-mia/fm-devlinks",
  },
  ogImage: `${process.env.NEXT_PUBLIC_APP_URL}/og.jpg`,
};
