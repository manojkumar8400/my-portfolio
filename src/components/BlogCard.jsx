// components/BlogCard.jsx
import { ArrowRight, ExternalLink, Github, Calendar, Clock, Sun, Moon } from 'lucide-react';

export default function BlogCard({ isDarkMode }) {

  const navigateToBlogs = () => {
    console.log('Navigate to Blogs Page');
    window.location.href = '/blogs';
  };

    // Latest Blog Posts (top 3)
  const latestBlogs = [
    {
      id: 1,
      title: "Understanding REST APIs",
      subtitle: "Learn the basics of RESTful APIs and how they work",
      category: "Backend",
      date: "July 1, 2025",
      readTime: "8 min read",
      gradient: "from-blue-500 to-purple-600",
      tags: ["REST", "API", "Backend"]
    },
    {
      id: 2,
      title: "Intro to Next.js",
      subtitle: "Why Next.js is a great framework for React developers",
      category: "Frontend",
      date: "June 20, 2025",
      readTime: "6 min read",
      gradient: "from-green-500 to-teal-600",
      tags: ["Next.js", "React", "SSR"]
    },
    {
      id: 3,
      title: "Dark Mode in Tailwind CSS",
      subtitle: "Implementing dark mode toggle seamlessly using Tailwind CSS",
      category: "CSS",
      date: "June 10, 2025",
      readTime: "5 min read",
      gradient: "from-purple-500 to-pink-500",
      tags: ["Tailwind", "CSS", "Dark Mode"]
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <section>
            <div className="text-center mb-12">
              <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Latest Articles
              </h2>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
                Insights and tutorials on modern web development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {latestBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className={`rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl group ${
                    isDarkMode 
                      ? 'bg-gray-900 hover:shadow-blue-500/10 border border-gray-800'
                      : 'bg-white hover:shadow-blue-500/20 border border-gray-200 shadow-sm'
                  }`}
                >
                  {/* Header */}
                  <div className={`h-32 bg-gradient-to-r ${blog.gradient} relative`}>
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        blog.category === 'Frontend' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                        blog.category === 'Backend' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                        'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                      }`}>
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className={`text-lg font-bold mb-2 group-hover:text-blue-500 transition-colors ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {blog.title}
                    </h3>
                    <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {blog.subtitle}
                    </p>

                    <div className={`flex items-center gap-3 mb-4 text-xs ${
                      isDarkMode ? 'text-gray-500' : 'text-gray-600'
                    }`}>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {blog.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className={`px-2 py-1 rounded text-xs ${
                              isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <button className="text-blue-500 hover:text-blue-600 font-medium text-sm flex items-center gap-1 group">
                        Read
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* View All Blogs Button */}
            <div className="text-center">
              <button
                onClick={navigateToBlogs}
                className="group bg-gradient-to-r cursor-pointer from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-3 mx-auto"
              >
                Read More Articles
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
