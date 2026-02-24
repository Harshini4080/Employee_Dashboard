import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import List from "./List";
import Details from "./Details";
import PhotoResult from "./PhotoResult";
import BarChartPage from "./BarChartPage";
import MapPage from "./MapPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/details" element={<Details />} />
        <Route path="/photo" element={<PhotoResult />} />
        <Route path="/chart" element={<BarChartPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;