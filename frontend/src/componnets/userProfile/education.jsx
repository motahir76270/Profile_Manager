import React, { useContext } from 'react';
import { UserContext } from '../../context/context';



const Education = () => {
  const { selectedProfile} = useContext(UserContext);

  
  return (
    <section id='education' className="bg-white/30 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-10">
          Education
        </h2>

        <div className="space-y-8 border-l-4 border-blue-600 pl-6">
          {selectedProfile.education?.map((edu, index) => (
            <div key={index} className="relative group ">
              {/* Dot */}
              <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900"></div>
              <div className="flex flex-col gap-1 bg-white/35 dark:bg-gray-800 p-6 rounded-md shadow hover:shadow-2xl hover:translate-1 transition-all">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm text-blue-600 font-medium">
                  {edu.institution} 
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {edu.year}
                </p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
