import React from "react";
import ReactDOM from "react-dom";

class Traffic extends React.Component {
  render() {
    return (
      <div className="traffic-light">
        <div className="light" />
        <div className="light orange" />
        <div className="light" />
      </div>
    );
  }
}

ReactDOM.render(<Traffic />, document.querySelector(".north-south"));
