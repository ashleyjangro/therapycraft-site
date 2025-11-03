import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Blog post type definition
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  date: string;
  category: string;
  readTime: string;
  author: string;
  keywords: string;
}

// All blog posts - this will be extracted to a separate file later if needed
const blogPosts: Record<string, BlogPost> = {
  "why-therapists-should-offer-minecraft-therapy-2025": {
    slug: "why-therapists-should-offer-minecraft-therapy-2025",
    title: "205 Million Americans Play Video Games: Why Therapists Can't Ignore Minecraft Therapy in 2025",
    excerpt: "New gaming industry data reveals why Minecraft therapy isn't a trend—it's meeting your clients where they already are. See the numbers that prove gaming is the language of modern mental health.",
    date: "2025-01-20",
    category: "Industry Insights",
    readTime: "5 min read",
    author: "Ashley Jangro, LPCC",
    keywords: "minecraft therapy statistics, gaming therapy 2025, video game therapy data, minecraft therapy research, why offer minecraft therapy",
    content: null,
  },
  "minecraft-coaching-for-teens-life-coaches": {
    slug: "minecraft-coaching-for-teens-life-coaches",
    title: "Life Coaches: Why Minecraft Coaching Should Be Part of Every Teen Coach's Toolkit",
    excerpt: "Minecraft coaching will open doors you can't even imagine. Discover why this powerful modality delivers better engagement, faster results, and helps teens discover strengths they didn't know they had.",
    date: "2025-01-18",
    category: "For Coaches",
    readTime: "6 min read",
    author: "Ashley Jangro, LPCC & Life Coach",
    keywords: "minecraft coaching, life coach teens, teen life coaching techniques, minecraft for coaches, adolescent coaching strategies, teen engagement coaching",
    content: null,
  },
  "getting-started-minecraft-therapy": {
    slug: "getting-started-minecraft-therapy",
    title: "Getting Started with Minecraft Therapy: A Beginner's Guide for Therapists",
    excerpt: "Thinking about adding Minecraft to your therapy practice? This comprehensive guide covers everything you need to know to get started, from equipment setup to your first session.",
    date: "2025-01-15",
    category: "Getting Started",
    readTime: "8 min read",
    author: "Ashley Jangro, LPCC",
    keywords: "minecraft therapy, getting started minecraft therapy, minecraft therapy setup, minecraft counseling beginners, how to start minecraft therapy",
    content: null, // Will be set below
  },
  "why-resistant-teens-open-up-in-minecraft": {
    slug: "why-resistant-teens-open-up-in-minecraft",
    title: "Why Resistant Teens Open Up in Minecraft (And How to Use It Therapeutically)",
    excerpt: "Discover the psychological mechanisms that make Minecraft so effective for reaching resistant adolescent clients, plus specific techniques to harness this power in your sessions.",
    date: "2025-01-10",
    category: "Clinical Techniques",
    readTime: "6 min read",
    author: "Ashley Jangro, LPCC",
    keywords: "resistant teens therapy, teen counseling techniques, minecraft teen therapy, adolescent therapy strategies, gaming therapy teens",
    content: null,
  },
  "minecraft-therapy-anxiety-trauma": {
    slug: "minecraft-therapy-anxiety-trauma",
    title: "Using Minecraft Therapy for Anxiety and Trauma: Safe Exposure in Virtual Worlds",
    excerpt: "Learn how Minecraft's controllable environment makes it an ideal tool for trauma-informed therapy and anxiety work with children and teens.",
    date: "2025-01-05",
    category: "Clinical Applications",
    readTime: "7 min read",
    author: "Ashley Jangro, LPCC",
    keywords: "minecraft anxiety therapy, minecraft trauma therapy, trauma-informed gaming therapy, anxiety treatment kids, virtual therapy environments",
    content: null,
  },
};

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | TherapyCraft Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  // JSON-LD Schema for Article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": "Licensed Professional Clinical Counselor",
    },
    "publisher": {
      "@type": "Organization",
      "name": "TherapyCraft",
      "url": "https://therapycraft.io"
    },
    "keywords": post.keywords,
  };

  // Import the content for this specific post
  let content;
  if (slug === "why-therapists-should-offer-minecraft-therapy-2025") {
    content = <GamingIndustryDataContent />;
  } else if (slug === "minecraft-coaching-for-teens-life-coaches") {
    content = <MinecraftCoachingContent />;
  } else if (slug === "getting-started-minecraft-therapy") {
    content = <GettingStartedContent />;
  } else if (slug === "why-resistant-teens-open-up-in-minecraft") {
    content = <ResistantTeensContent />;
  } else if (slug === "minecraft-therapy-anxiety-trauma") {
    content = <AnxietyTraumaContent />;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-6 py-6 max-w-4xl">
            <nav className="mb-4">
              <Link href="/blog" className="text-green-600 hover:text-green-700 transition-colors">
                ← Back to Blog
              </Link>
            </nav>

            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="mt-6 flex items-center gap-3 text-gray-700">
              <span className="font-medium">By {post.author}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="py-12">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              {content}
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Using Minecraft in Your Practice?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get the complete TherapyCraft system with step-by-step guidance, session plans, and clinical templates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#free-guide"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Get Free Clinical Guide
              </Link>
              <Link
                href="/complete-system"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                See Complete System
              </Link>
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
          </div>
        </footer>
      </main>
    </>
  );
}

// Article content components (these will be the actual blog post content)

