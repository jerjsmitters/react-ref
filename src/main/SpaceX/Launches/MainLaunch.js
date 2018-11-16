import React, {Component} from 'react';
import Filters from'./Filters.js';
import Results from './Results.js';
import DisplayedLaunch from './DisplayedLaunch';



class MainLaunch extends Component {
  constructor(){
    super();
    this.state = {};
    this.setInitState = this.setInitState.bind(this);
  }

  setInitState(){
    if(this.props.allLaunches){
      this.props.allLaunches.map(launch=>this.setState({['r'+launch.flight_number]: true})); //Result
      this.props.allLaunches.map(launch=>this.setState({['a'+launch.flight_number]: false})); //Active (displayedLaunch)
    }
  }

  componentDidMount(){
    setTimeout(this.setInitState, 1000) //This is probably bad practice, but I am yet to find a workaround
  }

  render(){

    return(
      <div id="mainLaunch">
        <Filters allLaunches={this.props.allLaunches}/>
        <Results allLaunches={this.props.allLaunches}/> {/*Displays until the one is clicked, brings up displayed launch*/}
        <DisplayedLaunch allLaunches={this.props.allLaunches}/> {/*Displays only once a display is clicked*/}
      </div>
    )
  }
}

export default MainLaunch;
