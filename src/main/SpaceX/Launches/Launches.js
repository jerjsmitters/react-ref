import React, {Component} from 'react';
import MainLaunch from './MainLaunch.js';
import NextLaunch from './NextLaunch.js';
import LatestLaunch from './LatestLaunch.js';
import "./launches.css";
class Launches extends Component{

  constructor(){
    super();
    this.state = {dynamicFilters: ''}
    this.corePopulator = this.corePopulator.bind(this);
    this.payloadPopulator = this.payloadPopulator.bind(this);
    this.imagePopulator = this.imagePopulator.bind(this);
    this.getDynamicFilters = this.getDynamicFilters.bind(this);
  }

  corePopulator(arr){
    for (let i=0;i<arr.length; i++){
      return <li>Core Name: {arr[i].core_serial} <br/>
                Landing Success: {(arr[i].land_success) ? arr[i].land_success.toString() : 'false'}
                {arr[i].landing_intent ? '(intentional)' : '(unintentional)'}</li>;
    }
  }
  corePopulatorFut(arr){
    for (let i=0;i<arr.length; i++){
      return (
        <li>Core Name: {arr[i].core_serial}</li>
      );
    }
  }

  payloadPopulator(arr, past){

    let i=1;
    const payloadArr = arr.map(payload=>{
      i+=1;
      return <li key={i}>Name: {payload.payload_id} ({payload.payload_type}) <br/>
                         Mass: {(payload.payload_mass_kg) ? (payload.payload_mass_kg+'kg') : 'Unknown'} <br/>
                        {(past) ? ('Was it reused? '+((payload.reused) ? 'Yup!' : 'Nope!')) : null} </li>
    });
    return payloadArr;
  }

  imagePopulator(arr){
    let i=0;
    const imgArray = arr.map(img=>{
      i+=1;
      return <a href={img} key={i}>{i}</a>;
    })
    return imgArray;
  }

  getDynamicFilters(obj){
    this.setState({dynamicFilters: obj})
  }

  render(){

    return(
      <div id="launchCont" className="mainContainer">
        <div id = "launchCol">
          <LatestLaunch latestLaunch={this.props.launches.latestLaunch}
                        payloadPopulator={this.payloadPopulator}
                        corePopulator={this.corePopulator}
                        imagePopulator={this.imagePopulator}/>

          <MainLaunch allLaunches={this.props.launches.allLaunches}
                      pastLaunches={this.props.launches.pastLaunches}
                      upcomingLaunches = {this.props.launches.upcomingLaunches}
                      corePopulator={this.corePopulator}
                      imagePopulator={this.imagePopulator}
                      payloadPopulator={this.payloadPopulator}
                      getDynamicFilters={this.getDynamicFilters}/>

          <NextLaunch nextLaunch={this.props.launches.nextLaunch}
                      payloadPopulator={this.payloadPopulator}
                      corePopulator={this.corePopulatorFut}
                      imagePopulator={this.imagePopulator}
          /> {/*These two are always mounted to the left and right*/}

        </div>
      </div>
    )
  }
}


export default Launches;
