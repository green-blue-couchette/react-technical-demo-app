import React, {useState} from 'react'
import TrainAnnouncementPanel from "./TrainAnnouncementPanel";
import './Pg2Trains.css';

export default function Pg2Trains() {

  const defaultTrainsPageImages = {
    trainImage: "", // "https://www.railpictures.net/images/d1/1/5/3/6153.1375617413.jpg",
    credits: {
      owner: "", // "Titel Costica",
      sourcePage: "", // "https://www.railpictures.net/photo/445941/",
      displayedURL: "" // "RailPictures.Net"
    },
    railwayOperatorImage: "https://upload.wikimedia.org/wikipedia/en/e/ee/CFR_Calatori.png"
  }
  
  const [trainsPageImages, setTrainsPageImages] = useState(defaultTrainsPageImages);

  return (
    <>
      <h1>Trains page</h1>

      {/** Picture of selected train type */}
      <div id="trainsPageContent">
        <img src={trainsPageImages.trainImage} alt="Romanian train" width = "500"></img>
        <br></br>
        <label>
          Picture owner: {trainsPageImages.credits.owner},
          <a href={trainsPageImages.credits.sourcePage} target="_blank" rel="noopener noreferrer">
            {trainsPageImages.credits.displayedURL}
          </a>
        </label>
      </div>
        
      <div id="trainsPageContent">
        <TrainAnnouncementPanel imagesState={trainsPageImages} setImagesState={setTrainsPageImages}/>
      </div>

      {/** Picture of selected railway operator */}
      <div id="trainsPageContent">
        <img src={trainsPageImages.railwayOperatorImage} alt="Railway operator"></img>
      </div>
    </>
  )
}
