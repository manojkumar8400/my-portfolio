// components/BlogCard.jsx
export default function BlogCard({ title, summary, date }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-md">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{summary}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{date}</p>
    </div>
  );
}
