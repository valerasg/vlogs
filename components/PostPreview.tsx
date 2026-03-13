import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types/blog";

export default function PostPreview({ post }: { post: Post }) {
  const { title, excerpt, coverImage, date, author, slug, categories } = post;
  
  return (
    <article className="group relative flex flex-col items-start gap-4 p-4 -m-4 rounded-[2rem] transition-all duration-500 hover:bg-white/50 dark:hover:bg-white/5 hover:backdrop-blur-xl hover:shadow-2xl border border-transparent hover:border-gray-200/50 dark:hover:border-white/10">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span key={cat.slug} className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {cat.name}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold leading-tight tracking-tight hover:underline decoration-2 underline-offset-4">
          <Link href={`/posts/${slug}`}>{title}</Link>
        </h3>
        
        <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {excerpt}
        </p>
        
        <div className="mt-2 flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-gray-100 dark:ring-gray-800">
            <Image src={author.avatar} alt={author.name} fill className="object-cover" />
          </div>
          <div className="flex flex-col text-[12px]">
            <span className="font-semibold text-gray-900 dark:text-gray-100">{author.name}</span>
            <span className="text-gray-500 dark:text-gray-400">{new Date(date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
