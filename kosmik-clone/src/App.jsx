import "./App.css";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container">
      <NavBar />
      <main>
        <HeroSection />  
        <Features/>      
      </main>
    </div>
  );
}

export default App;
