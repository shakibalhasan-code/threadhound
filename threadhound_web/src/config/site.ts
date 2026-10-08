export const site = {
  name: "Threadhound",
  company: "VensoftAI",
  url: "https://threadhound.vercel.app", // TODO: replace with final URL
  contactEmail: "work.shakib.ah@gmail.com",
  lastUpdated: "October 8, 2026",
};

export const seo = {
  title: "Threadhound: find Reddit conversations where you can help",
  description:
    "Threadhound helps SaaS founders find relevant Reddit questions and write helpful, disclosed replies that they review and post themselves.",
};

export const openGraph = {
  type: "website",
  siteName: site.name,
  description: seo.description,
  locale: "en_US",
} as const;

export const disclaimer =
  "Threadhound is not affiliated with or endorsed by Reddit, Inc.";
