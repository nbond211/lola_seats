import React, { Component } from "react";
import "./Cabin.css";
import Row from "../Row";

class Cabin extends Component {

  render() {
    const { cabinClass, seatLetters, rows, selectedSeatId } = this.props;

    const rowComponents = Object.entries(rows).map(row => {
      const rowNumber = row[0];
      const seats = row[1];
      return <Row rowNumber={ rowNumber } seats={ seats } seatLetters={ seatLetters } selectedSeatId={ selectedSeatId } />;
    });

    return (
      <div id="Cabin">
        <p>{cabinClass}</p>
        { rowComponents }
      </div>
    );
  }
}

export default Cabin;
