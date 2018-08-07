import React from 'react';
import { render } from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      results: [],
      times: {
        milliseconds: 0,
        seconds: 0,
        minutes: 0,
      },
    };
  }

  start() {
    if (!this.state.running) {
      this.setState({
        running: true,
      });
      this.watch = setInterval(() => this.calculate(), 10);
    }
  }

  calculate() {
    this.setState((prevState) => {
      if (prevState.times.seconds >= 60) {
        return {
          times: {
            seconds: 0,
            milliseconds: prevState.times.milliseconds,
            minutes: prevState.times.minutes,
          },
        };
      }

      if (prevState.times.milliseconds >= 100) {
        return {
          times: {
            seconds: prevState.times.seconds + 1,
            milliseconds: 0,
            minutes: prevState.times.minutes,
          },
        };
      }

      return {
        times: {
          milliseconds: prevState.times.milliseconds + 1,
          seconds: prevState.times.seconds,
          minutes: prevState.times.minutes,
        },
      };
    });

  }

  stop() {
    this.setState({
      running: false,
    });
    clearInterval(this.watch);
  }

  reset() {
    this.setState({
      times: {
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      },
    });
  }

  addResult() {
    const result = this.state.results;

    this.setState({
      results: result.concat([ this.state.times ]),
    });
  }

  format(times) {
    return `${this.pad0(times.minutes)}:${this.pad0(times.seconds)}:${this.pad0(Math.floor(times.milliseconds))}`;
  }

  pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
      result = '0' + result;
    }
    return result;
  }

  render() {
    return (
      <div>
        <button onClick={() => this.start()}>Start</button>
        <button onClick={() => this.stop()}>Stop</button>
        <button onClick={() => this.reset()}>Reset</button>
        <button onClick={() => this.addResult()}>Add result</button>
        {this.format(this.state.times)}
        {this.state.results.map(result => <p>{JSON.stringify(result)}</p>)}
      </div>);
  }
}

export default Stopwatch;