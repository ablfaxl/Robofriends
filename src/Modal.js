import dataRobo from "./dataRobo";
import {
  Map,
  Marker,
  Popup,
  TileLayer,
  MapContainer,
  useMapEvents,
} from "react-leaflet";
import "./Modal.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Modal({ setOpenModal, list }) {
  const findName = dataRobo.find((item) => item.id == list);
  console.log(findName);
  console.log(list);

  return (
    <div>
      <div
        className="modal-background"
        onClick={() => {
          setOpenModal(false);
        }}
      ></div>
      <div className="modal-container">
        <div className="leaflet-container">
          <MapContainer
            center={findName.address.geo}
            zoom={5}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={findName.address.geo}>
              <Popup>
                Look great ;/ <br /> You are here
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <Link to={`/profile/${findName.id}`} className="btn-profile">
          Click to show more informaition
        </Link>
      </div>
      ;
    </div>
  );
}

export default Modal;
//https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon-2x.png
//<div className="title">{findName.name} </div>
// <div className="title-1">{findName.email}</div>
// <button
//   className="x-btn"
//   onClick={() => {
//     setOpenModal(false);
//   }}
// >
//   X
// </button>
