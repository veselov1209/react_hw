import React from 'react';
import PropTypes from 'prop-types'
import Controller from './Controller';
import styles from './Slider.module.scss';
import { useState } from 'react';
import Slide from './Slide';



export default function Slider(props) {
    const [currentImageId, setCurrentImageId] = useState(0);
    const {images} = props;

    const setNextSlide = () => {
        setCurrentImageId((currentImageId) => currentImageId<images.length-1 ? currentImageId+1 : currentImageId = 0 )
    }

    const setPrevSlide = () => {
        if (currentImageId>0) {
            setCurrentImageId(currentImageId-1)
        } else {
            setCurrentImageId(images.length-1)
        }
    }


    return (
    <div className={styles.container}>       
        <Slide images={images} currentImageId={currentImageId} />
        <Controller setNextSlide={setNextSlide} setPrevSlide={setPrevSlide} currentImageId={currentImageId} images={images} setCurrentImageId={setCurrentImageId}/>
    </div>
  )
}

Slider.propTypes = {
    images: PropTypes.array.isRequired,
};

