import React, { Component } from 'react';
import styles from './Stopwatch.module.css';
const TimeFormat = require('hh-mm-ss');

export default class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
       start: 0,
    };
    this.timerId = null;
    this.styleText = 'invisible';
  }
  
  timer = () => {
    this.setState({start: this.state.start + 1});
    if(this.state.start == this.props.time-1){
      this.setState({start: 0});
      this.timerStop();
      this.styleText = "active";
    }
  }
  
  timerStart = () => {
    if(!this.timerId){
      this.timerId = setInterval(this.timer,1000);
      this.styleText = 'invisible'
    }
  }

  timerStop = () => {
    clearInterval(this.timerId);
    this.timerId = null;
  }
  
  timerClear = () => {
    clearInterval(this.timerId);
    this.timerId = null;
    this.setState({start:0})
    this.styleText = 'invisible';
  }

  componentDidMount(){
    this.timerStart()
  }
  
  render() {
    return (
      <div className={styles.container}>
        <h2>Stopwatch</h2>
        <h1>{TimeFormat.fromS(this.state.start, 'hh:mm:ss')}</h1>
        <div>
          <button onClick={this.timerStart}>Start</button>
          <button onClick={this.timerStop}>Stop</button>
          <button onClick={this.timerClear} >Clear</button>
        </div>  
        <div className={styles.textContainer}>
          <p className={styles[this.styleText]}>Game Over</p>
        </div>
      </div>
    )
  }
}

Stopwatch.defaultProps = {
  time:10,
};