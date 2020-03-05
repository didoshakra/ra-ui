//Header.js
//MuiMasterv.4.5.1 до 2019.11.16
//Випадаючі меню-прості(на іконці)
//Розділений  на AppFrame і Header
//DynamikRouter
//!!! не поміняв withStyles на makeStyles бо є LightTooltip = withStyles(theme =>
//-----------------------------------------------------
import React from "react";
import PropTypes from "prop-types";
// import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { withStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import NoSsr from "@material-ui/core/NoSsr";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
// import GitHubIcon from '@material-ui/icons/GitHub';
// import NProgressBar from "@material-ui/docs/NProgressBar";
// import FormatTextdirectionLToR from "@material-ui/icons/FormatTextdirectionLToR";
// import FormatTextdirectionRToL from "@material-ui/icons/FormatTextdirectionRToL";
import Avatar from "@material-ui/core/Avatar";
import AccountCircle from "@material-ui/icons/AccountCircle"; //Аватар логін
import Typography from "@material-ui/core/Typography";
import AppIcon from "@material-ui/icons/Apps";
// import memoize from "@material-ui/system/mfrom "@material-ui/icons/FormatTextdirectionRToL";

import AppDrawer from "./AppDrawer";
import { LANGUAGES_LABEL } from "../../../translations/config";
import { useChangeTheme } from "./ThemeContext";
import useTranslation from "../../../translations/useTranslation";

//LightTooltip //Світла підказка під іконками кнопон
const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)", //прозорість
    boxShadow: theme.shadows[1],
    fontSize: 12
  }
}))(Tooltip);

const styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.level1,
    height: "50px" //Висота
    // justifyContent: "flex-start", //центрування по горизонталі
    // alignItems: "center", //центрування по вертикалі
    // width: "100%", //ширина (на весь екран)
    // padding: "0 20px" //відступи звеху/знизу і збоків
    // cursor: "pointer", //Вигляд курсора (руказ пальцем)
  },
  grow: {
    //Відступ вправо
    flex: "1 1 auto"
  },
  appBar: {
    color: theme.palette.type === "dark" ? "#fff" : null,
    backgroundColor:
      theme.palette.type === "dark" ? theme.palette.background.level2 : null
    // transition: theme.transitions.create("width")
  },
  // Ховає текст після іконки при зменшенні вікна
  textHeadIcons: {
    textTransform: "none", //Не змінює регістр
    margin: theme.spacing(0, 0.5, 0, 1),
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block"
    }
  },
  drawer: {
    [theme.breakpoints.up("lg")]: {
      flexShrink: 0,
      width: 240
    }
  },
  //Не підкреслювати Link
  linkstyle: {
    textDecoration: "none" //Не підкреслювати Link
  }
});

