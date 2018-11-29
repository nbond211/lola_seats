import React, { Component } from "react";
import "./SeatMap.css";
import prepSeatData from "../../utils/PrepSeatData";
import rawSeatData from "../../data/seats.json";
import Cabin from "../Cabin";

class SeatMap extends Component {
  constructor(props) {
    super(props);
    this.state = { isDateLoaded: false, selectedSeatId: "" };
  }

  componentDidMount() {
    const formattedSeatData = prepSeatData(rawSeatData);

    this.setState({
      isDataLoaded: true,
      businessData: formattedSeatData["Business"],
      firstData: formattedSeatData["First"],
      economyData: formattedSeatData["Economy"]
    });
  }

  render() {
    const { isDataLoaded, businessData, firstData, economyData, selectedSeatId} = this.state;

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
