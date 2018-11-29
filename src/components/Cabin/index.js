import React, { Component } from "react";
import "./Cabin.css";
import Row from "../Row";
import groupSeatLetters from "../../utils/GroupSeatLetters";

class Cabin extends Component {
  constructor(props) {
    super(props);
    const { seatLetters } = props;
    const seatLetterGroupings = groupSeatLetters(seatLetters);
    this.state = { seatLetterGroupings };
  }

  render() {
    const { cabinClass, seatLetters, rows, selectedSeatId } = this.props;

    const rowComponents = Object.entries(rows).map(row => {
      const rowNumber = row[0];
      const seats = row[1];
      return <Row key={"row" + rowNumber} rowNumber={ rowNumber } seats={ seats } seatLetters={ seatLetters } selectedSeatId={ selectedSeatId } />;
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
