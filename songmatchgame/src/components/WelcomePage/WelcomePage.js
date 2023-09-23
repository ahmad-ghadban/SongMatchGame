import React, { useState } from "react";
import { Link } from "react-router-dom";

function WelcomePage() {
  const message = () => {
    console.log("Create Game Button");
  };
  return (
    <div className="App">
      <h1>MeloMatch</h1>
      <button onClick={message}>
        {" "}
        <Link to="/lobby">Create Game</Link>{" "}
      </button>
      <button onClick={message}>
        {" "}
        <Link to="/lobby">Join Game</Link>{" "}
      </button>
      <form>
        <label>
          Private Game Code
          <input type="text" />
        </label>
      </form>
    </div>
  );
}

export default WelcomePage;
