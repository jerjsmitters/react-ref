import React from 'react';

const NextLaunch = (props) => {

    if(props.nextLaunch){
      return(
        <div id="nextLaunch">
          <h1>Next Launch</h1>
          <h2>Launch #{props.nextLaunch.flight_number}: {props.nextLaunch.mission_name}</h2>
          <p className="launchTime">({props.nextLaunch.launch_date_utc.substring(11,16)} {props.nextLaunch.launch_date_utc.substring(8,10)}/{props.nextLaunch.launch_date_utc.substring(5,7)}/{props.nextLaunch.launch_date_utc.substring(0,4)})</p>
          <ul>
            <li>Description: <br /> {props.nextLaunch.details}</li>
            <li>Rocket: {props.nextLaunch.rocket.rocket_name}</li>
            <li>Propulsion: {props.nextLaunch.rocket.first_stage.cores[0].core_serial}</li>
            <li>Payloads: <ul>{props.payloadPopulator(props.nextLaunch.rocket.second_stage.payloads)}</ul></li>
            <li><h4>Resources:</h4>
              <ul>

              {(props.nextLaunch.links.reddit_campaign || props.nextLaunch.links.reddit_launch || props.nextLaunch.links.reddit_recovery || props.nextLaunch.links.reddit_media) ? (
                <li id="discussionLinks">
                  Discussion:{' '}
                  {(props.nextLaunch.links.reddit_campaign) ? (<a href={props.nextLaunch.links.reddit_campaign}>Campaign</a>) : null}
                  {(props.nextLaunch.links.reddit_launch) ? (<a href={props.nextLaunch.links.reddit_launch}>Launch</a>) : null}
                  {(props.nextLaunch.links.reddit_recovery) ? (<a href={props.nextLaunch.links.reddit_recovery}>Recovery</a>) : null}
                  {(props.nextLaunch.links.reddit_media) ? (<a href={props.nextLaunch.links.reddit_media}>Media</a>) : null}
                </li>
              ) : 'No media to display yet!'}
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