function GettingStartedContent() {
  return (
    <div className="space-y-6 text-gray-800">
      <p className="text-xl leading-relaxed">
        If you're reading this, you've probably heard about using Minecraft in therapy and you're curious. Maybe you've seen a client light up when talking about the game, or you're looking for ways to connect with resistant teens. Whatever brought you here, you're in the right place.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The Reality: You Don't Need to Be an Expert</h2>
      <p>
        Here's what I've learned after years of using Minecraft in therapy: <strong>The sweet spot is being competent enough to earn respect, but humble enough to accept a client's help</strong>. Resistant teens won't trust a therapist who fumbles through the game completely, but they also won't open up to someone who acts like the expert on everything.
      </p>

      <p>
        When clients can teach you things—show you new building techniques, guide you through challenging situations, save you when you get surrounded by mobs—the therapeutic dynamic shifts. Suddenly, you're teammates. And that's when real conversations begin.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">What You Actually Need</h2>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">1. Basic Equipment</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>A computer that can run Minecraft</strong> - Most modern laptops work fine. You don't need a gaming PC.</li>
        <li><strong>Minecraft Java Edition</strong> - One-time purchase of about $30 (tax deductible!)</li>
        <li><strong>Headset with microphone</strong> - For teletherapy sessions</li>
        <li><strong>Optional: A second monitor</strong> - Helpful for seeing both the game and your client on video</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">2. Clinical Framework</h3>
      <p>
        This is what differentiates therapeutic Minecraft from just "playing games in session." You need:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Understanding of how to set therapeutic intentions for gameplay</li>
        <li>Skills to make clinical observations during play</li>
        <li>Techniques to process what happens in-game therapeutically</li>
        <li>Documentation practices that satisfy insurance and licensing boards</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
        <p className="text-blue-900">
          <strong>Clinical Tip:</strong> I approach Minecraft sessions the same way I approach sand tray therapy. The medium changes, but the therapeutic intentions, observations, and processing remain deeply clinical.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Your First Session: Start Simple</h2>

      <p>
        I recommend starting with what I call a "collaborative exploration" session:
      </p>

      <ol className="list-decimal pl-6 space-y-3">
        <li>
          <strong>Set the therapeutic frame</strong> - "Today we're going to explore working together in Minecraft. I'm curious to see how we collaborate and what we build."
        </li>
        <li>
          <strong>Let them lead</strong> - Ask: "Can you teach me how to play?" This immediately shifts the power dynamic in a therapeutic way.
        </li>
        <li>
          <strong>Observe everything</strong> - How do they handle your mistakes? Do they share resources? How do they respond to challenges? These observations are clinically rich.
        </li>
        <li>
          <strong>Process afterward</strong> - "I noticed when I didn't know how to craft something, you were really patient with me. Is that how you usually are when teaching people things?"
        </li>
      </ol>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Common Concerns Answered</h2>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">"Will insurance cover this?"</h3>
      <p>
        Yes! I've successfully billed insurance for all my Minecraft therapy sessions. The key is proper documentation that shows your clinical rationale, observations, and interventions. Minecraft is the medium - therapy is what you're providing.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">"What if parents think I'm just playing games?"</h3>
      <p>
        Education is key. I explain that Minecraft therapy is like play therapy for the digital age. Just as we've used dolls, sand, and art for decades, Minecraft is another expressive medium. Parents get it quickly when they see their resistant teen actually engaging.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">"How do I know what's therapeutic vs. just playing?"</h3>
      <p>
        This is exactly why clinical training in Minecraft therapy matters. You need to learn how to:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Structure sessions with therapeutic goals</li>
        <li>Make clinical observations during gameplay</li>
        <li>Use game events as metaphors for real-life challenges</li>
        <li>Process experiences to create lasting change</li>
      </ul>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
        <p className="text-green-900 font-semibold mb-4">
          Want to See Real Examples?
        </p>
        <p className="text-green-900 mb-4">
          In my free clinical guide, I share three complete case studies showing exactly how Minecraft created breakthroughs with:
        </p>
        <ul className="list-disc pl-6 text-green-900 space-y-2 mb-4">
          <li>An anxious teen who finally found his voice</li>
          <li>A child navigating family conflict who learned to express buried emotions</li>
          <li>A resistant teen who learned to trust adults again</li>
        </ul>
        <p className="text-green-900">
          Each case study includes the specific techniques I used, what happened in the sessions, and the clinical frameworks that made it work.
        </p>
        <div className="mt-6">
          <a href="/#free-guide" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Get Free Case Studies →
          </a>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Next Steps</h2>

      <p>
        Getting started with Minecraft therapy doesn't have to be overwhelming. Start with:
      </p>

      <ol className="list-decimal pl-6 space-y-2">
        <li>Play Minecraft yourself for 1-2 hours to get familiar with basic controls</li>
        <li>Identify one client who might benefit (resistant teen, gaming-interested kid, anxious child)</li>
        <li>Get parent consent and explain your clinical rationale</li>
        <li>Start with a simple collaborative session</li>
        <li>Document thoroughly and reflect on what you observed</li>
      </ol>

      <p className="text-lg font-medium mt-8">
        The best therapists using Minecraft aren't the ones who are expert gamers. They're the ones who understand how to use any medium therapeutically. If you can do play therapy, sand tray, or art therapy, you can do Minecraft therapy.
      </p>

      <div className="bg-gray-100 p-8 rounded-lg mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Want More Guidance?</h3>
        <p className="text-gray-700 mb-4">
          The <Link href="/complete-system" className="text-green-600 hover:text-green-700 font-semibold underline">TherapyCraft Complete System</Link> includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Step-by-step setup guides</li>
          <li>50+ session plan templates</li>
          <li>Documentation templates that satisfy insurance</li>
          <li>Parent education materials</li>
          <li>HIPAA-compliant protocols</li>
          <li>Marketing materials to promote your new specialty</li>
        </ul>
      </div>
    </div>
  );
}

