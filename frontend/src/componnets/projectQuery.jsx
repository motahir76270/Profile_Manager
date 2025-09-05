import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import projecImag from '../assets/projectImage.png'
import { UserContext } from '../context/context';
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectQuery = () => {
    const { searchProject  } = useContext(UserContext);
    
  return (
  
  <div className='flex flex-col gap-3 py-10 bg-gradient-to-br from-sky-800 via-slate-500 to-sky-700'>
       <h1 className='mx-auto text-2xl text-slate-700 font-semibold'>Project On The Basis of skills</h1>

 <main className="mx-auto mt-5 flex flex-wrap gap-16">
  {searchProject.map((item,idx) =>
  <div key={idx} className='mx-auto'>  
    <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        sx={{ height: 140 }}
        image={projecImag}
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {item.description}
        </Typography>
      </CardContent>

      <main className='flex gap-2 mx-4 my-2'>
        {item.skills.map((skill,idx)=>
        <div className='flex'>
          <button className='border-1 border-pink-500 p-1 rounded-2xl bg-gray-300'>{skill}</button>
        </div>
        )}
      </main>
      <div className='ml-10 py-5'>
        <a href={item.links} size="small"> <FaExternalLinkAlt className='text-3xl' /> </a>
      </div>
    </Card>
    </div>
      )}

 </main>

    </div>

  
  )
}

export default ProjectQuery;
