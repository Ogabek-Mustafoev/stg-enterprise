"use server"

import {logoShortImg} from "@/constants";
import {IParams} from "@/types";
import {ProjectsPage} from "@/views";
import {Metadata, ResolvingMetadata} from "next";
import {getTranslations} from "next-intl/server";

export async function generateMetadata({params}: { params: IParams }, parent: ResolvingMetadata): Promise<Metadata> {
  const t = await getTranslations("projects");
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: t('seo.title'),
    keywords: t('seo.keywords'),
    description: t('seo.description'),
    metadataBase: new URL(`https://stg-enterprise.com/${params.locale}/projects`),
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
    alternates: {
      canonical: params.locale === 'en'
        ? "https://stg-enterprise.com/projects"
        : `https://stg-enterprise.com/${params.locale}/projects`,
      languages: {
        en: "https://stg-enterprise.com/projects",
        ru: "https://stg-enterprise.com/ru/projects",
        uz: "https://stg-enterprise.com/uz/projects",
      }
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: params.locale === 'en'
        ? "https://stg-enterprise.com/projects"
        : `https://stg-enterprise.com/${params.locale}/projects`,
      type: "website",
      siteName: "STG Enterprise",
      images: [
        {
          url: logoShortImg.src,
          width: 1200,
          height: 630,
          type: 'image/png',
          alt: "About STG Enterprise",
        },
        ...previousImages,
      ],
    },
    twitter: {
      title: t('seo.title'),
      description: t('seo.description'),
      card: "summary_large_image",
      site: "@stg_enterprise",
      creator: "@stg_enterprise",
      images: [
        {
          url: logoShortImg.src,
          width: 1200,
          height: 630,
          type: 'image/png',
          alt: "About STG Enterprise",
        },
        ...previousImages,
      ],
    },
  };
}

export default async function Projects() {
  return <ProjectsPage/>
}