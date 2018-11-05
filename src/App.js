import React, { Component } from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./main/Home";
import Past from "./main/Past";
import Present from "./main/Present";
import Future from "./main/Future";
class App extends Component {

  state = {};

  componentWillMount(){
    fetch('http://api.open-notify.org/iss-now.json')
    .then(res=>res.json())
    .then(res=>this.setState({staticLocation: res.iss_position}));
  }

  render() {
    return (
      <div className = "container">
        <Header />
        <BrowserRouter>
          <div className = "mainContain">
            <Route exact path ="/" component={Home} />
            <Route exact path = "/past" component = {Past} />
            <Route exact path = "/present" render={ () => <Present staticLocation = {this.state.staticLocation}/> } />
            <Route exact path = "/future" component = {Future} />
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
