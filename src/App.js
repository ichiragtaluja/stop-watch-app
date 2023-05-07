import "./App.css";
import StopWatch from "./components/StopWatch";
import { NavLink, Routes, Route } from "react-router-dom";
import Timer from "./components/Timer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/stopwatch" element={<StopWatch />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </div>
  );
}

export default App;
