import { MOCK_POSTS } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = MOCK_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 pb-24">
      <header className="mb-12 pt-8">
        <div className="flex gap-2 mb-6">
          {post.categories.map((cat) => (
            <span key={cat.slug} className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              {cat.name}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8">
          {post.title}
        </h1>
        <div className="flex items-center justify-between py-6 border-y border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-gray-100 dark:ring-gray-800">
              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 dark:text-gray-100">{post.author.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            {/* Social Share Placeholders */}
            <span className="text-xs font-semibold tracking-widest uppercase">Share</span>
            <div className="h-[1px] w-8 bg-gray-200 dark:bg-gray-800" />
          </div>
        </div>
      </header>

      <div className="relative aspect-video w-full mb-12 overflow-hidden rounded-[2rem] bg-gray-100 dark:bg-gray-800">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div 
        className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-img:rounded-2xl"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
      
      <div className="mt-20 pt-12 border-t border-gray-100 dark:border-gray-800">
        <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-[2rem] flex items-center gap-6">
          <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-3xl">
            <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Written by</span>
            <h3 className="text-xl font-bold">{post.author.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Full-stack developer and designer focused on building polished digital experiences.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <Link href="/" className="inline-flex items-center font-bold text-sm hover:opacity-70 transition-opacity">
          ← Back to all stories
        </Link>
      </div>
    </article>
  );
}
