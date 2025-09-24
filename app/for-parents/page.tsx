import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minecraft Therapy for Parents | Help Your Teen Open Up | TherapyCraft",
  description: "Is your teen resistant to traditional therapy? Minecraft therapy helps kids with autism, ADHD, and anxiety engage in a safe, familiar environment. Book free consultation with Ashley Jangro, LPCC.",
  keywords: "minecraft therapy for kids, minecraft therapy for teens, autism therapy, ADHD therapy, anxiety therapy, resistant teen therapy, Colorado therapist, Castle Rock counseling",
  openGraph: {
    title: "Minecraft Therapy for Parents | TherapyCraft",
    description: "Help your resistant teen engage in therapy through Minecraft. Free consultation with licensed therapist Ashley Jangro, LPCC in Colorado.",
    type: "website",
    images: ["/images/Minecraft Therapy Hero.png"],
  },
};

export default function ForParents() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-green-600 text-white py-3 text-center">
        <p className="text-sm">
          <a href="/" className="underline hover:text-green-200">
            Are you a therapist interested in using TherapyCraft? →
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
              TherapyCraft for <span className="text-blue-400">Parents</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              Is your teen resistant to traditional therapy? Minecraft therapy might be the bridge you've been looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#consultation"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Book Free Consultation
              </a>
              <a
                href="#how-it-helps"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                How It Helps Kids
              </a>
            </div>
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
              Does This Sound Like Your Child?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">😤</div>
                <h3 className="font-semibold mb-2 text-black">"I Don't Want to Go"</h3>
                <p className="text-black">
                  Therapy feels scary, boring, or pointless to them
                </p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="font-semibold mb-2 text-black">Lives in Digital Worlds</h3>
                <p className="text-black">
                  Spends hours on Minecraft, Roblox, or other games
                </p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🤐</div>
                <h3 className="font-semibold mb-2 text-black">Won't Open Up</h3>
                <p className="text-black">
                  "Fine" and "I don't know" are their favorite responses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="how-it-helps" className="py-16 relative" style={{
        backgroundImage: `url('/images/BG-3.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-gray-50/95"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-4 text-black">
              What if Therapy Felt Like Playing Their Favorite Game?
            </h2>
            <p className="text-center text-black mb-12 text-lg">
              TherapyCraft uses Minecraft to create a safe, comfortable space where kids naturally open up
            </p>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-black">Why Minecraft Works for Therapy:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-black">
                      <strong>They're already comfortable there:</strong> No scary therapy office
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-black">
                      <strong>They become the expert:</strong> Teaching the therapist builds confidence
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-black">
                      <strong>Natural metaphors emerge:</strong> Building walls = discussing boundaries
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-black">
                      <strong>Side-by-side feels safer:</strong> Less pressure than direct eye contact
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
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-black mb-4 italic">
                "For the first time ever, my son asked when his next therapy appointment is. 
                He actually looks forward to going now."
              </p>
              <p className="font-semibold text-blue-700">Parent of 15-year-old</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-black mb-4 italic">
                "She's been talking about things at home that she learned in Minecraft therapy. 
                It's like she finally has words for her feelings."
              </p>
              <p className="font-semibold text-green-700">Parent of 12-year-old</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Ashley */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">
                Meet Ashley Jangro, LPCC
              </h2>
              <p className="text-black mb-4">
                I'm a licensed professional clinical counselor and certified life coach in Colorado. 
                I specialize in working with kids and teens who are struggling with anxiety, depression, 
                trauma, and life transitions.
              </p>
              <p className="text-black mb-4">
                I started incorporating Minecraft into my practice when I realized how much more 
                comfortable and engaged my young clients became when we "played" together rather 
                than just talked.
              </p>
              <p className="text-black font-medium">
                Every child deserves to feel heard, understood, and supported-sometimes that happens 
                best in the worlds they already love.
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

      {/* Consultation CTA */}
      <section id="consultation" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book a Free Consultation
          </h2>
          <p className="text-xl mb-8 text-blue-50">
            Let's discuss whether TherapyCraft could be right for your child
          </p>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">In Our 15-Minute Call, We'll Discuss:</h3>
            <ul className="text-left max-w-md mx-auto space-y-2">
              <li>✓ Your child's current challenges and therapy experience</li>
              <li>✓ Whether they already play Minecraft (not required!)</li>
              <li>✓ How Minecraft therapy works in practice</li>
              <li>✓ Technical requirements and session logistics</li>
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
            Colorado residents • Teletherapy available • Choose your preferred time
          </p>
        </div>
      </section>

      {/* FAQ for Parents */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Common Parent Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">
                Is this real therapy or just playing games?
              </h3>
              <p className="text-black">
                This is legitimate, evidence-based therapy that uses Minecraft as a therapeutic tool. 
                Sessions have clear therapeutic goals and are documented just like traditional therapy.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">
                What if my child doesn't play Minecraft?
              </h3>
              <p className="text-black">
                No problem! Many of my clients learn Minecraft during our sessions. The learning process 
                itself can be therapeutic and confidence-building.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">
                How is this different from just playing Minecraft?
              </h3>
              <p className="text-black">
                I use specific therapeutic techniques, guided conversations, and purposeful activities 
                within Minecraft. Every session has therapeutic objectives and clinical documentation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">
                Is this covered by insurance?
              </h3>
              <p className="text-black">
                Yes, Minecraft therapy sessions can be billed to insurance just like traditional therapy 
                sessions. I provide all necessary documentation and codes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">
                What ages work best for this approach?
              </h3>
              <p className="text-black">
                I primarily work with ages 10-18, though I've had success with younger children 
                and young adults as well. It depends on the individual child's comfort with technology.
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
            Ashley Jangro, LPCC | Colorado Licensed Therapist | ashley@steadywithin.com
          </p>
          <p className="mt-2">
            <a href="https://steadywithin.com" className="text-gray-400 hover:text-white transition-colors">
              Counseling in Castle Rock
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}