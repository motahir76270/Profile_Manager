import React, { useContext, useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import Navbar from '../navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/context';
import {  toast } from 'react-toastify';


const EditProfile = () => {
  const { selectedProfile} = useContext(UserContext);
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [formData , setFormData] = useState({})
  console.log(formData);
 
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      name: selectedProfile.name,
      email: selectedProfile.email,
      education: [{ degree: selectedProfile.education.degree, institution: selectedProfile.education.institution, year: selectedProfile.education.year }],
      skills: [selectedProfile.skills],
      projects: [{ title: selectedProfile.projects.title, description: selectedProfile.projects.description, links: [selectedProfile.projects.links], skills: [selectedProfile.projects.skills] }],
      work: [{ company: selectedProfile.work.company, role: selectedProfile.work.role , duration: selectedProfile.work.duration }],
      links: { github: selectedProfile.links.github, linkedin: selectedProfile.links.linkedin, portfolio: selectedProfile.portfolio  },
    },
  });

  const edu = useFieldArray({ control, name: 'education' });
  const skl = useFieldArray({ control, name: 'skills' });
  const prj = useFieldArray({ control, name: 'projects' });
  const workArray = useFieldArray({ control, name: 'work' });

  // Create field arrays for each project's links and skills
  const projectLinksArrays = prj.fields.map((_, index) => 
    useFieldArray({ control, name: `projects.${index}.links` })
  );
  
  const projectSkillsArrays = prj.fields.map((_, index) => 
    useFieldArray({ control, name: `projects.${index}.skills` })
  );

  