function ResistantTeensContent() {
  return (
    <div className="space-y-6 text-gray-800">
      <p className="text-xl leading-relaxed">
        Every therapist knows the struggle: You have a bright, capable teen in your office who responds to every question with "I don't know," "Fine," or just a shrug. Their parents are desperate for help, but the teen has built walls so high you can't find the door.
      </p>

      <p className="text-xl leading-relaxed">
        I've worked with dozens of resistant teens who wouldn't engage in traditional talk therapy. But something shifts when we move into Minecraft. The walls start to crack, the one-word answers turn into actual conversations, and suddenly I'm working with a different kid.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
        <p className="text-blue-900 mb-4">
          <strong>In my free clinical guide,</strong> I share the complete story of an anxious teen who barely spoke in our first three sessions. Everything changed when he saw a gaming image on his own shirt and I asked about it. Within sessions, he went from whispered "I don't know" responses to confidently teaching me Minecraft—and eventually opening up about what was really going on.
        </p>
        <p className="text-blue-900 mb-4">
          I also share the story of a teen who was so resistant to therapy that our first Minecraft session was nearly silent. What finally broke through wasn't me being the expert—it was when I intentionally shared resources and got myself into trouble in a cave so they could save me.
        </p>
        <div className="mt-4">
          <a href="/#free-guide" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Read the Full Case Studies →
          </a>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Why Traditional Talk Therapy Struggles with Resistant Teens</h2>

      <p>
        Let's be honest about what's happening in traditional therapy with resistant adolescents:
      </p>

      <ul className="list-disc pl-6 space-y-3">
        <li>They're forced to be there (often by parents or courts)</li>
        <li>They see you as another authority figure trying to "fix" them</li>
        <li>Direct eye contact and verbal processing feels threatening</li>
        <li>They're developmentally focused on peer relationships, not adult connections</li>
        <li>They're protecting themselves by shutting down</li>
      </ul>

      <p className="mt-6">
        We're asking them to be vulnerable in the exact conditions that feel most unsafe to them. That's why Minecraft works so differently.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The Minecraft Effect: What Actually Changes</h2>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">1. Side-by-Side Positioning Changes Everything</h3>
      <p>
        When you and your teen client are both looking at screens, building together in Minecraft, you've removed the pressure of face-to-face interaction. This "parallel play" position mirrors how teens naturally communicate with peers - while gaming, walking, or doing activities together.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
        <p className="text-blue-900">
          <strong>Research backs this up:</strong> Studies show adolescents disclose more personal information during parallel activities than face-to-face conversations. It's not about avoiding connection - it's about creating the right conditions for it.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">2. The Power Shift: They're the Expert</h3>
      <p>
        In traditional therapy, the therapist is the expert. The teen is the "patient" who needs help. But in Minecraft therapy, especially when you're learning the game, <strong>the teen becomes the expert</strong>.
      </p>

      <p>
        This role reversal is therapeutically gold:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Their confidence visibly grows as they teach you</li>
        <li>They feel competent instead of broken</li>
        <li>They stop seeing you as an authority figure and start seeing you as a partner</li>
        <li>When they're in the "teacher" role, their defenses naturally lower</li>
      </ul>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
        <p className="text-green-900 font-semibold mb-4">
          This is Exactly What I Cover in the Free Clinical Guide
        </p>
        <p className="text-green-900 mb-4">
          The case studies show the specific techniques that work with resistant teens:
        </p>
        <ul className="list-disc pl-6 text-green-900 space-y-2 mb-4">
          <li>How to use the "how would you handle this in the game?" question to unlock confidence</li>
          <li>The "mob metaphor" technique that helps kids talk about painful family dynamics</li>
          <li>Why intentionally sharing resources and asking for help builds trust faster than being the expert</li>
          <li>The exact moment that turned a silent, resistant client into an engaged partner</li>
        </ul>
        <div className="mt-6">
          <a href="/#free-guide" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Get the Complete Case Studies →
          </a>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">3. Metaphorical Communication Feels Safer</h3>

      <p>
        Resistant teens struggle with direct questions about feelings:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>"How did that make you feel?" → "Fine."</li>
        <li>"Tell me about your relationship with your dad." → "I don't know."</li>
      </ul>

      <p className="mt-4">
        But in Minecraft, they'll naturally create and discuss scenarios that mirror their real-life struggles:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Building protective walls around their base (emotional walls they've built)</li>
        <li>Struggling with resource scarcity (feeling "not enough")</li>
        <li>Dealing with unexpected mob attacks (anxiety and overwhelm)</li>
        <li>Working on collaborative builds (relationship dynamics)</li>
      </ul>

      <p className="mt-4">
        These metaphors let teens explore difficult emotions without the vulnerability of direct disclosure. You can process these experiences therapeutically without triggering their defenses.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">How to Use This Therapeutically (Not Just Play Games)</h2>

      <p>
        The difference between "playing Minecraft in therapy" and "Minecraft therapy" is intentionality. Here's how to harness these mechanisms clinically:
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Set Therapeutic Intentions</h3>
      <p>
        Before each session, identify what you're working on:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Building rapport?</strong> Let them teach you, show genuine interest in their expertise</li>
        <li><strong>Working on frustration tolerance?</strong> Introduce challenges (limited resources, difficult builds)</li>
        <li><strong>Exploring relationship patterns?</strong> Pay attention to how they interact with you during collaborative builds</li>
        <li><strong>Processing trauma?</strong> Let them create safe spaces and protective structures</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Make Clinical Observations</h3>
      <p>
        During gameplay, observe:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>How do they handle mistakes or setbacks?</li>
        <li>Do they share resources or hoard them?</li>
        <li>How do they respond when you need help?</li>
        <li>What themes emerge in their builds? (protection, isolation, creativity, destruction)</li>
        <li>How does their affect change during play vs. traditional talking?</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Process Therapeutically</h3>
      <p>
        The game creates experiences you can process:
      </p>

      <div className="bg-gray-100 p-6 rounded-lg my-6">
        <p className="mb-2"><strong>Client:</strong> *Creeper destroys their build* "This is so stupid!"</p>
        <p className="mb-4"><strong>Therapist:</strong> "I noticed you got really frustrated when something unexpected ruined what you built. Do you ever feel that way in life - like you're building something and it gets destroyed?"</p>
        <p className="text-gray-700 italic">
          This opens conversations about disappointment, lack of control, and resilience in ways direct questions never could.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">When to Use Minecraft with Resistant Teens</h2>

      <p>
        Minecraft therapy is particularly effective for:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Teens who've had negative therapy experiences</li>
        <li>Gaming-interested adolescents (obviously)</li>
        <li>Clients with trauma who struggle with trust</li>
        <li>Teens on the autism spectrum who prefer parallel play</li>
        <li>Adolescents with ADHD who need movement/engagement</li>
        <li>Court-ordered or mandated clients</li>
        <li>Anyone who responds to everything with "I don't know"</li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The Bottom Line</h2>

      <p className="text-lg">
        Resistant teens don't open up in Minecraft because you've "tricked" them into therapy. They open up because you've finally created conditions where vulnerability feels safe:
      </p>

      <ul className="list-disc pl-6 space-y-2 mt-4">
        <li>No threatening eye contact</li>
        <li>They're the expert, not the broken patient</li>
        <li>Metaphorical communication instead of direct disclosure</li>
        <li>Shared activity that mirrors peer relationships</li>
        <li>An adult who's genuinely interested in their world</li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">See These Techniques in Action</h2>

      <p className="text-lg">
        Understanding why Minecraft works is one thing. Seeing exactly how to use it in real sessions is another. That's why I created the free clinical guide with three complete case studies.
      </p>

      <p className="text-lg mt-4">
        You'll see:
      </p>

      <ul className="list-disc pl-6 space-y-2 mt-4">
        <li>The exact words that shifted an anxious teen from one-word answers to engaged conversation</li>
        <li>How the "mob metaphor" technique helped a child express emotions she'd buried for years</li>
        <li>The moment a resistant teen decided to trust me—and what I did to make that happen</li>
        <li>Clinical frameworks you can use immediately with your own clients</li>
      </ul>

      <div className="bg-gray-100 p-8 rounded-lg mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Resistant Teens Into Engaged Clients?</h3>
        <p className="text-gray-700 mb-6 text-lg">
          Download the free clinical guide and see exactly how Minecraft creates breakthroughs with the clients who need it most.
        </p>
        <a href="/#free-guide" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
          Get 3 Real Case Studies Free →
        </a>
        <p className="text-sm text-gray-600 mt-4">
          Plus learn about the <Link href="/complete-system" className="text-green-600 hover:text-green-700 font-semibold underline">Complete TherapyCraft System</Link> with everything you need to start using Minecraft in therapy
        </p>
      </div>
    </div>
  );
}

