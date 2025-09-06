
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { UserContext } from "../../context/context";


const Header = () => {
   const { selectedProfile} = useContext(UserContext);
   console.log(selectedProfile);
  
  const [open, setOpen] = useState(false);
  const [select , setSelect] = useState([])

const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  // Smooth scroll function

  const handleMenuItemClick = (item) => {
    setSelect(item);
    setActiveSection(item);
    const section = document.getElementById(item);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
   

  const navLinks = [
    {link:"about" , name:"About"},
    {link:"education" , name:"Education"},
    {link:"work" , name:"Experience"},
    {link:"skills" , name:"Skills"},
    {link:"projects" , name:"Projects"}
     ];

  return (
    <nav className="bg-gradient-to-br from-sky-900 via-slate-600 to-sky-900 shadow w-full fixed top-0 z-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
        <div className="text-xl text-amber-100 font-bold">{selectedProfile.name}</div>
        <div className="hidden md:flex space-x-6">
          {navLinks?.map((item,idx) => (
            <Link onClick={()=> handleMenuItemClick(item.link)} key={idx} href={`#${item.link}`} className={`font-semibold hover:text-blue-500 ${select === item.name?"text-blue-500":'text-gray-300' }`} >
              {item.name}
            </Link>
          ))}
        </div>
        <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)}>
          {open ? <IoMdCloseCircleOutline className="text-white text-2xl"  /> : <HiMenuAlt3 className="text-white text-3xl"  />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white/35 shadow-md">
          {navLinks.map((item,idx) => (
            <a
              key={idx}
              onClick={() => handleMenuItemClick(item.link)}
              href={`#${item.link}`}
              className="block px-6 py-3 text-gray-700 hover:bg-gray-400"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
