import React, {useState, useEffect} from 'react';
import loading_spinner from '../assets/loading-spinner.gif';

export default function LargeImage({imageSrc, width, alt}) {

    const [imageHasLoaded, setImageHasLoaded] = useState(false);
    /** Case 1 (default): Image has not yet loaded, display spinner
     *  Case 2: Image has loaded. Hide spinner, show image.
     *  Case 3 (same as Case 1): Image url changed; new image has to be loaded, display spinner.
     */

    /**If the imageSrc has changed, that means a new image has to be retrieved...
     * So show a spinner until the new pic has fully loaded
     */    
    useEffect(() => {
        setImageHasLoaded(false);
    }, [imageSrc]);

  return (
    <div style={{textAlign: "center"}}>
        <img src={loading_spinner}
             alt="loading"
             style={{display: imageHasLoaded? "none" : ""}}>
        </img>
        
        <img src={imageSrc}
             alt={alt}
             width={width}
             onLoad={() => setImageHasLoaded(true)}
             style={{display: imageHasLoaded? "" : "none"}}>
        </img>
    </div>
  )
}
