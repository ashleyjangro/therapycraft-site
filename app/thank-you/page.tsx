import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You - Download Your TherapyCraft Guide | Minecraft Therapy",
  description: "Thank you for downloading the TherapyCraft 101 guide. Check your email for your free Minecraft therapy training guide.",
};

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="text-6xl mb-6">🎉</div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Thank You for Downloading TherapyCraft 101!
            </h1>
            
            <p className="text-xl text-black mb-8">
              Your free guide is on its way to your inbox.
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-3 text-black">📧 Check Your Email</h2>
              <p className="text-black mb-3">
                You should receive an email from <strong>Ashley Jangro (ashley@jangro.com)</strong> within the next few minutes with:
              </p>
              <ul className="text-left max-w-md mx-auto space-y-2 text-black">
                <li>✓ Your TherapyCraft 101 PDF download link</li>
                <li>✓ Quick start instructions</li>
                <li>✓ Additional resources to get started</li>
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
              <h3 className="text-lg font-semibold mb-3 text-black">Ready to Go Deeper?</h3>
              <p className="text-black mb-4">
                If you want the complete system with templates, session plans, and clinical resources...
              </p>
              <a
                href="https://ashleyjangro.thrivecart.com/minecraft-therapy/"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get the Complete Starter System for $29.99
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