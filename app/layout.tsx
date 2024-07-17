import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "./StaticComps/Header/page";
import Footer from "./StaticComps/Footer/page";



const lato = Lato({ 
  weight: ['400', '700'],
  style: 'normal',
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export  default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
