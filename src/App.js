import React, { Component } from 'react';
import Header from "./Header";
import './App.css';

// import logo from './logo.svg';


class App extends Component {
  render() {
    let suscribers = [
      {
        id: 1,
        name: "Prasham",
        phone: "9529528212"
      },
      {
        id: 2,
        name: "Sakshi",
        phone: "7011372429"
      }
    ];
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
          <br/>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </div>

        {
          suscribers.map(sub => {
            return <div key={sub.id} className="flexBox">
                <span className="name">{sub.name}</span>
                <br />
                <span className="phone">{sub.phone}</span>
                <br/>
                <button className="deleteButton">DELETE</button>
              </div>
          })
        }
      </div>
    );
  }
 }
    
    export default App;
