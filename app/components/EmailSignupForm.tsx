'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function EmailSignupForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-8">
        {/* Load Kit JavaScript */}
        <Script
          src="https://f.convertkit.com/ckjs/ck.5.js"
          strategy="lazyOnload"
        />

        {/* Kit Form - will be rendered by Kit's script */}
        <div ref={containerRef}>
          <form
            action="https://app.kit.com/forms/8798740/subscriptions"
            className="seva-form formkit-form"
            method="post"
            data-sv-form="8798740"
            data-uid="db4f9f5a11"
            data-format="inline"
            data-version="5"
            data-options='{"settings":{"after_subscribe":{"action":"redirect","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":"https://therapycraft.io/thank-you"},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
            min-width="400 500 600 700 800"
          >
            <div data-style="minimal">
              <div className="formkit-header" data-element="header">
                <h2>Download Your Free Clinical Guide</h2>
              </div>
              <div className="formkit-subheader" data-element="subheader">
                Get instant access to real case studies showing Minecraft therapy breakthroughs.
              </div>
              <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
              <div data-element="fields" data-stacked="true" className="seva-fields formkit-fields">
                <div className="formkit-field">
                  <input
                    className="formkit-input"
                    aria-label="First Name"
                    name="fields[first_name]"
                    required
                    placeholder="First Name"
                    type="text"
                  />
                </div>
                <div className="formkit-field">
                  <input
                    className="formkit-input"
                    name="email_address"
                    aria-label="Email Address"
                    placeholder="Email Address"
                    required
                    type="email"
                  />
                </div>
                <button
                  data-element="submit"
                  className="formkit-submit"
                  type="submit"
                >
                  <div className="formkit-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <span>Get Free Case Studies</span>
                </button>
              </div>
              <div className="formkit-guarantee" data-element="guarantee" style={{marginBottom: '0'}}>
                <p>🔒 Your information is 100% secure. No spam, ever.</p>
              </div>
            </div>
          </form>
        </div>

        <p className="text-sm text-center text-gray-600 -mt-2">
          Instant PDF download • No credit card required
        </p>
      </div>

      <style jsx global>{`
        /* Form container */
        .formkit-form[data-uid="db4f9f5a11"] {
          padding: 40px;
        }

        /* Hide Kit branding (paid plan) */
        .formkit-powered-by-convertkit-container,
        .formkit-powered-by-convertkit {
          display: none !important;
        }

        /* Input fields - make them visible and styled */
        .formkit-input {
          width: 100%;
          padding: 14px;
          margin-bottom: 15px;
          border: 2px solid #d1d5db;
          border-radius: 8px;
          font-size: 16px;
          background: white;
          color: black;
          box-sizing: border-box;
        }

        .formkit-input:focus {
          outline: none;
          border-color: #16a34a;
          box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);
        }

        .formkit-input::placeholder {
          color: #9ca3af;
        }

        /* Submit button */
        .formkit-submit {
          width: 100%;
          padding: 14px 28px;
          background-color: #16a34a;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .formkit-submit:hover {
          background-color: #15803d;
        }

        /* Fields container */
        .formkit-fields {
          margin: 25px 0;
        }

        .formkit-field {
          margin-bottom: 15px;
        }

        /* Headers */
        .formkit-header h2 {
          margin: 0 0 10px 0;
          color: #1f2937;
          font-size: 27px;
          font-weight: 700;
        }

        .formkit-subheader {
          margin-bottom: 20px;
          color: #6b7280;
          font-size: 18px;
        }

        /* Guarantee text */
        .formkit-guarantee {
          margin: 15px 0;
          text-align: center;
          color: #4b5563;
          font-size: 13px;
        }

        .formkit-guarantee p {
          margin: 0;
        }

        /* Kit branding */
        .formkit-powered-by-convertkit-container {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .formkit-powered-by-convertkit {
          display: inline-block;
          padding: 8px 16px;
          background: #f3f4f6;
          border-radius: 6px;
          color: #6b7280;
          text-decoration: none;
          font-size: 12px;
        }

        .formkit-powered-by-convertkit:hover {
          background: #e5e7eb;
        }

        /* Error messages */
        .formkit-alert-error {
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #991b1b;
          padding: 12px;
          border-radius: 6px;
          margin-bottom: 15px;
          list-style: none;
        }

        .formkit-alert-error:empty {
          display: none;
        }

        /* Spinner */
        .formkit-spinner {
          display: none;
        }

        @media (max-width: 640px) {
          .formkit-form[data-uid="db4f9f5a11"] {
            padding: 24px;
          }

          .formkit-header h2 {
            font-size: 24px;
          }

          .formkit-subheader {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