function GamingIndustryDataContent() {
  return (
    <div className="space-y-6 text-gray-800">
      <p className="text-xl leading-relaxed">
        If you've been hesitant to add Minecraft therapy to your practice, thinking it's just a "niche" approach for a handful of gaming-obsessed clients, I have news for you: <strong>You're missing where your clients already are</strong>.
      </p>

      <p className="text-xl leading-relaxed">
        The 2025 gaming industry data just dropped, and the numbers are impossible to ignore. This isn't about chasing trends. This is about speaking a language the vast majority of your clients already understand.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The Numbers That Change Everything</h2>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
        <h3 className="text-xl font-bold text-blue-900 mb-4">2025 Gaming Industry Data (ESA)</h3>
        <ul className="space-y-3 text-blue-900">
          <li className="flex items-start">
            <span className="text-3xl font-bold mr-4">205M</span>
            <span className="pt-1">Americans play video games—that's <strong>62% of the population</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-3xl font-bold mr-4">81%</span>
            <span className="pt-1">of gamers say gaming provides <strong>stress relief and mental health benefits</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-3xl font-bold mr-4">90%</span>
            <span className="pt-1">of parents whose kids game say it provides <strong>positive benefits</strong></span>
          </li>
        </ul>
      </div>

      <p className="text-lg">
        Let that sink in. <strong>62% of Americans</strong> are already using gaming for stress relief and mental health benefits. They're just doing it without therapeutic guidance.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">What This Means for Your Practice</h2>

      <p>
        When you walk into a waiting room, statistically speaking:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>6 out of 10 clients are gamers</li>
        <li>The resistant teen who won't talk? Almost certainly plays games</li>
        <li>The anxious kid hiding behind their parent? Probably finds relief in Minecraft</li>
        <li>The family you're seeing for conflict? Gaming is likely already part of their world</li>
      </ul>

      <p className="mt-6">
        <strong>You're not introducing something foreign.</strong> You're taking something they already trust and love—something they already use for stress relief—and bringing clinical expertise to it.
      </p>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
        <p className="text-green-900 font-semibold mb-4">
          See How This Works in Real Practice
        </p>
        <p className="text-green-900 mb-4">
          In my free clinical guide, I share three complete case studies that demonstrate exactly how Minecraft therapy created breakthroughs:
        </p>
        <ul className="list-disc pl-6 text-green-900 space-y-2 mb-4">
          <li>An anxious teen who was already using Minecraft for stress relief—and how I turned that into therapeutic transformation</li>
          <li>A resistant teen who finally opened up when we met him in his world instead of forcing him into ours</li>
          <li>A child who couldn't express difficult emotions directly but could do it through the game's metaphors</li>
        </ul>
        <p className="text-green-900 mb-4">
          Each case study includes the specific clinical techniques, documentation language, and therapeutic frameworks that made it work.
        </p>
        <div className="mt-6">
          <a href="/#free-guide" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Get 3 Real Case Studies Free →
          </a>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Why Minecraft Specifically?</h2>

      <p>
        Gaming is massive. But why Minecraft for therapy? Because it offers something unique:
      </p>

      <ul className="list-disc pl-6 space-y-3">
        <li><strong>Non-violent:</strong> No blood, no gore, no shooting. Parents and ethics boards approve.</li>
        <li><strong>Creative and open-ended:</strong> Unlike competitive games, Minecraft is about building, exploring, creating—perfect for therapeutic metaphors.</li>
        <li><strong>Collaborative:</strong> You play together, side-by-side, creating the parallel processing that teens need.</li>
        <li><strong>Controllable environment:</strong> Perfect for trauma-informed work and anxiety treatment—clients can adjust difficulty and always feel safe.</li>
        <li><strong>Already clinically validated:</strong> Therapists worldwide are successfully billing insurance for Minecraft therapy sessions.</li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The Competitive Advantage</h2>

      <p>
        Here's the reality of private practice in 2025:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Parents are desperate for therapists who can connect with their gaming kids</li>
        <li>Teens are tired of traditional talk therapy that doesn't work for them</li>
        <li>Insurance panels are full, so differentiation matters</li>
        <li>Most therapists are still doing therapy exactly the same way they learned 10+ years ago</li>
      </ul>

      <p className="mt-6 text-lg font-medium">
        <strong>Offering Minecraft therapy isn't just meeting clients where they are—it's positioning yourself as a modern, adaptable therapist who understands the digital generation.</strong>
      </p>

      <div className="bg-gray-100 p-6 rounded-lg my-8">
        <p className="text-gray-900 mb-4">
          <strong>Real feedback from my practice:</strong>
        </p>
        <p className="text-gray-700 italic mb-2">
          "We've tried four therapists and our son wouldn't talk to any of them. When you mentioned Minecraft, he actually looked up for the first time."
        </p>
        <p className="text-gray-700 italic">
          "I was skeptical about 'gaming therapy,' but watching my daughter open up about her anxiety while building in Minecraft was incredible. She finally had a way to express what she couldn't say directly."
        </p>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Common Concerns Addressed</h2>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">"I'm not a gamer. Can I really do this?"</h3>
      <p>
        You don't need to be an expert gamer. I wasn't. The sweet spot is being competent enough to earn respect while being humble enough to let clients teach you. That collaboration is actually therapeutic.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">"Will insurance cover this?"</h3>
      <p>
        Yes. I've successfully billed insurance for all my Minecraft therapy sessions. The key is proper documentation showing your clinical rationale, observations, and interventions. Minecraft is the medium—therapy is what you're providing.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">"Isn't this just playing games in session?"</h3>
      <p>
        Only if you don't know how to use it therapeutically. Just like sand tray therapy isn't "just playing with sand," Minecraft therapy requires clinical training in how to set therapeutic intentions, make observations, and process experiences. That's exactly what my clinical guide teaches.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The Bottom Line</h2>

      <p className="text-lg">
        <strong>205 million Americans are already gaming.</strong> 81% say it helps their mental health. Parents are on board. The data is clear.
      </p>

      <p className="text-lg mt-4">
        The question isn't "Should I offer Minecraft therapy?"
      </p>

      <p className="text-lg mt-4">
        The question is: <strong>"Can I afford to keep ignoring where the majority of my clients already are?"</strong>
      </p>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
        <p className="text-green-900 font-semibold text-xl mb-4">
          Ready to Get Started?
        </p>
        <p className="text-green-900 mb-4">
          Download my free clinical guide with 3 complete case studies. You'll see:
        </p>
        <ul className="list-disc pl-6 text-green-900 space-y-2 mb-6">
          <li>Exactly how Minecraft sessions work from start to finish</li>
          <li>The specific techniques that create therapeutic breakthroughs</li>
          <li>Documentation templates that satisfy insurance companies</li>
          <li>How to explain this to skeptical parents (hint: they love it)</li>
          <li>Clinical frameworks you can use immediately</li>
        </ul>
        <div className="mt-6">
          <a href="/#free-guide" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
            Get 3 Real Case Studies Free →
          </a>
        </div>
        <p className="text-sm text-green-800 mt-4">
          Plus learn about the <Link href="/complete-system" className="underline font-semibold">Complete TherapyCraft System</Link> with everything you need to confidently offer Minecraft therapy
        </p>
      </div>

      <p className="text-lg mt-8">
        Your clients are already in Minecraft. It's time to meet them there.
      </p>
    </div>
  );
}

