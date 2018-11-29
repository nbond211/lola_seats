import React, { Component } from "react";
import "./Row.css";

class Row extends Component {

  render() {
    const { rowNumber, seats, seatLetters, selectedSeatId } = this.props;

    return (
      <div id="Row">
        <h1>{rowNumber}</h1>
      </div>
    );
  }
}

export default Row;
