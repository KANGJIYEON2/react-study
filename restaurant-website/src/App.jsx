import "./App.css";
import Dessert from "./components/Dessert/Dessert";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="overflow-x-hidden bg-colors-white2">
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <Dessert />
    </div>
  );
}

export default App;
