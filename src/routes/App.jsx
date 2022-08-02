import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
