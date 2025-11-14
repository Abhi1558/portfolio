
import './App.scss'
import Herosection from "./components/herosection/herosection"
import Navbar from './components/herosection/Navbar/navbar'
import Parallex from './components/parallexsection/parallex'
import Service from './components/service section/service'
import Projects from './components/projectsection/project'
import Contactus from './components/contact section/contactus'
function App() {
  

  return (
    <div>
    <section>
      
      <Navbar/>
      <Herosection/>
    </section>
    <section><Parallex type="services"/></section>
    <section id="service-section">
      <div id='service-wrapper'>
      <Service/>
      </div>
    </section>
    <section><Parallex type="projects"/></section>
    <Projects/>
    <section><Contactus/></section>
    
  
      
      
    </div>
  )
}

export default App
