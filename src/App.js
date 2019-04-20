import React, { Component } from 'react';
import './App.css';
import './my.css';
import image from './Kid.jpg'
import Profile from './me.jpg'

class App extends Component {
  render() {
    return (
      <div className="App background">
            <div className="app-left">
                <img className="image" alt="profile" src={Profile}></img>
                <h3>Korpong Siribantuengsilp</h3>
                <h4>DevOps Engineer</h4>
            </div>
            <div className="app-right">
                <div className="Experience">
                    <h2 className="title">EXPERIENCE</h2>
                    <ul>
                        <li>Implement and maintenance application is running on Linux system.</li>
                        <li>Develop website for IOT Project.</li>
                        <li>Analyse problem and figure out solution.</li>
                    </ul>
                </div>
                
                <hr width="90%" size="5" color="white"></hr>
                <div className="Education">
                    <h2 className="title">EDUCATION</h2>
                    <ul>
                        <li>Bachelor's degree in Computer Technology at Rajamangala University of Technology Krungtep.</li>
                    </ul>
                </div>
                <hr width="90%" size="5" color="white"></hr>
                <div className="Hobby">
                    <h2 className="title">HOBBY</h2>
                    <ul>
                        <li>Reading.</li>
                        <li>Driving, Fishing.</li>
                        <li>Table Tennis.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
