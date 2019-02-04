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
      <div class="missionUnit">
        <button id="missionHomeBtn" onClick={()=>props.backButton()}>←</button>
        <ul>
          <li id="missionTitle"><h1>{props.mission_name}</h1>
            <span id="missionLinks">
              {(props.wikipedia) ? (<a href={props.wikipedia}>Wiki</a>) : null}
              {(props.twitter) ? (<a href={props.twitter}>Twitter</a>) : null}
              {(props.website) ? (<a href={props.website}>Mission Site</a>) : null}
            </span>
          </li>
          <li><h4>Manufacturer(s)</h4>
            <ul id="missionUnitManu">
              {manuArray}
            </ul>
          </li>
          <li><h4>Payload(s)</h4>
            <ul id="missionUnitPayload">
              {payloadArr}
            </ul>
          </li>
          <li id="missionUnitDescription">{props.description}</li>

        </ul>
      </div>
    )
  } else {
    return(
      <h1>Please wait...</h1>
    )
  }
}

export default MissionUnit;
