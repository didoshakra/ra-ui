//AppDrawer.js
//За основу MUIv4.5.1 master+Документація по MUI
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import WifiIcon from "@material-ui/icons/Wifi";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import EditIcon from "@material-ui/icons/Edit";
// import Link from "@material-ui/core/Link"; // Прпцює(Дає можливість вміняти стиль).
// import Link from "next/link";// Прпцює(НЕ Дає можливість вміняти стиль???)
// import Link from "./Link"; // Непрацює(Змінює маршрут з врахуванням мови)

import useTranslation from "../../../translations/useTranslation";

const useStyles = makeStyles(theme => ({
  // const styles = theme => ({
  //для випадаючого меню
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4),
    paddingTop: 2,
    paddingBottom: 2
  },
  //**  */
  listItem: {
    paddingTop: 2,
    paddingBottom: 2
  },
  listIcon: {
    width: 24,
    height: 24
  },
  //rr
  paper: {
    width: 240,
    backgroundColor: theme.palette.background.level1
  },
  title: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(0.5),
    "&:hover": {
      color: theme.palette.primary.main
    }
  },
  // https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items
  toolbarIe11: {
    display: "flex"
  },
  toolbar: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing(3),
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
  }
}));

//iOS розміщується на пристроях високого класу. Ми можемо включити перехід фону без
// випадання кадрів. Виступ буде досить хорошим.
// Отже: <SwipeableDrawer disabledBackdropTransition \u003d {false} />
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

