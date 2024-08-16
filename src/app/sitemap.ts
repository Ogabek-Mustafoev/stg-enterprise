import {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://stg-enterprise.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          en: "https://stg-enterprise.com",
          ru: "https://stg-enterprise.com/ru",
          uz: "https://stg-enterprise.com/uz",
        },
      },
    },
    {
      url: "https://stg-enterprise.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: "https://stg-enterprise.com/about",
          ru: "https://stg-enterprise.com/ru/about",
          uz: "https://stg-enterprise.com/uz/about",
        },
      },
    },
    {
      url: "https://stg-enterprise.com/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: "https://stg-enterprise.com/services",
          ru: "https://stg-enterprise.com/ru/services",
          uz: "https://stg-enterprise.com/uz/services",
        },
      },
    },
    {
      url: "https://stg-enterprise.com/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: "https://stg-enterprise.com/projects",
          ru: "https://stg-enterprise.com/ru/projects",
          uz: "https://stg-enterprise.com/uz/projects",
        },
      },
    },
  ];
}
