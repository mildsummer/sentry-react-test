import React from 'react';
import * as Sentry from '@sentry/browser';
import logo from './logo.svg';
import './App.css';

console.log(process.env.NODE_ENV === 'development');
Sentry.init({
  debug: process.env.NODE_ENV === 'development'
});

function App() {
  return (
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
        <button type="button" onClick={() => {
          throw new Error('error');
        }}>
          エラーを発生
        </button>
      </header>
    </div>
  );
}

export default App;
