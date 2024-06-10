import "./App.css";
import "../node_modules/bulma/css/bulma.css";
import { useState } from "react";
import AnimalCard from "./AnimalCard";

// 1. 클릭을 눌렀을때 해당 animal이 랜덤으로 나와야함
// 2. animal의 props를 하위 AnimalCard로 전달

function getRandomAnimal() {
  const animalList = ["dog", "cat", "brid", "hippo", "lion", "panda", "bear"];
  return animalList[Math.floor(Math.random() * animalList.length)];
}

function App() {
  const [animal, setAnimal] = useState([]);

  const handleAnimals = () => {
    setAnimal([...animal, getRandomAnimal()]);
  };

  const rederedAnimals = animal.map((animal, index) => {
    return <AnimalCard type={animal} key={index} />;
  });

  return (
    <div>
      <button class="button is-primary is-light" onClick={handleAnimals}>
        버튼을 눌러보세요!
      </button>
      <div> Hello animal {rederedAnimals}</div>
    </div>
  );
}

export default App;
