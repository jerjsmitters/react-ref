import React, {Component} from 'react';
import VehicleIntro from './VehicleIntro.js';
import Roadster from './Roadster.js';
import Dragons from './Dragons.js';
import Rockets from './Rockets.js';
import Boats from './Boats.js';
import './vehicles.css';


class Vehicles extends Component{

  render(){
    return(
      <div id="vehicleCont" class="mainContainer">
        <VehicleIntro />
        <div id="vehicleCol">
          <Dragons dragons={this.props.vehicles.dragons}/>
          <Rockets rockets={this.props.vehicles.rockets}/>
          <div id="vehicleRow">
            <Roadster roadster={this.props.vehicles.roadster}/>
            <Boats boats={this.props.vehicles.boats}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Vehicles;
