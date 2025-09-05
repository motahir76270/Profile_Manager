import Header from './hearder'
import Skills from './skills'
import Footer from './footer'
import Education from './education'
import Projects from './projects'
import About from './about'
import Work from './work'

const Profile = () => {
  return (
    <div className='pt-15 bg-gradient-to-br from-sky-700 via-slate-700 to-sky-950 '>
      <Header />
      <About />
      <Work />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default Profile
