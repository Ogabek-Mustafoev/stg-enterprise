"use server"

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
    alternates: {
      canonical: `https://stg-enterprise.com/${params.locale}/about`,
      languages: {
        en: "https://stg-enterprise.com/about",
        ru: "https://stg-enterprise.com/ru/about",
        uz: "https://stg-enterprise.com/uz/about",
      }
    },
  };
}

export default async function About() {
  return <AboutPage/>
}