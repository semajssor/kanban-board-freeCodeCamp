import type { Metadata } from 'next'
import { Providers } from "@/components/redux/provider";
import Navbar from './components/Navbar';
import { Plus_Jakarta_Sans } from "next/font/google";
import './globals.css'

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
 title: 'Create Next App',
 description: 'Generated by create next app',
}

export default function RootLayout({
 children,
}: {
 children: React.ReactNode
}) {
return (
  <html lang="en" className={pjs.className}>
    <body className='pb-24 h-screen overflow-hidden'>
      <Providers>
        <Navbar />  {/* Render the component here */}
        {children}
      </Providers>
    </body>
  </html>
  )
}

