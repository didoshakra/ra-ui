//JD
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";

import AppFrame from "../../../modules/main/components/AppFrame";
import useTranslation from "../../../translations/useTranslation";

// import BlogHelmet from "../../components/JD/JD_BlogHelmet";
// import MarkdownRenderer from "../../components/JD/JD_markdown_renderer";
// import { MY_NAME } from "../../docs/AppConstants"; //ЦІ рядки повинні бути інакше буде помилка
/* eslint-disable */
// import aboutMe from "!json-loader!front-matter-loader!./aboutMe.md";
// import aboutSite from "!json-loader!front-matter-loader!./aboutSite.md"; //ЦІ рядки повинні бути інакше буде помилка
/* eslint-enable */

// import logoMyFamily from '/static/images/avatar/Family3.jpeg';
// import logoMyFriands from '/static/images/avatar/friends1.jpg';
// import logoMyHobbi from '/static/images/avatar/hobbi3.jpeg';
// import logoMyPortfolio from '/static/images/avatar/portfolio1-1.jpeg';
// import MyFriends from "./MyFriends";

const MY_NAME = "Roman Didoshak";

const contentStyles = theme => ({
  aboutMeBox: {
    padding: theme.spacing.unit * 2
  },
  centeredGrid: {
    justifyContent: "center"
  },
  circleContainer: {
    width: "100%",
    paddingBottom: "100%",
    backgroundImage: `url("/static/images/meRA.jpg")`,
    backgroundSize: "cover",
    borderRadius: "50%",
    overflow: "hidden"
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  bodyText: {
    // color: theme.palette.text.primary,
    // color: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing.unit * 2
  },
  headerText: {
    // color: theme.typography.title.color,
    color: theme.palette.primary.main,
    marginLeft: theme.spacing.unit * 2,
    marginBottom: theme.spacing(0.5),
    "&:hover": {
      // color: theme.palette.primary.main
      color: theme.palette.text.primary
    }
  },

  paddedForTitlebar: {
    paddingTop: theme.spacing.unit * 2
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  chip: {
    margin: 3
  }
});

const AboutMe = props => {
  const { classes } = props;
  const { locale, t } = useTranslation();

  return (
    <AppFrame>
      <Grid container>
        {/* <BlogHelmet pageTitle="About Me" /> */}
        <Grid item xs={12} className={classes.paddedForTitlebar}>
          <Grid container justify="center" spacing={16}>
            <Grid item xs={12} component={Paper}>
              <Grid container className={classes.aboutMeBox} spacing={16}>
                <Grid item xs={12} sm={3} md={3}>
                  <Paper elevation={10} className={classes.circleContainer} />
                </Grid>

                <Grid item xs={12} sm={9} md={9}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h2" className={classes.headerText}>
                        {t("aboutMe_myName")}
                        {/* {MY_NAME} */}
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      {/* <MarkdownRenderer markdown={aboutMe.body} /> */}
                      <Typography variant="h5" className={classes.bodyText}>
                        {t("aboutMe_aboutMe")}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Divider />

              <Grid container className={classes.aboutMeBox}>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h4" className={classes.bodyText}>
                        {t("aboutMe_aboutSiteTitle")}
                        {/* Про цей сайт */}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      {/* <MarkdownRenderer markdown={aboutSite.body} /> */}
                      <Typography variant="h6" className={classes.bodyText}>
                        {t("aboutMe_aboutSite")}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Divider />

              <Grid
                container
                wrap="wrap"
                className={classes.aboutMeBox}
                justify="center"
              >
                <Grid item xs={12} className={classes.buttonRow}>
                  <Chip
                    className={classes.chip}
                    color="primary"
                    variant="outlined"
                    avatar={
                      <Avatar
                        alt="MyFamily"
                        src="/static/images/avatar/Family3.jpeg"
                      />
                    }
                    label={t("aboutMe_famіly")}
                    // label="Сім'я"
                    component="a"
                    href="/about-me-jd/my-family"
                    clickable
                  />

                  <Chip
                    className={classes.chip}
                    color="primary"
                    variant="outlined"
                    avatar={
                      <Avatar
                        alt="MyFriands"
                        src="/static/images/avatar/friends1.jpg"
                      />
                    }
                    label={t("aboutMe_friends")}
                    // label="Друзі"
                    component="a"
                    href="/about-me-jd/my-friands"
                    clickable
                  />

                  <Chip
                    className={classes.chip}
                    color="primary"
                    variant="outlined"
                    avatar={
                      <Avatar
                        alt="MyHobbi"
                        src="/static/images/avatar/hobbi3.jpeg"
                      />
                    }
                    label={t("aboutMe_hobbies")}
                    // label="Хоббі"
                    component="a"
                    href="/about-me-jd/my-hobbi"
                    clickable
                  />

                  <Chip
                    className={classes.chip}
                    color="primary"
                    variant="outlined"
                    avatar={
                      <Avatar
                        alt="MyPortfolio"
                        src="/static/images/avatar/portfolio1-1.jpeg"
                      />
                    }
                    label={t("aboutMe_Portfolio")}
                    // label="Портфоліо"
                    component="a"
                    href="/about-me-jd/my-portfolio"
                    clickable
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppFrame>
  );
};

AboutMe.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired
  /* eslint-enable react/forbid-prop-types */
};

export default withStyles(contentStyles, { withTheme: true })(AboutMe);
