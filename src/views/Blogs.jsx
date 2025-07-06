// pages/blogs.jsx
import BlogCard from "../components/BlogCard";

const allBlogs = [
  {
    title: "Understanding REST APIs",
    summary: "Learn the basics of RESTful APIs and how they work.",
    date: "July 1, 2025",
  },
  {
    title: "Intro to Next.js",
    summary: "Why Next.js is a great framework for React developers.",
    date: "June 20, 2025",
  },
  {
    title: "Dark Mode in Tailwind CSS",
    summary: "Implementing dark mode seamlessly using Tailwind CSS.",
    date: "June 10, 2025",
  },
  {
    title: "Tailwind vs Bootstrap",
    summary: "Which CSS framework is better and why?",
    date: "May 25, 2025",
  },
];

export default function Blogs() {
  return (
    <main className="p-6 bg-white dark:bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">All Blogs</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {allBlogs.map((blog, idx) => (
          <BlogCard key={idx} {...blog} />
        ))}
      </div>
    </main>
  );
}
