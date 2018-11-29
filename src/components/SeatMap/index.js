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
    const { businessData, firstData, economyData} = this.state;

    return (
      <div id="SeatMap">
        <Cabin cabinClass="Business" data={ businessData }/>
        <Cabin cabinClass="First" data={ firstData }/>
        <Cabin cabinClass="Economy" data={ economyData }/>
      </div>
    );
  }
}

export default SeatMap;
