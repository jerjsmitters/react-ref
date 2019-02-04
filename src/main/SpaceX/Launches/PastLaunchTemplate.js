import React from 'react';

const PastLaunchTemplate = (props) => {

  //Summary: Description
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
//presskit, article, wikipedia,
//video link, dropdown of flickr items,flightclub
  return(
  <div class="pastLaunchContainer" >
    <button id="displayLaunchReturnBtn" onClick={(()=>props.setInitState())}>←</button>
    <h1>Flight #{props.pl.flight_number}: {props.pl.mission_name}</h1>
    <div class="pastLaunchSummary">
      <h4>Launch Summary</h4>
      <p>
        When did it happen?: At {props.pl.launch_date_utc.substring(11,16)} on {props.pl.launch_date_utc.substring(8,10)}/{props.pl.launch_date_utc.substring(5,7)}/{props.pl.launch_date_utc.substring(0,4)} <br />
        Did it manage to take off? {(props.pl.launch_success) ? 'Yup!' : 'Nope!'}
        {(!props.pl.launch_success) ? <br /> : null}
        {(!props.pl.launch_success) ? ('What happened? '+props.pl.launch_failure_details.reason) : null}
        {(!props.pl.launch_success) ? <br /> : null}
        {(!props.pl.launch_success) ? ('How long did it last? '+props.pl.launch_failure_details.time+' seconds') : null}
        {(!props.pl.launch_success) ? <br /> : null}
        {(!props.pl.launch_success) ? ('How high did it get? ')+props.pl.launch_failure_details.altitude+' metres' : null} <br/>
        Official Description: {(props.pl.details) ? (props.pl.details) : 'None given by SpaceX!'}
      </p>
    </div>
    <div class ="pastLaunchPropulsion">
      <h4>Propulsion</h4>
      <p>
        What did it use to get up there? {props.pl.rocket.first_stage.cores[0].core_serial} Core <br />
        How many times had it been used before? {(props.pl.rocket.first_stage.cores[0].flight-1).toString()+' times'}<br />
        Did SpaceX want to land it? {(props.pl.rocket.first_stage.cores[0].landing_intent) ? ('Yup!') : ('Nope!')} <br />
        {(props.pl.rocket.first_stage.cores[0].landing_intent) ? <br /> : null}
        {(props.pl.rocket.first_stage.cores[0].landing_intent) ? ('What sort of landing was it supposed to do? '+props.pl.rocket.first_stage.cores[0].landing_type) : null}
        {(props.pl.rocket.first_stage.cores[0].landing_intent) ? <br /> : null}
        {(props.pl.rocket.first_stage.cores[0].landing_intent) ? ('Did they manage to land it? '+ ((props.pl.rocket.first_stage.cores[0].land_success) ? ('Yup!') : ('Nope!'))) : null}
        {(props.pl.rocket.first_stage.cores[0].landing_intent) ? <br /> : null}
        {(props.pl.rocket.first_stage.cores[0].land_success) ? ('Was it reused? '+(props.pl.rocket.first_stage.reused ? ('Yup!') : ('Nope!'))) : null}
      </p>
    </div>
    <div class="pastLaunchPayload">
      <h4>Payloads</h4>
      <ul>{props.payloadPopulator(props.pl.rocket.second_stage.payloads, true)}</ul>
    </div>

    {(props.pl.rocket.fairings) ? (<div class="pastLaunchFairings">
      <h4>Fairings: The stuff that held it all together</h4>
      <p>
        Did they try to recover it? {(props.pl.rocket.fairings.recovery_attempt) ? 'Yup!' : 'Nope!'} <br />
        {(props.pl.rocket.fairings.recovery_attempt) ? ('Did they succeed? '+(props.pl.rocket.fairings.recovery_attempt) ? 'Yup!' : 'Nope!') : null}
      </p>
    </div>) : null}
    <div class="pastLaunchMedia">
      <h4>Resources:</h4>
      {(props.pl.links.reddit_campaign || props.pl.links.reddit_launch || props.pl.links.reddit_recovery || props.pl.links.reddit_media) ? (
        <div id="discussionLinks">
          Discussion:{' '}
          {(props.pl.links.reddit_campaign) ? (<a href={props.pl.links.reddit_campaign}>Campaign</a>) : null}
          {(props.pl.links.reddit_launch) ? (<a href={props.pl.links.reddit_launch}>Launch</a>) : null}
          {(props.pl.links.reddit_recovery) ? (<a href={props.pl.links.reddit_recovery}>Recovery</a>) : null}
          {(props.pl.links.reddit_media) ? (<a href={props.pl.links.reddit_media}>Media</a>) : null}
          </div>
      ) : null}

        {(props.pl.links.article_link || props.pl.links.wikipedia || props.pl.links.presskit || props.pl.telemetry.flight_club) ? (
          <div id="infoLinks">
          Launch Info:{' '}
            {(props.pl.links.article_link) ? (<a href={props.pl.links.article_link}>Article</a>) : null}
            {(props.pl.links.wikipedia) ? (<a href={props.pl.links.wikipedia}>Wikipedia</a>) : null}
            {(props.pl.links.presskit) ? (<a href={props.pl.links.presskit}>Press Kit</a>) : null}
            {(props.pl.telemetry.flight_club) ? (<a href={props.pl.telemetry.flight_club}>Flight Path</a>) : null}
          </div>
        ) : null}

      {(props.pl.links.flickr_images[0] || props.pl.links.video_link) ?
      (<div id="visLinks">
        Launch Pics/Videos:{' '}
          {(props.pl.links.flickr_images[0]) ? ('Images:') : null}
          {(props.pl.links.flickr_images[0]) ? (props.imagePopulator(props.pl.links.flickr_images)) : null}
          {(props.pl.links.video_link && props.pl.links.flickr_images[0]) ? (' ') : null}
          {(props.pl.links.video_link) ? (<a href={props.pl.links.video_link}>Video</a>) : null}
        </div>
      ) : null}
    </div>
  </div>
  )
}

export default PastLaunchTemplate;
