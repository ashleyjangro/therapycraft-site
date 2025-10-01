import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You - The Complete TherapyCraft System | TherapyCraft",
  description: "Thank you for your purchase! Download your Complete TherapyCraft System and start launching Minecraft therapy in your practice.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function ThankYouCompletePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="text-6xl mb-6">🎉</div>

            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Welcome to TherapyCraft!
            </h1>

            <p className="text-xl text-black mb-8">
              Your Complete TherapyCraft System is ready. You now have everything you need to launch Minecraft therapy in your practice.
            </p>

            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-black">📥 Download Your Complete System</h2>
              <p className="text-black mb-4">
                <strong>The Complete TherapyCraft System</strong>
              </p>
              <a
                href="/TherapyCraft-Complete-System.pdf"
                download
                className="inline-block bg-green-600 text-white px-10 py-4 rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors shadow-lg mb-3"
              >
                Download Your Complete System (PDF)
              </a>
              <p className="text-sm text-black mt-3">
                Everything from tech setup to marketing templates—all in one comprehensive guide.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-xl font-semibold mb-3 text-black">🚀 What to Do Next:</h2>
              <ol className="space-y-3 text-black ml-4">
                <li><strong>1. Start with Chapter 1</strong> - Understand the foundation and therapeutic principles</li>
                <li><strong>2. Set up your tech (Chapter 2)</strong> - Follow the step-by-step setup guide</li>
                <li><strong>3. Review the templates (Appendices)</strong> - Customize them for your practice</li>
                <li><strong>4. Plan your marketing (Chapter 7)</strong> - Start filling your caseload</li>
              </ol>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-3 text-black">📧 Questions or Need Help?</h2>
              <p className="text-black mb-3">
                I personally respond to every therapist using this system.
              </p>
              <p className="text-black">
                <strong>Email me directly:</strong>{" "}
                <a href="mailto:ashley@jangro.com" className="text-blue-600 hover:underline font-semibold">
                  ashley@jangro.com
                </a>
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-6 border-2 border-green-300">
              <p className="text-lg font-semibold text-black">
                🎯 Your first TherapyCraft session could be just 2 weeks away!
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-black">
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
