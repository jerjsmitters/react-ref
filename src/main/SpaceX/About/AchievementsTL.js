import React, {Component} from 'react';
import AchievementTLUnit from './AchievementTLUnit.js';
import AchievementUnit from './AchievementUnit.js';
import Slider from "react-slick";
import ReactModal from 'react-modal';



class AchievementsTL extends Component{
  constructor() {
      super();
      this.state = {
        showModal: false
      };

      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }

  handleOpenModal(id) {
    this.setState({activeModal: id},
      this.setState({showModal: true})
    )
  }

  handleCloseModal() {
    this.setState({modalActive: null});
    this.setState({showModal: false});
  }


  render(){
    let achieveArray;
    let achieveArrayFull;
    if (this.props.achievements){
      achieveArray = this.props.achievements.map(achievement =>
        <AchievementTLUnit key = {achievement.id}
                      id = {achievement.id}
                      title = {achievement.title}
                      utxDate = {achievement.event_date_utc}
                      openModal = {this.handleOpenModal}/>
                    );
      achieveArrayFull = this.props.achievements.map(achievement =>
          <AchievementUnit key = {achievement.id}
                        title = {achievement.title}
                        utxDate = {achievement.event_date_utc}
                        details = {achievement.details}
                        flightNumber = {achievement.flight_number}
                        wiki = {achievement.links.wikipedia}
                        guardian = {achievement.links.article}
                        reddit ={achievement.links.reddit}/>
                      );
                  } else{
                      achieveArray=<h1>Please wait...</h1>;
                      achieveArrayFull=<h1>Please wait...</h1>;
                    }

    const settings = {
         dots: true,
         draggable: true,
         speed: 800,
         slidesToShow: 8,
         slidesToScroll:8,
         edgeFriction: 0,
         rtl: true,
         infinite: false,
         arrows: false,
       };

    return(
      <div id="achCont">
        <h1>Company Achievements</h1>
        <div id="timelineCont">
          <Slider {...settings}>
            {achieveArray}
          </Slider>
          <ReactModal isOpen={this.state.showModal

                              }>
            {achieveArrayFull[this.state.activeModal]}
            <button id ="closeModalButton" onClick={this.handleCloseModal}>Close Modal</button>
          </ReactModal>
        </div>
      </div>
    )
  }
}

export default AchievementsTL;
