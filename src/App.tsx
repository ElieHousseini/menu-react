import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MenuItem from "./Pages/MenuItem";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">menuItem1</Link>
        <Link to="/menuItem1">menuItem2</Link>
        <Link to="/menuItem2">menuItem2</Link>
        <Link to="/menuItem3">menuItem3</Link>
        <Link to="/menuItem4">menuItem4</Link>
        <Link to="/menuItem5">menuItem5</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MenuItem />} />
        <Route path="/menuItem1" element={<MenuItem />} />
        <Route path="/menuItem2" element={<MenuItem />} />
        <Route path="/menuItem3" element={<MenuItem />} />
        <Route path="/menuItem4" element={<MenuItem />} />
        <Route path="/menuItem5" element={<MenuItem />} />
      </Routes>
    </Router>
  );
}

export default App;
