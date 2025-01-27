import type { Metadata } from "next";
// import localFont from "next/font/local";

import { Londrina_Solid as TitleFont } from "next/font/google"
// import { Exo_2 as TitleFont } from "next/font/google"
import { Montserrat as BodyFont } from "next/font/google"

import "./globals.css";
// import Header from "@/components/wdpj/header.cli";
import Footer from "@/components/wdpj/footer.cli";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const titleFont = TitleFont({
  subsets: ["latin"],
  variable: "--font-title ",
  weight: "400",
})

const bodyFont = BodyFont({
  subsets: ["latin"],
  variable: "--font-body",
})


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Lyra",
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          titleFont.variable,
          bodyFont.variable,
          // geistSans.variable,
          // geistMono.variable,
          "antialiased font-body",
          "p-3 md:p-5 lg:p-10",
        )}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          {/* <Header /> */}
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
