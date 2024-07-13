import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="overflow-x-hidden bg-colors-white2">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
