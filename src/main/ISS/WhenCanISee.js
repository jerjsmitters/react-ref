import React, {Component} from 'react';
import ISSTimes from './ISSTimes';
import 'cors-anywhere';

class WhenCanISee extends Component{
  constructor(){
    super();
    this.state = {
                    house: '',
                    street: '',
                    city: '',
                    postcode: '',
                    country: '',
                    submitted: false, //prevents update running before submission
                    latlong: '',
                    timearray: '',
                    showing: false, //prevents constinuous looping
                    updateComplete: false //forces ISSTimes to wait for API data before rendering
                  };

    this.handleChangeHouse = this.handleChangeHouse.bind(this);
    this.handleChangeStreet = this.handleChangeStreet.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangePostcode = this.handleChangePostcode.bind(this);
    this.handleChangeCountry = this.handleChangeCountry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChangeHouse(e){
    this.setState({house: e.target.value})
  }

  handleChangeStreet(e){
    this.setState({street: e.target.value})
  }

  handleChangeCity(e){
    this.setState({city: e.target.value})
  }

  handleChangePostcode(e){
    this.setState({postcode: e.target.value})
  }
//
  handleChangeCountry(e){
    this.setState({country: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    let formData = this.state;
    let queryFormData = formData;
    delete queryFormData.showing;
    delete queryFormData.submitted;
    delete queryFormData.updateComplete;
    for (let key in queryFormData){
      queryFormData[key] = formData[key].replace(" ", "+")
    }
    this.setState({SubmittedData: queryFormData}, ()=>{
      return(this.setState({submitted: true}, ()=>{
        return(this.setState({house: '', street: '', city: '', postcode: '', country:''}))
      }))
    });
  }

  componentDidUpdate(){
    if (this.state.submitted && !this.state.showing){
      this.setState({showing: true});
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.SubmittedData.house.toString()}+${this.state.SubmittedData.street.toString()}%2C+${this.state.SubmittedData.city.toString()}%2C+${this.state.SubmittedData.postcode.toString()}%2C+${this.state.SubmittedData.country.toString()}&format=json&key=AIzaSyDh_B-mkxNrPY3hyP3F_QQHcQgXn0AHyXs`)
      .then(res=>res.json())
      .then(data => {console.log(data);
        return this.setState({latlong: {lat: data.results[0].geometry.location.lat, long: data.results[0].geometry.location.lng}}, ()=>{
          fetch(`https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=${this.state.latlong.lat}&lon=${this.state.latlong.long}`)
          .then(res=>res.json())
          .then(data=> {console.log(data);
            return this.setState({timearray: data.response}, ()=> this.setState({updateComplete:true})
            )
          })
        })
      })
      .catch((err)=>{console.log(err)})
    }
  }

  renderTimes(){ //Generates ISS flyover time components
    if (this.state.updateComplete) { return(
      this.state.timearray.map(entry =>
        <ISSTimes
          beginTime={entry.risetime}
          duration={entry.duration}
          key = {this.state.timearray.indexOf(entry)} />
      )
    )} else {
      return null
    }
  }



  render() {
    return(
      <div id="whenCanISee">
        <h2>When can I see it?</h2>
        <form>
          <p>Please enter your address. Feel free to only leave some fields blank (within reason, don't just type in your country).</p>
          <label>House number</label>
          <input
              type="text"
              value={this.state.house}
              onChange={this.handleChangeHouse} />
              <label>Street</label>
          <input
              type="text"
              value={this.state.street}
              onChange={this.handleChangeStreet} />
          <label>City</label>
          <input
            type="text"
            value={this.state.city}
            onChange={this.handleChangeCity} />
          <label>Postcode</label>
          <input
            type="text"
            value={this.state.postcode}
            onChange={this.handleChangePostcode} />
          <label>Country</label>
          <input
            type="text"
            value={this.state.country}
            onChange={this.handleChangeCountry} />
          <button onClick = {e => this.handleSubmit(e)}>Submit</button>
          <ul>{this.renderTimes()}</ul>
        </form>
      </div>
    )
  }
}

export default WhenCanISee;
