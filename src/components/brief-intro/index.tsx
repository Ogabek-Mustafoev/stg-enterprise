"use client"

import {BannerContent, MotionEl} from "@/components";
import {aboutImg, aboutUsData} from "@/constants";
import {Button, Tab, Tabs} from "@nextui-org/react";
import parse from 'html-react-parser';
import {useTranslations} from "next-intl";
import {FC} from "react";

interface IBriefIntro {
  handleClick: () => void;
}

export const BriefIntro: FC<IBriefIntro> = ({handleClick}) => {
  const t = useTranslations('about')


  return (
    <BannerContent
      isRowRevers
      wrapperClass="py-16"
      image={{src: aboutImg, alt: "about"}}
    >
      <MotionEl direction="left" className="w-full order-1 md:w-1/2 flex flex-col">
        <h2 className="heading mb-4">{t('title')}</h2>
        <Tabs
          size="lg"
          className="grid"
          variant="underlined"
          items={aboutUsData}
          aria-label="Dynamic tabs"
          classNames={{
            cursor: "w-full",
            tab: "font-semibold text-sm sm:text-xl -mb-1.5",
            tabList: "border-b-2 overflow-visible w-full max-w-lg",
            panel: "flex flex-col gap-2.5 font-medium text-lg sm:text-xl leading-snug"
          }}
        >
          {({image, html, title}) => (
            <Tab
              key={title}
              title={t(title)}
            >
              {parse(t.raw(html))}
            </Tab>
          )}
        </Tabs>
        <Button
          radius="full"
          type="button"
          aria-label="connect with us"
          color="primary"
          onClick={handleClick}
          className="w-max text-white text-xl py-7 px-9 mt-auto font-light"
        >
          {t('connect')}
        </Button>
      </MotionEl>
    </BannerContent>
  )
}