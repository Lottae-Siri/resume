import React, { Component } from 'react';
import './App.css';
import './my.css';
// import image from './Kid.jpg'
import Profile from './me.jpg'

class App extends Component {
  render() {
    return (
      <div className="App background">
            <div className="app-left">
                <img className="image" alt="profile" src={Profile}></img>
                <h3>Korpong Siribantuengsilp</h3>
                <h4>DevOps Engineer</h4>
                <hr width="90%" size="5" color="white"></hr>
                <h4>Skills</h4>
                <div className="Skill">
                    <ul>
                        <li>Development: ES6, VueJS, CSS, Shell Script</li>
                        <li>Database: MySQL, phpMyAdmin</li>
                        <li>OS: Redhat, CentOS</li>
                        <li>Network: Switch, Router, Firewall</li>
                </ul>
                </div>
                
            </div>
            <div className="app-right">
                <div className="Experience">
                    <h2 className="title">EXPERIENCE</h2>
                    <ul>
                        <li>Implement and maintenance application is running on Linux system.</li>
                        <li>Develop front-end website for IOT Project.</li>
                        <li>Design and develop company website.</li>
                        <li>Building shell script to operate task by automated.</li>
                        <li>Analyse problem to figure out solution.</li>
                        <li>Operate docker, Apache, Tomcat, mySQL Replication.</li>
                        <li>Implement and maintenance Network and Firewall system.</li>
                        <li>Operate and maintenance SAN Storage.</li>
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
                        <li>Reading, Watching Movie.</li>
                        <li>Driving, Biking, Fishing.</li>
                        <li>Table Tennis.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
