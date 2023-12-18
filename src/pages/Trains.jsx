import React, {useState} from 'react'
import TrainAnnouncementPanel from '../child components/TrainAnnouncementPanel';
import LargeImage from '../child components/LargeImage';

import '../stylesheets/Trains.css';

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
    <div className='trains-page'>

      <div className='page-header'>
        <h1>Trains page</h1>

        <p className='disclaimer'>
          Note: This site is not affiliated with, nor endorsed by, any of the railway operators mentioned.
          All trademarks, images, and other such materials belong to their respective owners.
        </p>
      </div>
      
      <div className='page-body'>
        {/** Picture of selected train type */}
        <div className='trains-page-content-big'>
          <LargeImage
            imageSrc={trainsPageImages.trainImage} 
            stylingID="large-image-component-on-trains-page-no-1"
            imgWidth="500px"
            alt="Romanian train"
            />

          <label>
            Picture owner: {trainsPageImages.credits.owner},
            <a href={trainsPageImages.credits.sourcePage} target="_blank" rel="noopener noreferrer">
              {trainsPageImages.credits.displayedURL}
            </a>
          </label>
        </div>
          
        <div className='trains-page-content-big'>
          <TrainAnnouncementPanel imagesState={trainsPageImages} setImagesState={setTrainsPageImages}/>
        </div>

        {/** Picture of selected railway operator */}
        <div className='trains-page-content-small'>
          <img src={trainsPageImages.railwayOperatorImage} alt="Railway operator"></img>
        </div>

      </div>
      
    </div>
  )
}
