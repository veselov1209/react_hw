import React, { Component } from 'react';
import Stopwatch from './Components/Stopwatch';
import Timer from './Components/Timer';
import styles from './index.css'


export default class App extends Component {
  render() {
    return (
      <div className='timerWrapper'>
        <Timer />
        <Stopwatch />
      </div>
      
    )
  }
}
