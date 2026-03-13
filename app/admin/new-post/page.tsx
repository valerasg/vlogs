"use client";

import { useState } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Heading1, 
  Heading2, 
  Quote, 
  Undo, 
  Redo,
  Image as ImageIcon,
  Send
} from "lucide-react";

const Toolbar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;

  const buttons = [
    {
      icon: <Heading1 className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: editor.isActive("heading", { level: 1 }),
    },
    {
      icon: <Heading2 className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: editor.isActive("heading", { level: 2 }),
    },
    {
      icon: <Bold className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive("bold"),
    },
    {
      icon: <Italic className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive("italic"),
    },
    {
      icon: <List className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive("bulletList"),
    },
    {
      icon: <ListOrdered className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive("orderedList"),
    },
    {
      icon: <Quote className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: editor.isActive("blockquote"),
    },
  ];

  return (
    <div className="flex flex-wrap gap-2 p-2 mb-4 bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200/50 dark:border-white/10 rounded-xl">
      {buttons.map((btn, i) => (
        <button
          key={i}
          onClick={btn.onClick}
          className={`p-2 rounded-lg transition-colors ${
            btn.isActive 
              ? "bg-black text-white dark:bg-white dark:text-black" 
              : "hover:bg-gray-100 dark:hover:bg-white/10"
          }`}
        >
          {btn.icon}
        </button>
      ))}
      <div className="w-[1px] bg-gray-200 dark:bg-white/10 mx-1" />
      <button
        onClick={() => editor.chain().focus().undo().run()}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
      >
        <Undo className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
      >
        <Redo className="w-4 h-4" />
      </button>
    </div>
  );
};

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start writing your story...</p>",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "prose prose-lg dark:prose-invert max-w-none focus:outline-none min-h-[400px] p-4",
      },
    },
  });

  const handlePublish = () => {
    const postData = {
      title,
      excerpt,
      coverImage,
      content: editor?.getHTML(),
      date: new Date().toISOString(),
    };
    console.log("Publishing Post:", postData);
    alert("Check console for post data! (Mock publish)");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-black tracking-tight mb-2">Create New Post</h1>
        <p className="text-gray-500">Draft your next masterpiece with our rich text editor.</p>
      </div>

      <div className="space-y-8">
        {/* Basic Info */}
        <div className="grid grid-cols-1 gap-6 p-8 bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-[2.5rem] shadow-xl">
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Post Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., The Future of Web Development"
              className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200/50 dark:ring-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-sm focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all text-xl font-bold"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Excerpt</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="A brief summary of your post..."
              className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200/50 dark:ring-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-sm focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Cover Image URL</label>
            <div className="flex gap-3">
              <input
                type="text"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className="flex-1 px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200/50 dark:ring-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-sm focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all"
              />
              <button className="p-4 bg-gray-100 dark:bg-white/10 rounded-2xl hover:opacity-70 transition-opacity">
                <ImageIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Editor */}
        <div className="p-2 bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-[2.5rem] shadow-xl overflow-hidden">
          <Toolbar editor={editor} />
          <div className="bg-white/30 dark:bg-black/20 rounded-2xl">
            <EditorContent editor={editor} />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4">
          <button className="px-8 py-4 font-bold rounded-2xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
            Save Draft
          </button>
          <button 
            onClick={handlePublish}
            className="flex items-center gap-2 px-10 py-4 bg-black text-white dark:bg-white dark:text-black rounded-2xl font-black hover:opacity-90 transition-all shadow-lg active:scale-95"
          >
            <span>Publish Post</span>
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
