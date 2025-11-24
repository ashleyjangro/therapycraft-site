'use client';

import { Metadata } from 'next';
import { useState, useEffect } from 'react';

export default function CompleteSystemSalesPage() {
  useEffect(() => {
    // Load ThriveCart embed script
    const script = document.createElement('script');
    script.src = '//tinder.thrivecart.com/embed/v2/thrivecart.js';
    script.id = 'tc-ashleyjangro-39-2JH1HW';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.getElementById('tc-ashleyjangro-39-2JH1HW');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section
        className="relative overflow-hidden min-h-[600px] flex items-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/Minecraft Therapy Hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative container mx-auto px-4 py-16 md:py-24 text-center z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
              Launch Minecraft Therapy: The Innovative Approach Parents Are Desperately Searching For
            </h1>

            <p className="text-2xl md:text-3xl text-green-50 font-medium mb-12 max-w-4xl mx-auto drop-shadow-lg">
              Everything you need to confidently implement Minecraft in your therapy practice, from your first session to advanced techniques. Fill your caseload with ease while turning Minecraft into your most powerful therapeutic tool.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a
                href="#pricing"
                className="bg-green-500 hover:bg-green-400 text-gray-900 text-2xl font-bold px-12 py-6 rounded-xl shadow-2xl hover:shadow-green-400/50 transform hover:scale-105 transition-all duration-200"
              >
                Get The Complete TherapyCraft System Now
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-green-50">
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span> Instant digital access
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span> Start in 2 weeks
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
              "😓 You know traditional talk therapy isn't connecting with gaming kids the way you'd hoped",
              "🎮 You want to offer Minecraft therapy but have no idea where to start",
              "💡 You wish you had a way to engage resistant kids that feels natural instead of forced",
              "💸 Meanwhile, you're stuck competing on price with every other therapist offering the same traditional talk therapy"
            ].map((pain, i) => (
              <div key={i} className="bg-gray-50 border-l-4 border-gray-400 rounded-lg p-6 shadow-sm">
                <p className="text-lg text-gray-800">{pain}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 mb-12 border border-green-200">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Here's the problem:</h3>
            <p className="text-xl mb-6 text-gray-700">
              Minecraft is an incredibly powerful therapeutic tool, but most therapists have no idea where to start. The technical setup feels overwhelming, the clinical application seems unclear, and figuring it all out from scratch would take months of trial and error.
            </p>
            <p className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              You don't need to reinvent the wheel. You need a proven system.
            </p>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">What if you could:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "✨", text: "Have waiting lists of parents begging to work with you (not the other way around)" },
              { icon: "💰", text: "Command premium rates ($150-250 per session) because you offer something NO other therapist in your area does" },
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-blue-200">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <img
                  src="/images/ashley-photo.jpg"
                  alt="Ashley Jangro, LPCC"
                  className="w-48 h-48 rounded-2xl object-cover object-top shadow-lg"
                  style={{ objectPosition: '50% 20%' }}
                />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  "I built a thriving practice helping kids heal through the game they love, and now I teach therapists exactly how to replicate this system."
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
                  { num: "3️⃣", text: "I built a thriving practice where families ", bold: "happily pay premium rates for specialized care" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-2xl flex-shrink-0">{item.num}</span>
                    <p className="text-lg text-gray-700">
                      <strong>{item.text}</strong>{item.bold}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-lg mt-6 font-semibold text-blue-700">Now I teach therapists exactly how to replicate this system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why TherapyCraft Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
            Why TherapyCraft Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Instant Engagement",
                description: "Kids who won't talk suddenly become storytellers. The game creates immediate therapeutic rapport."
              },
              {
                icon: "🎯",
                title: "Measurable Progress",
                description: "Built-in ways to track therapeutic goals through gameplay. Visual progress that clients and parents can see."
              },
              {
                icon: "🚀",
                title: "Breakthrough Results",
                description: "Turn your hardest cases into success stories. Clients make breakthroughs that surprise even experienced therapists."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:shadow-xl hover:scale-105 transition-all duration-200 text-center">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-lg text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break with Image */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <img
            src="/images/Minecraft Therapy 02.png"
            alt="Minecraft therapy session example"
            className="w-full rounded-2xl shadow-2xl"
          />
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
                  "Unable to justify premium pricing",
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
                  { bold: "Command premium rates ($150-250/session)", rest: " as a specialized service" },
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
              What's Inside The Complete TherapyCraft System
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-4">
              This isn't just theory. It's <span className="font-bold text-green-700">everything you need to actually do it</span>.
            </p>
            <p className="text-xl text-gray-600">
              From your first tech setup to your hundredth session, you'll have the exact roadmap I wish I'd had when I started.
            </p>
          </div>

          {/* Chapter Breakdown */}
          <div className="space-y-6 mb-12">

            {/* Chapters Array */}
            {[
              {
                icon: "🎮",
                title: "CHAPTER 1: Building Your Foundation",
                items: [
                  "The neuroscience of why Minecraft works therapeutically",
                  "Your role as therapist (you don't need to be a gaming expert)",
                  "How to get supervisor approval (includes copy-paste letter template)"
                ]
              },
              {
                icon: "💻",
                title: "CHAPTER 2: Building Your Technical Setup",
                items: [
                  "Exact step-by-step setup (avoiding costly wrong purchases)",
                  "HIPAA-compliant session management protocols",
                  "How to manage 9-18 clients with one $30 game purchase",
                  "Troubleshooting guide for every common technical issue"
                ]
              },
              {
                icon: "🏗️",
                title: "CHAPTER 3: Building Your Session Space",
                items: [
                  "Creative vs. Survival mode: which creates more therapeutic breakthroughs",
                  "How to switch modes mid-session for different clinical needs",
                  "World design principles that maximize therapeutic opportunities"
                ]
              },
              {
                icon: "⚖️",
                title: "CHAPTER 4: Building Your Legal & Ethical Framework",
                highlight: true,
                items: [
                  "HIPAA-compliant protocols (the 2-platform system that keeps you protected)",
                  "Copy-paste consent forms ready for your practice",
                  "Risk management protocols that satisfy licensing boards",
                  "Parent technology agreements (editable templates included)"
                ]
              },
              {
                icon: "💬",
                title: "CHAPTER 5: Family Communication Essentials",
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
                items: [
                  "12 proven marketing strategies from easiest to most advanced",
                  "How to price TherapyCraft as a specialized service",
                  "Copy-paste email templates for school counselors, physicians, parent marketing",
                  "Social media post templates (Instagram, Facebook, LinkedIn)",
                  "Website copy templates (homepage, service page)",
                  "Facebook group response scripts that generate consultations",
                  "Media pitch templates (get featured in local news)",
                  "When to market seasonally for maximum impact"
                ]
              },
              {
                icon: "🛠️",
                title: "CHAPTER 8: Troubleshooting & Growing Your Confidence",
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
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {chapter.icon} {chapter.title}
                  </h3>
                </div>
                {chapter.featured && (
                  <p className="text-base font-bold text-green-800 mb-3">⭐ The most comprehensive chapter ⭐</p>
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
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  📋 COMPLETE APPENDICES: Copy-Ready Templates
                </h3>
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

          {/* Simple Pricing Statement */}
          <a href="#pricing" className="block">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl hover:from-blue-700 hover:to-blue-800 transition-all cursor-pointer transform hover:scale-105 duration-200">
              <p className="text-2xl md:text-3xl mb-4">Everything you need to launch Minecraft therapy:</p>
              <div className="text-6xl md:text-7xl font-bold my-6">
                $59
              </div>
              <p className="text-xl md:text-2xl">
                One-time payment • Instant access • Everything included
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* Visual Break with Image */}
      <section className="py-12 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <img
            src="/images/Minecraft Therapy 04.png"
            alt="Climbing mountains together in Minecraft therapy"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* What You Get + Support */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-green-200">
            <div className="text-6xl mb-6 text-center">🎁</div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">Everything You Need to Launch Today</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Instant Access Includes:</h3>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex gap-3">
                    <span className="text-green-600 flex-shrink-0">✓</span>
                    <span>Instant digital access (start reading in 2 minutes)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 flex-shrink-0">✓</span>
                    <span>All templates ready to customize</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 flex-shrink-0">✓</span>
                    <span>Complete technical setup guide</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 flex-shrink-0">✓</span>
                    <span>Step-by-step session plans</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 flex-shrink-0">✓</span>
                    <span>Marketing system to fill your caseload</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">📧 You're Not Doing This Alone</h3>
                <p className="text-gray-800 mb-4">
                  Questions? Stuck on setup? Not sure how to adapt for a specific diagnosis?
                </p>
                <p className="text-gray-900 font-semibold mb-4">
                  Email me directly at ashley@therapycraft.io
                </p>
                <p className="text-gray-700">
                  I personally respond to every therapist using this system.
                </p>
              </div>
            </div>

            <p className="text-2xl font-bold text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Start your first TherapyCraft session in as little as 2 weeks.
            </p>
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
                  "You want sessions that feel energizing, not draining"
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

      {/* Pricing/CTA Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Offer Something No Other Therapist in Your Area Does?
          </h2>

          <p className="text-2xl mb-12">
            Get instant access to The Complete TherapyCraft System:
          </p>

          <div className="bg-white rounded-2xl p-8 md:p-12 max-w-3xl mx-auto shadow-2xl">
            <div className="tc-v2-embeddable-target" data-thrivecart-account="ashleyjangro" data-thrivecart-tpl="v2" data-thrivecart-product="39" data-thrivecart-embeddable="tc-ashleyjangro-39-2JH1HW"></div>
          </div>
        </div>
      </section>

      {/* Final PS Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-6 text-lg text-gray-800">
            <p>
              <strong>P.S.</strong> Other therapists in your area might be reading this right now. The first one to launch
              will be the ONLY TherapyCraft provider in your market. Don't let this opportunity pass you by.
            </p>

            <p>
              <strong>P.P.S.</strong> Still not sure? Think about it this way: This costs less than one dinner out,
              but could add $50,000-100,000 per year to your practice revenue. The question isn't "Is this worth $59?"
              The question is "Can I afford NOT to invest in this?"
            </p>

            <div className="text-center mt-8">
              <a
                href="#pricing"
                className="inline-block bg-green-600 hover:bg-green-700 text-white text-2xl font-bold px-12 py-6 rounded-xl shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-200"
              >
                Get Started Now - $59
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 TherapyCraft. All rights reserved.</p>
          <p className="mb-4">
            Created by Ashley Jangro, LPCC | Questions?{" "}
            <a href="mailto:ashley@therapycraft.io" className="text-blue-400 hover:text-blue-300">
              ashley@therapycraft.io
            </a>
          </p>
          <a
            href="https://steadywithin.com"
            className="text-blue-400 hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Counseling in Castle Rock
          </a>
        </div>
      </footer>

    </div>
  );
}
