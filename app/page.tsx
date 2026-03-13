import { MOCK_POSTS } from "@/lib/mock-data";
import PostPreview from "@/components/PostPreview";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const featuredPost = MOCK_POSTS[0];
  const recentPosts = MOCK_POSTS.slice(1);

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[16/9] lg:aspect-square overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-800">
            <Image
              src={featuredPost.coverImage}
              alt={featuredPost.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-2">
              {featuredPost.categories.map((cat) => (
                <span key={cat.slug} className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  {cat.name}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              <Link href={`/posts/${featuredPost.slug}`} className="hover:underline decoration-4 underline-offset-8">
                {featuredPost.title}
              </Link>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-gray-100 dark:ring-gray-800">
                <Image src={featuredPost.author.avatar} alt={featuredPost.author.name} fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 dark:text-gray-100">{featuredPost.author.name}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section>
        <div className="flex items-center justify-between mb-10 border-b border-gray-100 dark:border-gray-800 pb-4">
          <h2 className="text-2xl font-bold tracking-tight">Recent Stories</h2>
          <Link href="/posts" className="text-sm font-semibold hover:opacity-70 transition-opacity">View All →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {recentPosts.map((post) => (
            <PostPreview key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="mt-32 p-12 rounded-[3rem] bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 shadow-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Stay in the loop</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          Subscribe to our newsletter and get the latest articles delivered straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="flex-1 px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200/50 dark:ring-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-sm focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all"
          />
          <button className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-2xl font-bold hover:opacity-90 transition-opacity">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
