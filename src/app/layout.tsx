import type { Metadata } from "next";
import "./globals.css";
import ContentWrapper from "./components/layout/ContentWrapper";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export const metadata: Metadata = {
  title: "SteamScope",
  description: "A project by NightCall Studio",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html lang="en">
      <body
        className={`${gabarito.className} min-h-screen w-full bg-radial from-[#0A395E] to-[#02090F] text-white `}
      >
        <ContentWrapper>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ContentWrapper>
      </body>
    </html>
  );
}
