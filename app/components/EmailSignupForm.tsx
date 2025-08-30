'use client';

import { useEffect, useRef } from 'react';

export default function EmailSignupForm() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load AWeber form script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//forms.aweber.com/form/90/898984390.js';
    script.id = 'aweber-wjs-kzf3jqeid';
    script.async = true;

    // Check if script already exists
    if (!document.getElementById('aweber-wjs-kzf3jqeid')) {
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      const existingScript = document.getElementById('aweber-wjs-kzf3jqeid');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="bg-white/20 backdrop-blur rounded-lg p-6 max-w-md mx-auto border border-white/30">
      <div ref={formRef} className="AW-Form-898984390"></div>
      <p className="text-sm text-center text-white mt-4">
        Instant PDF download
      </p>
      
      <style jsx>{`
        /* Override AWeber form styles to match our design */
        :global(.AW-Form-898984390) {
          background: transparent !important;
        }
        :global(.AW-Form-898984390 input[type="text"]),
        :global(.AW-Form-898984390 input[type="email"]) {
          width: 100% !important;
          padding: 12px 16px !important;
          border-radius: 8px !important;
          border: 2px solid #d1d5db !important;
          color: #1f2937 !important;
          background: white !important;
          margin-bottom: 12px !important;
          font-size: 16px !important;
        }
        :global(.AW-Form-898984390 input[type="text"]:focus),
        :global(.AW-Form-898984390 input[type="email"]:focus) {
          border-color: #10b981 !important;
          outline: none !important;
        }
        :global(.AW-Form-898984390 input[type="submit"]) {
          width: 100% !important;
          background: white !important;
          color: #059669 !important;
          padding: 12px 24px !important;
          border-radius: 8px !important;
          font-size: 18px !important;
          font-weight: 600 !important;
          border: none !important;
          cursor: pointer !important;
          transition: all 0.2s !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
        }
        :global(.AW-Form-898984390 input[type="submit"]:hover) {
          background: #f0fdf4 !important;
        }
        :global(.AW-Form-898984390 .AW-Form-Header),
        :global(.AW-Form-898984390 .AW-Form-Footer) {
          display: none !important;
        }
      `}</style>
    </div>
  );
}