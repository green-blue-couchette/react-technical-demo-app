import React from 'react'
import TrainAnnouncementPanel from "./TrainAnnouncementPanel";
import './Pg2Trains.css';

export default function Pg2Trains() {

  return (
    <>
      <h1>Trains page</h1>

      {/** Picture of selected train type */}
      <div id="trainsPageContent">
        <img src="https://www.railpictures.net/images/d1/1/5/3/6153.1375617413.jpg" alt="Romanian train" width = "500"></img>
        <br></br>
        <label>Picture owner: Titel Costica, <a href="https://www.railpictures.net/photo/445941/" target="_blank" rel="noopener noreferrer">RailPictures.Net</a></label>
      </div>
        
      <div id="trainsPageContent">
        <TrainAnnouncementPanel/>
      </div>

      {/** Picture of selected railway operator */}
      <div id="trainsPageContent">
        <img src="https://upload.wikimedia.org/wikipedia/en/e/ee/CFR_Calatori.png"></img>
      </div>
    </>
  )
}
