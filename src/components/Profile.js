// import dataRobo from "./dataRobo";
import {
  useParams,
  Link,
} from "react-router-dom";
import "./Profile.css";
import { useEffect, useState } from "react";

function Profile({ profile }) {
  const { id } = useParams();
  const [profileRobo, setProfileRobo] = useState("");
  const [loading, setLoading] = useState(true);
  //   const roboProfile = profileRobo.find((item) => item.id == id);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setProfileRobo(data));
    setLoading(false);
  }, []);
  console.log(profileRobo);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="profile-container">
      <img
        className="img-pro"
        src={`https://robohash.org/${profileRobo.id}?set=set2&size=150x150`}
        alt="ROBOT PHOTO"
      />
      <h2 className="title-pro"> {profileRobo.name} </h2>
      <p className="title-pro1"> {profileRobo.email} </p>
      <Link className="back-btn" to={"/"}>
        Back
      </Link>
    </div>
  );
}
export default Profile;
