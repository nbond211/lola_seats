import React, { Component } from "react";
import "./Seat.css";
import occupiedIcon from "../../assets/occupied-icon.png";

class Seat extends Component {

  render() {
    const { id, isOccupied, selectedSeatId, selectSeat } = this.props;
    const isSelected = id === selectedSeatId;

    let seatClassName = "available";
    let onClick = () => selectSeat(id);

    if (isSelected) {
      seatClassName = "selected";
    }
    else if (isOccupied) {
      seatClassName = "occupied";
      onClick = () => false;
    }

    return (
      <div className={`seat ${seatClassName}`} onClick={onClick}>
        {isOccupied && <img className="occupiedIcon" src={occupiedIcon} alt="occupied"/>}
      </div>
    );
  }
}

export default Seat;
