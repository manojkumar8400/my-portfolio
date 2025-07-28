import React, { useState } from 'react';
import { Code, Zap, Database, Globe, GitBranch, Palette, ChevronDown, ChevronUp, Sun, Moon } from 'lucide-react';

const TechStack = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const techStack = [
    // Frontend Technologies
    {
      name: "HTML",
      icon: "🌐",
      category: "Frontend",
      proficiency: 95,
      experience: "3 years",
      projects: 15,
      description: "Semantic markup and accessibility"
    },
    {
      name: "CSS",
      icon: "🎨",
      category: "Frontend", 
      proficiency: 90,
      experience: "3 years",
      projects: 15,
      description: "Modern CSS, Flexbox, Grid, Animations"
    },
    {
      name: "JavaScript",
      icon: "⚡",
      category: "Frontend",
      proficiency: 85,
      experience: "2.5 years",
      projects: 12,
      description: "ES6+, DOM manipulation, Async/Await"
    },
    {
      name: "TypeScript",
      icon: "📘",
      category: "Frontend",
      proficiency: 75,
      experience: "1.5 years",
      projects: 6,
      description: "Type safety and better development experience"
    },
    {
      name: "React",
      icon: "⚛️",
      category: "Frontend",
      proficiency: 88,
      experience: "2 years",
      projects: 10,
      description: "Hooks, Context API, Component lifecycle"
    },
    {
      name: "Next.js",
      icon: "🚀",
      category: "Frontend",
      proficiency: 80,
      experience: "1.5 years",
      projects: 5,
      description: "SSR, SSG, API routes, Performance optimization"
    },
    {
      name: "Vue.js",
      icon: "💚",
      category: "Frontend",
      proficiency: 70,
      experience: "1 year",
      projects: 3,
      description: "Progressive framework for building UIs"
    },
    // Styling & Design
    {
      name: "Tailwind CSS",
      icon: "🌊",
      category: "Styling",
      proficiency: 92,
      experience: "2 years",
      projects: 8,
      description: "Utility-first CSS framework"
    },
    {
      name: "Sass/SCSS",
      icon: "💅",
      category: "Styling",
      proficiency: 85,
      experience: "2 years",
      projects: 7,
      description: "CSS preprocessing and organization"
    },
    {
      name: "Framer Motion",
      icon: "🎭",
      category: "Styling",
      proficiency: 70,
      experience: "1 year",
      projects: 4,
      description: "Smooth animations and micro-interactions"
    },
    // Backend & Database
    {
      name: "Node.js",
      icon: "🟢",
      category: "Backend",
      proficiency: 75,
      experience: "1.5 years",
      projects: 5,
      description: "Server-side JavaScript runtime"
    },
    {
      name: "Express.js",
      icon: "🚂",
      category: "Backend",
      proficiency: 70,
      experience: "1.5 years",
      projects: 4,
      description: "RESTful APIs and middleware"
    },
    {
      name: "Firebase",
      icon: "🔥",
      category: "Backend",
      proficiency: 70,
      experience: "1.5 years",
      projects: 4,
      description: "BaaS for authentication and database"
    },
    {
      name: "MongoDB",
      icon: "🍃",
      category: "Database",
      proficiency: 65,
      experience: "1 year",
      projects: 3,
      description: "NoSQL database operations"
    },
    // Tools & Version Control
    {
      name: "Git",
      icon: "📚",
      category: "Tools",
      proficiency: 85,
      experience: "2.5 years",
      projects: 15,
      description: "Version control and collaboration"
    },
    {
      name: "GitHub",
      icon: "🐱",
      category: "Tools",
      proficiency: 88,
      experience: "2.5 years",
      projects: 15,
      description: "Repository management and CI/CD"
    },
    {
      name: "VS Code",
      icon: "💻",
      category: "Tools",
      proficiency: 95,
      experience: "3 years",
      projects: 15,
      description: "Primary code editor with extensions"
    },
    // Project Management & Collaboration
    {
      name: "JIRA",
      icon: "📋",
      category: "Management",
      proficiency: 75,
      experience: "1.5 years",
      projects: 8,
      description: "Agile project management and issue tracking"
    },
    {
      name: "Trello",
      icon: "📌",
      category: "Management",
      proficiency: 85,
      experience: "2 years",
      projects: 10,
      description: "Kanban-style project organization"
    },
    {
      name: "Monday.com",
      icon: "📊",
      category: "Management",
      proficiency: 70,
      experience: "1 year",
      projects: 5,
      description: "Team collaboration and workflow management"
    },
    {
      name: "Notion",
      icon: "📝",
      category: "Management",
      proficiency: 80,
      experience: "1.5 years",
      projects: 12,
      description: "Documentation and team wikis"
    },
    // Design & Communication
    {
      name: "Figma",
      icon: "🎨",
      category: "Design",
      proficiency: 75,
      experience: "2 years",
      projects: 12,
      description: "UI/UX design and prototyping"
    },
    {
      name: "Adobe XD",
      icon: "🔷",
      category: "Design",
      proficiency: 65,
      experience: "1 year",
      projects: 6,
      description: "Design and wireframing tool"
    },
    {
      name: "Slack",
      icon: "💬",
      category: "Communication",
      proficiency: 90,
      experience: "2 years",
      projects: 10,
      description: "Team communication and integration"
    },
    // Deployment & Hosting
    {
      name: "Vercel",
      icon: "▲",
      category: "Deployment",
      proficiency: 85,
      experience: "2 years",
      projects: 8,
      description: "Frontend deployment and hosting"
    },
    {
      name: "Netlify",
      icon: "🌐",
      category: "Deployment",
      proficiency: 80,
      experience: "1.5 years",
      projects: 6,
      description: "Static site deployment and forms"
    },
    // Testing & Quality
    {
      name: "Jest",
      icon: "🧪",
      category: "Testing",
      proficiency: 60,
      experience: "8 months",
      projects: 3,
      description: "JavaScript testing framework"
    },
    {
      name: "Postman",
      icon: "📮",
      category: "Testing",
      proficiency: 75,
      experience: "1.5 years",
      projects: 6,
      description: "API testing and documentation"
    }
  ];

  const categories = ['All', 'Frontend', 'Styling', 'Backend', 'Database', 'Tools', 'Management', 'Design', 'Communication', 'Deployment', 'Testing'];

  const filteredTech = selectedCategory === 'All' 
    ? techStack 
    : techStack.filter(tech => tech.category === selectedCategory);

  // Show only core technologies initially (first 8), then all on "Load More"
  const displayedTech = showAll ? filteredTech : filteredTech.slice(0, 8);
  const hasMoreToShow = filteredTech.length > 8;

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Frontend': return <Globe className="w-4 h-4" />;
      case 'Styling': return <Palette className="w-4 h-4" />;
      case 'Backend': return <Code className="w-4 h-4" />;
      case 'Database': return <Database className="w-4 h-4" />;
      case 'Tools': return <GitBranch className="w-4 h-4" />;
      case 'Management': return <Database className="w-4 h-4" />;
      case 'Design': return <Palette className="w-4 h-4" />;
      case 'Communication': return <Globe className="w-4 h-4" />;
      case 'Deployment': return <Zap className="w-4 h-4" />;
      case 'Testing': return <Code className="w-4 h-4" />;
      default: return <Zap className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Frontend': return 'from-blue-500 to-cyan-500';
      case 'Styling': return 'from-purple-500 to-pink-500';
      case 'Backend': return 'from-green-500 to-emerald-500';
      case 'Database': return 'from-orange-500 to-red-500';
      case 'Tools': return 'from-gray-500 to-slate-500';
      case 'Management': return 'from-indigo-500 to-blue-500';
      case 'Design': return 'from-pink-500 to-rose-500';
      case 'Communication': return 'from-teal-500 to-cyan-500';
      case 'Deployment': return 'from-yellow-500 to-orange-500';
      case 'Testing': return 'from-red-500 to-pink-500';
      default: return 'from-blue-500 to-purple-500';
    }
  };

  return (
    <div className={`py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">Tech Stack</h2>
          </div>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Technologies I use to bring ideas to life. From frontend frameworks to backend tools,
            here's my arsenal for building modern web applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 text-sm ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 hover:scale-105'
              }`}
            >
              {getCategoryIcon(category)}
              {category}
              {category !== 'All' && (
                <span className={`ml-1 text-xs opacity-75 px-2 py-0.5 rounded-full ${
                  selectedCategory === category ? 'bg-black/20' : isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  {techStack.filter(tech => tech.category === category).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-6 text-center">
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {!showAll && hasMoreToShow 
              ? `Showing ${displayedTech.length} of ${filteredTech.length} technologies`
              : `${filteredTech.length} technologies`
            }
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedTech.map((tech, index) => (
            <div
              key={tech.name}
              className={`group rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border ${
                isDarkMode 
                  ? 'bg-gray-900 hover:shadow-blue-500/10 border-gray-800 hover:border-gray-600'
                  : 'bg-gray-50 hover:shadow-blue-500/20 border-gray-200 hover:border-gray-300'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Tech Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`text-3xl p-3 rounded-xl group-hover:scale-110 transition-transform ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'
                }`}>
                  {tech.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg group-hover:text-blue-500 transition-colors">
                    {tech.name}
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {tech.category}
                  </p>
                </div>
              </div>

              {/* Proficiency Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Proficiency
                  </span>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {tech.proficiency}%
                  </span>
                </div>
                <div className={`w-full rounded-full h-2 overflow-hidden ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <div 
                    className={`h-full bg-gradient-to-r ${getCategoryColor(tech.category)} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: `${tech.proficiency}%`,
                      animationDelay: `${index * 150}ms`
                    }}
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-500">{tech.projects}</div>
                  <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-500">{tech.experience}</div>
                  <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    Experience
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {tech.description}
              </p>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Load More Button - AFTER the grid */}
        {hasMoreToShow && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-3 mx-auto"
            >
              {showAll ? (
                <>
                  Show Less Technologies
                  <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  Load More Technologies ({filteredTech.length - 8} more)
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className={`rounded-2xl p-8 border ${
            isDarkMode 
              ? 'bg-gray-900 border-gray-800' 
              : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-2">25+</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Technologies
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-green-500 mb-2">60+</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Projects Built
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-purple-500 mb-2">3+</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-2">24/7</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Learning Mode
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;


// ***********************************************************************

// import React, { useState } from "react"
// import { Code, Zap, Database, Globe, GitBranch, Palette } from "lucide-react"

// const TechStack = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All")

//   const techStack = [
//     // Frontend Technologies
//     {
//       name: "HTML",
//       icon: "🌐",
//       category: "Frontend",
//       proficiency: 95,
//       experience: "3 years",
//       projects: 15,
//       description: "Semantic markup and accessibility",
//     },
//     {
//       name: "CSS",
//       icon: "🎨",
//       category: "Frontend",
//       proficiency: 90,
//       experience: "3 years",
//       projects: 15,
//       description: "Modern CSS, Flexbox, Grid, Animations",
//     },
//     {
//       name: "JavaScript",
//       icon: "⚡",
//       category: "Frontend",
//       proficiency: 85,
//       experience: "2.5 years",
//       projects: 12,
//       description: "ES6+, DOM manipulation, Async/Await",
//     },
//     {
//       name: "TypeScript",
//       icon: "📘",
//       category: "Frontend",
//       proficiency: 75,
//       experience: "1.5 years",
//       projects: 6,
//       description: "Type safety and better development experience",
//     },
//     {
//       name: "React",
//       icon: "⚛️",
//       category: "Frontend",
//       proficiency: 88,
//       experience: "2 years",
//       projects: 10,
//       description: "Hooks, Context API, Component lifecycle",
//     },
//     {
//       name: "Next.js",
//       icon: "🚀",
//       category: "Frontend",
//       proficiency: 80,
//       experience: "1.5 years",
//       projects: 5,
//       description: "SSR, SSG, API routes, Performance optimization",
//     },
//     // Styling & Design
//     {
//       name: "Tailwind CSS",
//       icon: "🌊",
//       category: "Styling",
//       proficiency: 92,
//       experience: "2 years",
//       projects: 8,
//       description: "Utility-first CSS framework",
//     },
//     {
//       name: "Sass/SCSS",
//       icon: "💅",
//       category: "Styling",
//       proficiency: 85,
//       experience: "2 years",
//       projects: 7,
//       description: "CSS preprocessing and organization",
//     },
//     {
//       name: "Framer Motion",
//       icon: "🎭",
//       category: "Styling",
//       proficiency: 70,
//       experience: "1 year",
//       projects: 4,
//       description: "Smooth animations and micro-interactions",
//     },
//     // Backend & Database
//     {
//       name: "Node.js",
//       icon: "🟢",
//       category: "Backend",
//       proficiency: 75,
//       experience: "1.5 years",
//       projects: 5,
//       description: "Server-side JavaScript runtime",
//     },
//     {
//       name: "Express.js",
//       icon: "🚂",
//       category: "Backend",
//       proficiency: 70,
//       experience: "1.5 years",
//       projects: 4,
//       description: "RESTful APIs and middleware",
//     },
//     {
//       name: "MongoDB",
//       icon: "🍃",
//       category: "Database",
//       proficiency: 65,
//       experience: "1 year",
//       projects: 3,
//       description: "NoSQL database operations",
//     },
//     // Tools & Version Control
//     {
//       name: "Git",
//       icon: "📚",
//       category: "Tools",
//       proficiency: 85,
//       experience: "2.5 years",
//       projects: 15,
//       description: "Version control and collaboration",
//     },
//     {
//       name: "GitHub",
//       icon: "🐱",
//       category: "Tools",
//       proficiency: 88,
//       experience: "2.5 years",
//       projects: 15,
//       description: "Repository management and CI/CD",
//     },
//     {
//       name: "Vue.js",
//       icon: "💚",
//       category: "Frontend",
//       proficiency: 70,
//       experience: "1 year",
//       projects: 3,
//       description: "Progressive framework for building UIs",
//     },
//     // Project Management & Collaboration
//     {
//       name: "JIRA",
//       icon: "📋",
//       category: "Management",
//       proficiency: 75,
//       experience: "1.5 years",
//       projects: 8,
//       description: "Agile project management and issue tracking",
//     },
//     {
//       name: "Trello",
//       icon: "📌",
//       category: "Management",
//       proficiency: 85,
//       experience: "2 years",
//       projects: 10,
//       description: "Kanban-style project organization",
//     },
//     {
//       name: "Monday.com",
//       icon: "📊",
//       category: "Management",
//       proficiency: 70,
//       experience: "1 year",
//       projects: 5,
//       description: "Team collaboration and workflow management",
//     },
//     {
//       name: "Notion",
//       icon: "📝",
//       category: "Management",
//       proficiency: 80,
//       experience: "1.5 years",
//       projects: 12,
//       description: "Documentation and team wikis",
//     },
//     // Design & Communication
//     {
//       name: "Figma",
//       icon: "🎨",
//       category: "Design",
//       proficiency: 75,
//       experience: "2 years",
//       projects: 12,
//       description: "UI/UX design and prototyping",
//     },
//     {
//       name: "Adobe XD",
//       icon: "🔷",
//       category: "Design",
//       proficiency: 65,
//       experience: "1 year",
//       projects: 6,
//       description: "Design and wireframing tool",
//     },
//     {
//       name: "Slack",
//       icon: "💬",
//       category: "Communication",
//       proficiency: 90,
//       experience: "2 years",
//       projects: 10,
//       description: "Team communication and integration",
//     },
//     {
//       name: "VS Code",
//       icon: "💻",
//       category: "Tools",
//       proficiency: 95,
//       experience: "3 years",
//       projects: 15,
//       description: "Primary code editor with extensions",
//     },
//     // Deployment & Hosting
//     {
//       name: "Vercel",
//       icon: "▲",
//       category: "Deployment",
//       proficiency: 85,
//       experience: "2 years",
//       projects: 8,
//       description: "Frontend deployment and hosting",
//     },
//     {
//       name: "Netlify",
//       icon: "🌐",
//       category: "Deployment",
//       proficiency: 80,
//       experience: "1.5 years",
//       projects: 6,
//       description: "Static site deployment and forms",
//     },
//     {
//       name: "Firebase",
//       icon: "🔥",
//       category: "Backend",
//       proficiency: 70,
//       experience: "1.5 years",
//       projects: 4,
//       description: "BaaS for authentication and database",
//     },
//     // Testing & Quality
//     {
//       name: "Jest",
//       icon: "🧪",
//       category: "Testing",
//       proficiency: 60,
//       experience: "8 months",
//       projects: 3,
//       description: "JavaScript testing framework",
//     },
//     {
//       name: "Postman",
//       icon: "📮",
//       category: "Testing",
//       proficiency: 75,
//       experience: "1.5 years",
//       projects: 6,
//       description: "API testing and documentation",
//     },
//   ]

//   const categories = [
//     "All",
//     "Frontend",
//     "Styling",
//     "Backend",
//     "Database",
//     "Tools",
//     "Management",
//     "Design",
//     "Communication",
//     "Deployment",
//     "Testing",
//   ]

//   const filteredTech =
//     selectedCategory === "All"
//       ? techStack
//       : techStack.filter((tech) => tech.category === selectedCategory)

//   const getCategoryIcon = (category) => {
//     switch (category) {
//       case "Frontend":
//         return <Globe className='w-4 h-4' />
//       case "Styling":
//         return <Palette className='w-4 h-4' />
//       case "Backend":
//         return <Code className='w-4 h-4' />
//       case "Database":
//         return <Database className='w-4 h-4' />
//       case "Tools":
//         return <GitBranch className='w-4 h-4' />
//       case "Management":
//         return <Database className='w-4 h-4' />
//       case "Design":
//         return <Palette className='w-4 h-4' />
//       case "Communication":
//         return <Globe className='w-4 h-4' />
//       case "Deployment":
//         return <Zap className='w-4 h-4' />
//       case "Testing":
//         return <Code className='w-4 h-4' />
//       default:
//         return <Zap className='w-4 h-4' />
//     }
//   }

//   const getCategoryColor = (category) => {
//     switch (category) {
//       case "Frontend":
//         return "from-blue-500 to-cyan-500"
//       case "Styling":
//         return "from-purple-500 to-pink-500"
//       case "Backend":
//         return "from-green-500 to-emerald-500"
//       case "Database":
//         return "from-orange-500 to-red-500"
//       case "Tools":
//         return "from-gray-500 to-slate-500"
//       case "Management":
//         return "from-indigo-500 to-blue-500"
//       case "Design":
//         return "from-pink-500 to-rose-500"
//       case "Communication":
//         return "from-teal-500 to-cyan-500"
//       case "Deployment":
//         return "from-yellow-500 to-orange-500"
//       case "Testing":
//         return "from-red-500 to-pink-500"
//       default:
//         return "from-blue-500 to-purple-500"
//     }
//   }

//   return (
//     <div className='py-16 px-4 sm:px-6 lg:px-8 bg-black text-white'>
//       <div className='max-w-7xl mx-auto'>
//         {/* Header */}
//         <div className='text-center mb-12'>
//           <div className='flex items-center justify-center gap-3 mb-6'>
//             <div className='p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl'>
//               <Code className='w-6 h-6 text-white' />
//             </div>
//             <h2 className='text-3xl sm:text-4xl font-bold'>Tech Stack</h2>
//           </div>
//           <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
//             Technologies I use to bring ideas to life. From frontend frameworks
//             to backend tools, here's my arsenal for building modern web
//             applications.
//           </p>
//         </div>

//         {/* Category Filter */}
//         <div className='flex flex-wrap justify-center gap-2 mb-10'>
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 text-sm ${
//                 selectedCategory === category
//                   ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105"
//                   : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//               }`}
//             >
//               {getCategoryIcon(category)}
//               {category}
//               {category !== "All" && (
//                 <span className='ml-1 text-xs opacity-75 bg-black/20 px-2 py-0.5 rounded-full'>
//                   {
//                     techStack.filter((tech) => tech.category === category)
//                       .length
//                   }
//                 </span>
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Tech Grid */}
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
//           {filteredTech.map((tech, index) => (
//             <div
//               key={tech.name}
//               className='group bg-gray-900 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 border border-gray-800 hover:border-gray-600'
//               style={{
//                 animationDelay: `${index * 100}ms`,
//               }}
//             >
//               {/* Tech Header */}
//               <div className='flex items-center gap-4 mb-4'>
//                 <div className='text-3xl bg-gray-800 p-3 rounded-xl group-hover:scale-110 transition-transform'>
//                   {tech.icon}
//                 </div>
//                 <div>
//                   <h3 className='font-bold text-lg group-hover:text-blue-400 transition-colors'>
//                     {tech.name}
//                   </h3>
//                   <p className='text-gray-400 text-sm'>{tech.category}</p>
//                 </div>
//               </div>

//               {/* Proficiency Bar */}
//               <div className='mb-4'>
//                 <div className='flex justify-between items-center mb-2'>
//                   <span className='text-sm text-gray-400'>Proficiency</span>
//                   <span className='text-sm font-medium text-white'>
//                     {tech.proficiency}%
//                   </span>
//                 </div>
//                 <div className='w-full bg-gray-700 rounded-full h-2 overflow-hidden'>
//                   <div
//                     className={`h-full bg-gradient-to-r ${getCategoryColor(
//                       tech.category
//                     )} rounded-full transition-all duration-1000 ease-out`}
//                     style={{
//                       width: `${tech.proficiency}%`,
//                       animationDelay: `${index * 150}ms`,
//                     }}
//                   />
//                 </div>
//               </div>

//               {/* Stats */}
//               <div className='grid grid-cols-2 gap-4 mb-4'>
//                 <div className='text-center'>
//                   <div className='text-lg font-bold text-blue-400'>
//                     {tech.projects}
//                   </div>
//                   <div className='text-xs text-gray-500'>Projects</div>
//                 </div>
//                 <div className='text-center'>
//                   <div className='text-lg font-bold text-green-400'>
//                     {tech.experience}
//                   </div>
//                   <div className='text-xs text-gray-500'>Experience</div>
//                 </div>
//               </div>

//               {/* Description */}
//               <p className='text-gray-400 text-sm leading-relaxed'>
//                 {tech.description}
//               </p>

//               {/* Hover Effect Overlay */}
//               <div className='absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
//             </div>
//           ))}
//         </div>

//         {/* Bottom Stats */}
//         <div className='mt-16 text-center'>
//           <div className='bg-gray-900 rounded-2xl p-8 border border-gray-800'>
//             <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
//               <div>
//                 <div className='text-2xl sm:text-3xl font-bold text-blue-400 mb-2'>
//                   25+
//                 </div>
//                 <div className='text-gray-400 text-sm'>Technologies</div>
//               </div>
//               <div>
//                 <div className='text-2xl sm:text-3xl font-bold text-green-400 mb-2'>
//                   60+
//                 </div>
//                 <div className='text-gray-400 text-sm'>Projects Built</div>
//               </div>
//               <div>
//                 <div className='text-2xl sm:text-3xl font-bold text-purple-400 mb-2'>
//                   3+
//                 </div>
//                 <div className='text-gray-400 text-sm'>Years Experience</div>
//               </div>
//               <div>
//                 <div className='text-2xl sm:text-3xl font-bold text-orange-400 mb-2'>
//                   24/7
//                 </div>
//                 <div className='text-gray-400 text-sm'>Learning Mode</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default TechStack

// **********************************************************

// import {
//   FileCode,
//   LayoutTemplate,
//   Zap,
//   Code,
//   Globe,
//   Layers,
//   Terminal,
//   Database,
//   GitBranch,
//   Github,
// } from 'lucide-react';

// const techs = [
//   { name: 'HTML', icon: <FileCode /> },
//   { name: 'CSS', icon: <LayoutTemplate /> },
//   { name: 'JavaScript', icon: <Zap /> },
//   { name: 'TypeScript', icon: <Code /> },
//   { name: 'React', icon: <Globe /> },
//   { name: 'Next.js', icon: <Layers /> },
//   { name: 'Tailwind CSS', icon: <LayoutTemplate /> },
//   { name: 'Node.js', icon: <Terminal /> },
//   { name: 'Express.js', icon: <Code /> },
//   { name: 'MongoDB', icon: <Database /> },
//   { name: 'Git', icon: <GitBranch /> },
//   { name: 'GitHub', icon: <Github /> },
// ];

// const TechStack = ({ darkMode }) => {
//   return (
//     <section
//       className={`py-16 px-6 max-w-6xl mx-auto ${
//         darkMode ? 'text-white' : 'text-black'
//       }`}
//     >
//       <h2 className="text-3xl font-bold text-center mb-10">
//         ⚙️ Tech Stack
//       </h2>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
//         {techs.map((tech, index) => (
//           <div
//             key={index}
//             className={`flex flex-col items-center justify-center p-6 w-full h-28 rounded-xl shadow-sm transition-all
//               ${
//                 darkMode
//                   ? 'bg-zinc-800 text-white'
//                   : 'bg-zinc-100 text-zinc-800'
//               } hover:scale-105`}
//           >
//             <div className="text-3xl mb-2">{tech.icon}</div>
//             <p className="text-sm font-medium">{tech.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TechStack;
