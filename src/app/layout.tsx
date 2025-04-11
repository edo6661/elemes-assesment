import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "../ui/components/layouts/header/Header";
import Footer from "../ui/components/layouts/footer/Footer";

export const rubik = localFont({
  src: [
    {
      path: "fonts/rubik/Rubik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/rubik/Rubik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/rubik/Rubik-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/rubik/Rubik-SemiBold.ttf",
      weight: "600",
      style: "normal",

    },
    {
      path: "fonts/rubik/Rubik-Bold.ttf",
      weight: "700",
      style: "normal",
    },

  ],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Home Page",
  description: "This is the home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={` ${rubik.className} antialiased`}
      >
        <Header />
        <main className="space-y-20">
          {children}

        </main>
        <Footer />
      </body>
    </html>
  );
}