function MinecraftCoachingContent() {
  return (
    <div className="space-y-6 text-gray-800">
      <div className="my-12 rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/TherapyCraft Minecraft Therapy.png"
          alt="Life coach and teen client sitting together on a bench in Minecraft, demonstrating side-by-side coaching"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
        <p className="text-sm text-gray-600 text-center mt-2 italic">
          Side-by-side coaching in Minecraft creates a collaborative, pressure-free environment where teens naturally open up.
        </p>
      </div>

      <p className="text-xl leading-relaxed">
        If you're a life coach working with teens, you need Minecraft coaching in your toolkit. Not as a gimmick. Not as a "last resort" for resistant clients (though it works for them too!). <strong>As a powerful coaching modality that complements everything you're already doing.</strong>
      </p>

      <p className="text-xl leading-relaxed">
        I'll be honest: I get a little enthusiastic when I talk about Minecraft coaching. I've seen breakthroughs that still blow me away. I've seen resistant teens soften and open up in ways I never would have predicted. I've watched teens who struggled with executive functioning suddenly realize how skilled they are. And I'm continually amazed at how Minecraft gives teens language to express things they couldn't articulate any other way.
      </p>

      <p className="text-xl leading-relaxed">
        This isn't about me being cool or earning respect. <strong>It's about giving teens confidence, helping them discover their strengths, and providing them with the language to express what's really going on.</strong>
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Why Minecraft Coaching Enhances Traditional Approaches</h2>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">1. You're Speaking a Language Teens Actually Get</h3>
      <p>
        62% of Americans play video games. For teens, that number is even higher. <strong>Gaming isn't a distraction from their lives. It's where they already spend time, connect with peers, and find stress relief.</strong>
      </p>

      <p className="mt-4">
        When you offer Minecraft coaching, you instantly earn credibility. You're not another out-of-touch adult. You're someone who understands their world and can guide them using tools that already matter to them.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
        <p className="text-blue-900">
          <strong>The Engagement Factor:</strong> I've watched skeptical teens light up the moment I suggest Minecraft coaching. The resistance melts. Suddenly, they're leaning in instead of checking out.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">2. They Become the Expert (And That Changes Everything)</h3>
      <p>
        In traditional coaching, you guide and they follow. But in Minecraft, <strong>they're the expert teaching you</strong>. This role reversal is transformational for teen development.
      </p>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
        <p className="text-green-900 mb-3">
          <strong>A moment I'll never forget:</strong> I was working with a teen who was guarded and resistant. She wasn't accustomed to adults in her life being collaborative. But when I willingly shared my resources with her in Minecraft, something the people she usually played with never did, she softened.
        </p>
        <p className="text-green-900">
          She realized we were collaborators, not competitors. She opened up in a completely new way. That simple act of resource-sharing communicated more about our relationship than any words could have.
        </p>
      </div>

      <p>
        Here's what happens when teens become the expert:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Their confidence grows as they teach and lead</li>
        <li>They experience themselves as competent and capable</li>
        <li>The coaching relationship becomes collaborative instead of hierarchical</li>
        <li>They practice leadership skills in a natural, low-pressure environment</li>
      </ul>

      <p className="mt-4">
        <strong>This isn't just about engagement.</strong> It's about fundamentally shifting how teens see themselves—from "needing help" to "capable of leading."
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">3. Side-by-Side Coaching Reduces Pressure</h3>
      <p>
        Face-to-face conversations can feel intense to teens. But when you're both focused on screens, building together in Minecraft, the pressure dissolves. This "parallel play" mirrors how teens naturally communicate with peers.
      </p>

      <p className="mt-4">
        <strong>Teens talk while doing.</strong> Minecraft gives them something productive to do while you coach, making difficult conversations feel natural.
      </p>

      <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-6">
        <p className="text-purple-900 font-semibold mb-3">
          A recent session that blew me away:
        </p>
        <p className="text-purple-900 mb-3">
          I died and lost all my stuff in lava. The teen I was playing with said, "Bruh, if that happened to one of my friends, they would have crashed out."
        </p>
        <p className="text-purple-900 mb-3">
          I asked him what keeps him from "crashing out" (getting mad and rage quitting) when he dies and loses his stuff. He said he just reminds himself that it's not that big of a deal. I asked if that happens more in his head with sentences, or in his body with deep breaths and relaxing his muscles. He said it was sentences in his head. <strong>This right there is something that most teen boys would not respond to.</strong> They might think the question is weird. But as we were playing the game together, fighting alongside each other in a cave as we mined, it seemed normal. He jokes sometimes that it's like we've been to war together, so we can talk about anything.
        </p>
        <p className="text-purple-900 mb-3">
          I asked if that's maybe something he could try when something upsetting happens at school. Could he practice that same self-talk and remind himself it's not that big of a deal?
        </p>
        <p className="text-purple-900 mb-3">
          <strong>He stopped playing for a second</strong> and said, "But at school it FEELS like a big deal."
        </p>
        <p className="text-purple-900 mb-3">
          As we continued mining side by side, we had an incredible conversation about why it feels like that. By the end of our session, he walked away understanding why what feels like a big deal at school really isn't. He truly believed that. And he feels as though he has a new tool to work through upsetting situations at school.
        </p>
        <p className="text-purple-900 font-semibold">
          This wouldn't happen if we were sitting in my office staring at each other.
        </p>
      </div>

      <div className="my-8 rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/TherapyCraft Nether.png"
          alt="Two characters navigating through a dangerous lava-filled Nether environment in Minecraft"
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
        <p className="text-sm text-gray-600 text-center mt-2 italic">
          Navigating challenges together in Minecraft creates powerful coaching moments where teens practice emotional regulation and resilience.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">4. Minecraft Gives Them Language They Didn't Have</h3>
      <p>
        Here's something that amazes me every single time: <strong>I've witnessed so many teens explain their struggles creatively and articulately using Minecraft analogies</strong> because it gives them language they didn't otherwise have.
      </p>

      <p className="mt-4">
        A teen who can't tell you "I feel overwhelmed and like I don't have enough resources to handle everything" will say: "I'm trying to build this massive project but I keep running out of materials and I don't know where to get more."
      </p>

      <p className="mt-4">
        Suddenly they're expressing complex emotional experiences through the game. And once they have that language, you can help them bridge it to real life: "That feeling of not having enough materials in the game, does that ever happen at school? What do you need more of in real life?"
      </p>

      <p className="mt-4">
        <strong>The game becomes a vocabulary for their inner world.</strong> And that's when real coaching happens.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">What You Can Coach Through Minecraft</h2>

      <p>
        So what does this actually look like in practice? The versatility of Minecraft makes it perfect for virtually any teen coaching application. Here's what you can coach:
      </p>

      <p className="font-semibold mt-6 mb-2">Goal Setting & Achievement:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Teens naturally set goals when building ("I want to create a massive castle")</li>
        <li>Break big ambitions into manageable steps</li>
        <li>Learn to adjust plans when obstacles arise</li>
        <li>Experience the satisfaction of completing what they started</li>
      </ul>

      <div className="my-8 rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/TherapyCraft Castle.png"
          alt="Impressive castle build in Minecraft demonstrating goal-setting and achievement"
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
        <p className="text-sm text-gray-600 text-center mt-2 italic">
          Building complex structures teaches goal-setting, planning, and the satisfaction of completing ambitious projects.
        </p>
      </div>

      <p className="font-semibold mt-6 mb-2">Executive Function & Planning:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Resource management in-game mirrors time/energy management in life</li>
        <li>Planning complex builds teaches project management</li>
        <li>Sequencing steps and prioritizing tasks becomes intuitive</li>
        <li>Decision-making practice in a consequences-free environment</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
        <p className="text-blue-900">
          <strong>This is where the magic happens:</strong> I've seen teens who struggled with executive functioning in school tackle incredibly complex, multi-step building projects in Minecraft. They plan, they gather resources, they execute. And then they realize: "Wait, I'm actually really good at this." As their coach, this is your golden moment to point out their strengths and ask open-ended questions so they can see the potential for this confidence to carry over into other areas of life. That belief in themselves? It transfers. They start to see themselves as capable beyond the game.
        </p>
      </div>

      <div className="my-8 rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/TherapyCraft Gardening.png"
          alt="Two characters working together on a garden in Minecraft, demonstrating planning and resource management"
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
        <p className="text-sm text-gray-600 text-center mt-2 italic">
          Collaborative activities like gardening teach planning, resource management, and executive function skills.
        </p>
      </div>

      <p className="font-semibold mt-6 mb-2">Resilience & Problem-Solving:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Creeper destroys their build? Coach bouncing back from setbacks</li>
        <li>Get lost in a cave? Practice staying calm under pressure</li>
        <li>Resources scarce? Develop adaptability and creative thinking</li>
        <li>Experience "safe failures" that build real-world resilience</li>
      </ul>

      <div className="my-8 rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/TherapyCraft Dragon.png"
          alt="Two characters preparing to face the Ender Dragon together in Minecraft"
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
        <p className="text-sm text-gray-600 text-center mt-2 italic">
          Facing challenges together builds resilience, teamwork, and problem-solving skills that transfer to real life.
        </p>
      </div>

      <p className="font-semibold mt-6 mb-2">Social Skills & Communication:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Collaborative builds teach cooperation and teamwork</li>
        <li>Practice asking for help and offering assistance</li>
        <li>Conflict resolution happens naturally during gameplay</li>
        <li>Build confidence in leadership and teaching others</li>
      </ul>

      <p className="font-semibold mt-6 mb-2">Confidence & Self-Efficacy:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>They're demonstrably competent (they know more than you!)</li>
        <li>See tangible results of their efforts (buildings, achievements)</li>
        <li>Experience themselves as capable teachers and leaders</li>
        <li>Transfer "I can do this in Minecraft" to "I can do this in life"</li>
      </ul>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
        <p className="text-green-900 font-semibold mb-4">
          See These Techniques in Action
        </p>
        <p className="text-green-900 mb-4">
          This free guide includes three complete case studies that show exactly how to use Minecraft for coaching and therapy:
        </p>
        <ul className="list-disc pl-6 text-green-900 space-y-2 mb-4">
          <li>The specific questions that turn gameplay into powerful coaching moments</li>
          <li>How to bridge from in-game experiences to real-life applications</li>
          <li>Techniques for building confidence, resilience, and goal-setting skills</li>
          <li>Documentation approaches that demonstrate professionalism to parents</li>
        </ul>
        <p className="text-green-900 mb-4">
          <strong>The techniques work whether you're doing therapy or life coaching.</strong> The frameworks are identical.
        </p>
        <div className="mt-6">
          <a href="/#free-guide" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Show Me the Exact Questions & Techniques →
          </a>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Why Life Coaches Need This in Their Toolkit</h2>

      <p className="text-lg">
        <strong>1. Instant Differentiation:</strong> Most coaches offer the same things. Minecraft coaching sets you apart immediately. Parents notice. Teens notice. You become the coach who "gets it."
      </p>

      <p className="text-lg mt-6">
        <strong>2. Broader Client Base:</strong> You can work with ALL teens, not just the motivated ones. The resistant teen who wouldn't engage in traditional coaching? Now you have a way to reach them.
      </p>

      <p className="text-lg mt-6">
        <strong>3. Better Outcomes:</strong> When teens are engaged and practicing skills in real-time (not just talking about them), transformation happens faster and sticks longer.
      </p>

      <p className="text-lg mt-6">
        <strong>4. Parent Approval:</strong> 90% of parents say gaming provides positive benefits for their kids. You're not introducing something controversial. You're bringing professional coaching to something parents already support.
      </p>

      <p className="text-lg mt-6">
        <strong>5. Future-Proof Your Practice:</strong> Digital integration in coaching isn't going away. The coaches who adapt early will lead the field.
      </p>

      <p className="text-lg mt-6 font-medium">
        But here's what really matters: You'll have breakthroughs with teens who've been stuck for months. That's the real reason to add this to your practice.
      </p>

      <div className="bg-gray-50 border-l-4 border-green-600 p-6 my-8">
        <p className="text-gray-900 font-semibold mb-3">
          From a mental health professional after her very first session:
        </p>
        <p className="text-gray-700 italic mb-3">
          "I just did my first session today and they were so excited about using the game to create and challenge themselves. They were so talkative about how excited they were and wanting to learn how to build... When I explained different activities we can do, their faces lit up."
        </p>
        <p className="text-gray-700 font-medium">
          This was her FIRST session. Imagine what becomes possible after that.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Common Questions from Life Coaches</h2>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">"Do I need to be good at Minecraft?"</h3>
      <p>
        Not at all! In fact, being a learner is better. When teens teach you, it builds their confidence and leadership skills. The role reversal is part of what makes this so powerful.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">"Can I use this if I'm not a therapist?"</h3>
      <p>
        Absolutely. You're not doing therapy, you're doing life coaching through a different medium. Life coaches already use activities like sports, art, and nature. Minecraft is just another tool for coaching goal-setting, resilience, problem-solving, and confidence.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">"Will parents take this seriously?"</h3>
      <p>
        When you explain that you're using the environment their teen already trusts to coach real-world skills (goal-setting, planning, resilience, problem-solving), parents get it immediately. Many see this as MORE valuable because their teen actually engages.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">"Will the techniques really work for coaching?"</h3>
      <p>
        Absolutely. The frameworks, techniques, and approaches work identically for life coaching. The questions, the processing methods, the way you bridge from in-game to real-life applications are all the same. The only difference is you're coaching life skills (goal-setting, resilience, problem-solving) instead of addressing clinical mental health issues.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The Bottom Line</h2>

      <p className="text-lg">
        If you're a life coach working with teens and you're not offering Minecraft coaching, you're missing a powerful tool that can:
      </p>

      <ul className="list-disc pl-6 space-y-2 mt-4 text-lg">
        <li>Dramatically increase teen engagement</li>
        <li>Accelerate skill development and outcomes</li>
        <li>Differentiate your practice from competitors</li>
        <li>Expand your client base to include resistant teens</li>
        <li>Position you as a modern, adaptable coach</li>
      </ul>

      <p className="text-lg mt-6 font-medium">
        This isn't about chasing trends. It's about meeting teens where they already are and coaching them using tools they already trust.
      </p>

      <div className="bg-gray-100 p-8 rounded-lg mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Add Minecraft Coaching to Your Practice?</h3>
        <p className="text-gray-700 mb-6 text-lg">
          Download the free guide with 3 complete case studies that show exactly how to use Minecraft for coaching and therapy.
        </p>
        <p className="text-gray-700 mb-6">
          You'll discover:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>How to turn gameplay into powerful coaching moments</li>
          <li>The specific questions that unlock goal-setting and resilience</li>
          <li>How to bridge from Minecraft to real-world skill application</li>
          <li>Professional frameworks you can use immediately</li>
          <li>How to present this to parents (they love it)</li>
        </ul>
        <a href="/#free-guide" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
          Show Me the Exact Questions & Techniques →
        </a>
        <p className="text-sm text-gray-600 mt-4">
          Plus learn about the <Link href="/complete-system" className="text-green-600 hover:text-green-700 font-semibold underline">Complete TherapyCraft System</Link> with session templates and everything you need
        </p>
      </div>

      <p className="text-lg mt-8 font-medium">
        Your teen clients are already in Minecraft. Time to meet them there and coach them where they're most engaged, confident, and ready to grow.
      </p>
    </div>
  );
}

