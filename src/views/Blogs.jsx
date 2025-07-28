import React, { useState, useMemo } from 'react';
import { Search, Calendar, Clock, User, Tag, ArrowRight, Sun, Moon, Filter } from 'lucide-react';

const Blogs = ({ isDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Understanding REST APIs",
      subtitle: "Learn the basics of RESTful APIs and how they work.",
      content: "REST APIs are the backbone of modern web applications. In this comprehensive guide, we'll explore the fundamental concepts of REST architecture, HTTP methods, status codes, and best practices for building robust APIs...",
      category: "Backend",
      author: "CyberDev",
      date: "July 1, 2025",
      readTime: "8 min read",
      tags: ["REST", "API", "Backend", "HTTP"],
      gradient: "from-blue-500 to-purple-600",
      featured: true
    },
    {
      id: 2,
      title: "Intro to Next.js",
      subtitle: "Why Next.js is a great framework for React developers.",
      content: "Next.js has revolutionized how we build React applications. With features like server-side rendering, static site generation, and automatic code splitting, it's become the go-to framework for modern web development...",
      category: "Frontend",
      author: "CyberDev",
      date: "June 20, 2025",
      readTime: "6 min read",
      tags: ["Next.js", "React", "SSR", "Frontend"],
      gradient: "from-green-500 to-teal-600",
      featured: true
    },
    {
      id: 3,
      title: "Dark Mode in Tailwind CSS",
      subtitle: "Implementing dark mode toggle seamlessly using Tailwind CSS.",
      content: "Dark mode has become an essential feature in modern web applications. Tailwind CSS makes it incredibly easy to implement with its built-in dark mode utilities. Let's explore how to create a seamless dark/light mode experience...",
      category: "CSS",
      author: "CyberDev",
      date: "June 10, 2025",
      readTime: "5 min read",
      tags: ["Tailwind", "CSS", "Dark Mode", "UI/UX"],
      gradient: "from-purple-500 to-pink-500",
      featured: false
    },
    {
      id: 4,
      title: "Tailwind vs Bootstrap",
      subtitle: "Which CSS framework is better and why?",
      content: "The age-old debate between utility-first and component-based CSS frameworks. We'll compare Tailwind CSS and Bootstrap across various metrics including performance, customization, learning curve, and developer experience...",
      category: "CSS",
      author: "CyberDev",
      date: "May 25, 2025",
      readTime: "7 min read",
      tags: ["Tailwind", "Bootstrap", "CSS", "Comparison"],
      gradient: "from-orange-500 to-red-500",
      featured: false
    },
    {
      id: 5,
      title: "React Hooks Deep Dive",
      subtitle: "Mastering useState, useEffect, and custom hooks.",
      content: "React Hooks have transformed how we write React components. This deep dive covers the most important hooks, their use cases, common pitfalls, and how to create powerful custom hooks for your applications...",
      category: "Frontend",
      author: "CyberDev",
      date: "May 15, 2025",
      readTime: "10 min read",
      tags: ["React", "Hooks", "useState", "useEffect"],
      gradient: "from-cyan-500 to-blue-500",
      featured: false
    },
    {
      id: 6,
      title: "JavaScript ES6+ Features",
      subtitle: "Modern JavaScript features every developer should know.",
      content: "ES6 and beyond have introduced powerful features that make JavaScript more expressive and efficient. From arrow functions to async/await, let's explore the features that have shaped modern JavaScript development...",
      category: "JavaScript",
      author: "CyberDev",
      date: "May 5, 2025",
      readTime: "9 min read",
      tags: ["JavaScript", "ES6", "Modern JS", "Programming"],
      gradient: "from-yellow-500 to-orange-500",
      featured: false
    },
    {
      id: 7,
      title: "Git Workflow Best Practices",
      subtitle: "Efficient Git workflows for solo and team development.",
      content: "Git is more than just version control - it's a collaboration tool. Learn about different Git workflows, branching strategies, commit message conventions, and how to maintain clean project history...",
      category: "Tools",
      author: "CyberDev",
      date: "April 28, 2025",
      readTime: "6 min read",
      tags: ["Git", "Version Control", "Workflow", "Collaboration"],
      gradient: "from-gray-500 to-slate-600",
      featured: false
    },
    {
      id: 8,
      title: "Building Responsive Layouts",
      subtitle: "CSS Grid vs Flexbox - when to use what.",
      content: "Creating responsive layouts is fundamental to modern web design. We'll explore the strengths of CSS Grid and Flexbox, when to use each, and how to combine them for powerful, flexible layouts...",
      category: "CSS",
      author: "CyberDev",
      date: "April 20, 2025",
      readTime: "8 min read",
      tags: ["CSS", "Responsive", "Grid", "Flexbox"],
      gradient: "from-indigo-500 to-purple-500",
      featured: false
    }
  ];

  // Get unique categories for filtering
  const allCategories = ['All', ...new Set(blogPosts.map(post => post.category))];

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, blogPosts]);

  // Separate featured and regular posts
  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className={`min-h-screen transition-all duration-500 mt-[4.7rem] ${
      isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
    }`}>

      {/* Header Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Title and Stats */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              All Blogs
            </h1>
            <p className={`text-base sm:text-lg max-w-2xl mx-auto mb-6 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Insights, tutorials, and thoughts on modern web development. From frontend frameworks to backend architecture.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-500">{blogPosts.length}</div>
                <div className={isDarkMode ? 'text-gray-500' : 'text-gray-600'}>Total Posts</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-purple-500">
                  {allCategories.length - 1}
                </div>
                <div className={isDarkMode ? 'text-gray-500' : 'text-gray-600'}>Categories</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-green-500">Weekly</div>
                <div className={isDarkMode ? 'text-gray-500' : 'text-gray-600'}>Updates</div>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto mb-8">
              <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-12 pr-6 py-4 border rounded-2xl text-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                  isDarkMode 
                    ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 shadow-sm'
                }`}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                      : isDarkMode
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105'
                        : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:scale-105 border border-gray-200'
                  }`}
                >
                  {category}
                  {category !== 'All' && (
                    <span className="ml-2 text-xs opacity-75">
                      {blogPosts.filter(post => post.category === category).length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Active Filters */}
            {(searchTerm || selectedCategory !== 'All') && (
              <div className="mt-6 text-center">
                <div className="inline-flex flex-wrap gap-2 items-center justify-center">
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Active filters:
                  </span>
                  {searchTerm && (
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                      "{searchTerm}"
                    </span>
                  )}
                  {selectedCategory !== 'All' && (
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                      {selectedCategory}
                    </span>
                  )}
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                    }}
                    className={`text-sm underline ml-2 hover:text-blue-500 transition-colors ${
                      isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Clear all
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Showing {filteredPosts.length} of {blogPosts.length} articles
            </p>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-12">
              <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {featuredPosts.map((post) => (
                  <article
                    key={post.id}
                    className={`group rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl ${
                      isDarkMode 
                        ? 'bg-gray-900 hover:shadow-blue-500/10 border border-gray-800'
                        : 'bg-white hover:shadow-blue-500/20 border border-gray-200 shadow-sm'
                    }`}
                  >
                    {/* Gradient Header */}
                    <div className={`h-48 bg-gradient-to-r ${post.gradient} relative p-6 flex flex-col justify-end`}>
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium w-fit mb-2">
                        Featured
                      </span>
                      <h3 className="text-white text-xl font-bold mb-2 group-hover:text-gray-100 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {post.subtitle}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4 text-xs">
                        <div className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          post.category === 'Frontend' ? 'bg-blue-500/20 text-blue-400' :
                          post.category === 'Backend' ? 'bg-green-500/20 text-green-400' :
                          post.category === 'CSS' ? 'bg-purple-500/20 text-purple-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {post.category}
                        </span>
                      </div>

                      <p className={`text-sm leading-relaxed mb-4 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {post.content.substring(0, 150)}...
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 3).map((tag, index) => (
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
                          Read More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Regular Posts Grid */}
          {regularPosts.length > 0 && (
            <div>
              <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {featuredPosts.length > 0 ? 'More Articles' : 'All Articles'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post) => (
                  <article
                    key={post.id}
                    className={`group rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                      isDarkMode 
                        ? 'bg-gray-900 hover:shadow-blue-500/10 border border-gray-800'
                        : 'bg-white hover:shadow-blue-500/20 border border-gray-200 shadow-sm'
                    }`}
                  >
                    {/* Header */}
                    <div className={`h-32 bg-gradient-to-r ${post.gradient} relative`}>
                      <div className="absolute top-4 right-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          post.category === 'Frontend' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                          post.category === 'Backend' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                          post.category === 'CSS' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                          post.category === 'JavaScript' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                          'bg-gray-500/20 text-gray-300 border border-gray-500/30'
                        }`}>
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-500 transition-colors">
                        {post.title}
                      </h3>
                      <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {post.subtitle}
                      </p>

                      <div className={`flex items-center gap-3 mb-4 text-xs ${
                        isDarkMode ? 'text-gray-500' : 'text-gray-600'
                      }`}>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((tag, index) => (
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
            </div>
          )}

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className={`mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                  Try adjusting your search criteria or explore different categories
                </p>
              </div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors mt-4"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;