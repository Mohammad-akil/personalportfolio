import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import TechStack from "./components/TechStack";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <TechStack />
      <ProjectSection />
    </div>
  );
};

export default App;
