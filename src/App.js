import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    x: 0,
    y: 0,
    ar: [
      // { time: 1510, x: 0, y: 0 },
      // { time: 1610, x: 10, y: 10 },
      // { time: 1520, x: 20, y: 20 }
    ],
    ar2: []
  };

  handleClick = e => {
    let now = new Date();
    let clock = now.getHours() + ":" + now.getMinutes();
    // this.setState({ x: e.pageX, y: e.pageY });
    this.setState({
      ar: [
        ...this.state.ar,
        { time: clock, x: e.pageX, y: e.pageY, t: "click" }
      ],
      ar2: [
        ...this.state.ar2,
        <div
          className="spot"
          style={{ left: `${e.pageX - 10}px`, top: `${e.pageY - 10}px` }}
        >
          x
        </div>
      ]
    });
  };

  touchTrack = (e, x) => {
    let now = new Date();
    let clock = now.getHours() + ":" + now.getMinutes();
    // this.setState({ x: e.pageX, y: e.pageY });
    this.setState({
      ar: [
        ...this.state.ar,
        {
          time: clock,
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          t: [x]
        }
      ],
      ar2: [
        ...this.state.ar2,
        <div
          className="spot"
          style={{ left: `${e.pageX - 10}px`, top: `${e.pageY - 10}px` }}
        >
          x
        </div>
      ]
    });
  };

  displayList = () => {
    let list = this.state.ar.map((z, i) => (
      <li key={i}>
        {i}. time: {z.time} x: {z.x} Y: {z.y} trigger: {z.t}
      </li>
    ));
    return list;
  };

  //   displaySpot = () => {
  // let list = this.state.ar2.map((z,i) =>  )

  //   }

  render() {
    return (
      <div
        onClick={e => {
          this.handleClick(e);
        }}
        onTouchStart={event => {
          this.touchTrack(event, "touch start");
        }}
        onTouchMove={event => {
          this.touchTrack(event, "touch move");
        }}
        className="main"
      >
        {this.state.ar2}
        <div className="list">
          <ul>{this.displayList()}</ul>
        </div>
      </div>
    );
  }
}

export default App;
