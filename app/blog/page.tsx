import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minecraft Therapy Blog | Clinical Insights & Techniques | TherapyCraft",
  description: "Expert guidance on using Minecraft in therapy. Learn evidence-based techniques, clinical strategies, and best practices for gaming therapy with kids and teens.",
  keywords: "minecraft therapy blog, gaming therapy insights, digital therapy techniques, minecraft counseling, therapeutic gaming, minecraft therapy tips, video game therapy, minecraft clinical strategies",
  openGraph: {
    title: "Minecraft Therapy Blog | TherapyCraft",
    description: "Clinical insights and practical techniques for using Minecraft in therapy with kids and teens.",
    type: "website",
  },
};

// Blog posts data - add new posts here
const blogPosts = [
  {
    slug: "why-therapists-should-offer-minecraft-therapy-2025",
    title: "205 Million Americans Play Video Games: Why Therapists Can't Ignore Minecraft Therapy in 2025",
    excerpt: "New gaming industry data reveals why Minecraft therapy isn't a trend—it's meeting your clients where they already are. See the numbers that prove gaming is the language of modern mental health.",
    date: "2025-01-20",
    category: "Industry Insights",
    readTime: "5 min read",
  },
  {
    slug: "minecraft-coaching-for-teens-life-coaches",
    title: "Life Coaches: Why Minecraft Coaching Should Be Part of Every Teen Coach's Toolkit",
    excerpt: "Minecraft coaching will open doors you can't even imagine. Discover why this powerful modality delivers better engagement, faster results, and helps teens discover strengths they didn't know they had.",
    date: "2025-01-18",
    category: "For Coaches",
    readTime: "6 min read",
  },
  {
    slug: "getting-started-minecraft-therapy",
    title: "Getting Started with Minecraft Therapy: A Beginner's Guide for Therapists",
    excerpt: "Thinking about adding Minecraft to your therapy practice? This comprehensive guide covers everything you need to know to get started, from equipment setup to your first session.",
    date: "2025-01-15",
    category: "Getting Started",
    readTime: "8 min read",
  },
  {
    slug: "why-resistant-teens-open-up-in-minecraft",
    title: "Why Resistant Teens Open Up in Minecraft (And How to Use It Therapeutically)",
    excerpt: "Discover the psychological mechanisms that make Minecraft so effective for reaching resistant adolescent clients, plus specific techniques to harness this power in your sessions.",
    date: "2025-01-10",
    category: "Clinical Techniques",
    readTime: "6 min read",
  },
  {
    slug: "minecraft-therapy-anxiety-trauma",
    title: "Using Minecraft Therapy for Anxiety and Trauma: Safe Exposure in Virtual Worlds",
    excerpt: "Learn how Minecraft's controllable environment makes it an ideal tool for trauma-informed therapy and anxiety work with children and teens.",
    date: "2025-01-05",
    category: "Clinical Applications",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-6 max-w-5xl">
          <nav className="mb-8">
            <Link href="/" className="text-white hover:text-green-100 transition-colors">
              ← Back to Home
            </Link>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            TherapyCraft Blog
          </h1>
          <p className="text-xl text-green-100">
            Clinical insights, practical techniques, and evidence-based strategies for Minecraft therapy
          </p>
        </div>
      </header>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8"
              >
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
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

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-green-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors"
                >
                  Read Article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the complete TherapyCraft system with everything you need to start using Minecraft in therapy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#free-guide"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Free Clinical Guide
            </Link>
            <Link
              href="/complete-system"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
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
            Created by Ashley Jangro, LPCC | Questions? ashley@therapycraft.io
          </p>
        </div>
      </footer>
    </main>
  );
}
