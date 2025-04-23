import type { Metadata } from 'next';

import { Poppins } from 'next/font/google';

import '@/styles/index.css';

import { getTheme } from '@/actions/theme';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { SITE_DESCRIPTION, SITE_TITLE } from '@/utils/constants';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getTheme();

  return (
    <html lang="en" className={theme === 'light' ? '' : theme}>
      <body className={`${poppins.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
