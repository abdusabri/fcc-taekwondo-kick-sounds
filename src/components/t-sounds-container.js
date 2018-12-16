import React, { Component } from "react";
import TSounds from "./t-sounds";
import { getKicks } from "../data-model/data-model";

class TSoundsContainer extends Component {
  state = {
    kicks: getKicks(),
    kickName: ""
  };

  handleKickTriggered = kickName => {
    this.setState({ kickName });
  };

  render() {
    return (
      <TSounds
        kicks={this.state.kicks}
        kickName={this.state.kickName}
        onKickTriggered={this.handleKickTriggered}
      />
    );
  }
}

export default TSoundsContainer;
