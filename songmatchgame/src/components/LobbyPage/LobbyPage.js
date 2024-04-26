import React from "react";
import { Link } from "react-router-dom";

function LobbyPage() {
  const getusername = () => {
    return localStorage.getItem("username");
  };
  return (
    <>
      <Link to="/">WelcomePage</Link>

      <div>
        <p>{getusername()}</p>
      </div>
    </>
  );
}

export default LobbyPage;
