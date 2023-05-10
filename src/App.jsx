import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <TechStack />
    </div>
  );
};

export default App;
