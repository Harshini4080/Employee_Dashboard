import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

function PhotoResult() {
  const location = useLocation();
  const image = location.state;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Captured Photo</h2>
      <img src={image} alt="Captured" width="400" />
    </div>
  );
}

export default PhotoResult;