import logo from "./logo.svg";
import "./App.css";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LobbyPage from "./components/LobbyPage/LobbyPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<WelcomePage />} />
          <Route path="/lobby" exact element={<LobbyPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
