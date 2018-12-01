import React, { Component } from "react";
import "./SideBar.css";
import Legend from "../Legend";

class SideBar extends Component {

  render() {

    const { allSeats, selectedSeatId } = this.props;
    const selectedSeat = allSeats[selectedSeatId];

    let selectedSeatSection;
    if (selectedSeat) {
      selectedSeatSection = (
        <div className="selectedSeatSection">
          <h6 className="selectedSeatTitle">Selected Seat:</h6>
          <h4 className="selectedSeatId">{selectedSeatId}</h4>
          <p className="selectedSeatClass">{selectedSeat.class} Class</p>
        </div>
      );
    }
    else {
      selectedSeatSection = (
        <div className="selectedSeatSection">
          <h6 className="selectedSeatTitle">Selected Seat:</h6>
          <h4 className="selectedSeatId">None</h4>
        </div>
      );
    }

    return (
      <div id="SideBar">
        <h3 className="sideBarTitle">Select Your Seat</h3>
        <Legend/>
        {selectedSeatSection}
        <button
          className={`saveButton ${selectedSeat ? "enabledButton" : "disabledButton"}`}
          type="button"
          disabled={!selectedSeat}>
          Save Seat
        </button>
      </div>
    );
  }
}

export default SideBar;
