import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
// import blue from "@material-ui/core/colors/blue";
import WifiIcon from "@material-ui/icons/Wifi";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  footer: {
    fontSize: "85%",
    textAlign: "center",
    //   borderTop: "1px solid #e5e5e5",
    // color: theme.palette.type === "dark" ? "#fff" : null,
    color: theme.palette.primary.main,
    backgroundColor:
      theme.palette.type === "dark" ? theme.palette.background.level2 : null
    // transition: theme.transitions.create("width")
  },

  button: {
    textTransform: "none", //Виключає назву всі великі букви
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20,
    width: 24,
    height: 24,
    // color: "primary"
    color: theme.palette.primary.main
  }
}));

function Footer(props) {
  const classes = useStyles();
  const { fromFullYear, toFullYear } = props;
  return (
    // <div className={classes.root}>
    <div className={classes.footer}>
      <p>
        ©
        {fromFullYear === toFullYear
          ? toFullYear
          : `${fromFullYear}-${toFullYear}`}{" "}
        <a href="http://ra.org.ua/">ra.org.ua</a>
      </p>
      <p>
        <Button
          // variant="contained"
          size="small"
          color="primary"
          className={classes.button}
          component="a"
          href="https://github.com/didoshakra"
        >
          {/* <IconButton> // Іконка буде як кнопка*/}
          <img
            // src={githubIcon}
            src="/static/images/social/github-retina.png"
            className={(classes.leftIcon, classes.iconSmall)}
            alt="github"
          />
          {/* </IconButton> */}
          Github
        </Button>

        <Button
          // variant="contained"
          size="small"
          color="primary"
          className={classes.button}
          component="a"
          href="https://stackoverflow.com/users/10482596/%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD?tab=profile"
        >
          <WifiIcon className={(classes.leftIcon, classes.iconSmall)} />
          StackOverflowButton
        </Button>

        <Button
          // variant="contained"
          size="small"
          color="primary"
          className={classes.button}
          component="a"
          href="https://www.facebook.com/profile.php?id=100004339204236"
        >
          <img
            // src={facebookIcon}
            src="/static/images/social/facebook-f-64-grow.png"
            className={(classes.leftIcon, classes.iconSmall)}
            alt="facebook"
          />
          Facebook
        </Button>

        <Button
          // variant="contained"
          size="small"
          color="primary"
          className={classes.button}
          component="a"
          href="https://twitter.com/DidoshakR"
        >
          <img
            // src={twitterIcon}
            src="/static/images/social/twitter-retina.png"
            className={(classes.leftIcon, classes.iconSmall)}
            alt="twitter"
          />
          Twitter
        </Button>
        {/* <GitHubButton />
      <StackOverflowButton />
      <Facebook /> */}
      </p>
    </div>
    // </div>
  );
}

Footer.propTypes = {
  toFullYear: PropTypes.number,
  fromFullYear: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};
Footer.defaultProps = {
  toFullYear: new Date().getFullYear(),
  className: undefined
};

export default Footer;
