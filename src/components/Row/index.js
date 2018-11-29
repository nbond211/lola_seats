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
    const { rowNumber, selectedSeatId } = this.props;
    const { seatGrouping } = this.state;

    const seatComponents = seatGrouping.map(seatGroup => {
      return (
        <div className="seatGroup">
          {seatGroup.map(seat =>
            <Seat
            key={ seat.id }
            id={ seat.id }
            isOccupied={ seat.occupied }
            isPremium={ seat.premium }
            isOverWing={ seat.overWing }
            selectedSeatId={ selectedSeatId }
          />)}
        </div>
      );
    });

    return (
      <div className="row">
        <p>{rowNumber}</p>
        <div className="seatGroupContainer">{seatComponents}</div>
      </div>
    );
  }
}

export default Row;