function AppHeader(props) {
  const { locale, t } = useTranslation();
  const { classes } = props;
  const theme = useTheme();
  const router = useRouter(); //Для зміни мови
  const canonicalPath = () => router.asPath.slice(3);
  const canonical = canonicalPath(); //Основний шлях
  // console.log("***App/Header.js/router.asPath=", router.asPath);
  // console.log("***App/Header.js/canonical=", canonical);

  //Меню вибору мови
  const [languageMenu, setLanguageMenu] = React.useState(null);
  const handleLanguageIconClick = event => {
    setLanguageMenu(event.currentTarget);
  };

  const handleLanguageMenuClose = event => {
    setLanguageMenu(null);
  };

  //Бокове меню
  const [mobileOpen, setMobileOpen] = React.useState(false); //Чи відкрите
  const handleDrawerOpen = () => {
    setMobileOpen(true);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  //Тема
  const changeTheme = useChangeTheme();
  const handleTogglePaletteType = () => {
    const paletteType = theme.palette.type === "light" ? "dark" : "light";

    changeTheme({ paletteType });
  };
  //

  let disablePermanent = true; //відключити постійно відкрите Бокове меню (відкллючено)
  let navIconClassName = "";
  let appBarClassName = classes.appBar; //appBar на всю ширину

  /************************* */
  //Юзер-чи зареєстрований
  const [isAuthenticated, setIsAuthenticated] = React.useState(true); //Чи відкрите
  const handleIsAuthenticated = () => {
    setIsAuthenticated(true);
  };
  const handleNotAuthenticated = () => {
    setIsAuthenticated(false);
  };
  //Юзер-іконка після/до входу
  const iconAuthenticated = isAuthenticated ? (
    <div>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        className={classes.authAvatar}
      />
    </div>
  ) : (
    <div>
      <AccountCircle />
    </div>
  );
  //Юзер-ім'я
  const [userName, setUserName] = React.useState("Вася"); //Чи відкрите
  // const handleIsAuthenticated = () => {
  //   setIsAuthenticated(true);
  // };
  // const handleNotAuthenticated = () => {
  //   setIsAuthenticated(false);
  // };

  //Меню профіль/logout-чи відкрите/закрите
  const [profileMenu, setProfileMenu] = React.useState(null);
  const handleProfileMenuClick = event => {
    setProfileMenu(event.currentTarget);
  };
  const handleProfileMenuClose = event => {
    setProfileMenu(null);
  };
  //Меню профіль/logout-Випадаючі списки
  //Список не авторизований (меню профілю)
  const ProfileMenuListAuthNot = (
    <>
      <MenuItem onClick={handleProfileMenuClose}>LogIn</MenuItem>
      <MenuItem onClick={handleProfileMenuClose}>Registr</MenuItem>
    </>
  );
  //Список авторизований (меню профілю)
  const ProfileMenuListAuth = (
    <>
      <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleProfileMenuClose}>My account</MenuItem>
      {/* //Box my={1}-дає відступ від лінії-розділювача*/}
      <Box my={1}>
        <Divider />
      </Box>
      <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
    </>
  );

  //Меню APP-чи відкрите/закрите
  const [appMenu, setAppMenu] = React.useState(null);
  const handleAppMenuClick = event => {
    setAppMenu(event.currentTarget);
  };
  const handleAppMenuClose = event => {
    setAppMenu(null);
  };
  //Меню APP--Випадаючийсписок
  const AppMenuList = (
    <>
      <Link href="/[lang]/psql-users" as={`/${locale}/psql-users`}>
        <MenuItem component="a" onClick={handleAppMenuClose}>
          (pSQL)fetch-Користувачі-таблиця(проста)
        </MenuItem>
      </Link>
      <Link
        href="/[lang]/psql-users/psql-users-list"
        as={`/${locale}/psql-users/psql-users-list`}
      >
        <MenuItem
          component="a"
          href="/psql-users/psql-users-list"
          onClick={handleAppMenuClose}
        >
          (pSQL)Користувачі-список
        </MenuItem>
      </Link>
    </>
  );

  return (
    <div className={classes.root}>
      <AppBar className={appBarClassName}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label={t("header_openDrawer")}
            onClick={handleDrawerOpen}
            className={navIconClassName}
          >
            <MenuIcon />
          </IconButton>

          {/* //Logo */}
          <Link href="/[lang]/about-me" as={`/${locale}/about-me`}>
            <IconButton title={t("header_titleAboutME")} component="a">
              <Avatar
                className={classes.avatar}
                alt="Remy Sharp"
                src="/static/images/avatar/SunRa48.png"
              />
            </IconButton>
          </Link>
          {/* //Назва сайту */}
          <Link href="/[lang]" as={`/${locale}`}>
            <Typography
              className={classes.linkstyle}
              variant="h6"
              // variant="subtitle1"
              color="inherit"
              title={t("header_titleHomeIcon")}
              component="a"
              data-no-link="true"
              href="/"
            >
              {t("header_titleSite")}
            </Typography>
          </Link>
          {/* //Відступ вправо */}
          <div className={classes.grow} />

          {/* //Кнопка з іконкою до випадаючого меню APP */}
          {/* //Підказка світла справа внизу-placement="bottom-end" */}
          <LightTooltip
            title={t("header_titleAppIcon")}
            placement="bottom-end"
            enterDelay={300}
          >
            {/* <Tooltip title={t("titleAppIcon")} enterDelay={300}> */}
            <Button
              color="inherit"
              // aria-ownsАтрибут створює батьківські / дочірні відносини між двома списками в доступності шарі
              aria-owns={appMenu ? "app-menu" : undefined}
              //Вказує, що елемент має контекстне меню спливаючих вікон або меню підрівні.
              aria-haspopup="true"
              //Створює текстову мітку поточного елемента в разі відсутності видимого тексту опису елемента
              aria-label={t("header_titleAppIcon")}
              onClick={handleAppMenuClick}
              data-ga-event-category="AppBar"
              data-ga-event-action="appMenu"
            >
              <AppIcon />
            </Button>
            {/* </Tooltip> */}
          </LightTooltip>
          {/* //Саме випадаюче меню (AppMenuList) */}
          <NoSsr>
            <Menu
              id="profileMenu"
              anchorEl={appMenu}
              open={Boolean(appMenu)}
              onClose={handleAppMenuClose}
            >
              {AppMenuList}
            </Menu>
          </NoSsr>

          {/* //Кнопка з іконкою до випадаючого меню Authen/Profile */}
          <LightTooltip title={t("header_titleAuthenticated")} enterDelay={300}>
            <Button
              color="inherit"
              // aria-ownsАтрибут створює батьківські / дочірні відносини між двома списками в доступності шарі
              aria-owns={profileMenu ? "profile-menu" : undefined}
              //Вказує, що елемент має контекстне меню спливаючих вікон або меню підрівні.
              aria-haspopup="true"
              //Створює текстову мітку поточного елемента в разі відсутності видимого тексту опису елемента
              aria-label={t("header_titleAuthenticated")}
              onClick={handleProfileMenuClick}
              data-ga-event-category="AppBar"
              data-ga-event-action="language"
            >
              {iconAuthenticated}
              {/* //Виводимо текст після іконки */}
              {/* <span className={classes.textHeadIcons}>{userName}</span> */}
              <Typography variant="caption" className={classes.textHeadIcons}>
                {userName}
              </Typography>
              <ExpandMoreIcon fontSize="small" />
            </Button>
          </LightTooltip>
          {/* //Саме випадаюче меню (Authen/Profile) */}
          <NoSsr>
            <Menu
              id="profileMenu"
              anchorEl={profileMenu}
              open={Boolean(profileMenu)}
              onClose={handleProfileMenuClose}
            >
              {isAuthenticated ? ProfileMenuListAuth : ProfileMenuListAuthNot}
            </Menu>
          </NoSsr>

          {/* //Кнопка з іконкою до випадаюче меню зміни мови */}
          <LightTooltip title={t("header_changeLanguage")} enterDelay={300}>
            <Button
              color="inherit"
              // aria-ownsАтрибут створює батьківські / дочірні відносини між двома списками в доступності шарі
              aria-owns={languageMenu ? "language-menu" : undefined}
              //Вказує, що елемент має контекстне меню спливаючих вікон або меню підрівні.
              aria-haspopup="true"
              //Створює текстову мітку поточного елемента в разі відсутності видимого тексту опису елемента
              aria-label={t("header_changeLanguage")}
              onClick={handleLanguageIconClick}
              data-ga-event-category="AppBar"
              data-ga-event-action="language"
            >
              <LanguageIcon />
              <span className={classes.textHeadIcons}>
                {/* Вивід в заголовок низви мови */}
                {
                  LANGUAGES_LABEL.filter(
                    language => language.code === locale
                  )[0].text
                }
              </span>
              {/* Вивід в заголовок коду мови */}
              <Typography variant="caption" className={classes.textHeadIcons}>
                {
                  LANGUAGES_LABEL.filter(
                    language => language.code === locale
                  )[0].code
                }
              </Typography>
              <ExpandMoreIcon fontSize="small" />
            </Button>
          </LightTooltip>
          {/* //Саме випадаюче меню (languageMenu) */}
          <NoSsr>
            <Menu
              id="language-menu"
              anchorEl={languageMenu}
              open={Boolean(languageMenu)}
              onClose={handleLanguageMenuClose}
            >
              {LANGUAGES_LABEL.map(language => (
                <MenuItem
                  component="a"
                  data-no-link="true"
                  href={`/${language.code}${canonical}`} //Зміна мови
                  key={language.code}
                  selected={locale === language.code} //Підсвітка активної мови в меню
                  onClick={handleLanguageMenuClose}
                  lang={language.code}
                  hrefLang={language.code}
                >
                  {language.text}
                </MenuItem>
              ))}
            </Menu>
          </NoSsr>

          {/* //Змінити тему */}
          <LightTooltip title={t("header_toggleTheme")} enterDelay={300}>
            <IconButton
              color="inherit"
              onClick={handleTogglePaletteType}
              aria-label={t("header_toggleTheme")}
              data-ga-event-category="AppBar"
              data-ga-event-action="dark"
            >
              {theme.palette.type === "light" ? (
                <Brightness4Icon />
              ) : (
                <Brightness7Icon />
              )}
            </IconButton>
          </LightTooltip>
        </Toolbar>
      </AppBar>
      <AppDrawer
        className={classes.drawer}
        disablePermanent={disablePermanent}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
        mobileOpen={mobileOpen}
      />
    </div>
  );
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppHeader);
