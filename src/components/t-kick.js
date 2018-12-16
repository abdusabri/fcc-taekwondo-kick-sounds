import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import "./t-kick.css";

let audioRef;

const TKick = props => {
  return (
    <div className="kick">
      <Button
        variant="contained"
        style={{ height: "100%" }}
        onClick={() => {
          audioRef.currentTime = 0; // https://stackoverflow.com/questions/13002935/html5-audio-start-over
          audioRef.play();
        }}
      >
        Kick
      </Button>
      {/* Solution inspired by https://codepen.io/StudentOfJS/pen/dzjPwP/ */}
      <audio ref={element => (audioRef = element)}>
        <source
          src="http://soundbible.com/mp3/Roundhouse Kick-SoundBible.com-1663225804.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
};

export default TKick;
