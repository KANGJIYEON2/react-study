import "./App.css";
import Card from "./components/Card";
import logo from "./components/logo192.png";
//자식요소 Card에게 props 전달
function App() {
  return (
    <div>
      <Card title="안녕하세요" logo={logo} />
    </div>
  );
}

export default App;
