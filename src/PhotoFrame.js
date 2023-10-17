import React from 'react'

export default function PhotoFrame({isVisible, animalNumber}) {

    let animalPicture = null;
    let message = null;

    if(animalNumber == 1){          // elephant cub
        animalPicture =
        <div>
            <img src="https://images5.alphacoders.com/342/342827.jpg" alt="Elephant calf" width="500"></img>
        </div>;

        message = <label>An elephant cub</label>;
    }
    else if (animalNumber == 2){    // gazelle
        animalPicture =
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Thompson_gazelle.jpg" alt="Gazelle" width="500"></img>
        </div>;

        message = <label>A gazelle</label>;
    }
    else if (animalNumber == 3){    // lion
        animalPicture =
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Male_Lion_on_Rock.jpg" alt="Lion" width="500"></img>
        </div>;

        message = <label>A lion</label>;
    }
    else{   // fallback case, placeholder photo
        animalPicture =
        <div>
            <img src="https://www.clipartqueen.com/image-files/animal-silhouette-tiger-big.jpg" alt="Placeholder photo - silhouette of an animal" width="500"></img>
        </div>
    }

    if(isVisible)
    {
        return(
            <>
            {animalPicture}
            {message}
            </>
        );
    }

    return(
        <div></div>
    );
  
}
