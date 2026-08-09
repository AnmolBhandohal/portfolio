import type { Metadata } from "next";
import { Saira_Condensed, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Fiducials } from "@/components/fiducials";

const sairaCondensed = Saira_Condensed({
  variable: "--font-disp",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Anmol Bhandohal — Electrical Engineering Portfolio",
  description:
    "Datasheet-styled portfolio for Anmol Bhandohal, electrical engineering student at the University of Alberta.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sairaCondensed.variable} ${ibmPlexMono.variable} ${ibmPlexSans.variable}`}
    >
      <body>
        <Fiducials />
        {children}
      </body>
    </html>
  );
}
