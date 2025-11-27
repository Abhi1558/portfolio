import "./App.scss";
import Herosection from "./components/herosection/herosection";
import Navbar from "./components/herosection/Navbar/navbar";
import Parallex from "./components/parallexsection/parallex";
import Service from "./components/service section/service";
import Projects from "./components/projectsection/project";
import Contactus from "./components/contact section/contactus";
import Cursor from "./components/cursor/cursor";
function App() {
  return (
    <div>
      <Cursor/>
      <section>
        <Navbar />
        <Herosection id="Herosection"/>
      </section>
      <section>
        <Parallex type="services" />
      </section>
      <section id="service-section">
        <div id="service-wrapper">
          <Service id="Skills"/>
        </div>
      </section>
      <section>
        <Parallex type="projects" />
      </section>
      
      
    </div>
  );
}

export default App;
