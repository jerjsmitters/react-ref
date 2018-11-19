import React, {Component} from 'react';
import Filters from'./Filters.js';
import Results from './Results.js';
import DisplayedLaunch from './DisplayedLaunch';



class MainLaunch extends Component {
  constructor(){
    super();
    this.state = {};
    this.setInitState = this.setInitState.bind(this);
    this.showLaunchStateChanger = this.showLaunchStateChanger.bind(this);
    this.whichLaunchStateIsActive = this.whichLaunchStateIsActive.bind(this);

  }

  setInitState(){
    if(this.props.allLaunches){
      this.props.allLaunches.map(launch=>this.setState({['a'+launch.flight_number]: false})); //Active (displayedLaunch)
    }
  }

  showLaunchStateChanger(flightNumber){
    this.setState({['a'+flightNumber]: true})
  }

  whichLaunchStateIsActive(state){ //Loops to see which state is true
    for (let key in state){
      if(state[key]){
        return key
      }
    }
  }

  componentDidMount(){
    setTimeout(this.setInitState, 1000) //This is probably bad practice, but I am yet to find a workaround
  }

  render(){

    return(
      <div id="mainLaunch">
        <Filters allLaunches={this.props.allLaunches} getDynamicFilters={this.props.getDynamicFilters} />
        {(!this.whichLaunchStateIsActive(this.state)) ? (<Results allLaunches={this.props.allLaunches} showLaunchStateChanger={this.showLaunchStateChanger}/>) : null}
        <DisplayedLaunch allLaunches={this.props.allLaunches}
                          payloadPopulator={this.props.payloadPopulator}
                          corePopulator={this.props.corePopulator}
                          activeState={this.whichLaunchStateIsActive(this.state)}
                          imagePopulator={this.props.imagePopulator}
                          setInitState={this.setInitState}
                          />
      </div>
    )
  }
}

export default MainLaunch;
