import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="nav-left">
        <h3 onClick={() => navigate("/list")}>Employee Dashboard</h3>
      </div>

      <div className="nav-right">
        <Link to="/list">List</Link>
        <button onClick={() => navigate(-1)} className="back-btn">
          Back
        </button>
      </div>
    </div>
  );
}

export default Navbar;