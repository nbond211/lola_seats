import React, { Component } from "react";
import "./Legend.css";
import occupiedIcon from "../../assets/occupied-icon.png";

class Legend extends Component {

  render() {

    return (
      <div id="Legend">
        <h6 className="legendTitle">Legend</h6>
        <div className="legendItem">
          <div className="legendCircle legendAvailable"/>
          <p>Available</p>
        </div>
        <div className="legendItem">
          <div className="legendCircle legendOccupied">
            <img className="occupiedIcon" src={occupiedIcon} alt="occupied"/>
          </div>
          <p>Occupied</p>
        </div>
      </div>
    );
  }
}

export default Legend;
