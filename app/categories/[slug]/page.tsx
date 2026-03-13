import { MOCK_POSTS } from "@/lib/mock-data";
import PostPreview from "@/components/PostPreview";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = MOCK_POSTS.flatMap((post) => post.categories);
  const uniqueCategories = Array.from(new Set(categories.map((c) => c.slug))).map((slug) => {
    return { slug };
  });
  return uniqueCategories;
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const categoryPosts = MOCK_POSTS.filter((p) => 
    p.categories.some((cat) => cat.slug === slug)
  );

  if (categoryPosts.length === 0) {
    // If no posts found, but let's check if the category even exists in our mock data
    // For this blueprint, we'll just show what we found.
    // If empty, it's just a category with no posts.
  }

  const categoryName = categoryPosts[0]?.categories.find(c => c.slug === slug)?.name || slug;

  return (
    <div className="max-w-6xl mx-auto px-4">
      <header className="mb-16 border-b border-gray-100 dark:border-gray-800 pb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 block">
          Category
        </span>
        <h1 className="text-5xl font-bold tracking-tight capitalize">
          {categoryName}
        </h1>
        <p className="text-lg text-gray-500 mt-4">
          Browse all stories tagged under {categoryName}.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {categoryPosts.map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>
      
      {categoryPosts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 italic">No posts found in this category.</p>
        </div>
      )}
    </div>
  );
}
