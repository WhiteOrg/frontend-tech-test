import React from "react";
import TandCs from "../TandC";

function App() {
  return (
    <>
      <header className="App-header">
        <h1>Stech Frontend Challenge</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/WhiteOrg/frontend-tech-test"
          target="_blank"
          rel="noopener noreferrer"
        >
          Full Instructions
        </a>
      </header>

      <TandCs />
    </>
  );
}

export default App;
