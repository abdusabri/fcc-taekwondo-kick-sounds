import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import "./t-kick.css";

const TKick = props => {
  return (
    <div className="kick">
      <Button variant="contained" style={{ height: "100%" }}>
        Kick
      </Button>
    </div>
  );
};

export default TKick;
