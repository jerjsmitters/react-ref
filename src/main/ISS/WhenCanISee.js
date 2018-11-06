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
                    unsubmitted:'true'
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

  queryStringify(obj){
    obj.house.replace(" ", "+");
    obj.street.replace(" ", "+");
    obj.city.replace(" ", "+");
    obj.postcode.replace(" ", "+");
    obj.country.replace(" ", "+");
  }

  handleSubmit(e){
    let formData = this.state;
    this.queryStringify(formData);
    this.setState({SubmittedData: formData});
    this.setState({unsubmitted: false});
    this.setState({house: '', street: '', city: '', postcode: '', country:''})
    e.preventDefault();
    // fetch(`https://api.opencagedata.com/geocode/v1/json?q=${this.state.SubmittedData.house}
    //                                                       +${this.state.SubmittedData.street}%2C
    //                                                       +${this.state.SubmittedData.city}%2C
    //                                                       +${this.state.SubmittedData.postcode}%2C
    //                                                       +${this.state.SubmittedData.country}&key=4bce3196ed394283829ac362c59f8932`)
    // .then(res=>res.json())
    // .then(res=> console.log(res.results[0].geometry));
  }


  render() {
    return(
      <div id="whenCanISee">
        <h2>When can I see it?</h2>
        <form>
          <p>Please enter your address. Feel free to only leave some fields blank (within reason)</p>
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
          <WhenData unsubmitted={this.state.unsubmitted} locData={this.state.SubmittedData}/>

        </form>
      </div>
    )
  }
}

export default WhenCanISee;
