import React, { Component } from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Universal/Header";
import Nav from "./Universal/Nav";
import Footer from "./Universal/Footer";
import SpaceX from "./main/SpaceX/SpaceX";
import ISS from "./main/ISS/ISS";
import Home from "./main/Home/Home";
class App extends Component {

  state = {};

  componentDidMount(){
    fetch('http://api.open-notify.org/iss-now.json')
    .then(res=>res.json())
    .then(res=>this.setState({staticLocation: res.iss_position}));
  }

  render() {
    return (
      <div className = "container">
        <Header />
        <Nav />
        <BrowserRouter>
          <div className = "mainContain">
            <Route exact path ="/" component={Home} />
            <Route path = "/ISS" render={ () => <ISS staticLocation = {this.state.staticLocation}/> } />
            <Route path = "/spacex" component = {SpaceX} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
