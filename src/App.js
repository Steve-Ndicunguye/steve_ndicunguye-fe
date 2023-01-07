import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner/Banner";
import { Myskills } from "./components/Myskills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* <Myskills /> */}
      <Projects />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
