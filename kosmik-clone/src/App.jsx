import "./App.css";
import Download from "./components/Download";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="container">
      <NavBar />
      <main>
        <HeroSection />  
        <Features/>
        <Testimonials/>
        <Download/>      
      </main>
    </div>
  );
}

export default App;
