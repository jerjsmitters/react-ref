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
    this.setStaticFilter = this.setStaticFilter.bind(this);
    this.setDynamicFilter = this.setDynamicFilter.bind(this);
    this.unsetStaticFilter = this.unsetStaticFilter.bind(this);
    this.unsetDynamicFilter = this.unsetDynamicFilter.bind(this);

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
      if(state[key] && key.length <=3){ //such that only the active states are supplied to display launch to parse for index
        return key
      }
    }
  }

  componentDidMount(){
    setTimeout(this.setInitState, 1000) //This is probably bad practice, but I am yet to find a workaround
  }

  setDynamicFilter(val, filterType){
    this.setState({dynamicFilter: true,
                  dynamicFilterVal: val,
                  filterType: filterType})
  }
  unsetDynamicFilter(){
    this.setState({dynamicFilter: false,
                  dynamicFilterVal: null,
                  filterType: 'na'})
  }
  setStaticFilter(val){
    this.setState({staticFilter: true,
                  staticFilterVal: val})
  }
  unsetStaticFilter(){
    this.setState({staticFilter: false,
                  staticFilterVal: null})
  }


  render(){

    return(
      <div id="mainLaunch">
        <Filters allLaunches={this.props.allLaunches}
                  setDynamicFilter={this.setDynamicFilter}
                  unsetDynamicFilter={this.unsetDynamicFilter}
                  setStaticFilter={this.setStaticFilter}
                  unsetStaticFilter={this.unsetStaticFilter} />
        {(!this.whichLaunchStateIsActive(this.state)) ? (<Results allLaunches={this.props.allLaunches}
                                                                  showLaunchStateChanger={this.showLaunchStateChanger}
                                                                  mainLaunchState={this.state}/>) : null}
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
