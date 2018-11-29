import React, { Component } from "react";
import "./Seat.css";

class Seat extends Component {

  render() {

    const { id, isOccupied, isPremium, isOverWing, selectedSeatId } = this.props;

    return (
      <div className="seat">
      </div>
    );
  }
}

export default Seat;
