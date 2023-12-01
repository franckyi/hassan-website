import { MapContainer, Marker, TileLayer, Tooltip, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function Map(props) {
  const { position, zoom } = props;

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    // <MapContainer
    //   center={[40.8054, -74.0241]}
    //   zoom={14}
    //   scrollWheelZoom={false}
    //   style={{ height: "100%", width: "100%" }}
    // >
    //   <Marker position={[40.8054, -74.0241]} draggable={true} animate={true}>
    //     <Popup>Hey ! you found me</Popup>
    //   </Marker>
    // </MapContainer>
  );
}
