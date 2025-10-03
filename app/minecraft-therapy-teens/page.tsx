import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minecraft Therapy for Teens | Innovative Therapy That Works | Ashley Jangro LPCC",
  description: "Minecraft therapy is an innovative, highly effective approach for teens. Meet kids in their digital world for real therapeutic breakthroughs. Teletherapy available nationwide.",
  keywords: "minecraft therapy, minecraft therapy for teens, innovative therapy, alternative therapy for teens, video game therapy, minecraft therapist, digital therapy for kids",
  openGraph: {
    title: "Minecraft Therapy for Teens | Breakthrough Sessions in a Digital World",
    description: "An innovative therapy approach that meets teens where they are. Real therapeutic growth through Minecraft. Licensed therapist Ashley Jangro, LPCC.",
    type: "website",
    images: ["/images/Minecraft Therapy Hero.png"],
  },
};

export default function MinecraftTherapyTeens() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-green-600 text-white py-3 text-center">
        <p className="text-sm">
          <a href="/" className="underline hover:text-green-200">
            Are you a therapist interested in using Minecraft therapy? →
          </a>
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/Minecraft Therapy Hero.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-6 py-16 md:py-24 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Minecraft Therapy: <span className="text-blue-400">Breakthrough Sessions in a Digital World</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              An innovative therapy approach that meets teens where they are and creates real therapeutic growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#consultation"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Book Free Consultation
              </a>
              <a
                href="#how-it-works"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Minecraft Therapy Section */}
      <section className="py-16 relative" style={{
        backgroundImage: `url('/images/BG-1.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">
              Why Minecraft Therapy Is Incredibly Effective
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="font-semibold mb-2 text-black">Meet Them Where They Are</h3>
                <p className="text-black">
                  Teens open up naturally in a world where they already feel comfortable and capable
                </p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-semibold mb-2 text-black">Innovative & Evidence-Based</h3>
                <p className="text-black">
                  Cutting-edge therapy that combines gaming research with proven therapeutic techniques
                </p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="font-semibold mb-2 text-black">Real Breakthroughs</h3>
                <p className="text-black">
                  Natural metaphors and shared experiences create deeper therapeutic connections
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 relative" style={{
        backgroundImage: `url('/images/BG-3.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-gray-50/95"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-4 text-black">
              Therapy That Meets Teens in Their World
            </h2>
            <p className="text-center text-black mb-12 text-lg">
              Minecraft creates a safe, engaging space where therapeutic breakthroughs happen naturally
            </p>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-black">What Makes Minecraft Therapy Unique:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-black">
                      <strong>Natural comfort zone:</strong> Therapy happens in a familiar, low-pressure environment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-black">
                      <strong>Role reversal builds confidence:</strong> Teens become the expert, teaching the therapist
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-black">
                      <strong>Organic metaphors emerge:</strong> Building structures naturally reflects real-life challenges
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-black">
                      <strong>Side-by-side connection:</strong> Playing together creates safety and opens communication
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/images/Minecraft Therapy 04.png"
                  alt="Minecraft therapy session example"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Parents Say */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            What Parents Tell Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-black mb-4 italic">
                "My son actually looks forward to therapy now. He comes out of sessions excited to tell me what he learned and worked on."
              </p>
              <p className="font-semibold text-blue-700">Parent of 15-year-old</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-black mb-4 italic">
                "She's applying what she learns in Minecraft therapy to real life. It's like she finally has the tools to express herself."
              </p>
              <p className="font-semibold text-green-700">Parent of 12-year-old</p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#consultation"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Ready to See This Work for Your Teen?
            </a>
          </div>
        </div>
      </section>

      {/* About Ashley */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">
                Meet Ashley Jangro, LPCC
              </h2>
              <p className="text-black mb-4">
                I'm a licensed professional clinical counselor and certified life coach specializing in innovative therapy approaches for teens and young adults.
              </p>
              <p className="text-black mb-4">
                I pioneered Minecraft therapy in my practice when I discovered how powerful it could be to meet clients in the digital worlds they love. The breakthroughs I've witnessed have completely transformed how I approach teen therapy.
              </p>
              <p className="text-black font-medium">
                Every teen deserves therapy that truly connects with them. Sometimes the most effective sessions happen in places we least expect.
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
          <div className="text-center">
            <a
              href="#consultation"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
            >
              Let's Discuss Your Teen's Therapy Goals
            </a>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section id="consultation" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book a Free Consultation
          </h2>
          <p className="text-xl mb-8 text-blue-50">
            Let's discuss whether Minecraft therapy could be right for your teen
          </p>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">In Our 15-Minute Call, We'll Discuss:</h3>
            <ul className="text-left max-w-md mx-auto space-y-2">
              <li>✓ Your teen's interests and therapy goals</li>
              <li>✓ How Minecraft therapy creates breakthroughs</li>
              <li>✓ Whether your teen plays Minecraft (not required!)</li>
              <li>✓ Technical setup and session logistics</li>
              <li>✓ Next steps if it seems like a good fit</li>
            </ul>
          </div>

          <a
            href="https://calendly.com/ashleyjangro/free-consultation"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg inline-block"
            target="_blank"
          >
            Book Free Consultation
          </a>
          <p className="text-sm mt-4 text-blue-100">
            Teletherapy available nationwide • Choose your preferred time
          </p>
        </div>
      </section>

      {/* FAQ for Parents */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Common Questions About Minecraft Therapy
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">
                Is this real therapy or just playing games?
              </h3>
              <p className="text-black">
                This is legitimate, evidence-based therapy that uses Minecraft as a therapeutic tool. Sessions have clear therapeutic goals, clinical frameworks, and professional documentation just like traditional therapy.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">
                What if my teen doesn't play Minecraft?
              </h3>
              <p className="text-black">
                No problem! Many clients learn Minecraft during our sessions. The learning process itself builds confidence and creates opportunities for therapeutic growth.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">
                How is this different from regular gaming?
              </h3>
              <p className="text-black">
                I use specific therapeutic techniques, guided conversations, and purposeful activities within Minecraft. Every session has therapeutic objectives with clinical documentation and progress tracking.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">
                Is Minecraft therapy covered by insurance?
              </h3>
              <p className="text-black">
                Yes, Minecraft therapy sessions can be billed to insurance just like traditional therapy sessions. I provide all necessary documentation and billing codes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">
                What ages work best for Minecraft therapy?
              </h3>
              <p className="text-black">
                I primarily work with ages 10-18, though I've had success with younger children and young adults as well. It depends on the individual's comfort with technology and gaming.
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
            Ashley Jangro, LPCC | Licensed Therapist | ashley@steadywithin.com
          </p>
          <p className="mt-2">
            <a href="https://steadywithin.com" className="text-gray-400 hover:text-white transition-colors">
              Counseling Services by Steady Within
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
