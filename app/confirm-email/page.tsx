import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Your Email - TherapyCraft",
  description: "Check your email to confirm your subscription and download your free clinical case studies guide.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function ConfirmEmail() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
          <div className="text-6xl mb-6">📧</div>

          <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Check Your Email!
          </h1>

          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 mb-6">
            <p className="text-xl md:text-2xl font-semibold text-black mb-4">
              Click the confirmation button in your email to receive your free clinical guide
            </p>
            <p className="text-lg text-gray-700">
              We just sent you an email with a confirmation link. Click that link to download your case studies guide.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold mb-3 text-black">Don't see the email?</h2>
            <ul className="text-left max-w-md mx-auto space-y-2 text-black">
              <li>✓ Check your spam or junk folder</li>
              <li>✓ Look for an email from Ashley Jangro</li>
              <li>✓ Add ashley@therapycraft.io to your contacts</li>
              <li>✓ Wait a few minutes - emails can take time to arrive</li>
            </ul>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <p className="text-black mb-4">
              Questions? Email me at{" "}
              <a href="mailto:ashley@therapycraft.io" className="text-green-600 hover:underline font-semibold">
                ashley@therapycraft.io
              </a>
            </p>
            <p className="text-black">
              <a href="/" className="text-green-600 hover:underline">
                ← Back to TherapyCraft
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
