import { ExternalLink, Github, Calendar, Users } from "lucide-react" // optional icons

const ProjectCard = ({ project, setShowProjectDetail }) => {
  return (
    <div className='bg-white dark:bg-zinc-900 rounded-2xl shadow-md overflow-hidden'>
      {/* Top gradient header */}
      <div
        className='h-24'
        style={{
          background: project.gradient,
        }}
      >
        <div className='flex justify-end p-2'>
          <span className='bg-white/20 text-white text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm'>
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className='p-6 space-y-4'>
        <h3 className='text-xl font-bold'>{project.title}</h3>
        <p className='text-gray-600 dark:text-gray-300'>
          {project.description}
        </p>

        {/* Tags */}
        <div className='flex flex-wrap gap-2'>
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className='bg-gray-100 dark:bg-zinc-800 text-sm px-3 py-1 rounded-full'
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta info */}
        <div className='flex items-center text-sm text-gray-500 dark:text-gray-400 gap-4'>
          <span><Calendar className="w-4 h-4" /> {project.duration}</span>
          <span><Users className="w-4 h-4" /> {project.members}</span>
          <span className='text-blue-600 dark:text-blue-400 font-medium'>
            {project.type}
          </span>
        </div>

        {/* Actions */}
        <div className='flex justify-between items-center mt-4'>
          <div className='flex gap-2'>
            <a
              href={project.demoLink}
              target='_blank'
              rel='noreferrer'
              className='bg-blue-50 p-2 rounded-lg text-blue-600 hover:bg-blue-100 transition'
            >
              <ExternalLink size={16} />
            </a>
            <a
              href={project.repoLink}
              target='_blank'
              rel='noreferrer'
              className='bg-blue-50 p-2 rounded-lg text-blue-600 hover:bg-blue-100 transition'
            >
              <Github size={16} />
            </a>
          </div>
          <button
            onClick={() => setShowProjectDetail(prev => !prev)}
            className='px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium cursor-pointer'
          >
            View Details →
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
