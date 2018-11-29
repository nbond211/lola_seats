import React, { Component } from "react";
import "./Seat.css";

class Seat extends Component {

  render() {
    const { id, isOccupied, isPremium, isOverWing, selectedSeatId, selectSeat } = this.props;

    return (
      <div className="seat" onClick={() => selectSeat(id)}>
      </div>
    );
  }
}

export default Seat;
