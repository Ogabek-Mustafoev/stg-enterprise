"use client"

import {Image, Link, MotionEl} from "@/components";
import {TService} from "@/types";
import {Button, Card, CardBody, CardHeader} from "@nextui-org/react";
import {useTranslations} from "next-intl";
import {FC} from "react";

interface IServiceCard extends TService {
  delay?: number;
}

export const ServiceCard: FC<IServiceCard> = ({title, url, delay, image, html}) => {
  const t = useTranslations('services');

  return (
    <MotionEl delay={delay} scale={.8}>
      <Card shadow="sm" className="group h-full bg-light sm:p-2">
        <CardHeader className="z-0">
          <Image wrapperClass="rounded-xl !w-28 !h-28" src={image} alt={title}/>
        </CardHeader>
        <CardBody className="flex flex-col gap-1">
          <h5 className="text-2xl font-semibold">{title}</h5>
          <p className="font-medium mb-2 line-clamp-5">
            {t(html)}
          </p>
          <Button
            type="button"
            aria-label="book"
            radius="full"
            as={Link}
            href={url}
            color="primary"
            className="max-w-40 px-9 text-white mt-auto font-light text-xl"
          >
            {t('book')}
          </Button>
        </CardBody>
      </Card>
    </MotionEl>
  )
}