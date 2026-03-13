# VLOGS.

A modern, high-performance blog platform built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. Designed for speed, accessibility, and a seamless reading experience.

![VLOGS. Banner](https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&h=400&auto=format&fit=crop)

## 🚀 Features

- **Modern Tech Stack**: Built with the latest versions of Next.js, React, and Tailwind CSS.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **Dynamic Routing**: Clean URL structures for posts and categories using Next.js App Router.
- **Performance Focused**: Optimized fonts with `next/font` and image handling.
- **Rich Interactions**: Smooth transitions and animations powered by `framer-motion`.
- **Accessible UI**: Clean, readable layouts with a focus on web accessibility principles.
- **Dark Mode Support**: Minimalist aesthetic that adapts to system preferences.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)

## 📂 Project Structure

```text
├── app/              # Next.js App Router (Pages & API)
│   ├── about/        # About page
│   ├── categories/   # Category listing pages
│   ├── posts/        # Individual blog post pages
│   └── layout.tsx    # Root layout and global providers
├── components/       # Reusable UI components
├── lib/              # Utilities and mock data
├── public/           # Static assets
├── types/            # TypeScript interfaces/types
└── tailwind.config.js # Styling configuration
```

## 🏁 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/vlogs.git
   cd vlogs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 License

This project is licensed under the MIT License.
