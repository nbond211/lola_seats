import React, { Component } from "react";
import "./SeatMap.css";
import prepSeatData from "../../utils/PrepSeatData";
import rawSeatData from "../../data/seats.json";
import Cabin from "../Cabin";

class SeatMap extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedSeatId: "" };
  }

  componentDidMount() {
    const formattedSeatData = prepSeatData(rawSeatData);

    this.setState({
      businessData: formattedSeatData["Business"],
      firstData: formattedSeatData["First"],
      economyData: formattedSeatData["Economy"]
    });
  }

  render() {
    const { businessData, firstData, economyData, selectedSeatId} = this.state;

    return (
      <div id="SeatMap">
        <Cabin cabinClass="Business" seatData={ businessData } selectedSeatId={ selectedSeatId }/>
        <Cabin cabinClass="First" seatData={ firstData } selectedSeatId={ selectedSeatId }/>
        <Cabin cabinClass="Economy" seatData={ economyData } selectedSeatId={ selectedSeatId }/>
      </div>
    );
  }
}

export default SeatMap;
