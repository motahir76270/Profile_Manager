import React, { useContext } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';
import { UserContext } from '../../context/context';
import {  FaExternalLinkAlt } from 'react-icons/fa';


const Footer = () => {
    const { selectedProfile } = useContext(UserContext);
    const links = selectedProfile.links;
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand/About */}
        <div>
          <h2 className="text-xl font-bold text-white">YourBrand</h2>
          <p className="mt-2 text-sm text-gray-400">
            Building modern, scalable, and performant web solutions with love.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row md:justify-between md:col-span-2">
          <div className="mb-4 md:mb-0">
            <h3 className="text-sm font-semibold text-white mb-2">Company</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-2">Legal</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social & Copyright */}
      <div className="border-t border-gray-700 mt-8">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
         
          <section  className="flex space-x-4 mt-4 md:mt-0">
            <a href={links.portfolio} className="text-gray-400 hover:text-white">
              <FaExternalLinkAlt />
            </a>
            <a href={links.linkedin} className="text-gray-400 hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href={links.github} className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </section>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
