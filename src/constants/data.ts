import {
  aboutOneImg,
  aboutThreeImg,
  aboutTwoImg,
  beezzImg,
  crmImg,
  facebookIcon,
  harryImg,
  instagramIcon,
  mrceImg,
  orderOneIcon,
  orderThreeIcon,
  orderTwoIcon,
  partnerEightImg,
  partnerElevenImg,
  partnerFiveImg,
  partnerFourImg,
  partnerFourteenImg,
  partnerNineImg,
  partnerOneImg,
  partnerSevenImg,
  partnerSixImg,
  partnerTenImg,
  partnerThirteenthImg,
  partnerThreeImg,
  partnerTwelveImg,
  partnerTwoImg,
  projectEightImg,
  projectElevenImg,
  projectFifTeenImg,
  projectFiveImg,
  projectFourImg,
  projectFourteenImg,
  projectNineImg,
  projectOneImg,
  projectSevenImg,
  projectSixImg,
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
    title: "STG-Enterprise",
    image: stgImg,
    url: "https://stg-enterprise.com",
    html: `wall-thickness`,
  },
  {
    title: "MRCE Group",
    image: mrceImg,
    url: "https://mrce-group.com",
    html: `operating-weight`,
  },
  {
    title: "The Harry's coffee & snacks",
    image: harryImg,
    url: "https://the-harrys.uz",
    html: `gross-power`,
  },
  {
    title: "Vanguard Tech Group",
    image: vanguardImg,
    url: "https://vanguardgr.uz",
    html: `weight-7`,
  },
  {
    title: "STROY KAZ GROUP",
    image: stroyImg,
    url: "https://stroykaz.com",
    html: `weight-15`,
  },
  {
    title: "STG-CRM",
    image: crmImg,
    url: "https://admin.stg-enterprise.com",
    html: `max-operating`,
  },
  {
    title: "BEEZZ",
    image: beezzImg,
    url: "https://beezz.uz",
    html: `rated-budget`,
  },
  {
    title: "STMG - Shaxta Stroy Montaj",
    image: stmgImg,
    url: "https://https://shahtastroy.com",
    html: `emission-class`,
  },
];

export const projects: StaticImageData[] = [
  projectOneImg,
  projectNineImg,
  projectSixImg,
  projectFourImg,
  projectTenImg,
  projectTwoImg,
  projectFiveImg,
  projectSevenImg,
  projectThreeImg,
  projectEightImg,
  projectFifTeenImg,
  projectThirteenImg,
  projectElevenImg,
  projectFourteenImg,
  projectTwelveImg,
];

export const partners: StaticImageData[] = [
  partnerSixImg,
  partnerOneImg,
  partnerTwoImg,
  partnerTenImg,
  partnerFourImg,
  partnerFiveImg,
  partnerNineImg,
  partnerThreeImg,
  partnerSevenImg,
  partnerEightImg,
  partnerElevenImg,
  partnerTwelveImg,
  partnerFourteenImg,
  partnerThirteenthImg,
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