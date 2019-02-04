import React, {Component} from "react";
import WheresISS from "./WheresISS";
import WhenCanISee from "./WhenCanISee";
import "./ISS.css";


class ISS extends Component{

  constructor(){
    super();
    this.convert=this.convert.bind(this);
  }

  convert(unix){
    let d = new Date(unix*1000);
    return d.toUTCString();
  }

  render(){
    if (this.props.staticLocation !== undefined) {
      return (
        <div class="mainContainer" id="ISSContainer">
          <WheresISS staticLocation={this.props.staticLocation} convert={this.convert} timestamp={this.props.timestamp}/>
          <WhenCanISee convert={this.convert}/>
        </div>
      )

    }else {
      return(
        <div class="mainContainer">
          <p>Please wait...</p>
        </div>
      )
    }

  }
}

export default ISS;
