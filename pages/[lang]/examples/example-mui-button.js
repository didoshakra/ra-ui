//mui-button.js/ Для провірки шрифтів material-ui та шрифтів Roboto
//Ви побачите, що у браузер завантажуються шрифти material-ui та шрифти Roboto.
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AppFrame from "../../../modules/main/components/AppFrame";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

function MuiButton(props) {
  const { classes } = props;
  return (
    <AppFrame>
      <div>
        <h3>Mui Button Examples</h3>
        <p>Для провірки шрифтів material-ui та шрифтів Roboto</p>
        <p>
          Ви побачите, що у браузер завантажуються шрифти material-ui та шрифти
          Roboto.
        </p>
        <Button variant="contained" className={classes.button}>
          Default
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          Primary
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Secondary
        </Button>
        <Button
          variant="contained"
          color="secondary"
          disabled
          className={classes.button}
        >
          Disabled
        </Button>
        <Button
          variant="contained"
          href="#contained-buttons"
          className={classes.button}
        >
          Link
        </Button>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            component="span"
            className={classes.button}
          >
            Upload
          </Button>
        </label>
      </div>
    </AppFrame>
  );
}

MuiButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MuiButton);
