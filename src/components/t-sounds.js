import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { withStyles } from "@material-ui/core/styles";
import { tSoundsStyles } from "./t-sounds-styles";
import Divider from "@material-ui/core/Divider";
import TKick from "./t-kick";

const TSounds = ({ classes, kickName = "Kick Name" }) => {
  return (
    <Card className={classes.card}>
      <CardHeader
        subheader={
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <span>{kickName}</span>
          </div>
        }
      />
      <Divider />
      <CardContent>
        <TKick />
        <TKick />
        <TKick />
        <TKick />
        <TKick />
        <TKick />
        <TKick />
        <TKick />
        <TKick />
      </CardContent>
    </Card>
  );
};

export default withStyles(tSoundsStyles)(TSounds);
