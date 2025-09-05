import './App.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './componnets/Home'
import Profile from './componnets/userProfile/ViewProfile'
import AddProfile from './componnets/AddprofileForm.jsx/AddProfile'
import EditProfile from './componnets/editProfile/editProfile'

function App() {
  const router = createBrowserRouter([
    {path:'/' , element: <> <Home /> </>},
    {path:'/addProfile' , element: <AddProfile />},
    {path:'/ViewProfile/:id' , element: <Profile />},
    {path:'/EditProfile/:id' , element: <EditProfile />},
  ]);


  return (
    <>
  <RouterProvider router={router} />
    </>
  )
}

export default App
