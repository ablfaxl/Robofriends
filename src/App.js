import "./App.css";
import { useState, useEffect } from "react";
// import dataRobo from "./dataRobo";
import Modal from "./Modal.js";
import Profile from "./Profile";

// import { Map, Marker, Popup, TileLayer } from "react-leaflet";
// rfec

function App() {
  const [dataRobo, setdatarobo] = useState([]);
  const [input, setInput] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [list, setList] = useState();
  const [profile, setProfile] = useState();
  // console.log(openModal);
  // {list && <Profile profile={profile} />}
  // const showRobo =

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setdatarobo(data));
  }, []);

  const filteredRobots = dataRobo.filter((val) => {
    if (input == "") {
      return val;
    } else if (
      val.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    ) {
      return val;
    }
  });

  return (
    <div>
      <input
        type={"search"}
        className="search-box"
        placeholder="Searach..."
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <div className="container">
        {openModal && <Modal list={list} setOpenModal={setOpenModal} />}

        {filteredRobots[0] ? (
          filteredRobots.map((item) => {
            return (
              <div
                key={item.id}
                className="App"
                onClick={() => {
                  // console.log(item.id);
                  setProfile(item.id);
                  setList(item.id);
                  setOpenModal(true);
                }}
              >
                <img
                  className="img"
                  src={`https://robohash.org/${item.id}?set=set2&size=150x150`} 
                  alt="ROBOT PHOTO"
                />
                <h4 className="first-t">{item.name}</h4>
                <p className="first-p">{item.email}</p>
              </div>
            );
          })
        ) : (
          <h1> No Result </h1>
        )}
      </div>
    </div>
  );
}

export default App;
