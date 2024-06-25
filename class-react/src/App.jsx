import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Test from "./pages/Test";

function App() {
  return (
    // <div style={{ padding: "20px", textAlign: "center" }}>
    //   <div style={{ border: "1px solid black", width: "600px" }}>
    //     <h3 style={{ padding: "10px" }}>Are you sure?</h3>
    //     <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
    //       {/* <Counter /> */}
    //       {/* <Button
    //         item={{
    //           className: "bg-green-400 text-white rounded p-1 px-2",
    //           title: "SUBMIT",
    //         }}
    //       />
    //       <Button
    //         item={{
    //           className: "bg-red-400 text-white rounded p-1 px-2",
    //           title: "CANCEL",
    //         }}
    //       /> */}

    //     </div>
    //   </div>
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
