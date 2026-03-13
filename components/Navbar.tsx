"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-gray-100/50 dark:border-gray-800/50 shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity">
          VLOGS.
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link 
            href="/admin/new-post" 
            className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-xs font-bold hover:opacity-80 transition-all"
          >
            Create Post
          </Link>
          <div className="flex items-center gap-2 group cursor-pointer hover:text-blue-600 transition-colors">
            <span>Search</span>
            <Search className="h-4 w-4" />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-gray-100/50 dark:border-gray-800/50 p-6 flex flex-col gap-4 md:hidden"
          >
            <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-bold">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-bold">About</Link>
            <Link 
              href="/admin/new-post" 
              onClick={() => setIsOpen(false)} 
              className="text-lg font-bold text-blue-600 dark:text-blue-400"
            >
              Create Post
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>

  );
}
