import React, { Component } from "react";
import "./app.css";
import TSoundsContainer from "./components/t-sounds-container";

class App extends Component {
  render() {
    return (
      <div className="app">
        <TSoundsContainer />
        <span>
          Sounds from{" "}
          <a href="http://soundbible.com/tags-knock.html">soundbible</a> by Mike
          Koenig
        </span>
      </div>
    );
  }
}

export default App;
