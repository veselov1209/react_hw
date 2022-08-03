import React from 'react';
import Slider from './Components/Slider';
import Controller from './Components/Slider/Controller';
import images from './Components/Slider/images.json'



export default function App() {
  return (
    <Slider  images={images}/>
  )
}
