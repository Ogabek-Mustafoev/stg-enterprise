"use server"

import {logoShortImg} from "@/constants";
import {IParams} from "@/types";
import {ServicesPage} from "@/views";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";

export async function generateMetadata({params}: { params: IParams }): Promise<Metadata> {
  const t = await getTranslations("services");

  return {
    title: t('seo.title'),
    keywords: t('seo.keywords'),
    description: t('seo.description'),
    metadataBase: new URL(`https://stg-enterprise.com/${params.locale}/services`),
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
    alternates: {
      canonical: params.locale === 'en'
        ? "https://stg-enterprise.com/services"
        : `https://stg-enterprise.com/${params.locale}/services`,
      languages: {
        en: "https://stg-enterprise.com/services",
        ru: "https://stg-enterprise.com/ru/services",
        uz: "https://stg-enterprise.com/uz/services",
      }
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: params.locale === 'en'
        ? "https://stg-enterprise.com/services"
        : `https://stg-enterprise.com/${params.locale}/services`,
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

export default async function Services() {
  return <ServicesPage/>
}