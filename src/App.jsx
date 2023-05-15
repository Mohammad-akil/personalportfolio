import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <TechStack />
      <ProjectSection />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
