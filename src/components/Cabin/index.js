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

    const letterLabelComponents = this.state.seatLetterGroupings.map(group => {
      return (
        <div className="letterLabelGroup">
          {group.map(letter => <span className="letterLabel">{letter}</span>)}
        </div>
      );
    });

    const rowComponents = Object.entries(rows).map(row => {
      const rowNumber = row[0];
      const seats = row[1];
      return <Row
        key={"row" + rowNumber}
        rowNumber={ rowNumber }
        seats={ seats }
        seatLetters={ seatLetters }
        selectedSeatId={ selectedSeatId }
      />;
    });

    return (
      <div id="Cabin">
        <p>{cabinClass}</p>
        <div className="letterLabelRow">{letterLabelComponents}</div>
        { rowComponents }
      </div>
    );
  }
}

export default Cabin;
