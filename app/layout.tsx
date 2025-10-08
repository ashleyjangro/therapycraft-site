import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minecraft Therapy Training for Therapists | TherapyCraft 101 Free Guide",
  description: "Learn minecraft therapy techniques for kids and teens with autism, ADHD, and anxiety. Free TherapyCraft 101 guide includes setup, activities, and HIPAA-compliant protocols for therapists.",
  keywords: "minecraft therapy, minecraft therapy training, minecraft therapy activities, therapeutic minecraft, minecraft play therapy, autism therapy, ADHD therapy, neurodivergent therapy",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Minecraft Therapy Training for Therapists | TherapyCraft",
    description: "Transform therapy sessions with Minecraft. Get the free TherapyCraft 101 guide with setup instructions, activities, and clinical protocols.",
    type: "website",
    url: "https://therapycraft.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
