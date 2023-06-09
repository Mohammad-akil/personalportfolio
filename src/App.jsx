import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import ContactUs from "./components/ContactUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="bg-white">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        theme="light"
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechStack />
      <ProjectSection />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
