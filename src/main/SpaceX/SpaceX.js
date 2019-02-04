import React, {Component} from 'react';
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import About from './About/About.js';
import Launches from './Launches/Launches.js';
import NotFound from './../../Universal/NotFound.js'



class SpaceX extends Component{

  constructor(){
    super();
    this.state = { //About spaceX
                  companyInfo:'',
                  missions: '',
                  history: '',

                  //Activity
                  allLaunches: '',
                  pastLaunches: '',
                  upcomingLaunches: '',
                  nextLaunch: '',
                  latestLaunch: '',


                  //Vehicles
                  roadster: '',
                  dragons: '',
                  rockets: '',

                  //Technology
                  capsules: '',
                  cores: '',
                  launchPads: '',
                  landingPads: '',
                  payLoads:''
                };
  }

    fetchAndSet(url, state) {
      fetch(url)
      .then((res) => res.json())
      .then((data)=>{
        console.log(url);
        console.log(data);
        return this.setState({[state]: data})
      })
    }

    componentDidMount(){
      const sxurl = 'https://api.spacexdata.com/v3/';
      const urlStateArray = [
                              ['companyInfo', sxurl+'info'],
                              ['missions', sxurl+'missions'],
                              ['allLaunches', sxurl+'launches'],
                              ['pastLaunches', sxurl+'launches/past'],
                              ['upcomingLaunches', sxurl+'launches/upcoming'],
                              ['latestLaunch', sxurl+'launches/latest'],
                              ['nextLaunch', sxurl+'launches/next'],
                              ['history', sxurl+'history'],
                              ['roadster', sxurl+'roadster'],
                              ['ships', sxurl+'ships'],
                              ['dragons', sxurl+'dragons'],
                              ['rockets', sxurl+'rockets'],
                              ['capsules', sxurl+'capsules'],
                              ['cores', sxurl+'cores'],
                              ['launchPads', sxurl+'launchpads'],
                              ['landingPads', sxurl+'landpads'],
                              ['payLoads', sxurl+'payloads']
                            ];

      for (let i = 0;  i < urlStateArray.length; i++) {
        this.fetchAndSet(urlStateArray[i][1], urlStateArray[i][0])
      }
    }

  render(){
    const aboutData = {companyInfo: this.state.companyInfo,
                       missions: this.state.missions,
                       history: this.state.history};

    const launchData = {  allLaunches: this.state.allLaunches,
                          pastLaunches: this.state.pastLaunches,
                          upcomingLaunches: this.state.upcomingLaunches,
                          nextLaunch: this.state.nextLaunch,
                          latestLaunch: this.state.latestLaunch};

    const vehicleData = {roadster: this.state.roadster,
                         ships: this.state.ships,
                         dragons: this.state.dragons,
                         rockets: this.state.rockets};

    const componentData = {capsules: this.state.capsules,
                      cores: this.state.cores,
                      launchPads: this.state.launchPads,
                      landingPads: this.state.landingPads,
                      payLoads: this.state.payLoads};


    return(
        <div className = "spaceXContain">
          <Switch>
            <Route path= "/spacex/about" render ={ () => <About about={aboutData}/>} />
            <Route path = "/spacex/launches" render={ () => <Launches launches={launchData}/>} />
            <Route component = {NotFound} />
          </Switch>
        </div>
    )
  }
}
export default SpaceX;
