import { ArrowRight, ExternalLink, Github, Calendar, Clock, Sun, Moon } from 'lucide-react';

const Projects = ({ isDarkMode }) => {

  // Featured Projects (top 4)
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "Modern admin dashboard with analytics and responsive design",
      gradient: "from-blue-500 via-purple-500 to-purple-600",
      status: "completed",
      technologies: ["React", "Tailwind", "Chart.js"],
      category: "Dashboard"
    },
    {
      id: 2,
      title: "Netflix Clone",
      description: "Movie streaming UI clone with search functionality",
      gradient: "from-red-500 to-pink-500",
      status: "completed",
      technologies: ["React", "TMDB API", "Tailwind"],
      category: "Entertainment"
    },
    {
      id: 3,
      title: "Task Manager App",
      description: "Kanban-style task management with drag & drop",
      gradient: "from-orange-400 to-red-500",
      status: "completed",
      technologies: ["React", "DnD Kit", "LocalStorage"],
      category: "Productivity"
    },
    {
      id: 4,
      title: "Crypto Tracker",
      description: "Real-time cryptocurrency price tracker with charts",
      gradient: "from-yellow-400 to-orange-500",
      status: "in progress",
      technologies: ["Vue.js", "CoinGecko API", "Chart.js"],
      category: "Finance"
    }
  ];

  // Mock navigation functions (replace with your routing)
  const navigateToProjects = () => {
    window.location.href = '/projects';
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
    }`}>

      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto space-y-20">
         
          {/* Featured Projects Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
                A showcase of my recent work and favorite builds
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group ${
                    isDarkMode 
                      ? 'bg-gray-900 hover:shadow-blue-500/10 border border-gray-800'
                      : 'bg-white hover:shadow-blue-500/20 border border-gray-200 shadow-sm'
                  }`}
                >
                  {/* Gradient Header */}
                  <div className={`h-40 bg-gradient-to-r ${project.gradient} relative`}>
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

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                            tech === 'React' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                            tech === 'Vue.js' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                            tech === 'Tailwind' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' :
                            isDarkMode ? 'bg-gray-800 text-gray-300 border border-gray-700' : 'bg-gray-100 text-gray-600 border border-gray-300'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2">
                        View Details
                        <ExternalLink className="w-4 h-4" />
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

            {/* View All Projects Button */}
            <div className="text-center">
              <button
                onClick={navigateToProjects}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-3 mx-auto"
              >
                View All Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;