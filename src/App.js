import React, { Component } from 'react';
import Header from "./Header";
import './App.css';

// import logo from './logo.svg';


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          <button className="addButton">ADD</button>
        </div>
        <div className="flexBox">
          <span className="spanName">Name</span>
          <br />
          <span className="spanPhone">Phone</span>
        </div>
      </div>
    );
  }
 }
    
    export default App;
