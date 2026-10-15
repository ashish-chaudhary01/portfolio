import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Navbar from "./layouts/Navbar";
import AboutSection from "./section/About";
import ContactSection from "./section/Contact";
import HeroSection from "./section/Hero";
import ProjectsSection from "./section/Projects";

function App() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden px-6">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        {/* skill card */}
        <Skills />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
