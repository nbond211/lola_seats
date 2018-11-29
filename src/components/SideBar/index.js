import React, { Component } from "react";
import "./SideBar.css";

class SideBar extends Component {

  render() {

    const { allSeats, selectedSeatId } = this.props;
    const selectedSeat = allSeats[selectedSeatId];

    let selectedSeatSection;
    if (selectedSeat) {
      selectedSeatSection = (
        <div className="selectedSeatSection">
          <p>Selected Seat:</p>
          <h4>Seat {selectedSeatId}</h4>
          <p>{selectedSeat.class}</p>
        </div>
      );
    }
    else {
      selectedSeatSection = (
        <div className="selectedSeatSection">
          <h4>No Seat Selected</h4>
        </div>
      );
    }

    return (
      <div id="SideBar">
        <div className="SidebarContent">
          {selectedSeatSection}
        </div>
      </div>
    );
  }
}

export default SideBar;