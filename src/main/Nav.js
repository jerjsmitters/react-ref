import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
  return(

    <div id="nav">
      <Link to="/spacex/about">Who are SpaceX?</Link>
      <Link to="/spacex/launches">SpaceX Launches</Link>
      <Link to="/ISS">Where's the ISS?</Link>
    </div>
  )
}

export default Nav;
