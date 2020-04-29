import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavList from './pages/navList';
import FooterUI from './pages/footerUI';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>React Hooks</h2>
          <h3>React Mixin HOC(high-order-component)</h3>
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
        </header>
        <h3>导航列表</h3>
        <NavList />
        <FooterUI />
      </div>
    );
  }
}

export default App;
