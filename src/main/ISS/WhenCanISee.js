import React, {Component} from 'react';
import WhenData from './WhenData';

class WhenCanISee extends Component{
  constructor(){
    super();
    this.state = {
                    house: '',
                    street: '',
                    city: '',
                    postcode: '',
                    country: '',
                    unsubmitted:'true',
                    latlong: '',
                    oneTime: 'true'
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
    let queryFormData = formData; //Converting to query string format
    for (let key in queryFormData){
      queryFormData[key] = formData[key].replace(" ", "+")
    }
    this.setState({SubmittedData: queryFormData});
    this.setState({unsubmitted: false});
    this.setState({house: '', street: '', city: '', postcode: '', country:''})
  }

  componentDidUpdate(){
    if (!this.state.unsubmitted && this.state.oneTime){
      fetch(`https://eu1.locationiq.com/v1/search.php?key=c0108f620d30b3&q=${this.state.SubmittedData.house.toString()}+${this.state.SubmittedData.street.toString()}%2C+${this.state.SubmittedData.city.toString()}%2C+${this.state.SubmittedData.postcode.toString()}%2C+${this.state.SubmittedData.country.toString()}&format=json`)

      .then(res=>res.json())
      .then(res=>this.setState({latlong: {lat: res[0].lat, long: res[0].lon}}));
      this.setState({oneTime: false});
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
          <WhenData unsubmitted={this.state.unsubmitted}
                    latlong={this.state.latlong}/>

        </form>
      </div>
    )
  }
}

export default WhenCanISee;
