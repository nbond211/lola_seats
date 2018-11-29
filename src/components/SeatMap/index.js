import React, { Component } from "react";
import "./SeatMap.css";
import Cabin from "../Cabin";

class SeatMap extends Component {
  render() {
    const { isDataLoaded, businessData, firstData, economyData, selectedSeatId } = this.props;

    return (
      <div id="SeatMap">
        {isDataLoaded &&
          [
            <Cabin
              key="First"
              cabinClass="First"
              seatLetters={ firstData.seatLetters }
              rows={ firstData.rows }
              selectedSeatId={ selectedSeatId }
            />,

            <Cabin
              key="Business"
              cabinClass="Business"
              seatLetters={ businessData.seatLetters }
              rows={ businessData.rows }
              selectedSeatId={ selectedSeatId }
            />,

            <Cabin
              key="Economy"
              cabinClass="Economy"
              seatLetters={ economyData.seatLetters }
              rows={ economyData.rows }
              selectedSeatId={ selectedSeatId }
            />
          ]
        }
      </div>
    );
  }
}

export default SeatMap;
