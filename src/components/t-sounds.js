import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { withStyles } from "@material-ui/core/styles";
import { tSoundsStyles } from "./t-sounds-styles";
import Divider from "@material-ui/core/Divider";
import TKick from "./t-kick";

const TSounds = ({ classes, kickName, kicks, onKickTriggered }) => {
  return (
    <Card id="drum-machine" className={classes.card}>
      <CardHeader
        subheader={
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <span id="display">{kickName}</span>
          </div>
        }
      />
      <Divider />
      <CardContent>
        {kicks.map(kick => (
          <TKick
            key={kick.key}
            kickName={kick.name}
            url={kick.url}
            kickKey={kick.key}
            onKickTriggered={onKickTriggered}
          />
        ))}
      </CardContent>
    </Card>
  );
};

TSounds.propTypes = {
  classes: PropTypes.object.isRequired,
  kickName: PropTypes.string.isRequired,
  kicks: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  onKickTriggered: PropTypes.func.isRequired
};

export default withStyles(tSoundsStyles)(TSounds);
