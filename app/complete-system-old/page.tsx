'use client';

import { Metadata } from 'next';
import { useState } from 'react';

export default function CompleteSystemSalesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-green-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Stop Fighting Kids' Screen Time.
              </span>
              <br />
              <span className="text-gray-900">Start Using It to Heal Them.</span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-700 font-medium mb-6">
              The complete TherapyCraft system that transforms Minecraft-obsessed kids from therapy-resistant to asking for extra sessions
            </p>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Everything you need to launch a premium Minecraft therapy practice in 2 weeks—from tech setup to your first paying clients at $150-250/session
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a
                href="#pricing"
                className="bg-green-600 hover:bg-green-700 text-white text-2xl font-bold px-12 py-6 rounded-xl shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-200"
              >
                Get Instant Access - $59
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span> Instant digital access
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span> 30-day guarantee
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span> Start in 2 weeks
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Hook - Pain/Agitate/Solution */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
            Does This Sound Familiar?
          </h2>

          <div className="space-y-6 mb-12">
            {[
              "😤 Your resistant teen crosses their arms and gives you one-word answers",
              "😓 Parents are desperate, but their kid \"hates therapy\"",
              "🎮 You're watching your caseload fill with kids who'd rather be gaming",
              "💸 Meanwhile, you're stuck competing on price with every other therapist offering the same traditional talk therapy"
            ].map((pain, i) => (
              <div key={i} className="bg-gray-50 border-l-4 border-gray-400 rounded-lg p-6 shadow-sm">
                <p className="text-lg text-gray-800">{pain}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 mb-12 border border-green-200">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Here's what most therapists don't realize:</h3>
            <p className="text-xl mb-6 text-gray-700">
              Those Minecraft-obsessed kids aren't resistant to therapy. They're resistant to therapy that doesn't speak their language.
            </p>
            <p className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              What if you could have waiting lists of parents begging to work with you instead of competing with everyone else?
            </p>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">What if you could:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "✨", text: "Have waiting lists of parents begging to work with you (not the other way around)" },
              { icon: "💰", text: "Charge $150-250 per session because you offer something NO other therapist in your area does" },
              { icon: "🎯", text: "Watch \"difficult\" kids transform into your best clients who actually look forward to sessions" },
              { icon: "🎉", text: "Build a practice that's both more profitable AND more fun than traditional therapy" }
            ].map((item, i) => (
              <div key={i} className="bg-white border-2 border-green-100 rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-lg font-medium text-gray-800">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-gray-900 mb-4">That's exactly what TherapyCraft does.</p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-green-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <img
                  src="https://steadywithin.com/wp-content/uploads/2025/03/Ashley-Photo-2.webp"
                  alt="Ashley Jangro, LPCC"
                  className="w-48 h-48 rounded-2xl object-cover shadow-lg"
                />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  "I went from skeptical stepmom who thought Minecraft was boring to building a 6-figure practice helping kids heal through the game they love."
                </p>
                <p className="text-lg text-gray-600 mb-2">—Ashley Jangro, LPCC</p>
                <p className="text-base text-gray-500 italic">Creator of the TherapyCraft System</p>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <p className="text-lg mb-6 text-gray-700">When I started using Minecraft in therapy, three things happened:</p>
              <div className="space-y-4">
                {[
                  { num: "1️⃣", text: "Kids who previously refused therapy", bold: " started asking for longer sessions" },
                  { num: "2️⃣", text: "Parents began referring their friends", bold: " specifically because of my Minecraft approach" },
                  { num: "3️⃣", text: "I went from competing on price to having families ", bold: "happily pay $250/session" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-2xl flex-shrink-0">{item.num}</span>
                    <p className="text-lg text-gray-700">
                      <strong>{item.text}</strong>{item.bold}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-lg mt-6 font-semibold text-green-700">Now I teach therapists exactly how to replicate this system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation - Before/After */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
            The Transformation
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* WITHOUT */}
            <div className="bg-gray-100 rounded-2xl p-8 border-2 border-gray-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-700">❌ WITHOUT TherapyCraft:</h3>
              <ul className="space-y-4">
                {[
                  "Competing with hundreds of therapists offering the same thing",
                  "Kids who zone out, give one-word answers, watch the clock",
                  "Parents who drop out after 3 sessions because \"it's not working\"",
                  "Charging standard rates because you can't justify premium pricing",
                  "Burnout from sessions that feel like pulling teeth"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-700">
                    <span className="text-xl flex-shrink-0">❌</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WITH */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-4 border-green-500">
              <h3 className="text-2xl font-bold mb-6 text-green-800">✅ WITH TherapyCraft:</h3>
              <ul className="space-y-4">
                {[
                  { bold: "Parents calling YOU", rest: " because nobody else offers this" },
                  { bold: "Kids who won't stop talking", rest: " about what they built in therapy" },
                  { bold: "Families staying 6+ months", rest: " because they're seeing real results" },
                  { bold: "Charging $150-250/session", rest: " as a specialized service" },
                  { bold: "Sessions that are genuinely fun", rest: " while being deeply therapeutic" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-800">
                    <span className="text-xl flex-shrink-0 text-green-600">✅</span>
                    <span><strong>{item.bold}</strong>{item.rest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Stack */}
      <section id="value" className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Makes This Worth $59
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-4">
              This Isn't Just a Guide. It's Your <span className="font-bold text-green-700">Complete Practice Transformation.</span>
            </p>
            <p className="text-xl text-gray-600">
              Most therapy trainings give you theory. This gives you <strong>everything you need to actually do it</strong>—from your first tech setup to your hundredth paying client.
            </p>
          </div>

          {/* Chapter Breakdown */}
          <div className="space-y-6 mb-12">

            {/* Chapters Array */}
            {[
              {
                icon: "🎮",
                title: "CHAPTER 1: Building Your Foundation",
                value: "$297",
                subtitle: "(Compare to play therapy certification courses)",
                items: [
                  "The neuroscience of why Minecraft works therapeutically",
                  "Your role as therapist (you don't need to be a gaming expert)",
                  "How to get supervisor approval (includes copy-paste letter template)"
                ]
              },
              {
                icon: "💻",
                title: "CHAPTER 2: Building Your Technical Setup",
                value: "$497",
                subtitle: "(Comparable to 1:1 tech consulting)",
                items: [
                  "Exact step-by-step setup (avoiding $500 in wrong purchases)",
                  "HIPAA-compliant session management protocols",
                  "How to manage 9-18 clients with one $30 game purchase",
                  "Troubleshooting guide for every common technical issue"
                ]
              },
              {
                icon: "🏗️",
                title: "CHAPTER 3: Building Your Session Space",
                value: "$197",
                items: [
                  "Creative vs. Survival mode: which creates more therapeutic breakthroughs",
                  "How to switch modes mid-session for different clinical needs",
                  "World design principles that maximize therapeutic opportunities"
                ]
              },
              {
                icon: "⚖️",
                title: "CHAPTER 4: Building Your Legal & Ethical Framework",
                value: "$397",
                subtitle: "(Compare to legal consultation fees)",
                items: [
                  "HIPAA-compliant protocols (the 2-platform system that keeps you protected)",
                  "Copy-paste consent forms ready for your practice",
                  "Risk management protocols that satisfy licensing boards",
                  "Parent technology agreements (editable templates included)"
                ],
                highlight: true
              },
              {
                icon: "💬",
                title: "CHAPTER 5: Family Communication Essentials",
                value: "$197",
                items: [
                  "Welcome email templates (copy, customize, send)",
                  "Session reminder templates that reduce no-shows",
                  "Tech troubleshooting scripts (handle 90% of issues in 5 minutes)",
                  "How to explain this to skeptical parents"
                ]
              },
              {
                icon: "🎯",
                title: "CHAPTER 6: Building Your Sessions",
                value: "$997",
                highlight: true,
                featured: true,
                items: [
                  "First session structure that gets kids hooked",
                  "30+ ready-to-use therapeutic activities by diagnosis",
                  "Complete 12-week treatment plans for: Anxiety, Depression, ADHD, Autism, Trauma/PTSD, Adjustment disorders",
                  "Clinical documentation templates that prove therapeutic value",
                  "Sample SOAP notes for insurance/licensing requirements",
                  "Exactly what to say and do in every type of session"
                ]
              },
              {
                icon: "📈",
                title: "CHAPTER 7: Building Your Marketing & Outreach",
                value: "$1,497",
                subtitle: "(Compare to marketing consultants at $200/hr)",
                items: [
                  "12 proven marketing strategies from easiest to most advanced",
                  "How to price TherapyCraft ($150-250/session justification)",
                  "Copy-paste email templates for school counselors, physicians, parent marketing",
                  "Social media post templates (Instagram, Facebook, LinkedIn)",
                  "Website copy templates (homepage, service page)",
                  "Facebook group response scripts that generate 3-5 consultations per post",
                  "Media pitch templates (get featured in local news)",
                  "When to market seasonally for maximum ROI"
                ]
              },
              {
                icon: "🛠️",
                title: "CHAPTER 8: Troubleshooting & Growing Your Confidence",
                value: "$297",
                items: [
                  "Common challenges and exactly how to handle them",
                  "Difficult client behaviors and therapeutic responses",
                  "Technical problems solved in real-time",
                  "How your expertise compounds over time"
                ]
              }
            ].map((chapter, i) => (
              <div
                key={i}
                className={`rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-200 ${
                  chapter.featured
                    ? 'bg-gradient-to-br from-green-100 to-emerald-100 border-4 border-green-600'
                    : 'bg-white border-2 border-green-100'
                }`}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {chapter.icon} {chapter.title}
                  </h3>
                  <span className={`text-lg font-semibold px-4 py-2 rounded-lg whitespace-nowrap ${
                    chapter.featured
                      ? 'bg-green-600 text-white'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    Value: {chapter.value}
                  </span>
                </div>
                {chapter.subtitle && (
                  <p className="text-sm text-gray-600 mb-3 italic">{chapter.subtitle}</p>
                )}
                {chapter.featured && (
                  <p className="text-base font-bold text-green-800 mb-3">⭐ This alone justifies the price ⭐</p>
                )}
                <ul className="space-y-2 text-gray-800">
                  {chapter.items.map((item, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-green-600 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Appendices */}
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl p-6 md:p-8 shadow-lg border-2 border-blue-200">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  📋 COMPLETE APPENDICES: Copy-Ready Templates
                </h3>
                <span className="text-lg font-semibold bg-blue-100 text-blue-800 px-4 py-2 rounded-lg whitespace-nowrap">
                  Value: $697
                </span>
              </div>
              <p className="text-base font-semibold text-gray-900 mb-4">
                Every template is <strong>editable</strong> and ready to customize for your practice:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {[
                    {
                      title: "Legal & Ethical:",
                      items: ["Supervisor approval letter", "Minecraft therapy consent clauses", "Parent technology setup agreements"]
                    },
                    {
                      title: "Parent Communication:",
                      items: ["Initial welcome emails", "Session reminder messages", "Technical troubleshooting guides", "Post-session parent updates"]
                    },
                    {
                      title: "Quick Reference:",
                      items: ["Minecraft basics cheat sheet", "Session troubleshooting guide", "HIPAA compliance checklist"]
                    }
                  ].map((section, i) => (
                    <div key={i}>
                      <h4 className="font-bold text-gray-900 mb-2">{section.title}</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        {section.items.map((item, j) => (
                          <li key={j}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Marketing & Outreach:",
                      items: [
                        "School counselor outreach emails",
                        "Physician/pediatrician referral letters",
                        "Parent-facing marketing flyer content",
                        "3 variations of social media posts",
                        "Website copy (homepage & service page)",
                        "Psychology Today profile snippets",
                        "Media pitch emails"
                      ]
                    },
                    {
                      title: "Session Planning:",
                      items: [
                        "First session checklist",
                        "8-week treatment plans (Anxiety & Depression)",
                        "Therapeutic building prompts by goal",
                        "Progress note phrases for gaming therapy",
                        "Sample session note templates"
                      ]
                    }
                  ].map((section, i) => (
                    <div key={i}>
                      <h4 className="font-bold text-gray-900 mb-2">{section.title}</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        {section.items.map((item, j) => (
                          <li key={j}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Total Value */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl transform hover:scale-105 transition-transform duration-200">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">TOTAL VALUE: $5,263</h3>
            <div className="text-6xl md:text-7xl font-bold my-8">
              Your Investment Today: $59
            </div>
            <p className="text-xl md:text-2xl">
              (That's less than what you'll charge for ONE 30-minute consultation call)
            </p>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900">
            The Real ROI: Make This Back in Your First Session
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600">Let's do the math:</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-100 rounded-2xl p-8 border-2 border-gray-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-700">Old way (traditional therapy):</h3>
              <ul className="space-y-3 text-gray-800">
                <li>• <strong>Charge:</strong> $100-120/session (competing with everyone)</li>
                <li>• <strong>Client stays:</strong> 4-6 sessions average</li>
                <li>• <strong>Lifetime value:</strong> $400-720</li>
                <li>• <strong>Referrals:</strong> Minimal (nothing unique to talk about)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 border-4 border-green-600">
              <h3 className="text-2xl font-bold mb-6 text-green-800">TherapyCraft way:</h3>
              <ul className="space-y-3 text-gray-800">
                <li>• <strong>Charge:</strong> $150-250/session (you're the ONLY one offering this)</li>
                <li>• <strong>Client stays:</strong> 12-24 sessions average (kids love it)</li>
                <li>• <strong>Lifetime value:</strong> $1,800-6,000</li>
                <li>• <strong>Referrals:</strong> Constant (parents tell everyone)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-2xl p-8 text-center shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Just 3 TherapyCraft clients = $4,500-$15,000</h3>
            <p className="text-2xl">This $59 investment pays for itself before your first session even ends.</p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
            Who This Is For
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 border-4 border-green-600">
              <h3 className="text-2xl font-bold mb-6 text-green-800">✅ This is perfect for you if:</h3>
              <ul className="space-y-3 text-gray-800">
                {[
                  "You're a licensed therapist (or in supervised practice) who works with kids/teens",
                  "You want to differentiate yourself and stop competing on price",
                  "You're willing to invest a weekend learning a new approach",
                  "You want clients who are actually excited to come to therapy",
                  "You're tired of resistant kids and burnt-out sessions"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-600">✅</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8 border-2 border-gray-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-700">❌ This is NOT for you if:</h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  "You only work with adults",
                  "You think gaming is \"bad for kids\" and can't be therapeutic",
                  "You need everything to be rigidly structured (this requires flexibility)",
                  "You're not willing to learn basic Minecraft controls (takes 30 mins)"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span>❌</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
            Common Questions Answered
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "But I don't know how to play Minecraft!",
                a: "Perfect. You'll learn alongside your clients—and that role reversal is therapeutically powerful. The guide includes a complete beginner's tutorial, and kids LOVE teaching adults."
              },
              {
                q: "Is this HIPAA compliant?",
                a: "Yes, with the 2-platform system I teach. All conversations happen on secure video platforms. Minecraft is just the activity space. Complete protocols included."
              },
              {
                q: "Will my supervisor approve this?",
                a: "Almost always yes. Includes a professional letter template that frames this properly. Most supervisors approve immediately when they see the structure."
              },
              {
                q: "What if I'm not tech-savvy?",
                a: "The setup guide is written for therapists, not gamers. Step-by-step screenshots for everything. Plus troubleshooting for every issue."
              },
              {
                q: "Will insurance cover this?",
                a: "It's billed exactly like telehealth—same CPT codes. The therapeutic work is identical; the medium is different."
              },
              {
                q: "What if kids just want to play and not do therapy?",
                a: "Chapter 6 teaches you exactly how to balance play with therapeutic goals. Plus, the realm management protocol prevents this."
              },
              {
                q: "How long until I can see my first TherapyCraft client?",
                a: "Most therapists are ready in 2 weeks: 1 week for technical setup, 1 week to review clinical content and templates."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white border-2 border-green-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl font-bold text-gray-900">{faq.q}</h3>
                  <span className="text-2xl text-green-600 flex-shrink-0">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </div>
                {openFaq === index && (
                  <p className="mt-4 text-lg text-gray-700">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl text-center border-2 border-green-200">
            <div className="text-6xl mb-6">🛡️</div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Try TherapyCraft Risk-Free for 30 Days</h2>
            <p className="text-xl mb-6 text-gray-700">
              I'm so confident this will transform your practice that I offer a simple guarantee:
            </p>
            <p className="text-lg mb-6 text-gray-800">
              Implement the system. Try it with actual clients. If you don't see increased engagement, easier sessions,
              and excited families within 30 days, email me for a full refund.
            </p>
            <p className="text-xl font-bold text-gray-900 mb-4">
              No questions asked. No hoops to jump through.
            </p>
            <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              The only risk is missing out on this opportunity to transform your practice.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing/CTA Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Stop Competing and Start Dominating Your Local Market?
          </h2>

          <p className="text-2xl mb-8">
            Click below to get instant access to The Complete TherapyCraft System:
          </p>

          <div className="bg-white text-gray-900 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto mb-8 shadow-2xl">
            <div className="text-5xl font-bold mb-4 text-green-600">$59</div>
            <p className="text-xl mb-6 text-gray-600">One-time payment • Instant digital access</p>

            <div className="space-y-3 text-left mb-8">
              {[
                "Instant digital access (start reading in 2 minutes)",
                "All 8 chapters + complete appendices",
                "30+ therapeutic activities",
                "All templates (editable & ready to use)",
                "Complete marketing system",
                "30-day money-back guarantee"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-800">
                  <span className="text-2xl text-green-600">✅</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://ashleyjangro.thrivecart.com/minecraft-therapy/"
              className="inline-block bg-green-600 hover:bg-green-700 text-white text-2xl font-bold px-12 py-6 rounded-xl shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-200"
            >
              GET INSTANT ACCESS - $59
            </a>

            <p className="text-lg mt-6 text-gray-600">
              Your first TherapyCraft session could be in 2 weeks.
            </p>
          </div>
        </div>
      </section>

      {/* Final PS Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-6 text-lg text-gray-800">
            <p>
              <strong>P.S.</strong> Remember: Every day you wait is another day of resistant kids, competitive pricing,
              and therapy that feels like work instead of play. Meanwhile, other therapists in your area might be reading
              this right now and will be the ONLY TherapyCraft provider in your market.
            </p>

            <p>
              <strong>P.P.S.</strong> Still not sure? Think about it this way: This costs less than one dinner out,
              but could add $50,000-100,000 to your annual income. The question isn't "Is this worth $59?"
              The question is "Can I afford NOT to invest in this?"
            </p>

            <div className="text-center mt-8">
              <a
                href="#pricing"
                className="inline-block bg-green-600 hover:bg-green-700 text-white text-2xl font-bold px-12 py-6 rounded-xl shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-200"
              >
                YES! GIVE ME ACCESS NOW - $59
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
