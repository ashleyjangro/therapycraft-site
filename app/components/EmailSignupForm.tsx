'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EmailSignupForm() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // AWeber form submission
    const formData = new FormData();
    formData.append('name', firstName);
    formData.append('email', email);
    formData.append('listname', 'awlist6784990'); // Your AWeber list ID
    formData.append('redirect', 'https://therapycraft.io/thank-you');
    formData.append('meta_message', '1');
    formData.append('meta_required', 'name,email');

    try {
      // Submit to AWeber
      await fetch('https://www.aweber.com/scripts/addlead.pl', {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // AWeber doesn't support CORS
      });

      // Redirect to thank you page
      router.push('/thank-you');
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-white text-center mb-4">
        Download Your Free Guide Now
      </h3>
      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-green-100">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:bg-white transition-all text-gray-900 placeholder-gray-500 text-base"
              placeholder="First Name"
              required
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:bg-white transition-all text-gray-900 placeholder-gray-500 text-base"
              placeholder="Email Address"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Get My Free Guide Now →'
            )}
          </button>

          <p className="text-xs text-center text-gray-500 mt-4">
            🔒 Your information is 100% secure. No spam, ever.
          </p>
        </form>
      </div>
      
      <p className="text-sm text-center text-white mt-4 font-medium">
        Instant PDF download • No credit card required
      </p>
    </div>
  );
}