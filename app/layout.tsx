import React, { Suspense } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

// Dummy component that simulates async data fetching
const DummyComponent = React.lazy(() => import('./loading'));

export const metadata = {
  title: 'RoziStore. -WebTopupTerpercaya',
  description: 'Versi Beta 0.10.1',
  name: 'google-site-verification',
  content: 'X0udyrnZV8QGYUrrJzz55Ow5OZI9KTUPRU_Hvss_8J8',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="X0udyrnZV8QGYUrrJzz55Ow5OZI9KTUPRU_Hvss_8J8"
        />
      </head>
      <body className={`${inter.className} bg-color-primary`}>
        <Suspense fallback={<DummyComponent />}>
          {children}
        </Suspense>
        <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
        <Analytics />
      </body>
    </html>
  );
}
