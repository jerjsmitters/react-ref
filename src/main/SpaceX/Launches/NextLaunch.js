import React from 'react';

const NextLaunch = (props) => {

    if(props.nextLaunch){
      return(
        <div id="nextLaunch">
          <p>Next Launch</p>
          <p>Launch #{props.nextLaunch.flight_number}: {props.nextLaunch.mission_name}</p>
          <p className="launchTime">{props.nextLaunch.launch_date_utc}</p>
          <ul>
            <li>Rocket: {props.nextLaunch.rocket.rocket_name}</li>
            <li>Payloads: <ul>{props.payloadPopulator(props.nextLaunch.rocket.second_stage.payloads)}</ul></li>
            <li>Cores: <ul>{props.corePopulator(props.nextLaunch.rocket.first_stage.cores)}</ul></li>
            <li>Launch site:{props.nextLaunch.launch_site.site_name}</li>
            <li>{props.nextLaunch.details}</li>
            <li>Other resources:
              <ul>
                <li><a href={props.nextLaunch.links.wikipedia}>Mission Wiki</a></li>
                <li><a href={props.nextLaunch.links.video_link}>Video of launch (if available)</a></li>
                <li><a href={props.nextLaunch.links.presskit}>Press kit</a></li>
                <li>Reddit: <a href={props.nextLaunch.links.reddit_campaign}>Campaign</a> <a href={props.nextLaunch.links.reddit_launch}>Launch (if available)</a></li>
              </ul>
            </li>
          </ul>
        </div>
      )
    }else{
      return(<h1>Loading...</h1>)
    }
}

export default NextLaunch;
