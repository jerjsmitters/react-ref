import React from 'react';



const LatestLaunch = (props) => {

  //Summary:
  //Description
  //When did it happen?

  //What did it use to get up there?
  //How many times had it been used before?
  //Did it take off?
  //-->no
  //  How long did it last?
  //  What happened?
  //-->yes
  //  Did they want to land it?
  //  -->yes
//     did they manage to?
//      -->yes
//        was it reused?
//        how did it land?

//What did it bring up there? (card for each)
//How heavy was it?
//Was it reused?

//Was they try to recover the stuff that held it together?
//-->yes
//  did they succeed?

//reddit campaign, launch, recovery, media
//presskit, article, wikipedia
//video link, dropdown of flickr items

  if(props.latestLaunch){
    return(
      <div id="latestLaunch">
        <h1>Latest Launch</h1>
        <h2>Flight #{props.latestLaunch.flight_number}: {props.latestLaunch.mission_name}</h2>
        <p className="launchTime">({props.latestLaunch.launch_date_utc.substring(11,16)} {props.latestLaunch.launch_date_utc.substring(8,10)}/{props.latestLaunch.launch_date_utc.substring(5,7)}/{props.latestLaunch.launch_date_utc.substring(0,4)})</p>
        <ul>
          <li>Description: <br /> {props.latestLaunch.details}</li>
          <li>Launch Success: {props.latestLaunch.launch_success.toString()}</li>
          <li>Rocket: {props.latestLaunch.rocket.rocket_name}</li>
          <li>Propulsion: {props.latestLaunch.rocket.first_stage.cores[0].core_serial}</li>
          <li>Payloads: <ul>{props.payloadPopulator(props.latestLaunch.rocket.second_stage.payloads)}</ul></li>
          <li><h4>Resources:</h4>
            <ul>
            {(props.latestLaunch.links.reddit_campaign || props.latestLaunch.links.reddit_launch || props.latestLaunch.links.reddit_recovery || props.latestLaunch.links.reddit_media) ? (
              <li id="discussionLinks">
                Discussion:{' '}
                {(props.latestLaunch.links.reddit_campaign) ? (<a href={props.latestLaunch.links.reddit_campaign}>Campaign</a>) : null}
                {(props.latestLaunch.links.reddit_launch) ? (<a href={props.latestLaunch.links.reddit_launch}>Launch</a>) : null}
                {(props.latestLaunch.links.reddit_recovery) ? (<a href={props.latestLaunch.links.reddit_recovery}>Recovery</a>) : null}
                {(props.latestLaunch.links.reddit_media) ? (<a href={props.latestLaunch.links.reddit_media}>Media</a>) : null}
                </li>
            ) : null}

              {(props.latestLaunch.links.article_link || props.latestLaunch.links.wikipedia || props.latestLaunch.links.presskit || props.latestLaunch.telemetry.flight_club) ? (
                <li id="infoLinks">
                Launch Info:{' '}
                  {(props.latestLaunch.links.article_link) ? (<a href={props.latestLaunch.links.article_link}>Article</a>) : null}
                  {(props.latestLaunch.links.wikipedia) ? (<a href={props.latestLaunch.links.wikipedia}>Wikipedia</a>) : null}
                  {(props.latestLaunch.links.presskit) ? (<a href={props.latestLaunch.links.presskit}>Press Kit</a>) : null}
                  {(props.latestLaunch.telemetry.flight_club) ? (<a href={props.latestLaunch.telemetry.flight_club}>Flight Path</a>) : null}
                </li>
              ) : null}

            {(props.latestLaunch.links.flickr_images[0] || props.latestLaunch.links.video_link) ?
            (<li id="visLinks">
              Images:{' '}
                {(props.latestLaunch.links.flickr_images[0]) ? (props.imagePopulator(props.latestLaunch.links.flickr_images)) : null}
                {(props.latestLaunch.links.video_link && props.latestLaunch.links.flickr_images[0]) ? (' ') : null}
                {(props.latestLaunch.links.video_link) ? (<a href={props.latestLaunch.links.video_link}>Video</a>) : null}
              </li>
            ) : null}

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
