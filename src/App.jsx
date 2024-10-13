
import './App.css'
import AboutMe from './Components/About/AboutMe'
import Banner from './Components/Banner/Banner'
import ContactMe from './Components/Contact/ContactMe'
import Navbar from './Components/Navber/Navbar'
import MyWork from './Components/Work/MyWork'
function App() {

  return (
    <>
     
     <Navbar />
     <Banner />
     <AboutMe></AboutMe>
     <MyWork></MyWork>
     <ContactMe></ContactMe>
     
    </>
  )
}

export default App
