"use server"

import {logoShortImg} from "@/constants";
import {IParams} from "@/types";
import {AboutPage} from "@/views";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";

export async function generateMetadata({params}: { params: IParams }): Promise<Metadata> {
  const t = await getTranslations("about");

  return {
    title: t('seo.title'),
    keywords: t('seo.keywords'),
    description: t('seo.description'),
    metadataBase: new URL(`https://stg-enterprise.com/${params.locale}/about`),
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
    alternates: {
      canonical: params.locale === 'en'
        ? "https://stg-enterprise.com/about"
        : `https://stg-enterprise.com/${params.locale}/about`,
      languages: {
        en: "https://stg-enterprise.com/about",
        ru: "https://stg-enterprise.com/ru/about",
        uz: "https://stg-enterprise.com/uz/about",
      }
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: params.locale === 'en'
        ? "https://stg-enterprise.com/about"
        : `https://stg-enterprise.com/${params.locale}/about`,
      type: "website",
      siteName: "STG Enterprise",
      images: [
        {
          url: logoShortImg.src,
          width: 1200,
          height: 630,
          alt: "About STG Enterprise",
        },
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
          alt: "About STG Enterprise",
        },
      ],
    },
  };
}

export default async function About() {
  return <AboutPage/>
}