import React from 'react';

const AboutSpaceX = (props) => {
  return(
    <div id="aboutSpaceX" className="component">
      <h1>Who are SpaceX?</h1>
      <p>Space Exploration Technologies Corp., or SpaceX, is a private American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by entrepreneur Elon Musk with the goal of reducing space transportation costs and enabling the colonization of Mars.SpaceX has since developed the Falcon launch vehicle family and the Dragon spacecraft family, both of which currently deliver payloads into Earth orbit.</p>
      <ul>
        <li id="statsTitle"><h2>Company statistics:</h2></li>
        <li>CEO: {props.info.ceo} </li>
        <li>CTO: {props.info.cto}</li>
        <li>Propulsion CTO: {props.info.cto_propulsion}</li>
        <li>Employees: {props.info.employees}</li>
        <li>Current Vehicles: {props.info.vehicles}</li>
        <li>Current Launch Site(s): {props.info.launch_sites}</li>
        <li>Current Test Site(s): {props.info.test_sites}</li>
        <li>Company Net Worth: ${props.info.valuation}</li>
      </ul>
    </div>)
}

export default AboutSpaceX;
