import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner/Banner";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Nav } from "./components/FloatingNav/Nav"
import { Footer } from "./components/Footer/Footer"
import { PopupBox } from "./components/PopupBox/PopupBox"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Nav />
      <PopupBox />
    </div>
  );
}

export default App;
