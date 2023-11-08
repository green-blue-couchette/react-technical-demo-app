import React from 'react'

export default function AnimalPhotoFrame({isVisible, animalNumber}) {

    let animalPicture = null;   // The HTML img will go here
    let animalName = null;         // Name of animal will go here

    if(animalNumber == 1){          // elephant cub
        animalPicture =
        <img src="https://images5.alphacoders.com/342/342827.jpg" alt="Elephant cub" width="500"></img>

        animalName = "An elephant cub";
    }
    else if (animalNumber == 2){    // gazelle
        animalPicture =
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Thompson_gazelle.jpg" alt="Gazelle" width="500"></img>

        animalName = "A gazelle";
    }
    else if (animalNumber == 3){    // lion
        animalPicture =
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Male_Lion_on_Rock.jpg" alt="Lion" width="500"></img>;

        animalName = "A lion";
    }
    else{   // fallback case, placeholder photo
        animalPicture =
        <img src="https://www.clipartqueen.com/image-files/animal-silhouette-tiger-big.jpg" alt="Placeholder photo - silhouette of an animal" width="500"></img>;
    }

    if(isVisible)
    {
        return(
            <>
                <div>{animalPicture}</div>
                <label>{animalName}</label>
            </>
        );
    }
  
}