function AppDrawer(props) {
  const classes = useStyles();
  const {
    className,
    disablePermanent, //постійний
    mobileOpen,
    onClose,
    onOpen
  } = props;
  const { locale, t } = useTranslation();
  // для випадаючого меню змінна і ф-ція її зміни
  const [openListAppWork, setopenListAppWork] = React.useState(false);

  const handleClickListAppWork = () => {
    setopenListAppWork(!openListAppWork);
  };

  // для випадаючого меню
  const [openListAppTest, setopenListAppTest] = React.useState(false);

  const handleClickListAppTest = () => {
    setopenListAppTest(!openListAppTest);
  };

  // для випадаючого меню
  const [openListTables, setopenListTables] = React.useState(false);

  const handleClickListTables = () => {
    setopenListTables(!openListTables);
  };

  // для випадаючого меню
  const [openListForms, setopenListForms] = React.useState(false);

  const handleClickListForms = () => {
    setopenListForms(!openListForms);
  };

  // Заголовок
  const listItem_Home = (
    <Link href="/[lang]" as={`/${locale}`}>
      <ListItem
        title={t("drawer_Home")}
        className={classes.listItem}
        button
        onClick={onClose} //onClose-Після натискання закриває Drawer
        // component="a"
        // href="/"
        // data-testid="link-to-home"
      >
        <ListItemIcon>
          <HomeIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="subtitle2">{t("drawer_Home")}</Typography>
      </ListItem>
    </Link>
  );

  const listItem_AboutMe = (
    <Link href="/[lang]/about-me" as={`/${locale}/about-me`}>
      <ListItem
        title={t("drawer_AboutMe")} //Підказка
        className={classes.listItem}
        button
        onClick={onClose}
      >
        <ListItemIcon>
          <InfoIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="subtitle2">{t("drawer_AboutMe")}</Typography>
      </ListItem>
    </Link>
  );

  const headerList = (
    <List>
      {listItem_Home}
      {listItem_AboutMe}
    </List>
  );
  //** */
  const footerList = (
    // <List component="nav">
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {/* //"drawerExternalBloc": "зовнішній" */}
          {t("drawer_blocExternal")}
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem
        className={classes.listItem}
        button
        onClick={onClose}
        component="a"
        href="https://github.com/didoshakra"
        title="npm-registry-browser on github"
      >
        <ListItemIcon>
          <img
            src="/social/github-retina.png"
            className={classes.listIcon}
            alt="github"
          />
        </ListItemIcon>
        {/* <ListItemText primary="Github" /> */}
        <Typography variant="subtitle2">Github</Typography>
      </ListItem>

      <ListItem
        className={classes.listItem}
        button
        onClick={onClose}
        component="a"
        href="https://stackoverflow.com/users/10482596/%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD?tab=profile"
        title="@topheman on stackoverflow"
      >
        <ListItemIcon>
          <WifiIcon className={(classes.svgColor, classes.listIcon)} />
        </ListItemIcon>
        {/* <ListItemText primary="Stackoverflow" /> */}
        <Typography variant="subtitle2">Stackoverflow</Typography>
      </ListItem>

      <ListItem
        className={classes.listItem}
        button
        onClick={onClose}
        component="a"
        href="https://www.facebook.com/profile.php?id=100004339204236"
        title="@topheman on facebook"
      >
        <ListItemIcon>
          <img
            src="/social/facebook-f-64-grow.png"
            className={classes.listIcon}
            alt="facebook"
          />
        </ListItemIcon>
        {/* <ListItemText primary="Facebook" /> */}
        <Typography variant="subtitle2">Facebook</Typography>
      </ListItem>

      <ListItem
        className={classes.listItem}
        button
        onClick={onClose}
        component="a"
        href="https://twitter.com/DidoshakR"
        title="@topheman on twitter"
      >
        <ListItemIcon>
          <img
            src="/social/twitter-retina.png"
            className={classes.listIcon}
            alt="twitter"
          />
        </ListItemIcon>
        {/* <ListItemText primary="Twitter" /> */}
        <Typography variant="subtitle2">Twitter</Typography>
      </ListItem>
    </List>
  );
  //** */
  //З док MUI4.6.1
  const appList = (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {/* //Заголовок блоку List//"drawerAppBloc": "додатки" */}
          {t("drawer_blocApp")}
        </ListSubheader>
      }
      className={classes.root}
    >
      {/* окремий пункт(Item)  */}
      <Link href="/[lang]/post-list-awesom" as={`/${locale}/post-list-awesom`}>
        <ListItem
          className={classes.listItem}
          button
          onClick={onClose}
          title={t("drawer_titleBlogAwesome")}
          // component="a"
          // href="/post-list-awesom"
        >
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          {/* <ListItemText primary={t("drawerBlog")} /> */}
          <Typography variant="subtitle2">{t("drawer_BlogAwesome")}</Typography>
        </ListItem>
      </Link>
      {/* окремий пункт(Item)  */}
      <Link href="/[lang]/post-list-batman" as={`/${locale}/post-list-batman`}>
        <ListItem
          className={classes.listItem}
          button
          onClick={onClose}
          title={t("drawer_titleBlogBatman")}
          // component="a"
          // href="/post-list-batman"
        >
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="subtitle2">{t("drawer_BlogBatman")}</Typography>
        </ListItem>
      </Link>
      {/* Блок з вивадаючим меню */}
      <ListItem button onClick={handleClickListAppWork}>
        <ListItemIcon>
          <InboxIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="subtitle2">{t("drawer_blocExamples")}</Typography>
        {/* випадаюче меню */}
        {openListAppWork ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openListAppWork} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* пункт випадпючого меню */}
          <Link
            href="/[lang]/examples/example-mui-button"
            as={`/${locale}/examples/example-mui-button`}
          >
            <ListItem
              button
              // className={classes.nested}
              onClick={onClose}
              component="a"
              // href="/examples/example-mui-button"
            >
              {/* <ListItemIcon>
              <StarBorder fontSize="small" />
            </ListItemIcon> */}
              <Typography variant="body2">ex-mui-button</Typography>
            </ListItem>
          </Link>

          {/* пункт випадпючого меню */}
          <Link
            href="/[lang]/examples/example-create-next-app"
            as={`/${locale}/examples/example-create-next-app`}
          >
            <ListItem
              button
              // className={classes.nested}
              onClick={onClose}
              component="a"
              // href="/examples/example-create-next-app"
            >
              <Typography variant="body2">ex-create-next-app</Typography>
            </ListItem>
          </Link>
        </List>
      </Collapse>
    </List>
  );

  const drawer = (
    <>
      <div className={classes.toolbarIe11}>
        <div className={classes.toolbar}>
          <Link href="/[lang]" as={`/${locale}`}>
            <ListItem
              button
              className={classes.title}
              // className={classes.nested}
              onClick={onClose}
              component="a"
            >
              <Typography className={classes.title} variant="h6">
                {t("drawer_Site")}
              </Typography>
            </ListItem>
            {/* {t("drawer_Site")} */}
          </Link>
          v.1.2
        </div>
      </div>
      <Divider />
      {headerList}
      <Divider />
      {appList}
      <Divider />
      {footerList}
    </>
  );

  return (
    <nav className={className} aria-label={t("mainNavigation")}>
      {/* Hidden - для адапивного дизайну */}
      {/* disableBackdropTransition - для бюджетних мобілок(відповідати на касання з частотою 60 кадрі/секунду) */}
      {/* lgUp={!disablePermanent}-ДЛЯ МАЛИХ ЕКРАНІВ //disablePermanent-Відключити Постійно */}
      {/* //Бокове меню відкривається і закривається ariant="temporary" */}
      <Hidden lgUp={!disablePermanent} implementation="js">
        <SwipeableDrawer
          classes={{
            paper: clsx(classes.paper, "algolia-drawer")
          }}
          disableBackdropTransition={!iOS}
          variant="temporary"
          open={mobileOpen}
          onOpen={onOpen}
          onClose={onClose}
          ModalProps={{
            keepMounted: true
          }}
        >
          {drawer}
        </SwipeableDrawer>
      </Hidden>
      {/* //Бокове меню постійно відкрите  variant="permanent" */}
      {disablePermanent ? null : (
        <Hidden mdDown implementation="css">
          <Drawer
            classes={{
              paper: classes.paper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      )}
    </nav>
  );
}

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  disablePermanent: PropTypes.bool.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired
};

// export default withStyles(styles)(AppDrawer);
export default AppDrawer;
