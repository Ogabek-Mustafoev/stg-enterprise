"use client"

import {
  BriefIntro,
  Contact,
  ContactModal,
  Gallery,
  Hero,
  Holding,
  Image,
  Link,
  MotionEl,
  OfferCard,
  ServiceCard
} from "@/components";
import {FC} from "react";
import {offerService, partners, projects, servicesData} from "@/constants";
import {useDisclosure} from "@nextui-org/react";
import {useTranslations} from "next-intl";
import {Swiper, SwiperProps, SwiperSlide} from "swiper/react";
import {Autoplay, FreeMode} from "swiper/modules";

export const HomePage: FC = () => {
  const {isOpen, onOpenChange, onOpen} = useDisclosure();

  const t = useTranslations();

  const config: SwiperProps = {
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    className: "mySwiper",
    wrapperClass: '!ease-linear',
    speed: 2500,
    spaceBetween: 5,
    slidesPerView: 2,
    slidesPerGroup: 1,
    modules: [Autoplay, FreeMode],
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 9,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
  };

  return (
    <section className="page min-h-screen flex flex-col gap-4 md:gap-5 lg:gap-6">
      <div className="bg-white rounded-b-2xl pb-8 md:pb-12">
        <Hero/>
        <div className="container mt-8 md:mt-12 flex flex-col gap-7">
          <MotionEl el="h3" delay={.2} direction="left" className="text-2xl md:text-3xl lg:text-4xl font-medium">
            {t('home.service-title')}
          </MotionEl>
          <div className="grid-3">
            {offerService.map((offer, idx) => (
              <OfferCard delay={idx / 10} key={offer.title} {...offer}/>
            ))}
          </div>
        </div>
      </div>
      <Holding/>
      <BriefIntro handleClick={onOpen}/>
      <div className="bg-white py-10 lg:py-14">
        <div className="container flex flex-col gap-5">
          <div className="flex justify-between items-start gap-3">
            <div className="flex-1">
              <MotionEl el="h2" direction="left" className="heading mb-4 uppercase">{t('pages.services')}</MotionEl>
              <MotionEl el="p" direction="left" delay={.2} className="text-lg font-medium">
                {t('services.description')}
              </MotionEl>
            </div>
            <MotionEl direction="right" delay={.2}>
              <Link className="see-more" href={'/services'}>
                {t('see-more')}
              </Link>
            </MotionEl>
          </div>
          <div className="grid-4">
            {servicesData.map((item, idx) => (
              <ServiceCard delay={idx / 10} key={idx + "-service"} {...item}/>
            ))}
          </div>
        </div>
      </div>
      <div className="container py-8 lg:py-14 flex flex-col gap-7">
        <div className="flex justify-between items-start gap-3">
          <MotionEl el="h2" direction="left" className="heading mb-2 md:mb-4">{t("projects.title")}</MotionEl>
          <MotionEl direction="right" delay={.2}>
            <Link className="see-more" href={'/projects'}>
              {t('see-more')}
            </Link>
          </MotionEl>
        </div>
        <Gallery images={projects.slice(0, 6)}/>
        <MotionEl
          el="h2"
          delay={.2}
          id="partners"
          direction="left"
          className="heading mb-2 md:mb-4 mt-6 md:mt-8 lg:mt-10"
        >
          {t("partners.title")}
        </MotionEl>
        <div>
          <Swiper
            {...config}
          >
            {partners.slice(0, 7)?.map((src, idx) => (
              <SwiperSlide className="cursor-pointer !h-auto" key={idx + "img"}>
                <Image wrapperClass="rounded-xl" src={src} alt={idx + "-photo"}/>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            {...config}
            dir="rtl"
            centeredSlides
            className="mt-2"
          >
            {partners.slice(7)?.map((src, idx) => (
              <SwiperSlide className="cursor-pointer !h-auto" key={idx + "img"}>
                <Image wrapperClass="rounded-xl" src={src} alt={idx + "-photo"}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Contact/>
      <ContactModal isOpen={isOpen} onOpenChange={onOpenChange}/>
    </section>
  )
}