function AnxietyTraumaContent() {
  return (
    <div className="space-y-6 text-gray-800">
      <p className="text-xl leading-relaxed">
        One of the most powerful aspects of Minecraft therapy is its application in trauma-informed work and anxiety treatment. The game creates a unique therapeutic environment: a world that's predictable yet flexible, controllable yet challenging, safe yet engaging.
      </p>

      <p className="text-xl leading-relaxed">
        For clients who feel overwhelmed by real-world unpredictability, Minecraft offers something remarkable—a space where they can practice coping skills while maintaining complete control.
      </p>

      <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-8">
        <p className="text-purple-900 font-semibold mb-4">
          Real Clinical Applications
        </p>
        <p className="text-purple-900 mb-4">
          In my free clinical guide, I share case studies showing how Minecraft works for:
        </p>
        <ul className="list-disc pl-6 text-purple-900 space-y-2 mb-4">
          <li>An anxious teen who used Minecraft as a "rehearsal space" to practice confidence before carrying it into real life</li>
          <li>A child navigating family conflict who finally expressed emotions she'd buried using the game's metaphors</li>
          <li>Specific techniques like the "how would you handle this in the game?" question that builds real-world coping skills</li>
        </ul>
        <div className="mt-6">
          <a href="/#free-guide" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            See the Complete Case Studies →
          </a>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Why Virtual Worlds Work for Trauma and Anxiety</h2>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Control is Therapeutic</h3>
      <p>
        Trauma and anxiety share a common feature: <strong>loss of control</strong>. Trauma survivors experienced something they couldn't control. Anxious clients worry about future events they can't control.
      </p>

      <p>
        In Minecraft, clients have unprecedented control:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>They can set the difficulty level (peaceful mode = no threats)</li>
        <li>They can build protective structures</li>
        <li>They can always "respawn" after setbacks</li>
        <li>They control the pace and intensity of challenges</li>
        <li>They can create, destroy, and recreate without real-world consequences</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
        <p className="text-blue-900">
          <strong>Trauma-Informed Principle:</strong> Restoration of control is essential for healing. Minecraft provides a controlled environment where clients can practice agency while knowing they're completely safe.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Exposure Therapy Without Flooding</h3>
      <p>
        Traditional exposure therapy for anxiety can be challenging - it requires clients to face fears directly, which can lead to avoidance or flooding (overwhelming anxiety). Minecraft offers a gentler alternative:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Gradual exposure:</strong> Start in peaceful mode, slowly introduce challenges</li>
        <li><strong>Metaphorical exposure:</strong> Face virtual "mobs" (threats) instead of real-world fears</li>
        <li><strong>Controlled intensity:</strong> Client adjusts difficulty as they build tolerance</li>
        <li><strong>Safe experimentation:</strong> Practice coping skills without real consequences</li>
      </ul>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
        <p className="text-green-900 font-semibold mb-4">
          These Aren't Just Theories—They're Proven Techniques
        </p>
        <p className="text-green-900 mb-4">
          The free clinical guide includes real session examples showing:
        </p>
        <ul className="list-disc pl-6 text-green-900 space-y-2 mb-4">
          <li>How an anxious client practiced confidence in Minecraft and carried it into real life</li>
          <li>The exact therapeutic questions that help clients process anxiety while playing</li>
          <li>How to use the game as a "rehearsal space" for real-world challenges</li>
          <li>Documentation language for anxiety treatment using Minecraft</li>
        </ul>
        <div className="mt-6">
          <a href="/#free-guide" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Download Free Clinical Guide →
          </a>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Specific Therapeutic Applications</h2>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">For Anxiety: Building Safety and Coping Skills</h3>

      <p className="font-semibold mb-2">Safe Space Creation</p>
      <p>
        Ask anxious clients to build their "safe space" in Minecraft:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>What does safety look like? (walls, lighting, cozy spaces)</li>
        <li>What do you need to feel safe? (resources, protection, comfort items)</li>
        <li>Who/what would you keep out? (mobs = stressors/threats)</li>
      </ul>

      <p className="mt-4">
        This activity reveals their anxiety patterns and creates opportunities to process their need for control, fear of threats, and what actually makes them feel safe.
      </p>

      <p className="font-semibold mb-2 mt-6">Controlled Challenge Exposure</p>
      <p>
        Gradually introduce challenges while teaching coping skills:
      </p>

      <ol className="list-decimal pl-6 space-y-3">
        <li><strong>Start in peaceful mode</strong> (no threats) - Build, explore, establish safety</li>
        <li><strong>Introduce easy mode</strong> (minimal threats) - Process anxiety when first mob appears</li>
        <li><strong>Practice coping in-game:</strong>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Deep breathing when anxious</li>
            <li>Problem-solving (craft armor, build shelter)</li>
            <li>Self-talk ("I can handle this, I've prepared")</li>
          </ul>
        </li>
        <li><strong>Process afterward:</strong> "You felt scared when the zombie appeared, but you handled it. What did you do? Could those same strategies work when you feel scared at school?"</li>
      </ol>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">For Trauma: Safe Processing Through Metaphor</h3>

      <p className="font-semibold mb-2">Creating Control Where Control Was Lost</p>
      <p>
        Trauma often involves experiences where the person had no control. Minecraft reverses this:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Client experienced a house fire → In Minecraft, they control fire, can put it out, rebuild</li>
        <li>Client was bullied → They build protective walls, create safe communities, have power</li>
        <li>Client lost a loved one → They can create memorials, safe spaces to process grief</li>
      </ul>

      <p className="mt-4">
        The virtual environment lets them symbolically take back control without re-traumatization.
      </p>

      <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-8">
        <p className="text-purple-900 font-semibold mb-4">
          See Real Trauma-Informed Techniques in the Free Guide
        </p>
        <p className="text-purple-900 mb-4">
          The case studies demonstrate trauma-informed applications of Minecraft therapy:
        </p>
        <ul className="list-disc pl-6 text-purple-900 space-y-2 mb-4">
          <li>How clients naturally create metaphors for their trauma through in-game building</li>
          <li>Processing techniques that keep the work safe and avoid retraumatization</li>
          <li>The "mob metaphor" method that helps kids express what they can't say directly</li>
          <li>Building emotional armor and practicing coping skills in a controlled environment</li>
        </ul>
        <div className="mt-6">
          <a href="/#free-guide" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            Get the Clinical Case Studies →
          </a>
        </div>
      </div>

      <p className="font-semibold mb-2 mt-6">Processing Difficult Emotions Safely</p>
      <p>
        Minecraft becomes an outlet for emotions that feel too big or scary to express directly:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Anger:</strong> Controlled destruction in creative mode (then rebuild)</li>
        <li><strong>Sadness:</strong> Creating memorial spaces, building through grief</li>
        <li><strong>Fear:</strong> Practicing facing virtual threats with support</li>
        <li><strong>Powerlessness:</strong> Experiencing agency and competence</li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Key Trauma-Informed Principles in Minecraft Therapy</h2>

      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <strong>Client sets the pace:</strong> Never force challenges. Let them choose difficulty level, when to face mobs, when to stay in creative mode.
        </li>
        <li>
          <strong>Predictability creates safety:</strong> Minecraft follows consistent rules. This predictability is therapeutic for traumatized clients.
        </li>
        <li>
          <strong>Respawning teaches resilience:</strong> "Death" in Minecraft isn't permanent. This teaches that setbacks can be overcome.
        </li>
        <li>
          <strong>You're present but not intrusive:</strong> Play alongside them, provide co-regulation through your calm presence.
        </li>
        <li>
          <strong>Honor their coping strategies:</strong> If they build walls, don't immediately interpret it negatively. Walls were adaptive. Then slowly work toward flexibility.
        </li>
      </ol>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Clinical Techniques to Try</h2>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">The "Safe Space Then Challenge" Framework</h3>
      <ol className="list-decimal pl-6 space-y-2">
        <li>First sessions: Build a completely safe base in peaceful mode</li>
        <li>Middle sessions: Introduce small challenges from safe base</li>
        <li>Later sessions: Venture further from safety, practice coping skills</li>
        <li>Process throughout: Connect game experiences to real-life situations</li>
      </ol>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">The "What-If" Exposure Practice</h3>
      <p>
        For anxious clients who catastrophize:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>"What if a creeper destroys your house?" → Let it happen in-game</li>
        <li>Process: "That thing you feared happened. And you handled it. You're rebuilding."</li>
        <li>Real-world connection: "What fears in real life feel like creepers? What would happen if the feared thing actually occurred?"</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">The Collaborative Coping Session</h3>
      <p>
        When a challenging situation occurs in-game (mob attack, getting lost, resource shortage):
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Pause and check in: "How are you feeling right now?"</li>
        <li>Practice coping in the moment: "Let's take three deep breaths together"</li>
        <li>Problem-solve together: "What could we do to handle this?"</li>
        <li>Reflect after: "You felt anxious, used your coping skills, and solved the problem. That's exactly what we want you to do at school/home."</li>
      </ol>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">When Minecraft Therapy is Especially Powerful</h2>

      <p>Consider Minecraft for clients who:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Dissociate or shut down during traditional trauma processing</li>
        <li>Have severe social anxiety that prevents role-play practice</li>
        <li>Need to develop frustration tolerance and distress tolerance skills</li>
        <li>Struggle with traditional play therapy materials (too young/old, not engaging)</li>
        <li>Are highly controlled by anxiety and need to practice flexibility</li>
        <li>Have experienced trauma and need to restore sense of control</li>
        <li>Respond to metaphorical/symbolic processing better than direct discussion</li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The Research Backing</h2>

      <p>
        While Minecraft therapy is relatively new, it aligns with established therapeutic principles:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Play therapy research:</strong> Symbolic play supports trauma processing</li>
        <li><strong>Exposure therapy:</strong> Gradual, controlled exposure reduces anxiety</li>
        <li><strong>Trauma-informed care:</strong> Restoration of control supports healing</li>
        <li><strong>Digital therapeutics:</strong> Virtual environments effectively support mental health interventions</li>
      </ul>

      <p className="text-lg font-medium mt-8">
        Minecraft therapy isn't replacing evidence-based trauma treatment - it's providing a medium that makes those treatments more accessible and effective for young clients who struggle with traditional approaches.
      </p>

      <div className="bg-gray-100 p-8 rounded-lg mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Deepen Your Trauma-Informed Minecraft Practice</h3>
        <p className="text-gray-700 mb-6">
          The <Link href="/complete-system" className="text-green-600 hover:text-green-700 font-semibold underline">TherapyCraft Complete System</Link> includes specific protocols for anxiety and trauma work, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Session plans for gradual exposure work</li>
          <li>Trauma-informed Minecraft activities</li>
          <li>Documentation templates for trauma/anxiety treatment</li>
          <li>Safety protocols and ethical guidelines</li>
          <li>Processing prompts for trauma metaphors</li>
        </ul>
        <Link href="/#free-guide" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
          Get Free Clinical Guide →
        </Link>
      </div>
    </div>
  );
}
