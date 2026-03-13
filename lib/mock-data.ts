import { Post } from "@/types/blog";

export const MOCK_POSTS: Post[] = [
  {
    id: "1",
    title: "Building Modern UIs with Next.js and Tailwind",
    slug: "building-modern-uis",
    excerpt: "Learn how to build high-performance, accessible, and visually stunning web interfaces using the latest tools in the React ecosystem.",
    content: "<p>This is a mock blog post content. It would typically be MDX or HTML from a CMS.</p>",
    coverImage: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1200&h=600&auto=format&fit=crop",
    date: "2024-03-12T10:00:00Z",
    author: {
      name: "Leo V.",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=250&h=250&auto=format&fit=crop",
    },
    categories: [{ name: "Design", slug: "design" }, { name: "Tech", slug: "tech" }],
  },
  {
    id: "2",
    title: "The Future of Server-Side Rendering",
    slug: "future-ssr",
    excerpt: "SSR is evolving faster than ever. We explore how Next.js App Router and React Server Components are changing the landscape.",
    content: "<p>Content for the SSR post goes here.</p>",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&h=600&auto=format&fit=crop",
    date: "2024-03-11T14:30:00Z",
    author: {
      name: "Sarah J.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&h=250&auto=format&fit=crop",
    },
    categories: [{ name: "Performance", slug: "performance" }],
  },
  {
    id: "3",
    title: "Accessibility in Web Design: Why It Matters",
    slug: "web-accessibility",
    excerpt: "Inclusive design isn't just a trend—it's a fundamental part of building for the web. Discover the core principles of accessibility.",
    content: "<p>Accessible design content here.</p>",
    coverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&h=600&auto=format&fit=crop",
    date: "2024-03-10T09:15:00Z",
    author: {
      name: "Elena M.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250&h=250&auto=format&fit=crop",
    },
    categories: [{ name: "UX", slug: "ux" }],
  },
];
