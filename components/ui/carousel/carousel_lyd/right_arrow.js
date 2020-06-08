import React, { Component } from "react";
// import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class RightArrow extends Component {
  render() {
    return (
      <div className="backArrow" onClick={this.props.goToNextSlide}>
        <FontAwesomeIcon icon={faChevronRight} />
        {/* <i className="fa fa-angle-right fa-3x" aria-hidden="true"></i> */}
      </div>
    );
  }
}

export default RightArrow;
