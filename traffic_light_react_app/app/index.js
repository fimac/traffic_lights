import React from "react";
import ReactDOM from "react-dom";

class Traffic extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "green"
    };
  }
  componentWillMount() {
    window.setTimeout(() => {
      this.setState({
        backgroundColor: "green"
      });
    }, 500);
  }
  render() {
    return (
      <div className="traffic-light">
        <div className="light {this.state.backgroundColor}" />
        <div className="light" />
        <div className="light" />
      </div>
    );
  }
}

ReactDOM.render(<Traffic />, document.querySelector(".north-south"));
