import React, {Component} from 'react';
import VehicleIntro from './VehicleIntro.js';
import Roadster from './Roadster.js';
import Dragons from './Dragons.js';
import Rockets from './Rockets.js';
import Boats from './Boats.js';


class Vehicles extends Component{

  render(){
    return(
      <div id="vehicleCont" class="mainContainer">
        <VehicleIntro />
        <Roadster roadster={this.props.vehicles.roadster}/>
        <Dragons dragons={this.props.vehicles.dragons}/>
        <Rockets rockets={this.props.vehicles.rockets}/>
        <Boats boats={this.props.vehicles.boats}/>
      </div>
    )
  }
}

export default Vehicles;
