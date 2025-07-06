import {
  FileCode,
  LayoutTemplate,
  Zap,
  Code,
  Globe,
  Layers,
  Terminal,
  Database,
  GitBranch,
  Github,
} from 'lucide-react';

const techs = [
  { name: 'HTML', icon: <FileCode /> },
  { name: 'CSS', icon: <LayoutTemplate /> },
  { name: 'JavaScript', icon: <Zap /> },
  { name: 'TypeScript', icon: <Code /> },
  { name: 'React', icon: <Globe /> },
  { name: 'Next.js', icon: <Layers /> },
  { name: 'Tailwind CSS', icon: <LayoutTemplate /> },
  { name: 'Node.js', icon: <Terminal /> },
  { name: 'Express.js', icon: <Code /> },
  { name: 'MongoDB', icon: <Database /> },
  { name: 'Git', icon: <GitBranch /> },
  { name: 'GitHub', icon: <Github /> },
];

const TechStack = ({ darkMode }) => {
  return (
    <section
      className={`py-16 px-6 max-w-6xl mx-auto ${
        darkMode ? 'text-white' : 'text-black'
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        ⚙️ Tech Stack
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
        {techs.map((tech, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-6 w-full h-28 rounded-xl shadow-sm transition-all
              ${
                darkMode
                  ? 'bg-zinc-800 text-white'
                  : 'bg-zinc-100 text-zinc-800'
              } hover:scale-105`}
          >
            <div className="text-3xl mb-2">{tech.icon}</div>
            <p className="text-sm font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;


// import React from 'react';
// import {
//   Code,
//   Database,
//   GitBranch,
//   Globe,
//   Layers,
//   FileCode,
//   Terminal,
//   Cloud,
//   Github,
//   Zap,
//   LayoutTemplate,
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
//       <h2 className="text-3xl font-bold text-center mb-10">⚙️ Tech Stack</h2>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
//         {techs.map((tech, index) => (
//           <div
//             key={index}
//             className={`flex flex-col items-center bg-gray-100 dark:bg-zinc-800 p-5 rounded-xl shadow-md hover:scale-105 transition-transform`}
//           >
//             <div className="text-4xl mb-2">{tech.icon}</div>
//             <p className="text-sm font-medium mt-1">{tech.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TechStack;
