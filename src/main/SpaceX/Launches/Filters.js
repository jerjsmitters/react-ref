import React, {Component} from 'react';

let loopVar;

class Filters extends Component{

  constructor(){
    super();
    this.state={};
    this.removeDuplicates=this.removeDuplicates.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeC = this.handleChangeC.bind(this);
    this.handleChangeP = this.handleChangeP.bind(this);
    this.handleChangeR = this.handleChangeR.bind(this);
  }
  removeDuplicates(arr){
    let unique_array = []
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    return unique_array
  }

  handleChange(event) {
  this.setState({value: event.target.value});
  }

  handleChangeR(event) {
  this.setState({valueR: event.target.value, valueC: null, valueP: null});
  }
  handleChangeP(event) {
  this.setState({valueP: event.target.value, valueC: null, valueR: null});
  }
  handleChangeC(event) {
  this.setState({valueC: event.target.value, valueP: null, valueR: null});
  }

  componentDidMount(){
    loopVar = true;
  }

  render(){

    let rocketsPreSort;
    let rocketsSorted;
    let rocketsFilterArr;
    let payloadPreSort;
    let payloadSorted;
    let payloadFilterArr;
    let coresPreSort;
    let coresSorted;
    let coresFilterArr;

    if (this.props.allLaunches){
      rocketsPreSort = this.props.allLaunches.map(launch => launch.rocket.rocket_name);
      rocketsSorted = this.removeDuplicates(rocketsPreSort);
      rocketsFilterArr = rocketsSorted.map(rocket => <option value={rocket}>{rocket}</option>)

      payloadPreSort = this.props.allLaunches.map(launch => launch.rocket.second_stage.payloads[0].payload_type);
      payloadSorted = this.removeDuplicates(payloadPreSort);
      payloadFilterArr = payloadSorted.map(payload => <option value={payload}>{payload}</option>)

      coresPreSort = this.props.allLaunches.map(launch => launch.rocket.first_stage.cores[0].core_serial);
      coresSorted = this.removeDuplicates(coresPreSort);
      coresFilterArr = coresSorted.map(cores => <option value={cores}>{cores}</option>)
    } else{
      rocketsFilterArr = <option>loading</option>
      payloadFilterArr = <option>loading</option>
      coresFilterArr = <option>loading</option>
    }

    if (this.state.value){
      this.props.setStaticFilter(this.state.value);
      this.setState({value: null})
    }else if (this.state.value === 'na') {
      this.props.unsetStaticFilter();
      this.setState({value: null});
      console.log('Im looping!');
    }else if (this.state.valueC){
      this.props.setDynamicFilter(this.state.valueC, 'core');
      this.setState({valueR: null, valueP: null, valueC: null});
    }else if (this.state.valueP){
      this.props.setDynamicFilter(this.state.valueP, 'payload');
      this.setState({valueR: null, valueP: null, valueC: null});
    }else if (this.state.valueR){
      this.props.setDynamicFilter(this.state.valueR, 'rocket');
      this.setState({valueR: null, valueP: null, valueC: null});
    }else if (this.state.valueC === 'na'||this.state.valueP === 'na'||this.state.valueR === 'na'){
      this.props.unsetDynamicFilter();
      this.setState({valueR: null, valueP: null, valueC: null})
    }


    return(
      <div id="filters">
        <p>Launch Catalogue</p>
        <span>Filter by:</span>
        <select name="success" value={this.state.value} onChange={this.handleChange}>
          <option value="na">-</option>
          <option value="successful">Successful</option>
          <option value="unsuccessful">Unsuccessful</option>
        </select>
        <select name="time" value={this.state.value} onChange={this.handleChange}>
          <option value="na">-</option>
          <option value="past">Past</option>
          <option value="future">Future</option>
        </select>
        <select name="rocketName" value={this.state.valueR} onChange={this.handleChangeR}>
          <option value="na">-</option>
          {rocketsFilterArr}
        </select>
        <select name="payloadName" value={this.state.valueP} onChange={this.handleChangeP}>
          <option value="na">-</option>
          {payloadFilterArr}
        </select>
        <select name="coresName" value={this.state.valueC} onChange={this.handleChangeC}>
          <option value="na">-</option>
          {coresFilterArr}
        </select>
      </div>
    )
  }
}

export default Filters;
