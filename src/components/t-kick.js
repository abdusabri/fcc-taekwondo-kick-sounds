import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import "./t-kick.css";

const TKick = ({ kickKey, url, kickName }) => {
  let audioRef;

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
        {kickKey}
      </Button>
      {/* Solution inspired by https://codepen.io/StudentOfJS/pen/dzjPwP/ */}
      <audio ref={element => (audioRef = element)}>
        <source src={url} type="audio/mpeg" />
      </audio>
    </div>
  );
};

TKick.prototypes = {
  kickKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default TKick;
