import React, { useContext } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';
import { UserContext } from '../../context/context';


const Skills = () => {
   const { selectedProfile} = useContext(UserContext);
  
  return (
    <section id='skills' className="felx py-12 bg-white/35 dark:bg-gray-900 ">
      <div className="max-w-16xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-8">
          My <span className="text-blue-600">Skills</span>
        </h2>

        <div className="flex w-full flex-wrap gap-4 md:gap-5">
          {selectedProfile.skills.map((skill, index) => (
            <div
              key={index}
              className="w-[30%] bg-white/35 dark:bg-gray-800 rounded-lg shadow hover:shadow-2xl hover:translate-1 transition-all p-4 group"
            >

              <p className="mt-1  text-sm font-medium text-gray-700 dark:text-gray-200">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
