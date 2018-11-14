import React from 'react';

const MissionUnit = (props) => {

  if (props){
      let payloadArr = props.payload_ids.map(payload => {
        return (<li>{payload}</li>)
      })
      let manuArray = props.manufacturers.map(manu => {
        return(<li>{manu}</li>)
      })

    return(
      <ul>
        <li><h3>{props.mission_name}</h3></li>
        <li>Manufacturer(s)
          <ul>
            {manuArray}
          </ul>
        </li>
        <li>Payload(s)
          <ul>
            {payloadArr}
          </ul>
        </li>
        <li>{props.description}</li>
        <li>Read more about it here: {props.wikipedia}</li>

        <li>Website: {props.website}</li>
        <li>Twitter: {props.twitter}</li>
      </ul>
    )
  } else {
    return(
      <h1>Please wait...</h1>
    )
  }
}

export default MissionUnit;
