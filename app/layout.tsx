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
  keywords: "minecraft therapy, minecraft therapy training, minecraft therapy activities, therapeutic minecraft, minecraft play therapy, autism therapy, ADHD therapy, neurodivergent therapy, minecraft for therapy, minecraft in therapy, using minecraft in therapy, minecraft therapy for kids, minecraft therapy for teens, minecraft therapy autism, minecraft therapy adhd, minecraft therapy anxiety, play therapy minecraft, video game therapy, gaming therapy",
  metadataBase: new URL('https://therapycraft.io'),
  verification: {
    google: "lfRoK-tnjEejzOQOhyJ0NOGELvQ73xBxjUOTVyhIa-k",
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "Minecraft Therapy Training for Therapists | TherapyCraft",
    description: "Transform therapy sessions with Minecraft. Get the free TherapyCraft 101 guide with setup instructions, activities, and clinical protocols.",
    type: "website",
    url: "https://therapycraft.io",
    siteName: "TherapyCraft",
    images: [
      {
        url: "https://therapycraft.io/icon.png",
        width: 1200,
        height: 630,
        alt: "TherapyCraft - Minecraft Therapy Training for Therapists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Minecraft Therapy Training for Therapists | TherapyCraft",
    description: "Transform therapy sessions with Minecraft. Get the free TherapyCraft 101 guide with setup instructions, activities, and clinical protocols.",
    images: ["https://therapycraft.io/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
