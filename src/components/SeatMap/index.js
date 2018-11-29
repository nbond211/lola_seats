import React, { Component } from "react";
import "./SeatMap.css";
import Cabin from "../Cabin";

class SeatMap extends Component {
  render() {
    const { businessData, firstData, economyData, selectedSeatId } = this.props;

    return (
      <div id="SeatMap">
        <Cabin
          cabinClass="First"
          seatLetters={ firstData.seatLetters }
          rows={ firstData.rows }
          selectedSeatId={ selectedSeatId }
        />
        <Cabin
          cabinClass="Business"
          seatLetters={ businessData.seatLetters }
          rows={ businessData.rows }
          selectedSeatId={ selectedSeatId }
        />
        <Cabin
          cabinClass="Economy"
          seatLetters={ economyData.seatLetters }
          rows={ economyData.rows }
          selectedSeatId={ selectedSeatId }
        />
      </div>
    );
  }
}

export default SeatMap;
