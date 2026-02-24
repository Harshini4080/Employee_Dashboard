import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function List() {
  // State to store employee data from API
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Fetch employee data on component mount
  useEffect(() => {
    axios
      .post("https://backend.jotish.in/backend_dev/gettabledata.php", {
        username: "test",
        password: "123456",
      })
      .then((res) => {
        setData(res.data.TABLE_DATA.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className="list-container">
        <div className="list-header">
          <h2>Employee List</h2>

          {/* Navigation to visualization pages */}
          <div className="list-actions">
            <button onClick={() => navigate("/chart", { state: data })}>
              Salary Chart
            </button>
            <button onClick={() => navigate("/map", { state: data })}>
              Employees Map
            </button>
          </div>
        </div>

        {/* Render employee cards */}
        <div className="card-grid">
          {data.map((item, index) => (
            <div className="employee-card" key={index}>
              <h3>{item[0]}</h3>
              <p><strong>Position:</strong> {item[1]}</p>
              <p><strong>City:</strong> {item[2]}</p>
              <p><strong>Salary:</strong> ${item[5]}</p>

              <button
                className="details-btn"
                onClick={() => navigate("/details", { state: item })}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default List;