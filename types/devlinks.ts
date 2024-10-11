export type LinkItemType = {
  platform: string;
  link: string;
  order: number;
  id: number;
  platform_color?: string;
  platform_logo?: string;
};

export type DevLinkProfileType = {
  first_name: string;
  last_name: string;
  email: string;
  profile_picture: string;
  links: LinkItemType[];
};