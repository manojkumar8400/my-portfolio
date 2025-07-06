import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';

const projectList = [
  {
    title: 'E-Commerce Dashboard',
    description: 'Admin dashboard for e-commerce with real-time analytics',
    tags: ['React', 'Dashboard', 'E-commerce', '+2 more'],
    duration: '2 months',
    members: '1 member',
    type: 'Full Stack',
    status: 'completed',
    gradient: 'linear-gradient(90deg, #3b82f6, #9333ea)', // blue to purple
    demoLink: '#',
    repoLink: '#',
  },
  {
    title: 'Portfolio Site',
    description: 'Personal portfolio with blog and contact form',
    tags: ['Next.js', 'Tailwind', 'Markdown'],
    duration: '1 month',
    members: 'Solo',
    type: 'Frontend',
    status: 'in progress',
    gradient: 'linear-gradient(90deg, #10b981, #06b6d4)', // green to cyan
    demoLink: '#',
    repoLink: '#',
  },
  {
    title: 'Task Manager',
    description: 'Kanban-style task management app',
    tags: ['Vue', 'Firebase', 'PWA'],
    duration: '3 weeks',
    members: 'Team of 2',
    type: 'Full Stack',
    status: 'completed',
    gradient: 'linear-gradient(90deg, #f59e0b, #ef4444)', // amber to red
    demoLink: '#',
    repoLink: '#',
  },
  {
    title: 'Task Manager',
    description: 'Kanban-style task management app',
    tags: ['Vue', 'Firebase', 'PWA'],
    duration: '3 weeks',
    members: 'Team of 2',
    type: 'Full Stack',
    status: 'completed',
    gradient: 'linear-gradient(90deg, #f59e0b, #ef4444)', // amber to red
    demoLink: '#',
    repoLink: '#',
  },
];

const Projects = ({darkMode}) => {
  const [showProjectDetail, setShowProjectDetail] = useState(false)

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-black dark:text-white">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
        {projectList.map((proj, index) => (
          <ProjectCard key={index} project={proj} setShowProjectDetail={setShowProjectDetail}/>
        ))}
      </div>
      {showProjectDetail && (
        <div className='fixed w-screen h-screen -top-[2px] left-0'>
          <ProjectDetails darkMode={darkMode} setShowProjectDetail={setShowProjectDetail}/>
        </div>
      )}
    </section>
  );
};

export default Projects;
