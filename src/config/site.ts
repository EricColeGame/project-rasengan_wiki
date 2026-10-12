export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Project Rasengan Wiki",
  shortName: "Project Rasengan",
  logoText: "PR",
  tagline: "Characters, Abilities, Guides & Updates",
  description: "Project Rasengan Wiki provides information about the Naruto universe project, including announcements, characters, abilities, guides, and upcoming content updates for fans.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://project-rasengan.wiki",
  supportEmail: "support@project-rasengan.wiki",
  gameUrl: "https://www.roblox.com/",
  heroVideoId: "TMZPtIoBV7g",
  social: {
    discord: "https://www.viz.com/press-releases/v/1006772",
    youtube: "https://www.youtube.com/@NARUTO_BORUTO_officialchannel",
  },
  locales: ["en", "ja", "es", "pt"],
  defaultLocale: "en",
};
