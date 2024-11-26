"use client"

import {heroImg, ourCompanyScores} from "@/constants";
import {useTranslations} from "next-intl";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {FC} from "react";
import {Button} from "@nextui-org/react";
import CountUp from "react-countup";

export const Hero: FC = () => {
  const router = useRouter();
  const t = useTranslations("hero");

  return (
    <div className="relative h-screen flex flex-col">
      <div className="container z-20 grid grid-cols-1 md:grid-cols-2 h-full gap-2">
        <div className="flex flex-col gap-5 mt-auto sm:my-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">
            Build & Improve Solution <br/>
            to The <span className="text-blue-500 drop-shadow-sm">Better Future</span>
          </h1>
          <p className="text-lg lg:text-xl max-w-md leading-tight font-medium text-gray-600">
            We are holding company fous on finance, property, technology, also renewable eneregy.
          </p>
          <Button
            size="lg"
            className="text-xl lg:text-2xl px-10 mt-7 font-medium bg-blue-600 text-white w-max"
          >
            See our work
          </Button>
        </div>
        <div className="grid pl-5 sm:pl-10 h-max mt-auto grid-cols-4 gap-5 mb-7">
          {ourCompanyScores?.map(({value, isPercent, title}) => (
            <div key={value} className="max-w-24 flex flex-col gap-2">
              <p className="text-lg leading-tight lg:text-xl font-medium">{title}</p>
              <CountUp
                end={value}
                delay={1.5}
                duration={5}
                separator=','
                suffix={isPercent ? "%" : ""}
                className="text-2xl lg:text-3xl font-medium"
              />
            </div>
          ))}
        </div>
      </div>
      <Image className="w-full -z-0 h-full object-cover" src={heroImg} fill alt="hero bg"/>
      <div className="absolute bottom-0 clip-path h-40 sm:h-44 w-full sm:w-[95%] md:w-1/2 bg-white right-0"/>
    </div>
  )
}