import Image from "next/image";
import type { Metadata } from "next";
import EmailSignupForm from "./components/EmailSignupForm";

export const metadata: Metadata = {
  title: "Start Offering $150-250/Session Minecraft Therapy | Complete TherapyCraft Professional System",
  description: "Add premium Minecraft therapy to your practice in 30 days. Complete system includes setup, legal templates, session plans, and marketing materials. ROI: First client pays for everything.",
  keywords: "minecraft therapy training, premium therapy services, digital therapy, minecraft therapy certification, therapycraft system, high-value therapy, specialty therapy services, minecraft therapy business",
  openGraph: {
    title: "Start Offering $150-250/Session Minecraft Therapy | TherapyCraft Professional System",
    description: "Complete professional system to add premium Minecraft therapy to your practice. Setup in 30 days, first client pays for everything.",
    type: "website",
    images: ["/images/Minecraft Therapy Hero.png"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "TherapyCraft Professional System: Complete Minecraft Therapy Implementation",
    "description": "Complete professional system for therapists to add $150-250/session Minecraft therapy to their practice. Includes setup, legal templates, session plans, and marketing materials.",
    "provider": {
      "@type": "Person",
      "name": "Ashley Jangro",
      "jobTitle": "Licensed Professional Clinical Counselor",
      "url": "https://steadywithin.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "59",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "keywords": ["minecraft therapy training", "premium therapy services", "digital therapy certification", "specialty therapy", "therapycraft system"],
    "audience": {
      "@type": "Audience",
      "audienceType": "Licensed Therapists, Counselors, Mental Health Professionals"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <main className="min-h-screen bg-white">
      {/* Parent Banner */}
      <div className="bg-blue-600 text-white py-2 text-center">
        <p className="text-sm">
          <span className="font-medium">Parents:</span> Looking for help for your child? 
          <a href="/for-parents" className="underline ml-2 hover:text-blue-200">
            Learn about TherapyCraft for families →
          </a>
        </p>
      </div>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/Minecraft Therapy Hero.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              <span className="text-green-400">Minecraft Therapy</span> Training:
              <br />Complete Professional System
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              Transform therapy sessions with kids and teens who struggle with traditional talk therapy - using a world they already love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#get-system"
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
              >
                Get Complete System
              </a>
              <a
                href="#free-guide"
                className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Start With Free Guide
              </a>
            </div>
            <p className="mt-4 text-green-100">
              Complete implementation system • Ready to launch in 30 days • Premium specialty service
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 relative" style={{
        backgroundImage: `url('/images/BG-1.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Reach Kids Who Don't Respond to Traditional Therapy
          </h2>
          <p className="text-center text-black mb-8">
            TherapyCraft: The Complete Professional Minecraft Therapy System
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-lg mb-2 text-green-700">Breakthrough Connection</h3>
              <p className="text-black">
                Meet clients in a world they love. Build trust and rapport faster than traditional talk therapy allows.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-lg mb-2 text-blue-700">Evidence-Based Approach</h3>
              <p className="text-black">
                Combines play therapy, CBT, and narrative therapy principles with the engagement power of Minecraft.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-lg mb-2 text-purple-700">Professional Implementation</h3>
              <p className="text-black">
                Complete HIPAA-compliant system with legal templates, session plans, and clinical documentation.
              </p>
            </div>
          </div>
          <p className="text-center text-black mt-6 font-semibold">
            You don't need gaming experience. You just need the right therapeutic framework.
          </p>
        </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="how-it-works" className="py-16 relative" style={{
        backgroundImage: `url('/images/BG-3.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-gray-50/95"></div>
        <div className="relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-black">
            Can I Really Use Minecraft in Therapy?
          </h2>
          <p className="text-center text-black mb-12 text-lg">
            Yes! Whether you're a school counselor, private practice therapist, or coach-<br />
            TherapyCraft helps you use Minecraft ethically, intentionally, and creatively to support:
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-black">
                    <strong>Emotional expression</strong> and communication
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-black">
                    <strong>Trauma-informed play</strong> and processing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-black">
                    <strong>Self-esteem</strong> and confidence building
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-black">
                    <strong>Co-regulation</strong> and emotional safety
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-black">
                    <strong>Social skills</strong> and relationship building
                  </span>
                </li>
              </ul>
              <p className="mt-6 text-black font-medium">
                You bring the clinical lens. Minecraft brings the world.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/images/TherapyCraft Minecraft Therapy House.png"
                alt="Minecraft therapy session in progress"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Free Guide CTA */}
      <section id="free-guide" className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Here: Free TherapyCraft 101 Guide
          </h2>
          <p className="text-xl mb-8 text-green-50">
            Get the foundation - see why therapists are charging $150-250/session for this specialty service
          </p>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">What You'll Discover:</h3>
            <ul className="text-left max-w-lg mx-auto space-y-2">
              <li>✓ Which version of Minecraft to use (and what to avoid, especially for Mac users)</li>
              <li>✓ The privacy issue most therapists miss</li>
              <li>✓ Creative vs. Survival Mode - when to use each</li>
              <li>✓ Why your setup method determines client safety</li>
              <li>✓ The science behind why kids open up in virtual worlds</li>
              <li>✓ Why Minecraft therapy works, even if you've never played before</li>
              <li>✓ How to price and position this premium service</li>
            </ul>
          </div>
          <EmailSignupForm />
        </div>
      </section>

      {/* Real Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-black">
            The Results That Changed Everything
          </h2>
          <p className="text-center text-black mb-12">
            3 case studies that prove Minecraft isn't just play - it's transformation
          </p>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-green-700">Case Study #1: The Anxious Teen Who Found Her Voice</h3>
              <p className="text-black mb-3">
                She came to me with intense anxiety, responding only in whispers and "I don't know." Traditional 
                talk therapy left her feeling exposed and overwhelmed.
              </p>
              <p className="text-black italic">
                <strong>8 weeks later:</strong> She was confidently teaching me Minecraft strategies, and that confidence 
                carried over. She started speaking up in class, connecting with peers, and advocating for herself at home.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-blue-700">Case Study #2: The Child Processing Divorce</h3>
              <p className="text-black mb-3">
                A young teen carrying enormous tension from his parents' divorce. He minimized conflict, 
                buried his emotions, and blamed himself for everything.
              </p>
              <p className="text-black italic">
                <strong>The breakthrough:</strong> He described his father as a "creeper" - explosive and unpredictable. 
                This metaphor opened months of productive processing he couldn't access through direct conversation.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-purple-700">Case Study #3: The Resistant Teen Who Learned to Trust</h3>
              <p className="text-black mb-3">
                After being humiliated by an authority figure, he shut down completely. Refused traditional therapy. 
                Wouldn't engage with any adult trying to help.
              </p>
              <p className="text-black italic">
                <strong>The shift:</strong> When I needed backup in Minecraft and he saved me from mobs, everything changed. 
                We became teammates instead of therapist/client. He's now back in school and thriving.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-green-600 rounded-lg text-center">
            <p className="text-xl text-white font-bold mb-4">
              These Are Just the Highlights
            </p>
            <p className="text-green-100 mb-6">
              Get the complete case studies with detailed therapeutic techniques, session excerpts, 
              and clinical insights that show you exactly how to create these breakthroughs in your practice.
            </p>
            <a
              href="#free-guide"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Download Full Case Studies Free
            </a>
          </div>
        </div>
      </section>

      {/* Meet Your Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">
                Meet Your Guide: Ashley Jangro, LPCC & Life Coach
              </h2>
              <p className="text-black mb-4">
                Hi, I'm Ashley. I'm an LPCC, certified life coach, and educator who specializes in helping kids 
                and teens process emotions, build self-awareness, and feel safe in their bodies and relationships.
              </p>
              <p className="text-black mb-4">
                I started using Minecraft in my own sessions after seeing how quickly kids opened up, relaxed, 
                and engaged when the therapy room looked like a world they already loved. Since then, I've 
                developed tools and systems for therapists who want to do the same-without needing to be 
                tech experts or gamers.
              </p>
              <p className="text-black font-medium">
                TherapyCraft is here to help you do that with ease.
              </p>
            </div>
            <div>
              <Image
                src="/images/ashley-photo.jpg"
                alt="Ashley Jangro, LPCC"
                width={400}
                height={500}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Paid Product */}
      <section id="get-system" className="py-16 relative" style={{
        backgroundImage: `url('/images/TherapyCraft_Backgroud.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-gray-50/95"></div>
        <div className="relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              The Complete TherapyCraft Professional System
            </h2>
            <p className="text-xl text-black mb-4">
              Everything you need to confidently integrate Minecraft into your therapeutic practice
            </p>
            <div className="bg-green-100 border border-green-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-green-800 font-semibold">
                ⚡ Ready to launch in 30 days • Complete professional setup • Premium specialty service (therapists typically charge $150-250/session)
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Complete Professional Implementation</h3>
              <p className="text-green-100">No setup guesswork • No missing pieces • Ready to launch</p>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-black">🏗️ Setup & Legal Framework</h4>
                  <ul className="space-y-2 text-black mb-6">
                    <li>✓ Step-by-step technical setup (complete Realm walkthrough)</li>
                    <li>✓ HIPAA-compliant consent forms (copy & paste ready)</li>
                    <li>✓ Parent communication templates</li>
                    <li>✓ Privacy & safety protocols</li>
                    <li>✓ Insurance documentation templates</li>
                  </ul>

                  <h4 className="text-xl font-semibold mb-4 text-black">🎯 Clinical Resources</h4>
                  <ul className="space-y-2 text-black mb-6">
                    <li>✓ 12-24 week treatment roadmaps by diagnosis</li>
                    <li>✓ 50+ therapeutic activities and prompts</li>
                    <li>✓ Session planning templates</li>
                    <li>✓ Progress tracking tools</li>
                    <li>✓ Crisis intervention protocols</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-black">💼 Practice Integration</h4>
                  <ul className="space-y-2 text-black mb-6">
                    <li>✓ How to position this specialty service professionally</li>
                    <li>✓ Marketing templates (Psychology Today, website copy)</li>
                    <li>✓ Referral partner education materials</li>
                    <li>✓ Client onboarding and parent communication</li>
                    <li>✓ FAQ scripts for common questions</li>
                  </ul>

                  <h4 className="text-xl font-semibold mb-4 text-black">📚 Professional Support</h4>
                  <ul className="space-y-2 text-black mb-6">
                    <li>✓ Research citations & clinical rationale</li>
                    <li>✓ Supervisor approval letter templates</li>
                    <li>✓ Troubleshooting guides</li>
                    <li>✓ Long-term client management systems</li>
                    <li>✓ Continuing education documentation</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <h4 className="text-lg font-semibold mb-3 text-blue-800">⏱️ Time Savings Breakdown:</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-black">Setup Research: 15-20 hours saved</p>
                    <p className="text-blue-700">Complete technical walkthrough included</p>
                  </div>
                  <div>
                    <p className="font-medium text-black">Form Templates: 10-15 hours saved</p>
                    <p className="text-blue-700">Done-for-you HIPAA compliance</p>
                  </div>
                  <div>
                    <p className="font-medium text-black">Session Planning: 20-30 hours saved</p>
                    <p className="text-blue-700">Activities, prompts, and protocols ready</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 text-center">
              <div className="mb-6">
                <p className="text-sm text-black line-through mb-1">Individual consultation value: $500+</p>
                <p className="text-5xl font-bold text-green-600 mb-2">$59</p>
                <p className="text-black">One-time investment • Lifetime access</p>
              </div>
              
              <a
                href="https://ashleyjangro.thrivecart.com/minecraft-therapy/"
                className="inline-block bg-green-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl mb-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Complete System - $59
              </a>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-black">
                <span>✓ Instant digital access</span>
                <span>✓ Complete in 30 days or less</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Common Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">
                Do I need to be good at Minecraft to use this system?
              </h3>
              <p className="text-black">
                Not at all! The system includes complete beginner tutorials. Your expertise is in therapy, not gaming. 
                Many therapists find that being a "learner" alongside clients actually strengthens rapport and therapeutic connection.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">
                How is this different from regular play therapy?
              </h3>
              <p className="text-black">
                Minecraft therapy combines the engagement of digital worlds with evidence-based therapeutic approaches. 
                It's particularly effective for teens who've outgrown traditional play therapy but aren't ready for pure talk therapy.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">
                How long until I can start seeing clients?
              </h3>
              <p className="text-black">
                Most therapists are ready within 2-4 weeks. The system includes everything: technical setup, 
                legal templates, session plans, and marketing materials. No additional research needed.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">
                Is this covered by insurance?
              </h3>
              <p className="text-black">
                This is typically a private-pay specialty service (which allows for higher rates). The system 
                includes templates for insurance documentation when applicable.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">
                What if my supervisor has questions?
              </h3>
              <p className="text-black">
                The system includes research citations, clinical rationale, and a supervisor approval letter 
                template to address common concerns about digital therapy modalities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parents Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="bg-white border-2 border-blue-200 rounded-lg p-8 shadow-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">
                Parents: Is Your Teen Struggling?
              </h2>
              <p className="text-lg mb-6 text-black">
                If traditional therapy isn't working, let's discuss whether Minecraft therapy 
                could help your child open up and engage.
              </p>
              <a
                href="mailto:ashley@jangro.com?subject=TherapyCraft Parent Consultation"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Book Free 15-Minute Consultation
              </a>
              <p className="text-black mt-4">
                Colorado residents • Teletherapy available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            See What's Possible in Your Practice
          </h2>
          <p className="text-xl mb-8">
            Download 3 real case studies that show exactly how Minecraft creates therapeutic breakthroughs.
          </p>
          <a
            href="#free-guide"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors"
          >
            Get Free Case Studies Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 TherapyCraft. All rights reserved.</p>
          <p className="mt-2">
            Created by Ashley Jangro, LPCC | Questions? ashley@jangro.com
          </p>
          <p className="mt-2">
            <a href="https://steadywithin.com" className="text-gray-400 hover:text-white transition-colors">
              Counseling in Castle Rock
            </a>
          </p>
        </div>
      </footer>
    </main>
    </>
  );
}
