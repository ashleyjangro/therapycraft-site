import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You - Download Your Clinical Case Studies Guide | TherapyCraft",
  description: "Thank you for downloading the TherapyCraft clinical case studies guide. See real Minecraft therapy breakthroughs with anxious, resistant, and traumatized clients.",
};

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="text-6xl mb-6">🎉</div>

            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Thank You! Your Clinical Case Studies Guide is Ready
            </h1>

            <p className="text-xl text-black mb-8">
              Download your free guide below and check your email for additional resources.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-3 text-black">📥 Download Your Guide Now</h2>
              <p className="text-black mb-4">
                <strong>TherapyCraft in Action: 3 Case Studies from Minecraft Therapy</strong>
              </p>
              <a
                href="/TherapyCraft-Case-Studies.pdf"
                download
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg mb-3"
              >
                Download Case Studies Guide (PDF)
              </a>
              <p className="text-sm text-black">
                See real therapeutic breakthroughs with anxious, resistant, and traumatized clients
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-3 text-black">📧 Check Your Email Too</h2>
              <p className="text-black mb-3">
                You should also receive an email from <strong>Ashley Jangro (ashley@jangro.com)</strong> with:
              </p>
              <ul className="text-left max-w-md mx-auto space-y-2 text-black">
                <li>✓ Your case studies guide download link</li>
                <li>✓ Quick implementation tips</li>
                <li>✓ Additional clinical resources</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-3 text-black">💡 While You Wait...</h2>
              <p className="text-black mb-4">
                Over the next few days, I'll send you helpful tips and real examples of how other therapists are using Minecraft successfully with their clients.
              </p>
              <p className="text-black">
                <strong>Didn't receive the email?</strong> Check your spam folder or email me directly at ashley@jangro.com
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-black">Ready for the Complete Professional System?</h3>
              <p className="text-black mb-4">
                Get everything you need to confidently implement Minecraft therapy: setup guides, legal templates, session plans, treatment roadmaps, and marketing materials.
              </p>
              <a
                href="/complete-system"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                See the Complete System - $59
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-black">
                Questions? Email me at{" "}
                <a href="mailto:ashley@jangro.com" className="text-blue-600 hover:underline">
                  ashley@jangro.com
                </a>
              </p>
              <p className="text-black mt-2">
                <a href="/" className="text-blue-600 hover:underline">
                  ← Back to TherapyCraft
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}