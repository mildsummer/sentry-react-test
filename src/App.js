import React from 'react';
import * as Sentry from '@sentry/browser';
import logo from './logo.svg';
import './App.css';
import SentryComponent from "./SentryComponent";
import ChildComponent from "./ChildComponent";

Sentry.init({
  dsn: "https://d0d2d3f76b6b401ea5e2bb07b1cfc2e6@sentry.io/1864517"
});

throw new Error('error');

function App() {
  return (
    <SentryComponent>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
          <ChildComponent />
        </header>
      </div>
    </SentryComponent>
  );
}

export default App;
