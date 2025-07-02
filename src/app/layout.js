'use client';

import Provider from '@/store/provider';
import '../styles/globals.css';
import { pageName } from '@/data';
import localFont from 'next/font/local';

const miFuente = localFont({
  src: [
    {
      path: '../../public/fonts/Baloo2-Bold.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Baloo2-Regular.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--baloo',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>{pageName}</title>
      </head>
      <Provider>
        <body className={`${miFuente.variable}`}>{children}</body>
      </Provider>
    </html>
  );
}
