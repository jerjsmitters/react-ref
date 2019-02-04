import React, { Component } from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Universal/Header";
import SpaceX from "./main/SpaceX/SpaceX";
import ISS from "./main/ISS/ISS";
import Nav from "./main/Nav.js"
class App extends Component {

  state = {};

  componentDidMount(){
    fetch('http://api.open-notify.org/iss-now.json')
    .then(res=>res.json())
    .then(res=>this.setState({staticLocation: res.iss_position,
                              timestamp: res.timestamp}));
  }

  render() {
    return (
      <div className = "container">
        <Header />

        <BrowserRouter>
          <div id="body">
            <Nav />
            <div className = "mainContain">
              <Route path = "/ISS" render={ () => <ISS staticLocation = {this.state.staticLocation}
                                                        timestamp = {this.state.timestamp}/> } />
              <Route path = "/spacex" component = {SpaceX} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
