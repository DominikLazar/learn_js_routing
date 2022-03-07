import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <div>
      <h1>Profile</h1>
      This is profile page for {username}!
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go home
      </button>
    </div>
  );
}
export default Profile;
