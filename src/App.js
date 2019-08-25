import React, { Component } from 'react';
import Header from "./Header";

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          <button>ADD</button>
        </div>
        <div>
          <span>Name</span>
          <br />
          <span>Phone</span>
        </div>
      </div>
    );
  }
 }
    
    export default App;
