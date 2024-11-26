import {
  aboutOneImg,
  aboutThreeImg,
  aboutTwoImg,
  beezzImg,
  crmImg,
  facebookIcon,
  harryImg,
  holdingImg,
  instagramIcon,
  mrceImg,
  orderOneIcon,
  orderThreeIcon,
  orderTwoIcon,
  partnerEightImg,
  partnerFiveImg,
  partnerFourImg,
  partnerOneImg,
  partnerSevenImg,
  partnerSixImg,
  partnerThreeImg,
  partnerTwoImg,
  projectEightImg,
  projectEightTeenImg,
  projectElevenImg,
  projectFifTeenImg,
  projectFiveImg,
  projectFourImg,
  projectFourteenImg,
  projectNineImg,
  projectOneImg,
  projectSevenImg,
  projectSevenTeenImg,
  projectSixImg,
  projectSixTeenImg,
  projectTenImg,
  projectThirteenImg,
  projectThreeImg,
  projectTwelveImg,
  projectTwoImg,
  stgImg,
  stmgImg,
  stroyImg,
  twitterIcon,
  vanguardImg,
  youtubeIcon,
} from "@/constants";
import {IAboutUs, ILocalesData, INavLink, IOfferService, ISocialLinks, TLocale, TService} from "@/types";
import {StaticImageData} from "next/image";

export const navLinks: INavLink[] = [
  {link: "/", label: "home"},
  {link: "/about", label: "about"},
  {link: "/services", label: "services"},
  {link: "/projects", label: "projects"},
  {link: "/#partners", label: "partners"},
  {link: "/#contact", label: "contact"},
]

export const locales: TLocale[] = ["uz", 'en', 'ru'];

export const offerService: IOfferService[] = [
  {
    icon: orderOneIcon,
    title: "wide-range",
    description: "explore",
  },
  {
    icon: orderTwoIcon,
    title: "high-quality",
    description: "our-equipment",
  },
  {
    icon: orderThreeIcon,
    title: "flexible",
    description: "we-offer",
  },
];

export const aboutUsData: IAboutUs[] = [
  {
    image: aboutOneImg,
    title: "WHO-WE-ARE",
    html: `since-establishment`,
  }, {
    image: aboutTwoImg,
    title: "WHAT-WE-DO",
    html: `in-our-ultra`
  }, {
    image: aboutThreeImg,
    title: "OUR-REVIEW",
    html: `st-stg`,
  }
]

export const localesData: ILocalesData[] = [
  {label: "Eng", value: "en"},
  {label: "Рус", value: "ru"},
  {label: "O'zb", value: "uz"},
]

export const servicesData: TService[] = [
  {
    title: "XCMGXTC80",
    image: stgImg,
    html: `wall-thickness`,
  },
  {
    title: "CRAWLER-EXCAVATOR",
    image: mrceImg,
    html: `operating-weight`,
  },
  {
    title: "The-JCB",
    image: harryImg,
    html: `gross-power`,
  },
  {
    title: "3DX-TLB",
    image: vanguardImg,
    html: `weight-7`,
  },
  {
    title: "Terex-Wheel",
    image: stroyImg,
    html: `weight-15`,
  },
  {
    title: "Single-Drum",
    image: crmImg,
    html: `max-operating`,
  },
  {
    title: "Joy-Global",
    image: beezzImg,
    html: `rated-budget`,
  },
  {
    title: "COMPACTOR-BOMAG",
    image: stmgImg,
    html: `emission-class`,
  },
  {
    title: "Truck-Crane",
    image: holdingImg,
    html: `brand-kamaz`,
  },
];

export const projects: StaticImageData[] = [
  projectOneImg,
  projectTwoImg,
  projectSixImg,
  projectTenImg,
  projectNineImg,
  projectFourImg,
  projectFiveImg,
  projectSevenImg,
  projectThreeImg,
  projectEightImg,
  projectElevenImg,
  projectTwelveImg,
  projectFifTeenImg,
  projectSixTeenImg,
  projectThirteenImg,
  projectFourteenImg,
  projectSevenTeenImg,
  projectEightTeenImg,
];

export const partners: StaticImageData[] = [
  partnerSixImg,
  partnerOneImg,
  partnerTwoImg,
  partnerFourImg,
  partnerFiveImg,
  partnerThreeImg,
  partnerSevenImg,
  partnerEightImg,
]

export const socialLinks: ISocialLinks[] = [
  {
    link: "https://instagram.com/",
    icon: instagramIcon,
  }, {
    link: "https://twitter.com/",
    icon: twitterIcon,
  }, {
    link: "https://facebook.com/",
    icon: facebookIcon,
  }, {
    link: "https://youtube.com/",
    icon: youtubeIcon,
  },
]

export const ourCompanyScores: Array<{ title: string; isPercent?: boolean; value: number }> = [
  {
    title: "Total Employee",
    value: 1134,
  },
  {
    title: "Our Brand in world",
    value: 32,
  },
  {
    title: `Profit (Million)`,
    value: 2145,
  },
  {
    title: "Company Growth",
    isPercent: true,
    value: 28,
  },
]

export const holdings = [
  harryImg,
  vanguardImg,
  stroyImg,
  crmImg,
  beezzImg,
  stmgImg,
  stgImg,
  mrceImg,
]