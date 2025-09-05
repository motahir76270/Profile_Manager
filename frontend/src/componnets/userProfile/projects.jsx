import React, { useContext } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { UserContext } from '../../context/context';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects, built using React and Tailwind CSS.',
    github: 'https://github.com/yourusername/portfolio',
    live: 'https://yourdomain.com',
    skills: ['React', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Todo App',
    description: 'A simple and effective todo list app with features like add, delete, filter and persist with local storage.',
    github: 'https://github.com/yourusername/todo-app',
    live: 'https://yourtodoapp.netlify.app',
    skills: ['React', 'JavaScript', 'LocalStorage'],
  },
  {
    title: 'E-commerce Dashboard',
    description: 'Admin dashboard for managing products, orders, and users with chart visualizations and filtering.',
    links: 'https://github.com/yourusername/dashboard',
    skills: ['React', 'Tailwind', 'Chart.js', 'Context API'],
  },
];

const Projects = () => {
     const { selectedProfile} = useContext(UserContext);
  
  return (
    <section id='projects' className="bg-white/30 dark:bg-gray-900 py-12 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          My Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {selectedProfile.projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/35 dark:bg-gray-800 rounded-lg shadow hover:shadow-2xl hover:translate-1 transition-all p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-slate-200 text-xs px-2 py-1 rounded dark:bg-blue-800 dark:text-blue-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center justify-start space-x-4 mt-4">
                <Link
                  to={project.links[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                  title="View on GitHub"
                >
                  <FaGithub size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
