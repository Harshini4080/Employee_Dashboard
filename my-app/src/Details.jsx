import Navbar from "./Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";

function Details() {
  // Access employee data passed from List page
  const location = useLocation();
  const navigate = useNavigate();
  const employee = location.state;

  // References for camera video and canvas
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Open device camera using MediaDevices API
  const openCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
  };

  // Capture current video frame and convert to image
  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0);

    const image = canvas.toDataURL("image/png");

    navigate("/photo", { state: image });
  };

  return (
    <>
      <Navbar />

      <div className="details-container">
        <div className="details-card">
          <h2>Employee Details</h2>

          {/* Display employee information */}
          <div className="profile-info">
            <p><strong>Name:</strong> {employee[0]}</p>
            <p><strong>Position:</strong> {employee[1]}</p>
            <p><strong>City:</strong> {employee[2]}</p>
            <p><strong>ID:</strong> {employee[3]}</p>
            <p><strong>Joining Date:</strong> {employee[4]}</p>
            <p><strong>Salary:</strong> ${employee[5]}</p>
          </div>

          {/* Camera section */}
          <div className="camera-section">
            <button className="primary-btn" onClick={openCamera}>
              Open Camera
            </button>

            <video ref={videoRef} autoPlay />

            <button className="secondary-btn" onClick={capturePhoto}>
              Capture Photo
            </button>
          </div>

          <canvas ref={canvasRef} style={{ display: "none" }} />
        </div>
      </div>
    </>
  );
}

export default Details;