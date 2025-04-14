import "./App.css";
import Download from "./components/Download";
import Features from "./components/Features";
import Footer from "./components/Footer";
import FrequentlyAskedQs from "./components/FrequentlyAskedQs";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="container">
      <NavBar />
      <main>
        <HeroSection />
        <Features />
        <Testimonials />
        <Download />
        <FrequentlyAskedQs />
        <Footer />
      </main>
      <div className="footer-img">
        <img
          src="https://framerusercontent.com/images/9hidAyQO9R9thYkS82BYvzL1s.png?scale-down-to=2048"
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
