import {BaseLayout} from "@/components";
import {logoShortImg} from "@/constants";
import {Providers} from "@/providers";
import {IChildren, IParams} from "@/types";
import {Metadata} from "next";
import {NextIntlClientProvider, useMessages} from "next-intl";
import {Saira_Condensed} from 'next/font/google';

import '@/styles/global.scss';

const saira = Saira_Condensed({subsets: ['latin'], weight: ['300', '400', '500', '600', '700']});

export const metadata: Metadata = {
  metadataBase: new URL('https://stg-enterprise.com'),
  title: {
    default: "STG Enterprise - Leading Provider of Mining Equipment",
    template: "%s | STG Enterprise",
  },
  description: "Welcome to STG Enterprise. We offer a comprehensive range of high-quality mining equipment tailored to meet the diverse needs of our customers. Explore our services, projects, and partnerships for superior mining solutions.",
  keywords: "STG Enterprise, stg-enterprise, stg enterprise, mining equipment, high-quality, reliable, dump trucks, drill rigs, mining solutions",
  openGraph: {
    type: "website",
    siteName: "STG Enterprise",
    images: [
      {
        url: logoShortImg.src,
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: "STG Enterprise Mining Equipment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@stg_enterprise",
    creator: "@stg_enterprise",
    images: [
      {
        url: logoShortImg.src,
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: "STG Enterprise Mining Equipment",
      },
    ],
  },
  authors: [
    {name: "Ogabek Mustafoev", url: "https://mustafoev-ogabek.vercel.app/"},
    {name: "STG Enterprise", url: "https://stg-enterprise.com"},
  ],
  icons: [
    {
      url: logoShortImg.src,
      type: "image/png",
      sizes: "1200x630",
    },
    {
      url: logoShortImg.src,
      type: "image/png",
      sizes: "32x32",
    },
    {
      url: logoShortImg.src,
      type: "image/png",
      sizes: "16x16",
    },
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
};

interface IRootLayout extends IChildren {
  params: IParams;
}

export default function RootLayout({children, params: {locale}}: Readonly<IRootLayout>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
    <body className={saira.className}>
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Providers locale={locale}>
        <BaseLayout>{children}</BaseLayout>
      </Providers>
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
