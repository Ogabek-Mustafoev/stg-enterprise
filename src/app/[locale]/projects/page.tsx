"use server"

import {IParams} from "@/types";
import {ProjectsPage} from "@/views";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";

export async function generateMetadata({params}: { params: IParams }): Promise<Metadata> {
  const t = await getTranslations("projects");

  return {
    title: t('seo.title'),
    keywords: t('seo.keywords'),
    description: t('seo.description'),
    metadataBase: new URL(`https://stg-enterprise.com/${params.locale}/projects`),
    alternates: {
      canonical: `https://stg-enterprise.com/${params.locale}/projects`,
      languages: {
        en: "https://stg-enterprise.com/projects",
        ru: "https://stg-enterprise.com/ru/projects",
        uz: "https://stg-enterprise.com/uz/projects",
      }
    },
  };
}

export default async function Projects() {
  return <ProjectsPage/>
}