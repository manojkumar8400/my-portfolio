import React, { useState, useMemo } from 'react';
import { Search, Filter, ExternalLink, Github, Calendar, Users, Code, Sun, Moon } from 'lucide-react';

const Projects = ({isDarkMode}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');

  // Sample projects data - more realistic for frontend developer
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "Modern admin dashboard with analytics, charts, and responsive design",
      gradient: "from-blue-500 via-purple-500 to-purple-600",
      status: "completed",
      duration: "2 months",
      teamSize: "Solo",
      type: "Frontend",
      technologies: ["React", "Tailwind", "Chart.js"],
      category: "Dashboard",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Personal portfolio with smooth animations and contact form",
      gradient: "from-green-400 to-cyan-500",
      status: "in progress",
      duration: "1 month",
      teamSize: "Solo",
      type: "Frontend",
      technologies: ["Next.js", "Framer Motion", "Tailwind"],
      category: "Portfolio",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Task Manager App",
      description: "Kanban-style task management with drag & drop functionality",
      gradient: "from-orange-400 to-red-500",
      status: "completed",
      duration: "3 weeks",
      teamSize: "Solo",
      type: "Frontend",
      technologies: ["React", "DnD Kit", "LocalStorage"],
      category: "Productivity",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Weather App",
      description: "Beautiful weather app with location detection and forecasts",
      gradient: "from-blue-400 to-indigo-600",
      status: "completed",
      duration: "1 week",
      teamSize: "Solo",
      type: "Frontend",
      technologies: ["React", "OpenWeather API", "CSS"],
      category: "Utility",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Netflix Clone",
      description: "Movie streaming UI clone with responsive design and search",
      gradient: "from-red-500 to-pink-500",
      status: "completed",
      duration: "2 weeks",
      teamSize: "Solo",
      type: "Frontend",
      technologies: ["React", "TMDB API", "Tailwind"],
      category: "Entertainment",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Crypto Tracker",
      description: "Real-time cryptocurrency price tracker with charts and alerts",
      gradient: "from-yellow-400 to-orange-500",
      status: "in progress",
      duration: "3 weeks",
      teamSize: "Solo",
      type: "Frontend",
      technologies: ["Vue.js", "CoinGecko API", "Chart.js"],
      category: "Finance",
      image: "/api/placeholder/400/250"
    },
    {
      id: 7,
      title: "Food Recipe App",
      description: "Recipe finder with ingredients search and step-by-step cooking guide",
      gradient: "from-green-500 to-teal-600",
      status: "completed",
      duration: "2 weeks",
      teamSize: "Solo",
      type: "Frontend",
      technologies: ["React", "Spoonacular API", "CSS Modules"],
      category: "Lifestyle",
      image: "/api/placeholder/400/250"
    },
    {
      id: 8,
      title: "Instagram Clone",
      description: "Social media UI clone with photo filters and responsive grid",
      gradient: "from-purple-500 to-pink-500",
      status: "completed",
      duration: "3 weeks",
      teamSize: "Solo",
      type: "Frontend",
      technologies: ["React", "CSS Filters", "Responsive Design"],
      category: "Social",
      image: "/api/placeholder/400/250"
    }
  ];

  // Get unique categories and technologies for filters
  const allCategories = ['All', ...new Set(projects.map(p => p.category))];
  const allTechnologies = ['All', 'React', 'Next.js', 'Vue.js', 'Tailwind', 'CSS'];

  // Filter projects based on search and filters
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesTech = selectedTech === 'All' || project.technologies.includes(selectedTech);
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;

      return matchesSearch && matchesTech && matchesCategory;
    });
  }, [searchTerm, selectedTech, selectedCategory, projects]);

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
              All Projects
            </h1>
            <p className={`text-base sm:text-lg max-w-2xl mx-auto mb-6 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Explore my complete portfolio of web applications, from e-commerce solutions to productivity tools
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-500">{projects.length}</div>
                <div className={isDarkMode ? 'text-gray-500' : 'text-gray-600'}>Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-green-500">
                  {projects.filter(p => p.status === 'completed').length}
                </div>
                <div className={isDarkMode ? 'text-gray-500' : 'text-gray-600'}>Completed</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-orange-500">
                  {projects.filter(p => p.status === 'in progress').length}
                </div>
                <div className={isDarkMode ? 'text-gray-500' : 'text-gray-600'}>In Progress</div>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto mb-8">
              <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="text"
                placeholder="Search projects, technologies, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-12 pr-6 py-4 border rounded-2xl text-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                  isDarkMode
                    ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 shadow-sm'
                }`}
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
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
                      {projects.filter(p => p.category === category).length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Technology Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              <span className={`text-sm mr-3 py-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Tech:
              </span>
              {allTechnologies.map(tech => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedTech === tech
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                      : isDarkMode
                        ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>

            {/* Active Filters Display */}
            {(searchTerm || selectedCategory !== 'All' || selectedTech !== 'All') && (
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
                  {selectedTech !== 'All' && (
                    <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm border border-pink-500/30">
                      {selectedTech}
                    </span>
                  )}
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                      setSelectedTech('All');
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
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group ${
                    isDarkMode
                      ? 'bg-gray-900 hover:shadow-blue-500/10 border border-gray-800'
                      : 'bg-white hover:shadow-blue-500/20 border border-gray-200 shadow-sm'
                  }`}
                >
                  {/* Gradient Header */}
                  <div className={`h-32 sm:h-40 bg-gradient-to-r ${project.gradient} relative`}>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'completed'
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                          : 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                              tech === 'React' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                              tech === 'Next.js' ? 'bg-gray-500/20 text-gray-300 border border-gray-500/30' :
                              tech === 'Vue.js' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                              tech === 'Tailwind' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' :
                              isDarkMode ? 'bg-gray-800 text-gray-300 border border-gray-700' : 'bg-gray-100 text-gray-600 border border-gray-300'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className={`flex items-center justify-between text-xs mb-4 ${
                      isDarkMode ? 'text-gray-500' : 'text-gray-600'
                    }`}>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{project.teamSize}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Code className="w-3 h-3" />
                        <span className="text-blue-500 font-medium">
                          {project.type}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 group">
                        View Details
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                      <button className={`p-2.5 rounded-lg transition-colors ${
                        isDarkMode
                          ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                      }`}>
                        <Github className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* No Results State */
            <div className="text-center py-16">
              <div className={`mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                  Try adjusting your search criteria or filters
                </p>
              </div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedTech('All');
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

export default Projects;