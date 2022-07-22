import React, { Component } from 'react';
import styles from './Timer.module.css';
const TimeFormat = require('hh-mm-ss');

export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
       start: this.props.time,
    };
    this.timerId = null;
    this.styleText = 'invisible';
  }
  
  timer = () => {
    this.setState({start: this.state.start - 1});
    if(this.state.start == 1){
      this.setState({start:this.props.time});
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
    this.setState({start:this.props.time})
    this.styleText = 'invisible';
  }


  componentDidMount(){
    this.timerStart()
  }
  

  render() {
    return (
      <div className={styles.container}>
        <h2>Timer</h2>
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

Timer.defaultProps = {
  time:10,
};