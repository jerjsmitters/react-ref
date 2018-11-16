import React from 'react';



const LatestLaunch = (props) => {

  if(props.latestLaunch){
    return(
      <div id="latestLaunch">
        <p>Latest Launch</p>
        <p>Flight #{props.latestLaunch.flight_number}: {props.latestLaunch.mission_name}</p>
        <p className="launchTime">{props.latestLaunch.launch_date_utc}</p>
        <ul>
          <li>Mission Success: {props.latestLaunch.launch_success.toString()}</li>
          <li>Rocket: {props.latestLaunch.rocket.rocket_name}</li>
          <li>Payloads: <ul>{props.payloadPopulator(props.latestLaunch.rocket.second_stage.payloads)}</ul></li>
          <li>Cores: <ul>{props.corePopulator(props.latestLaunch.rocket.first_stage.cores)}</ul></li>
          <li>Recovered: {props.latestLaunch.rocket.fairings.recovered.toString()} Attempted to recover: {props.latestLaunch.rocket.fairings.recovery_attempt.toString()}</li>
          <li>Launch site:{props.latestLaunch.launch_site.site_name}</li>
          <li>{props.latestLaunch.details}</li>
          <li>Other resources:
            <ul>
              <li><a href={props.latestLaunch.links.wikipedia}>Mission Wiki</a></li>
              <li><a href={props.latestLaunch.links.article_link}>Article</a></li>
              <li><a href={props.latestLaunch.telemetry.flight_club}>3D flight path</a></li>
              <li><a href={props.latestLaunch.links.video_link}>Video of launch</a></li>
              <li>Flickr: {props.imagePopulator(props.latestLaunch.links.flickr_images)} </li>
              <li>Reddit: <a href={props.latestLaunch.links.reddit_campaign}>Campaign</a> <a href={props.latestLaunch.links.reddit_launch}>Launch</a><br/>
                          <a href={props.latestLaunch.links.reddit_recovery}>Recovery (if applicable)</a> <a href={props.latestLaunch.links.reddit_media}>More media</a></li>

            </ul>
          </li>
        </ul>
      </div>
    )
  }else{
    return(<h1>Loading...</h1>)
  }
}

export default LatestLaunch;
