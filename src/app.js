import React, { Component } from "react";
import "./app.css";
import TSoundsContainer from "./components/t-sounds-container";

class App extends Component {
  render() {
    return (
      <div className="app">
        <TSoundsContainer />
      </div>
    );
  }
}

export default App;
