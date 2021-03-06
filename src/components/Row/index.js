import React, { Component } from "react";
import "./Row.css";
import groupSeats from "../../utils/GroupSeats";
import Seat from "../Seat";

class Row extends Component {
  constructor(props) {
    super(props);
    const { seatLetterGrouping, seats } = props;
    const seatGrouping = groupSeats(seats, seatLetterGrouping);
    this.state = { seatGrouping };
  }

  render() {
    const { rowNumber, selectedSeatId, selectSeat } = this.props;
    const { seatGrouping } = this.state;

    const seatComponents = seatGrouping.map(seatGroup => {
      return (
        <div className="seatGroup">
          {seatGroup.map(seat =>
            <Seat
            key={ seat.id }
            id={ seat.id }
            isOccupied={ seat.occupied }
            cabinClass={ seat.class }
            selectedSeatId={ selectedSeatId }
            selectSeat={ selectSeat }
          />)}
        </div>
      );
    });

    return (
      <div className="row">
        <p className="rowNumber">{rowNumber}</p>
        <div className="seatGroupContainer">{seatComponents}</div>
        <p className="rowNumber">{rowNumber}</p>
      </div>
    );
  }
}

export default Row;
