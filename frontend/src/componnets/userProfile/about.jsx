import React, { useContext } from 'react';
import { UserContext } from '../../context/context';
import avatar from '../../assets/avatar.png'

const About = () => {
     const { selectedProfile} = useContext(UserContext);
  
  return (
    <section id='about' className="bg-white/30 dark:bg-gray-900 flex justify-center items-center py-16 px-5 lg:pl-45 ">
      <div className="max-w-6xl mx-auto  flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Hi, I'm <span className="text-blue-600">{selectedProfile.name?.toUpperCase()}</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6">
            Front-End Developer | React Enthusiast
          </h2>
          <p className="text-gray-700 dark:text-gray-400 mb-8">
            Passionate about building modern, responsive websites and web apps. I specialize in React, Tailwind CSS, and creating seamless user experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={avatar}
            alt="Profile"
            className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-blue-600"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
