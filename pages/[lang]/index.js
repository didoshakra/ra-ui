//Index.js(Home) / Muiv4.5.1
import React from "react";
import Link from "next/link";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import AppFrame from "../../modules/main/components/AppFrame";
import useTranslation from "../../translations/useTranslation";

const useStyles = makeStyles(theme => ({
  root: {
    flex: "1 0 100%",
    maxHeight: "480px" //Висота
    //rr background
    // backgroundImage: 'url("/static/images/SunMan.jpg")',
    // height: '100vh',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  // drawer: {
  //   width: 0
  // },
  hero: {
    paddingTop: 44,
    color: theme.palette.primary.main
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(20),
      flexDirection: "row",
      alignItems: "flex-start",
      textAlign: "left"
    }
  },
  title: {
    marginLeft: -12,
    whiteSpace: "nowrap",
    letterSpacing: ".7rem",
    textIndent: ".7rem",
    fontWeight: theme.typography.fontWeightLight,
    // fontSize: 28,
    // fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontStyle: "italic",
    [theme.breakpoints.only("xs")]: {
      fontSize: 28
      // fontFamily: "Times New Roman",
      // fontWeight: "bold",
      // fontStyle: "italic"
    }
  },
  logo: {
    flexShrink: 0,
    width: 120,
    height: 120,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(8),
      width: 220,
      height: 200
    }
  },
  button: {
    marginTop: theme.spacing(4)
  },
  social: {
    padding: theme.spacing(2, 0),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 21,
    boxSizing: "content-box",
    "& span": {
      display: "flex",
      marginRight: theme.spacing(1)
    },
    "& a": {
      color: theme.palette.background.paper
    }
  }
}));

export default function HomePage() {
  const { locale, t } = useTranslation();
  const classes = useStyles();

  return (
    // <AppFrame classes={{ drawer: classes.drawer }}>
    <AppFrame>
      <Head>
        <title>{t("header-titleSite")}</title>
        {/* <title>Ra-test</title> */}
      </Head>
      <div className={classes.root}>
        <div className={classes.hero}>
          <Container maxWidth="md" className={classes.content}>
            <img
              // src="/static/images/material-ui-logo.svg"
              // src="/static/images/SunRa48.png"
              // src="/static/images/SunRa.png"
              // src="/img/SunMan.jpg"
              src="/static/images/SunMan.jpg"
              // alt="Material-UI Logo"
              className={classes.logo}
            />
            <div>
              <Typography
                variant="h3"
                component="h1"
                color="inherit"
                gutterBottom
                className={classes.title}
              >
                {t("home_Welcome")}👋
                {/* {"Вітаю на сайті RA"} */}
              </Typography>
              <Typography variant="h5" component="h2" color="inherit">
                {/* Це домашня сторінка тестового сайту, який знаходиться на початку
                розробки */}
                {t("home_aboutPage")}
              </Typography>
              <Typography variant="h5" component="h2" color="inherit">
                {/* Дякую за увагу ! */}
                {t("home_thankYou")}
              </Typography>
              <Link href="/[lang]/about-me" as={`/${locale}/about-me`}>
                <Button
                  component="a"
                  className={classes.button}
                  variant="outlined"
                  color="primary"
                >
                  {t("home_buttonAboutMe")}
                </Button>
              </Link>
            </div>
          </Container>
        </div>
        {/* <div className={classes.social}>
          <a
            className="github-button"
            href="https://github.com/mui-org/material-ui"
            data-icon="octicon-star"
            data-show-count="true"
          >
            Star
          </a>
          <a
            className="twitter-follow-button"
            href="https://twitter.com/@materialui"
            data-show-screen-name="false"
          >
            Follow
          </a>
        </div> */}
      </div>
    </AppFrame>
  );
}
