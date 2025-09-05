import React, { useContext } from 'react';
import {  FaGraduationCap } from 'react-icons/fa';
import { UserContext } from '../../context/context';


const Work = () => {
    const { selectedProfile } = useContext(UserContext);

  return(
    <section id='work' className="bg-white/35 dark:bg-gray-900 py-12 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Work Experience
      </h2>

      <div className="relative border-l-4 border-blue-600 pl-6 space-y-8">
        {selectedProfile.work?.map((exp, idx) => (
          <div key={idx} className="relative group">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center border-4 border-gray-50 dark:border-gray-900">
               <FaGraduationCap size={20} />
            </div>
            <div className="bg-white/36 dark:bg-gray-800 p-6 rounded-md shadow hover:shadow-2xl hover:translate-1 transition-all">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {exp.role}
              </h3>
              <p className="text-sm text-blue-600 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)} 

export default Work;
