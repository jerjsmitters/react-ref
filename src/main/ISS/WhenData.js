import React, {Component} from 'react';
class WhenData extends Component {

  state={repeat:true}

  componentDidUpdate(){
      if (this.state.repeat && this.props.latlong.long && this.props.latlong.lat){
      fetch(`https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=${this.props.latlong.lat}&lon=${this.props.latlong.long}`)
      .then( res => res.json())
      .then( res => this.setState({passingTimes: res.response}))
      .then( res => this.setState({repeat: false}))
    }
  }


  render() {
    if (!this.props.unsubmitted){ //Stops page from rendering until submission
      const passingTimes = this.state.passingTimes;
      const timeList = passingTimes.map((i) => {
        return '<li>'+i.riseTime+'</li>'
      })
      const durList = passingTimes.map((i) => {
        return '<li>'+i.duration+'</li>'
      })

      return(
        <div>
          <p>Lat: {this.props.latlong.lat} Long: {this.props.latlong.long}</p>
          <p>Times</p>
        </div>
      )
    }
    else{
      return(
        null
      )
    }
  }
}

export default WhenData;
