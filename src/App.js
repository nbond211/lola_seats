import React, { Component } from 'react';
import './App.css';
import prepSeatData from "./utils/PrepSeatData";
import rawSeatData from "./data/seats";
import SeatMap from "./components/SeatMap";
import SideBar from "./components/SideBar";

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

  selectSeat = newSelectedSeatId => {
    this.setState({selectedSeatId: newSelectedSeatId});
  };

  render() {
    const { isDataLoaded, businessData, firstData, economyData, allSeats, selectedSeatId } = this.state;

    return (
      <div id="App">
        {isDataLoaded && [
            <SideBar
              key="SideBar"
              selectedSeatId={ selectedSeatId }
              allSeats={ allSeats }
            />,

            <SeatMap
              key="SeatMap"
              businessData={ businessData }
              firstData={ firstData }
              economyData={ economyData }
              selectedSeatId={ selectedSeatId }
              selectSeat={ this.selectSeat }
            />
          ]
        }

      </div>
    );
  }
}

export default App;
