import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

const TopSkill = () => {
    const [skills , setSkills] = useState([]);
 
    const fectchTopSkill = async()=> {
     const url = import.meta.env.VITE_Backend_Url;
     try {
        const {data} = await axios.get(`${url}/api/skills/top`) 
        setSkills(data);
     } catch (error) {
        console.log('error in fecth top Skill' , error);
     }
    }


    useEffect( ()=> {
     fectchTopSkill();
    } ,[])
   

  return (
    <div className='flex flex-col w-full py-6 min-h-50 bg-gradient-to-br from-sky-900 via-slate-600 to-sky-800'>
        <h1 className='text-2xl text-gray-400 mx-auto font-semibold'>Top Skills</h1>
     <div key={skills} className='flex flex-wrap justify-around gap-2 md:gap-5 mx-1 md:mx-[2rem] mt-4'> 
         {Object.entries(skills).map(([skill, level]) => (
         <ul key={skill}>
      <button  className='border-1 w-30 py-1 h-[4rem] text-gray-200 mt-1 rounded-3xl border-purple-400 mx-auto'> {skill}: {level} </button>
         </ul>
    ))}
    </div>
    </div>
  )
}

export default TopSkill
