import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ImmverseAI — Let's Explore Three-Dimensional Visual",
  description:
    "With virtual technology you can see the digital world feel more real and you can play the game with a new style.",
  keywords: "virtual reality, VR, ImmverseAI, immersive, 3D visual, metaverse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable}`}>
        {children}
      </body>
    </html>
  );
}
