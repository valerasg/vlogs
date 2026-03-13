export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-6xl font-extrabold tracking-tight mb-8">About VLOGS</h1>
      <div className="prose prose-lg dark:prose-invert">
        <p>
          Welcome to VLOGS, a modern digital magazine for thinkers, builders, and designers.
          Our mission is to explore the intersection of technology, design, and culture
          through long-form storytelling and visual exploration.
        </p>
        <p>
          This project started as a simple blueprint to showcase what's possible with
          Next.js, TypeScript, and Tailwind CSS. Today, it's a living example of how
          a performant, accessible, and beautifully designed blog can be built in minutes.
        </p>
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Accessibility:</strong> We believe information should be available to everyone, regardless of their device or ability.</li>
          <li><strong>Performance:</strong> Fast interfaces aren't just a feature; they're a requirement for a modern web experience.</li>
          <li><strong>Quality over Quantity:</strong> We prioritize meaningful content that provides real value to our readers.</li>
        </ul>
        <p>
          Want to get in touch? Send us a message or follow our latest updates on social media.
        </p>
      </div>
    </div>
  );
}
