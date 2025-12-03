import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import Header from '@/components/navigation/Header'

const spaceMono = localFont({
  src: [
    {
      path: './fonts/space-mono-regular.ttf',
      weight: '400',
      style: 'normal',
    }
  ]
})

export const metadata: Metadata = {
  title: "Measure",
  description: "A Site about Sergei Kofman (Measure)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={spaceMono.className}>
      <head>
      </head>
      <body
        className={'antialiased overflow-y-scroll'}
      > 
        <div className={'min-h-screen w-full bg-black text-white pb-4 text-sm md:text-md'}>
          <Header/>
          {children}
        </div>
      </body>
    </html>
  );
}
