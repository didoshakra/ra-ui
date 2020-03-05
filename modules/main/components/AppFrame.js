//MuiMasterv.4.5.1 до 2019.11.16
//Випадаючі меню-прості(на іконці)
//Розділений  на AppFrame і Header
//-------------------------------------------------
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import NProgressBar from "@material-ui/docs/NProgressBar";

import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

const useStyles = makeStyles(theme => ({
  // const styles = theme => ({
  root: {
    flex: 1, //Це короткий запис (flex-grow:1)-елементи можна розтягнути аби використати увесь наявний простір пропорційно до вказаного параметра(1-на )
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.level1,

    height: "100%",
    width: "100%",

    Content: {
      flex: 1,
      display: "flex",
      justifyCcontent: "center",
      alignItems: "center",

      width: "100%",

      backgroundColor: theme.palette.background.secondary,
      color: theme.palette.secondary,
      a: {
        color: theme.palette.inherit
      }
    }
  }
}));

function AppFrame(props) {
  const { children } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NProgressBar />
      {/* <CssBaseline /> */}
      <AppHeader />
      <div className={classes.content}>{children}</div>
      <AppFooter fromFullYear={2018} />
    </div>
  );
}

AppFrame.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

// export default withStyles(styles)(AppFrame);
export default AppFrame;
