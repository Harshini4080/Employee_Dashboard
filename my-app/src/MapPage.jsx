import Navbar from "./Navbar";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import { useLocation } from "react-router-dom";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL(
    "leaflet/dist/images/marker-icon-2x.png",
    import.meta.url
  ).href,
  iconUrl: new URL(
    "leaflet/dist/images/marker-icon.png",
    import.meta.url
  ).href,
  shadowUrl: new URL(
    "leaflet/dist/images/marker-shadow.png",
    import.meta.url
  ).href,
});

function MapPage() {
  // Get employee data passed from List page
  const location = useLocation();
  const data = location.state || [];

  const cityCoords = {
    Edinburgh: [55.9533, -3.1883],
    Tokyo: [35.6762, 139.6503],
    "San Francisco": [37.7749, -122.4194],
    London: [51.5074, -0.1278],
    "New York": [40.7128, -74.0060],
  };

  return (
    <>
      <Navbar />

      <div className="map-page">
        <div className="map-card">
          <div className="map-header">
            <h2>Employee Locations</h2>
            <p>Global distribution of employees</p>
          </div>

          <div className="map-wrapper">
            {/* Leaflet map container */}
            <MapContainer
              center={[30, 0]}
              zoom={2}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />

              {/* Dynamically render markers based on employee city */}
              {data.map((item, index) => {
                const city = item[2];
                const coords = cityCoords[city];
                if (!coords) return null;

                return (
                  <Marker key={index} position={coords}>
                    <Popup>
                      <b>{item[0]}</b>
                      <br />
                      {city}
                    </Popup>
                  </Marker>
                );
              })}
              <ZoomControl position="bottomright" />
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default MapPage;