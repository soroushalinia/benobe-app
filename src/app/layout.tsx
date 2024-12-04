import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Providers } from '@/lib/providers';
import Head from 'next/head';

const yekan = localFont({
  src: './fonts/BYekan+.ttf',
  variable: '--font-yekan',
  weight: '400',
});
const yekanBold = localFont({
  src: './fonts/BYekan+ Bold.ttf',
  variable: '--font-yekan-bold',
  weight: '700',
});

export const metadata: Metadata = {
  title: 'به‌نوبه',
  description: 'سامانه جامع خدمات آنلاین پزشکی و درمانی',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl" className="scroll-smooth">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`antialiased ${yekan.variable} ${yekanBold.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
