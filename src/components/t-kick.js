import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import "./t-kick.css";

const TKick = ({ kickKey, url, kickName, onKickTriggered }) => {
  let audioRef;

  return (
    <div className="kick">
      <Button
        id={`kick-${kickKey}`}
        className="drum-pad"
        variant="contained"
        style={{ height: "100%" }}
        onClick={() => {
          onKickTriggered(kickName);
          audioRef.currentTime = 0; // https://stackoverflow.com/questions/13002935/html5-audio-start-over
          audioRef.play();
        }}
      >
        {/* Solution inspired by https://codepen.io/StudentOfJS/pen/dzjPwP/ */}
        <audio
          ref={element => (audioRef = element)}
          className="clip"
          id={kickKey}
          src={url}
        >
          {/* <source  type="audio/mpeg" /> */}
        </audio>
        {kickKey}
      </Button>
    </div>
  );
};

TKick.prototypes = {
  kickKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onKickTriggered: PropTypes.func.isRequired
};

export default TKick;
