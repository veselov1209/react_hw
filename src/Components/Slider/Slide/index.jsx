import React from 'react';
import PropTypes from 'prop-types';
import { FullScreen, useFullScreenHandle } from "react-full-screen";



export default function Slide(props) {
  const {images, currentImageId} = props; 
  const handle = useFullScreenHandle();
  return (
    <div>
      <FullScreen handle={handle}>
        <img src={images[currentImageId]} alt="photo" />
      </FullScreen>
      <button onClick={handle.enter}>Fullscreen</button>
    </div>
  )
}


// Slide.propTypes = {
//   images: PropTypes.array.isRequired,
//   currentImageId: PropTypes.number.isRequired
// }
