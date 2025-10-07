import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Minecraft Therapy System for Therapists | TherapyCraft Professional Training",
  description: "Launch Minecraft therapy in your practice in 2 weeks. Complete system includes tech setup, HIPAA protocols, session plans, treatment roadmaps, legal templates, and marketing materials. $59 one-time payment.",
  keywords: "minecraft therapy training, minecraft therapy course, gaming therapy certification, video game therapy training, specialty therapy training, innovative therapy techniques, teen therapy training, digital therapy certification",
  openGraph: {
    title: "Complete Minecraft Therapy System - Launch Your Specialty Practice",
    description: "Everything you need to add premium Minecraft therapy to your practice. Setup in 2 weeks, fill your caseload with clients who pay $150-250/session.",
    type: "website",
    url: "https://therapycraft.io/complete-system",
    images: ["/images/Minecraft Therapy Hero.png"],
  },
};

export default function CompleteSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
