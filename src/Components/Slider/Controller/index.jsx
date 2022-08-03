import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types'
import styles from './Controller.module.scss';

export default function Controller(props) {
    const {setPrevSlide, setNextSlide} = props;
    const [isRunning, setIsRunning] = useState(false);
    const [slideShowId, setSlideShowId] = useState(null);
    const [delay, setDelay] = useState(1000);

    

    const start = () => {
        if(!isRunning) {
            setIsRunning(true);
            setSlideShowId(setInterval(setNextSlide, delay));
        }
    }
    const stop = () => {
       if(isRunning) {
            clearInterval(slideShowId);
            setIsRunning(false);
       }
    }

    const delayHandler = (e) => {
        setDelay(e.target.value);
    }

    return (
        <div className={styles.container}>
            <div className={styles.container__navigation}>
                <button onClick={setPrevSlide}>{'<'}</button>
                <button onClick={setNextSlide}>{'>'}</button>
            </div>
            <div className='styles.container__worked'>
                <p>Slideshow</p>
                <button onClick={start}>start</button>
                <button onClick={stop}>stop</button>
                <p>Delay: {delay}</p>
                <input name="delay" type="range" min={500} max={3000} step={100} value={delay} onChange={delayHandler}/>

            </div>
        </div>
  )
}

Controller.propTypes = {
    setPrevSlide: PropTypes.func.isRequired,
    setNextSlide: PropTypes.func.isRequired
  }



