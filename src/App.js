import React from 'react'
import logo from './images/stech.svg'
import './App.css'

function App() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="Stech logo." />
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
  )
}

export default App
