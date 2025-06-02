import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import WhatsAppButton from "./Components/WhatsAppButton"
function App() {
  return (
    <>
      <div className="bg-darkBg text-white h-[100%] font-spaceGrotesk">
        <WhatsAppButton />
        <Header />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
