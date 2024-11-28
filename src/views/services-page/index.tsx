'use client'

import {FC} from "react";
import {useTranslations} from "next-intl";

import {ServiceCard} from "@/components";
import {servicesData} from "@/constants";

export const ServicesPage: FC = () => {
  const t = useTranslations("services");

  return (
    <section className="page pt-16 container">
      <h2 className="heading mt-5 mb-8">{t("title")}</h2>
      <div className="grid-4 pb-6">
        {servicesData.map((item, idx) => (
          <ServiceCard key={idx + "-service"} {...item}/>
        ))}
      </div>
    </section>
  )
}