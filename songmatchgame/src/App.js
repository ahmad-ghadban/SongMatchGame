import logo from "./logo.svg";
import "./App.css";

function App() {
  const message = () => {
    console.log("Create Game Button");
  };

  return (
    <div className="App">
      <h1>MeloMatch</h1>
      <button onClick={message}> Create Game </button>
      <button onClick={message}> Join Game </button>
      <form>
        <label>
          Private Game Code
          <input type="text" />
        </label>
      </form>
    </div>
  );
}

export default App;
