import React, { Component } from "react";
import "./SeatMap.css";
import Cabin from "../Cabin";

class SeatMap extends Component {
  render() {
    const { businessData, firstData, economyData, selectedSeatId, selectSeat } = this.props;

    return (
      <div id="SeatMap">
        <Cabin
          cabinClass="First"
          seatLetters={ firstData.seatLetters }
          rows={ firstData.rows }
          selectedSeatId={ selectedSeatId }
          selectSeat={ selectSeat }
        />
        <Cabin
          cabinClass="Business"
          seatLetters={ businessData.seatLetters }
          rows={ businessData.rows }
          selectedSeatId={ selectedSeatId }
          selectSeat={ selectSeat }
        />
        <Cabin
          cabinClass="Economy"
          seatLetters={ economyData.seatLetters }
          rows={ economyData.rows }
          selectedSeatId={ selectedSeatId }
          selectSeat={ selectSeat }
        />
      </div>
    );
  }
}

export default SeatMap;
