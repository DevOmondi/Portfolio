import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import WhatsAppButton from "./Components/WhatsAppButton";

function App() {
  return (
    <>
      <div className="bg-darkBg text-white min-h-screen font-spaceGrotesk">
        <WhatsAppButton />
        <Header />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
