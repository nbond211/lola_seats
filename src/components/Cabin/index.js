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
    const { cabinClass, rows, selectedSeatId, selectSeat } = this.props;
    const { seatLetterGrouping } = this.state;

    const letterLabelComponents = seatLetterGrouping.map(group => {
      return (
        <div className="letterLabelGroup">
          {group.map(letter => <span className={`letterLabel ${cabinClass}`}>{letter}</span>)}
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
        selectSeat={ selectSeat }
      />;
    });

    return (
      <div className="cabin">
        <p className="cabinClass">{`${cabinClass} Class`}</p>
        <div className="letterLabelRow">{letterLabelComponents}</div>
        { rowComponents }
        <div className="letterLabelRow">{letterLabelComponents}</div>
      </div>
    );
  }
}

export default Cabin;
