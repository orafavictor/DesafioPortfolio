import './App.css'
import Navbar from './Componentes/Sections/Navbar'
import Presentation from './Componentes/Sections/Presentation'
import AboutMe from './Componentes/Sections/AboutMe'
import Projects from './Componentes/Sections/Projects'
import Footer from './Componentes/Sections/Footer'


function App() {
  return (
    <div>
        <Navbar/>
        <Presentation/>
        <AboutMe/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default App
