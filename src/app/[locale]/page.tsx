"use server"

import {IParams} from "@/types";
import {HomePage} from "@/views";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";

export async function generateMetadata({params}: { params: IParams }): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t('seo.title'),
    keywords: t('seo.keywords'),
    description: t('seo.description'),
    metadataBase: new URL(`https://stg-enterprise.com/${params.locale}`),
    alternates: {
      canonical: `https://stg-enterprise.com/${params.locale}`,
      languages: {
        en: "https://stg-enterprise.com",
        ru: "https://stg-enterprise.com/ru",
        uz: "https://stg-enterprise.com/uz",
      }
    },
  };
}

export default async function Home() {
  return <HomePage/>
}
