import Navbar from "./component/Navbar";
import Content from "./component/Content";
import About from "./component/About";
import Projects from "./component/Projects";
import Carousel from "./component/Carousel";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <About />
      <Projects />
      <Carousel />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
