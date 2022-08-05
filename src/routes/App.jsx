import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Header } from "../container/Header/Header";
import { Characters } from "../pages/Characters/Characters";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/characters" element={<Characters />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