const onSubmit = async(res) => {
const url = import.meta.env.VITE_Backend_Url;
const payload = JSON.parse(JSON.stringify(res));
try {
  const {data} =  axios.put(`${url}/api/profile/${selectedProfile._id}`, payload, { headers: { 'Content-Type': 'application/json' } })
  toast.success("profile Successfully Update")
  navigate('/')
} catch (error) {
  toast.warning("something went wrong" , error)
}
};

   

  return ( <>
   <Navbar /> 
    <section className='px-2 md:px-30 py-20 min-h-screen bg-gradient-to-br from-sky-900 via-slate-600 to-sky-900'>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-7 p-6 bg-white/30  rounded-2xl shadow-2xl shadow-gray-800">
        {/* Name & Email */}
        {step === 0 && 
          <main className='flex flex-col gap-5'>
            <div>
              <label className="block">Name</label>
              <input  {...register('name')} className="mt-1 w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block">Email</label>
              <input type="email" {...register('email')} className="mt-1 w-full border p-2 rounded" />
            </div>
          </main>
        }

        {/* Education Entries */}
        {step === 1 && 
          <div>
            <h2 className="text-lg font-semibold">Education</h2>
            {edu.fields.map((field, idx) => (
              <div key={field.id} className="flex flex-col md:flex-row space-x-2 items-start mt-2">
                <input placeholder="Degree" {...register(`education.${idx}.degree`)} className="border p-2 rounded flex-1" />
                <input placeholder="Institution" {...register(`education.${idx}.institution`)} className="border p-2 rounded flex-1" />
                <input type="number" placeholder="Year" {...register(`education.${idx}.year`)} className="border p-2 rounded w-24" />
                <button type="button" onClick={() => edu.remove(idx)} className="text-red-500">Remove</button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => edu.append({ degree: '', institution: '', year: '' })}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >Add Education</button>
          </div>
        }
 
        {/* Skills */}
        {step === 2 &&
          <div>
            <h2 className="text-lg font-semibold">Skills</h2>
            {skl.fields.map((field, idx) => (
              <div key={field.id} className="flex space-x-2 items-center mt-2">
                <input placeholder="Skill" {...register(`skills.${idx}`)} className="border p-2 rounded flex-1" />
                <button type="button" onClick={() => skl.remove(idx)} className="text-red-500">Remove</button>
              </div>
            ))}
            <button type="button" onClick={() => skl.append('')} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add Skill</button>
          </div>
        }

        {/* Projects */}
        {step === 3 &&
          <div>
            <h2 className="text-lg font-semibold">Projects</h2>
            {prj.fields.map((proj, pIdx) => {
              const links = projectLinksArrays[pIdx];
              const pSkills = projectSkillsArrays[pIdx];
              
              return (
                <div key={proj.id} className="border p-4 rounded mb-4">
                  <div className="flex flex-col md:flex-row space-x-2 items-start">
                    <input placeholder="Title" {...register(`projects.${pIdx}.title`)} className="border p-2 rounded flex-1" />
                    <input placeholder="Description" {...register(`projects.${pIdx}.description`)} className="border p-2 rounded flex-1" />
                    <button type="button" onClick={() => prj.remove(pIdx)} className="text-red-500">Remove</button>
                  </div>
                  {/* Links */}
                  <div className="mt-2">
                    <h3 className="font-medium">Links</h3>
                    {links.fields.map((lnk, lIdx) => (
                      <div key={lnk.id} className="flex space-x-2 mt-1">
                        <input placeholder="Link" {...register(`projects.${pIdx}.links.${lIdx}`)} className="border p-2 rounded flex-1" />
                        <button type="button" onClick={() => links.remove(lIdx)} className="text-red-500">Remove</button>
                      </div>
                    ))}
                    <button type="button" onClick={() => links.append('')} className="mt-1 px-3 py-1 bg-blue-400 text-white rounded">Add Link</button>
                  </div>
                  {/* Project Skills */}
                  <div className="mt-2">
                    <h3 className="font-medium">Project Skills</h3>
                    {pSkills.fields.map((sk, sIdx) => (
                      <div key={sk.id} className="flex space-x-2 mt-1">
                        <input placeholder="Skill" {...register(`projects.${pIdx}.skills.${sIdx}`)} className="border p-2 rounded flex-1" />
                        <button type="button" onClick={() => pSkills.remove(sIdx)} className="text-red-500">Remove</button>
                      </div>
                    ))}
                    <button type="button" onClick={() => pSkills.append('')} className="mt-1 px-3 py-1 bg-blue-400 text-white rounded">Add Skill</button>
                  </div>
                </div>
              );
            })}
            {/* <button
              type="button"
              onClick={() => prj.append({ title: '', description: '', links: [''], skills: [''] })}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >Add Project</button> */}
          </div>
        }

        {/* Work Experience */}
        {step === 4 &&
          <div>
            <h2 className="text-lg font-semibold">Work Experience</h2>
            {workArray.fields.map((w, wIdx) => (
              <div key={w.id} className="flex flex-col md:flex-row space-x-2 items-start gap-5 mt-2">
                <input placeholder="Company" {...register(`work.${wIdx}.company`)} className="border p-2 rounded flex-1" />
                <input placeholder="Role" {...register(`work.${wIdx}.role`)} className="border p-2 rounded flex-1" />
                <input placeholder="Duration" {...register(`work.${wIdx}.duration`)} className="border p-2 rounded w-32" />
                <button type="button" onClick={() => workArray.remove(wIdx)} className="text-red-500">Remove</button>
              </div>
            ))}
            <button type="button" onClick={() => workArray.append({ company: '', role: '', duration: '' })} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add Work</button>
          </div>
        }

        {/* Links */}
        {step === 5 &&
          <div>
            <h2 className="text-lg font-semibold">Links</h2>
            <input placeholder="GitHub" {...register('links.github')} className="mt-1 w-full border p-2 rounded" />
            <input placeholder="LinkedIn" {...register('links.linkedin')} className="mt-1 w-full border p-2 rounded" />
            <input placeholder="Portfolio" {...register('links.portfolio')} className="mt-1 w-full border p-2 rounded" />
          </div>
        }
        
        {step === 5 &&
          <button type="submit" className="w-full py-3 bg-green-600 text-white rounded">Submit Profile</button>
        }

       
        <div className='flex justify-between mx-2 md:mx-40'> 
          <button 
            type="button" 
            onClick={() => setStep(step - 1)} 
            disabled={step === 0}
            className='bg-white/30 w-[7rem] h-8 rounded-2xl hover:bg-sky-800 hover:cursor-pointer shadow-2xl shadow-gray-700 hover:translate-0.5 '
          >Prev</button>

       { step < 5 &&
          <button 
            type="button" 
            onClick={() => setStep(step + 1)} 
            disabled={step === 6}
            className='bg-white/30 w-[7rem] h-8 rounded-2xl hover:bg-sky-800 hover:cursor-pointer shadow-2xl shadow-gray-700 hover:translate-0.5 '
          >Next</button>
        }

        </div>


      </form>
    </section>
    </>
  );
}

export default React.memo(EditProfile);