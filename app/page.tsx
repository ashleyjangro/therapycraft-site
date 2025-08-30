import Image from "next/image";
import type { Metadata } from "next";
import EmailSignupForm from "./components/EmailSignupForm";

export const metadata: Metadata = {
  title: "Minecraft Therapy Training | Free TherapyCraft 101 Guide for Therapists",
  description: "Learn how to use minecraft therapy with kids and teens who have autism, ADHD, and anxiety. Free guide includes HIPAA-compliant setup, activities, and clinical protocols for therapists.",
  keywords: "minecraft therapy, minecraft therapy training, minecraft therapy activities, minecraft therapy worksheets, therapeutic minecraft, minecraft play therapy, autism therapy, ADHD therapy, neurodivergent therapy, digital play therapy",
  openGraph: {
    title: "Minecraft Therapy Training | TherapyCraft 101 Free Guide",
    description: "Transform therapy sessions with Minecraft. Free guide for therapists with setup, activities, and clinical protocols for kids with autism, ADHD, and anxiety.",
    type: "website",
    images: ["/images/Minecraft Therapy Hero.png"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "TherapyCraft 101: Minecraft Therapy Training",
    "description": "Learn how to use Minecraft therapy with kids and teens who have autism, ADHD, and anxiety. Complete beginner's guide for therapists.",
    "provider": {
      "@type": "Person",
      "name": "Ashley Jangro",
      "jobTitle": "Licensed Professional Clinical Counselor",
      "url": "https://steadywithin.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "keywords": ["minecraft therapy", "autism therapy", "ADHD therapy", "play therapy", "digital therapy"],
    "audience": {
      "@type": "Audience",
      "audienceType": "Therapists, Counselors, Coaches"
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
              <br />Free TherapyCraft 101 Guide
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              Learn how to use Minecraft safely and creatively in therapy sessions with kids and teens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#get-guide"
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Get Your Free Guide
              </a>
              <a
                href="#how-it-works"
                className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors"
              >
                See How It Works
              </a>
            </div>
            <p className="mt-4 text-green-100">
              A therapist-created system for integrating Minecraft into your clinical work
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
          <h2 className="text-3xl font-bold text-center mb-12">
            Use Minecraft as a Powerful Therapy Tool
          </h2>
          <p className="text-center text-gray-700 mb-8">
            TherapyCraft 101: A Complete Beginner's Guide to Minecraft-Based Sessions
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <p className="text-gray-800">
                A therapist-created system for integrating Minecraft into your clinical work with kids and teens.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <p className="text-gray-800">
                It's designed to help you build rapport, emotional regulation, self-expression, and trust-all inside a familiar digital world your clients already love.
              </p>
            </div>
          </div>
          <p className="text-center text-gray-700 mt-6 font-semibold">
            You don't need to be tech-savvy. You don't need to be a gamer. You just need a guide.
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
          <h2 className="text-3xl font-bold text-center mb-4">
            Can I Really Use Minecraft in Therapy?
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Yes! Whether you're a school counselor, private practice therapist, or coach-<br />
            TherapyCraft helps you use Minecraft ethically, intentionally, and creatively to support:
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>
                    <strong>Emotional expression</strong> and communication
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>
                    <strong>Trauma-informed play</strong> and processing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>
                    <strong>Self-esteem</strong> and confidence building
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>
                    <strong>Co-regulation</strong> and emotional safety
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>
                    <strong>Social skills</strong> and relationship building
                  </span>
                </li>
              </ul>
              <p className="mt-6 text-gray-700 font-medium">
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
      <section id="get-guide" className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get the Free PDF Guide: TherapyCraft 101
          </h2>
          <p className="text-xl mb-8 text-green-50">
            TherapyCraft 101: A Complete Beginner's Guide to Minecraft-Based Sessions
          </p>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">What You'll Learn in the Guide:</h3>
            <ul className="text-left max-w-lg mx-auto space-y-2">
              <li>✓ Which version of Minecraft to use (and what to avoid, especially for Mac users)</li>
              <li>✓ How to set up a private, secure therapy Realm using Minecraft Bedrock Edition</li>
              <li>✓ Creative vs. Survival Mode - how each supports emotional work</li>
              <li>✓ Privacy and access tips to protect your clients and your license</li>
              <li>✓ Before and after session protocols to stay HIPAA-friendly</li>
              <li>✓ Why Minecraft therapy works, even if you've never played before</li>
              <li>✓ Tips for onboarding and consent (full templates in the Starter System)</li>
            </ul>
          </div>
          <EmailSignupForm />
        </div>
      </section>

      {/* Real Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            Real Breakthroughs from My Practice
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Every week, I watch Minecraft create moments that traditional therapy couldn't reach
          </p>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-green-700">When Traditional Talking Doesn't Work</h3>
              <p className="text-gray-700 mb-3">
                Many teens struggle to discuss difficult family relationships directly. But through Minecraft's 
                metaphors-comparing situations to Creepers, Zombies, or Villagers-they find safe ways to 
                express complex emotions.
              </p>
              <p className="text-gray-700 italic">
                One simple question like "Which Minecraft mob reminds you of this situation?" can unlock 
                weeks of productive conversation that wouldn't happen face-to-face.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-blue-700">Building Confidence Through Teaching</h3>
              <p className="text-gray-700 mb-3">
                I've seen anxious clients transform when they become the expert. By letting them teach me 
                their building techniques or show me their worlds, the power dynamic shifts.
              </p>
              <p className="text-gray-700 italic">
                Suddenly they're leading, instructing, and demonstrating mastery. This confidence often 
                spreads to other areas-school presentations, social interactions, family conversations.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-purple-700">Creating Connection Through Collaboration</h3>
              <p className="text-gray-700 mb-3">
                For kids who struggle with adult relationships, Minecraft becomes a bridge. We work as 
                a team-sharing resources, protecting each other from mobs, building together.
              </p>
              <p className="text-gray-700 italic">
                This collaborative play models healthy relationships in a non-threatening way. Many parents 
                report their kids are more open to real-world connections after experiencing trust in the game.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg text-center">
            <p className="text-lg text-gray-700 font-medium mb-2">
              My Favorite Assessment Question:
            </p>
            <p className="text-xl text-green-600 italic">
              "If your family members were Minecraft mobs, which ones would they be?"
            </p>
            <p className="text-gray-600 mt-3">
              The answers reveal more about relationships than hours of traditional questioning ever could.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Your Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Meet Your Guide: Ashley Jangro, LPCC & Life Coach
              </h2>
              <p className="text-gray-700 mb-4">
                Hi, I'm Ashley. I'm an LPCC, certified life coach, and educator who specializes in helping kids 
                and teens process emotions, build self-awareness, and feel safe in their bodies and relationships.
              </p>
              <p className="text-gray-700 mb-4">
                I started using Minecraft in my own sessions after seeing how quickly kids opened up, relaxed, 
                and engaged when the therapy room looked like a world they already loved. Since then, I've 
                developed tools and systems for therapists who want to do the same-without needing to be 
                tech experts or gamers.
              </p>
              <p className="text-gray-700 font-medium">
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
      <section className="py-16 relative" style={{
        backgroundImage: `url('/images/TherapyCraft_Backgroud.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-gray-50/95"></div>
        <div className="relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready for the Complete Minecraft Therapy Starter System?
            </h2>
            <p className="text-xl text-gray-600">
              Get all the templates, session plans, and clinical resources you need 
              to confidently integrate Minecraft into your practice.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  The Complete Minecraft Therapy System:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>📝 Done-for-you consent forms (copy & paste)</li>
                  <li>🎯 12 session plans for common issues (anxiety, ADHD, trauma)</li>
                  <li>📧 "How to explain this to parents" email scripts</li>
                  <li>📊 Progress notes templates that insurance accepts</li>
                  <li>🎮 50+ therapeutic building challenges & prompts</li>
                  <li>💼 Marketing copy to attract Minecraft therapy clients</li>
                  <li>📚 Clinical rationale & research citations</li>
                  <li>🔒 HIPAA compliance checklist for online sessions</li>
                </ul>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold text-green-600">$29.99</p>
                  <p className="text-gray-600">One-time payment</p>
                </div>
                <a
                  href="https://ashleyjangro.thrivecart.com/minecraft-therapy/"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Instant Access
                </a>
                <p className="text-center text-sm text-gray-600 mt-4">
                  30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Do I need to be good at Minecraft?
              </h3>
              <p className="text-gray-700">
                Not at all! The guide includes a complete beginner's tutorial.
                Your clients will actually enjoy teaching you.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Is this evidence-based?
              </h3>
              <p className="text-gray-700">
                Yes. Minecraft therapy incorporates play therapy, CBT, and
                narrative therapy principles. The guide includes research
                citations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                What ages does this work for?
              </h3>
              <p className="text-gray-700">
                Primarily 8-18, though we've seen success with young adults
                and even some family sessions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Can I use this for teletherapy?
              </h3>
              <p className="text-gray-700">
                Absolutely! The guide includes specific setup instructions for
                remote sessions.
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
              <p className="text-lg mb-6 text-gray-700">
                If traditional therapy isn't working, let's discuss whether Minecraft therapy 
                could help your child open up and engage.
              </p>
              <a
                href="mailto:ashley@steadywithin.com?subject=TherapyCraft Parent Consultation"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Book Free 15-Minute Consultation
              </a>
              <p className="text-gray-600 mt-4">
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
            Get Started Now
          </h2>
          <p className="text-xl mb-8">
            Download the free guide and take your first step into the world of Minecraft-based therapy.
          </p>
          <a
            href="#get-guide"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors"
          >
            Download Free TherapyCraft 101 Guide
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 TherapyCraft. All rights reserved.</p>
          <p className="mt-2">
            Created by Ashley Jangro, LPCC | Questions? ashley@steadywithin.com
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
