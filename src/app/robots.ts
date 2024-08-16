import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    host: "stg-enterprise.com",
    sitemap: "https://stg-enterprise.com/sitemap.xml",
  };
}
