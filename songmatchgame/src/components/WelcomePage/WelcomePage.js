import React, { useState } from "react";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div>
      <Link to="/lobby">Create Game</Link>
    </div>
  );
}

export default WelcomePage;
