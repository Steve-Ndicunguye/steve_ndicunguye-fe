import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner/Banner";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
