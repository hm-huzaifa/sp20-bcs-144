import logo from "./logo.svg";
import ghazi from "./ghazi.png";
import hash from "./hash.png";
import hanno from "./hanno.png";
import dora from "./dora.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="stickers">
          <img src={ghazi} className="App-logo" alt="logo" />
          <img src={hash} className="App-logo" alt="logo" />
          <img src={hanno} className="App-logo" alt="logo" />
          <img src={dora} className="App-logo" alt="logo" />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
