import React, { Component } from "react";
import "./Cabin.css";
import Row from "../Row";
import groupSeatLetters from "../../utils/GroupSeatLetters";

class Cabin extends Component {
  constructor(props) {
    super(props);
    const { seatLetters } = props;
    const seatLetterGrouping = groupSeatLetters(seatLetters);
    this.state = { seatLetterGrouping };
  }

  render() {
    const { cabinClass, rows, selectedSeatId } = this.props;
    const { seatLetterGrouping } = this.state;

    const letterLabelComponents = seatLetterGrouping.map(group => {
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
        seatLetterGrouping={ seatLetterGrouping }
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
