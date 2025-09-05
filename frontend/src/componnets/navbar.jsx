import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { UserContext } from '../context/context';
import axios from 'axios';

const Navbar = () => {
  const { searchProject, setSearchProject } = useContext(UserContext);
  const [search, setSearch] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault(); // ✅ Correct method
    const url = import.meta.env.VITE_Backend_Url;
    const { data } = await axios.get(`${url}/api/projects/skill`,{
        params: { skill: search }
      });
    setSearchProject(data);
  };

  return (
    <header className="flex justify-between w-full h-14 py-2 px-10 bg-gradient-to-br from-gray-700 via-slate-800 to-sky-900">
      <div className="mt-2 md:mt-0">
        <Link to="/" className="text-gray-100 mt-5 text-sm md:text-3xl">
          Tech Coder
        </Link>
      </div>

      <form onSubmit={submitHandler} className="flex justify-center items-center gap-[1rem]">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="text-gray-100 border border-gray-400 w-30 md:w-60 px-5 md:px-4 py-1 mt-1 rounded-sm"
          type="text"
          placeholder="Search Projects By Skills"
        />
        <button type="submit" className="rounded-sm bg-green-500 py-1 px-3">
          Submit
        </button>
      </form>
    </header>
  );
};

export default React.memo(Navbar);
