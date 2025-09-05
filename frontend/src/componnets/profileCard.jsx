import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../context/context';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({profileSearch}) => {
 const navigate =useNavigate();
 const [ deleteProfile ,setDeleteProfile] = useState('')

 const url = import.meta.env.VITE_Backend_Url;
 const {profileData , setProfileData,newProfile , setNewProfile ,selectedProfile,setSelectedProfile } = useContext(UserContext);
 
    const fectProfiles = async()=>{
      const {data} = await axios.get(`${url}/api/profile`)
      setProfileData(data);
    }

    const handleDelete = async(id)=> {
       const { data } = await axios.delete(`${url}/api/profile/${id}` ,{ headers: { 'Content-Type': 'application/json' } } )
        setDeleteProfile(data);
       navigate('/');
    }
    
    useEffect( () => {
       fectProfiles();
    },[deleteProfile])
    
    return (
      <section className='flex flex-wrap justify-evenly '>
      {profileData.filter((item) => {
        if(!profileSearch) return true;
        return item.name.toLowerCase().includes(profileSearch.toLowerCase());
      }).map((item, idx) => {
        return (
          <div key={idx} className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-sm overflow-hidden mt-10 relative">
            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
                  alt="title"
                  className="lg:w-full w-40 h-40 object-contain rounded-xl shadow-2xl"
                  />
                  <button onClick={ ()=> handleDelete(item._id)} className='flex'> <MdDelete  className='absolute  md:ml-[-40px] top-3 w-10 h-10 text-red-500 hover:text-red-400 hover:cursor-pointer' /> </button>
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {item.name}
                </h3>
                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {item.email}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.skills.map((skills, index) => (
                    <span key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                      >
                      {skills}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row  gap-4">
                  <Link
                    to={`/EditProfile/${item._id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mg:w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-4 lg:py-2 px-2 py-1 rounded-xl lg:text-sm text-sm font-semibold text-center"
                    >
                    Edit Profile 
                  </Link>

                  <Link
                    to={`ViewProfile/${item._id}`}
                    onClick={()=> setSelectedProfile(item)}
                    rel="noopener noreferrer"
                    className="w-full mg:w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-sm text-sm font-semibold text-center"
                    >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
      )})}
        </section>
      
  )
}

export default ProfileCard;
