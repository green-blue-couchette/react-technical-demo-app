import React, {useState} from 'react'
import TrainAnnouncementPanel from "./TrainAnnouncementPanel";
import './Pg2Trains.css';

export default function Pg2Trains() {

  const defaultTrainsPageImages = {
    trainImage: "https://www.railpictures.net/images/d1/1/5/3/6153.1375617413.jpg",
    credits: {
      owner: "Titel Costica",
      sourcePage: "https://www.railpictures.net/photo/445941/",
      displayedURL: "RailPictures.Net"
    },
    railwayOperatorImage: "https://upload.wikimedia.org/wikipedia/en/e/ee/CFR_Calatori.png"
  }
  
  const [trainsPageImages, setTrainsPageImages] = useState(defaultTrainsPageImages);

  function handleOnClick(){
      
    setTrainsPageImages({
      ...trainsPageImages, // copy the old fields
      trainImage: "https://cdn.knd.ro/media/521/2942/1666/20172475/1/cat-costa-sa-mergi-intr-un-vagon-de-dormit-al-cfr-si-ce-conditii-ai.jpg", // But override this one
      credits: {
        ...trainsPageImages.credits, // copy the old fields
        owner: "Radioimpuls.ro", // but actually override all of them, hahahaha
        sourcePage: "https://www.radioimpuls.ro/cat-costa-sa-mergi-intr-un-vagon-de-dormit-al-cfr-si-ce-conditii-ai-20172475",
        displayedURL: "radioimpuls.ro"
      }
    }) 
  
  }

  return (
    <>
      <h1>Trains page</h1>

      <button onClick={()=>{handleOnClick(); console.log("clicked")}}>Change images!</button>

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
        <TrainAnnouncementPanel/>
      </div>

      {/** Picture of selected railway operator */}
      <div id="trainsPageContent">
        <img src={trainsPageImages.railwayOperatorImage}></img>
      </div>
    </>
  )
}
