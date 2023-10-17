import React from 'react'

export default function PhotoFrame({isVisible, animalNumber}) {

    if(isVisible)
    {
        if(animalNumber == 1)
        // display elephant cub
        return (
            <>
                <div>
                    <img src="https://images5.alphacoders.com/342/342827.jpg" alt="Elephant calf" width="500"></img>
                </div>
                <label>An elephant cub!</label>
            </>
        );

        if (animalNumber == 2)
        // display gazelle
        return (
            <>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Thompson_gazelle.jpg" alt="Gazelle" width="500"></img>
                </div>
                <label>A gazelle!</label>
            </>
        );

        if (animalNumber == 3)
        // display lion
        return (
            <>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Male_Lion_on_Rock.jpg" alt="Lion" width="500"></img>
                </div>
                <label>A lion!</label>
            </>
        );

        // Fallback case, display a placeholder photo...
        // https://www.clipartqueen.com/image-files/animal-silhouette-tiger-big.jpg
        return (
            <>
                <div>
                    <img src="https://www.clipartqueen.com/image-files/animal-silhouette-tiger-big.jpg" alt="Placeholder photo - silhouette of an animal" width="500"></img>
                </div>
                <label>Invalid number!</label>
            </>
        );
    }

    return(
        <div></div>
    );
  
}
