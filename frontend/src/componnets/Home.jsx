import React, { useContext, useState } from 'react'
import Navbar from './navbar'
import ProfileCard from './profileCard'
import TopSkill from './TopSkill';
import { Link } from 'react-router-dom';
import ProjectQuery from './projectQuery';
import { UserContext } from '../context/context';

function Home() {
  const [profileSearch ,setProfileSearch] = useState('');
  const { searchProject  } = useContext(UserContext);
  

  return (
    <>
     <Navbar /> 

     {/* project Qouery by Skill Components */}
     { searchProject && <ProjectQuery /> }
 
     <TopSkill />

     {/* All profile list container */}
    <main className='bg-gradient-to-br from-sky-900 via-slate-600 to-sky-800 py-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-10 gap-5'>
      <div className='flex justify-between'>
       
   <div className='flex flex-col md:flex-row md:gap-[2rem]'>
      <h1 className='md:text-3xl text-gray-300  '>All Profiles</h1>
      <Link className='rounded-sm bg-green-500 w-35 h-8 py-1 px-2 md:w-40 md:py-2 md:px-3 ' to="/addProfile">Add New Profile</Link>
   </div>
      <input type="text" placeholder='Search' onChange={(e) => setProfileSearch(e.target.value)} className='px-5 w-40 h-8 md:w-60 rounded-sm bg-white/30 shadow-2xl shadow-gray-900 ' />
    </div>
      <ProfileCard profileSearch={profileSearch} />
    </main>
    </>
  )
}

export default Home