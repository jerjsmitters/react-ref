import React, { Component } from "react";

import Spaceman from './../img/space-man.png'
const Header = () => {
  return (
    <div id="headerContainer">
      <h1 id = 'headerMain'>Appstronaut <br/> <img src={Spaceman} id="spaceman"/></h1>
      <h3 id="headerSecondary">An ongoing tale of cosmic exploration.</h3>
    </div>
  )
}

export default Header;
