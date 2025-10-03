import Image from "next/image";
import type { Metadata } from "next";
import EmailSignupForm from "./components/EmailSignupForm";

export const metadata: Metadata = {
  title: "See Real Minecraft Therapy Breakthroughs | 3 Case Studies That Transformed My Practice",
  description: "Discover how Minecraft therapy creates breakthroughs with resistant teens, anxious kids, and trauma survivors. Free case study guide shows real clinical outcomes and transformations.",
  keywords: "minecraft therapy case studies, minecraft therapy outcomes, teen therapy breakthroughs, resistant teen therapy, gaming therapy results, therapycraft success stories, minecraft clinical outcomes, digital therapy transformations",
  openGraph: {
    title: "3 Real Minecraft Therapy Breakthroughs That Changed Everything",
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
          <a href="/minecraft-therapy-teens" className="underline ml-2 hover:text-blue-200">
            Learn about TherapyCraft for kids and teens →
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
              How to Use <span className="text-green-400">Minecraft</span> as a
              <br />Powerful Therapy Tool
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              See how to use Minecraft to get real breakthroughs with anxious, resistant, and traumatized clients
            </p>
            <div className="flex justify-center">
              <a
                href="#free-guide"
                className="bg-green-600 text-white px-10 py-4 rounded-lg text-xl font-bold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Download Clinical Guide Free
              </a>
            </div>
            <p className="mt-4 text-green-100 text-sm">
              Ready to get the complete professional system now? 
              <a href="/sales" className="underline hover:text-white transition-colors">
                See full implementation system →
              </a>
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
            What You'll Experience When You Add Minecraft to Your Practice
          </h2>
          <p className="text-center text-black mb-8">
            What you'll discover when you see Minecraft through a therapeutic lens
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-lg mb-2 text-green-700">Become the Therapist Kids Want to See</h3>
              <p className="text-black">
                Watch resistant clients light up and actually look forward to sessions. Parents will ask how you did it.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-lg mb-2 text-blue-700">Turn Your Hardest Cases Into Success Stories</h3>
              <p className="text-black">
                Reach kids who won't talk, connect with teens who've shut down, and create breakthroughs where others failed.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-lg mb-2 text-purple-700">Watch Silent Kids Become Storytellers</h3>
              <p className="text-black">
                Transform "I don't know" responses into deep therapeutic conversations through the power of virtual worlds.
              </p>
            </div>
          </div>
          <p className="text-center text-black mt-6 font-semibold">
            You don't need gaming experience. You just need the right therapeutic framework.
          </p>
          <div className="text-center mt-8">
            <a
              href="#free-guide"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              See How Minecraft Transformed My Practice
            </a>
            <p className="text-sm text-gray-600 mt-2">3 real client breakthroughs + clinical insights</p>
          </div>
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
              <div className="mt-8">
                <a
                  href="#free-guide"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Get Real Session Examples
                </a>
                <p className="text-sm text-gray-600 mt-2">See exactly how these techniques work in practice</p>
              </div>
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
      <section id="free-guide" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Clinical Guide: 3 Real Case Studies from Minecraft Therapy
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            See exactly how Minecraft creates breakthroughs with clients who seemed unreachable
          </p>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">What You'll Learn:</h3>
            <ul className="text-left max-w-lg mx-auto space-y-2">
              <li>✓ How to use Minecraft's building mechanics to develop client confidence</li>
              <li>✓ How to use game metaphors to help clients express difficult emotions</li>
              <li>✓ How to turn Minecraft collaboration into therapeutic partnership</li>
              <li>✓ How to use role reversals in Minecraft to shift power dynamics</li>
              <li>✓ How to help clients process trauma through digital metaphors they can control</li>
              <li>✓ How to use strategic vulnerability in Minecraft to build instant rapport</li>
              <li>✓ How to use Minecraft to bypass traditional therapy resistance</li>
            </ul>
          </div>
          <EmailSignupForm />
        </div>
      </section>

      {/* Real Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-black">
            Real Breakthroughs from My Practice
          </h2>
          <p className="text-center text-black mb-12">
            Every week, I watch Minecraft create moments that traditional therapy couldn't reach
          </p>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-green-700">The Side-by-Side Effect</h3>
              <p className="text-black mb-3">
                Teens who barely speak in sessions suddenly start talking when we're playing side by side. 
                The same kids who give one-word answers begin sharing stories, concerns, and insights naturally while building together.
              </p>
              <p className="text-black italic">
                Parents always recognize this: "That's exactly what happens when he's gaming with friends - he just talks and talks!" 
                There's something about shared focus that bypasses the pressure of direct conversation and lets authentic communication flow.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-blue-700">The Power of Role Reversal</h3>
              <p className="text-black mb-3">
                When anxious clients become the expert teaching you Minecraft, everything changes in your therapeutic relationship. 
                By letting them guide you through their worlds, you're no longer the authority figure they need to impress or please.
              </p>
              <p className="text-black italic">
                Suddenly you're working with a confident, capable teacher instead of a withdrawn, anxious client. 
                This shift unlocks therapeutic conversations that would never happen in traditional talk therapy settings.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-purple-700">Breaking Down Therapeutic Walls</h3>
              <p className="text-black mb-3">
                For kids who struggle with adult relationships, Minecraft becomes a bridge. We work as 
                a team-sharing resources, protecting each other from mobs, building together.
              </p>
              <p className="text-black italic">
                When clients trust you as a gaming partner, they're suddenly open to your therapeutic guidance. 
                The connection you build in Minecraft transfers directly to your clinical work, making every intervention more effective.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-green-600 rounded-lg text-center">
            <p className="text-xl text-white font-bold mb-4">
              See How It All Comes Together
            </p>
            <p className="text-green-100 mb-6">
              Get the complete clinical guide with the specific techniques, real session examples, 
              and professional insights that show you exactly how to implement Minecraft therapy in your practice.
            </p>
            <a
              href="#free-guide"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Get Clinical Guide Now
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
                Hi, I'm Ashley. I'm a therapist, life coach, and longtime educator. I specialize in helping kids, 
                teens, and parents work through emotional overwhelm, trauma, identity, and relationship challenges. 
                My approach blends evidence-based modalities with creativity and sometimes that even means using video games.
              </p>
              <p className="text-black mb-4">
                I created TherapyCraft after watching my Minecraft-loving clients come alive in session. Inside the game, 
                they communicated in ways they couldn't always access in a traditional office. Once I saw how powerful 
                this was, I began developing tools, safety systems, and frameworks for using Minecraft as a legitimate therapeutic space.
              </p>
              <p className="text-black font-medium mb-6">
                Now I teach other therapists how to bring this work into their practices too, ethically, confidently, and with creativity.
              </p>
              <div>
                <a
                  href="#free-guide"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  See How I Do It
                </a>
                <p className="text-sm text-gray-600 mt-2">Get the clinical guide with real examples</p>
              </div>
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

      {/* FAQ about Minecraft Therapy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Common Questions About Minecraft Therapy
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">
                Do I need to know how to play Minecraft?
              </h3>
              <p className="text-black">
                Not at all! Many of the most successful therapeutic moments happen when you're learning alongside your client.
                Being the "student" while they're the "teacher" can completely transform your therapeutic relationship.{' '}
                <span className="text-sm text-gray-600">(Want step-by-step guidance?{' '}
                <a href="/complete-system" className="text-green-600 hover:text-green-700 underline">
                  See the complete system →
                </a>)</span>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">
                How is this different from regular play therapy?
              </h3>
              <p className="text-black">
                Minecraft therapy reaches clients that traditional play therapy often can't - especially teens who've "outgrown" toys 
                but aren't ready for pure talk therapy. The digital environment creates unique opportunities for metaphorical work and collaboration.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">
                Is this covered by insurance?
              </h3>
              <p className="text-black">
                Yes! I've successfully used insurance to cover all my Minecraft therapy sessions. Want the exact documentation templates I use?{' '}
                <a href="/complete-system" className="text-green-600 hover:text-green-700 underline font-medium">
                  The Complete TherapyCraft System includes ready-to-use forms →
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">
                What ages does this work with?
              </h3>
              <p className="text-black">
                I've seen amazing results with clients from 6-19, and honestly, some of my adult clients love it too! 
                It works with anyone who's still interested in playing Minecraft, but it's especially powerful with tweens and teens (10-16) 
                who are gaming-interested but struggling to engage in traditional therapy approaches.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a
              href="#free-guide"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
            >
              Get the Clinical Guide Now
            </a>
            <p className="text-sm text-gray-600 mt-2">See these concepts in action with real case studies</p>
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
