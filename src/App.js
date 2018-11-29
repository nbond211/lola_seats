import React, { Component } from 'react';
import './App.css';
import prepSeatData from "./utils/PrepSeatData";
import rawSeatData from "./data/seats";
import SeatMap from "./components/SeatMap";

class App extends Component {
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
      economyData: formattedSeatData["Economy"],
      allSeats: formattedSeatData.allSeats
    });
  }

  render() {
    const { isDataLoaded, businessData, firstData, economyData, allSeats, selectedSeatId } = this.state;

    return (
      <div className="App">
        <SeatMap
          isDataLoaded={ isDataLoaded }
          businessData={ businessData }
          firstData={ firstData }
          economyData={ economyData }
          selectedSeatId={ selectedSeatId }
        />
      </div>
    );
  }
}

export default App;
