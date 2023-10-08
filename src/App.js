import "./App.css";
import LandingPage from "./pages/LandingPage";
import LineChart from "./pages/LineChart";
import BarChart from "./pages/BarChart";
import Moon from "./components/Moon";
import HeightMap from "./pages/HeightMap";
import PointMap from "./pages/PointMap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/linechart" element={<LineChart />} />
        <Route path="/barchart" element={<BarChart />} />
        <Route path="/heightmap" element={<HeightMap />} />
        <Route path="/pointmap" element={<PointMap />} />
      </Routes>
    </Router>
  );
}
export default App;
