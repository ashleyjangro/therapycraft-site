import { Metadata } from 'next';
import EmailSignupForm from '../components/EmailSignupForm';

export const metadata: Metadata = {
  title: 'The Complete TherapyCraft System | Transform Your Therapy Practice with Minecraft',
  description: 'Get the complete TherapyCraft system with step-by-step training, client resources, session frameworks, and ongoing support to revolutionize your therapy practice.',
  keywords: 'minecraft therapy training, therapycraft system, child therapy tools, gaming therapy certification, play therapy resources',
  openGraph: {
    title: 'The Complete TherapyCraft System | Professional Minecraft Therapy Training',
    description: 'Complete system to implement Minecraft in your therapy practice. Includes training modules, client resources, session frameworks, and professional support.',
    type: 'website',
  },
};

export default function SalesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/Minecraft Therapy Hero.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-4 py-16 md:py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              The Complete <span className="text-green-400">TherapyCraft</span>
              <br />Professional System
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-white opacity-90 drop-shadow-md">
              Everything you need to confidently implement Minecraft in your therapy practice
            </p>
            <p className="text-lg mb-8 text-white opacity-80 max-w-3xl mx-auto drop-shadow-md">
              From your first session to advanced techniques - get the complete training system that turns Minecraft into your most powerful therapeutic tool.
            </p>
            
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm mx-auto border border-green-100">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-gray-900 mb-1">$59</div>
                <div className="text-gray-600 text-sm">One-time payment • Lifetime access</div>
              </div>
              
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all shadow-lg hover:shadow-xl mb-3">
                Get The Complete System Now →
              </button>
              
              <p className="text-xs text-center text-gray-500">
                🔒 Secure checkout • Instant download
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stop Guessing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Stop Guessing, Start Practicing with Confidence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These aren't just nice-to-have answers—they're the difference between offering Minecraft as "screen time with a therapist" and positioning it as a professional, billable, HIPAA-aware service.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">The Questions You're Probably Asking</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-red-600 text-sm">?</span>
                    </div>
                    <p className="text-gray-600">What exactly do I add to my disclosure forms to protect myself legally?</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-red-600 text-sm">?</span>
                    </div>
                    <p className="text-gray-600">How do I explain Minecraft therapy to parents so they don't dismiss it as screen time?</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-red-600 text-sm">?</span>
                    </div>
                    <p className="text-gray-600">How much should I charge for these sessions?</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-red-600 text-sm">?</span>
                    </div>
                    <p className="text-gray-600">What do I put on my website or Psychology Today profile to attract the right families?</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-red-600 text-sm">?</span>
                    </div>
                    <p className="text-gray-600">How do I handle tech issues when a client can't connect?</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-red-600 text-sm">?</span>
                    </div>
                    <p className="text-gray-600">What kinds of goals or treatment plans actually work inside Minecraft?</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Why These Questions Matter</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <p className="text-gray-600">They turn your sessions from playtime into purposeful therapy.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <p className="text-gray-600">They ensure you're legally and ethically protected.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <p className="text-gray-600">They give parents confidence that this is structured, evidence-informed, and worth the investment.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <p className="text-gray-600">They help you market with clarity so the right clients find you.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <p className="text-gray-600">They save you hours of trial and error, because you're not guessing—you're prepared.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Complete Professional Implementation</h4>
              <p className="text-lg text-gray-600 mb-6">For less than the cost of a single TherapyCraft session, you can have all of this figured out.</p>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600 mb-8">
                <div>
                  <div className="font-semibold text-blue-600 mb-2">Setup Research: 15-20 hours saved</div>
                  <p>Complete technical walkthrough included</p>
                </div>
                <div>
                  <div className="font-semibold text-blue-600 mb-2">Form Templates: 10-15 hours saved</div>
                  <p>Done-for-you HIPAA compliance</p>
                </div>
                <div>
                  <div className="font-semibold text-blue-600 mb-2">Session Planning: 20-30 hours saved</div>
                  <p>Activities, prompts, and protocols ready</p>
                </div>
              </div>
              <button className="bg-green-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all shadow-lg hover:shadow-xl">
                Get The Complete System For $59
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-2xl overflow-hidden mt-8">
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

      {/* What You Get Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              What's Inside The Complete System
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete Technical Setup Guide</h3>
                <p className="text-gray-600">Every detail covered: which Minecraft version to buy, how to get $3.99 pricing instead of $7.99, setting up Microsoft accounts, creating professional Gamer tags, and configuring HIPAA-conscious privacy settings. Plus troubleshooting guides for when things go wrong.</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal & Ethical Framework</h3>
                <p className="text-gray-600">Complete HIPAA compliance guide, consent form templates, parent communication scripts, and privacy protocols. Know exactly what you can and can't do ethically - with template documents ready to customize for your practice.</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready-to-Use Session Activities</h3>
                <p className="text-gray-600">6 proven session frameworks: Build a Safe Place, Emotion Blocks, Family as Mobs, Memory Garden, Reflection Trail, and Challenge Quests. Each includes therapeutic rationale, step-by-step instructions, and conversation prompts.</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Treatment Planning Templates</h3>
                <p className="text-gray-600">Complete treatment plan templates for Anxiety, Depression, ADHD, Adjustment Disorders, PTSD, and Autism Spectrum Disorder. Plus 12-24 week roadmaps with 4-phase frameworks for long-term planning.</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">👪</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete Family Communication System</h3>
                <p className="text-gray-600">Welcome email templates, setup instructions for parents, troubleshooting guides, session reminders, and a comprehensive FAQ covering every question families ask. Never wonder what to say to concerned parents again.</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📢</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Marketing & Referral Materials</h3>
                <p className="text-gray-600">Referral partner one-pagers, Psychology Today profile snippets, website copy templates, and social media posts. Everything you need to professionally promote this service and get quality referrals from schools, pediatricians, and other therapists.</p>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-green-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all shadow-lg hover:shadow-xl">
                Get Complete Access For $59
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Why TherapyCraft Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Instant Engagement</h3>
                <p className="text-gray-600">Kids who won't talk suddenly become storytellers. The game creates immediate therapeutic rapport.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Measurable Progress</h3>
                <p className="text-gray-600">Built-in ways to track therapeutic goals through gameplay. Visual progress that clients and parents can see.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Breakthrough Results</h3>
                <p className="text-gray-600">Turn your hardest cases into success stories. Clients make breakthroughs that surprise even experienced therapists.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Which version of Minecraft do I need, and how much will it cost?</h3>
                <p className="text-gray-600">This is more complicated than it seems—and getting it wrong costs you time and money. You need Minecraft Bedrock Edition, but the pricing depends on your platform, practice size, and client load. The system walks through every scenario: individual vs. family accounts, different Realm options, scaling considerations, and hidden costs most therapists miss. This chapter alone prevents expensive mistakes.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Is this actually HIPAA compliant? What about privacy?</h3>
                <p className="text-gray-600">The system includes complete HIPAA compliance guidance, consent forms, and privacy protocols. You'll learn exactly what you can and cannot do, how to set up accounts safely, and how to maintain therapeutic boundaries while using gaming technology.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I explain this to parents and get them on board?</h3>
                <p className="text-gray-600">Includes complete parent communication templates: welcome emails with setup instructions, FAQ addressing every concern parents have, troubleshooting guides, and scripts for explaining the therapeutic value. Never struggle with parent buy-in again.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What if I'm not tech-savvy? Will this be too complicated?</h3>
                <p className="text-gray-600">The system assumes zero gaming or technical expertise. Every single step is broken down with screenshots, troubleshooting guides, and "what to do when things go wrong" sections. If you can send an email, you can implement this system.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I actually structure therapy sessions in Minecraft?</h3>
                <p className="text-gray-600">Includes ready-to-use session frameworks, treatment plan templates for 6+ diagnoses, and 12-24 week therapy roadmaps. Plus specific activities like "Build a Safe Place" for trauma work and "Family as Mobs" for family systems. No more guessing what to do in session.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I market this service to get new clients? How do I price it?</h3>
                <p className="text-gray-600">Complete marketing toolkit included: Psychology Today profile language, website copy, referral partner materials, and client outreach templates. Plus pricing strategies and practice integration guidance to help you fill your caseload with engaged families.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What if my supervisor/practice owner won't approve this?</h3>
                <p className="text-gray-600">Includes a professional letter template explaining the clinical rationale, research foundation, and risk management protocols. Most supervisors approve it immediately when they understand the therapeutic framework and safety measures.</p>
              </div>
              
              <div className="pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What if this doesn't work for my specific population or practice style?</h3>
                <p className="text-gray-600">The system includes adaptations for different ages (6-17), diagnoses (anxiety, depression, ADHD, trauma, autism), and practice settings (private practice, group practice, community mental health). Plus troubleshooting guides for when sessions don't go as planned.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-white mb-8 opacity-90">
              Join hundreds of therapists who've revolutionized their practice with TherapyCraft
            </p>
            
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto border border-green-100 mb-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">$59</div>
                <div className="text-gray-600">One-time payment • Lifetime access</div>
              </div>
              
              <button className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all shadow-lg hover:shadow-xl mb-4">
                Get The Complete System Now →
              </button>
              
              <p className="text-xs text-center text-gray-500">
                🔒 Secure checkout • Instant download
              </p>
            </div>
            
            <p className="text-white text-sm opacity-75">
              Start using TherapyCraft in your next session • Instant download after purchase
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}