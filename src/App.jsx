import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";

const App = () => {
  return (
    <div className="relative">
      <Navbar />

      <HeroSection />
      {/* <AboutSection /> */}
      <TechStack />
      <ProjectSection />
      <Footer />
    </div>
  );
};

export default App;
