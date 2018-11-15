import React from 'react';
import {Link} from 'react-router-dom';

const SpaceXNav = () => {
  return(
    <div id="spaceXNav">
      <Link to="/spacex/about">About</Link>
      <Link to="/spacex/launches">Launches</Link>
      <Link to="/spacex/vehicles">Vehicles</Link>
      <Link to="/spacex/tech">Tech</Link>
    </div>
  )
}

export default SpaceXNav;
