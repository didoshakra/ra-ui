//Праве меню з написами і їконками/змінюється при зменшенні
//Два селекти-на мову і темуw
import React, { useContext } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faMoon,
  faSun,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
import LocaleSwitcher from "./LocaleSwitcher";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";
import MobileNav from "../navigation/MobileNav";

const HeaderMenu = () => {
  const { locale, t } = useTranslation();
  const { state, dispatch } = useContext(ComponentContext);
  const theme = state.theme;
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = React.useState(false);
  const [langMenuOpen, setLangMenuOpen] = React.useState(false);

  const langMenuToggle = () => {
    setLangMenuOpen(!langMenuOpen);
  };

  //Використаємо старі змінні для 2-х тем setThemeMenuOpen='true'-theme: light
  const themeMenuToggle = () => {
    var newTheme = "light";
    if (!themeMenuOpen) {
      newTheme = "dark";
    }
    console.log("HeaderMenu.js/newTheme=", newTheme);
    setThemeMenuOpen(!themeMenuOpen);
    dispatch({ type: "THEME", payload: newTheme }); //Змінюємо state.theme
  };

  const mobileMenuToggle = arg => {
    setMobileMenuOpen(arg);
    // setMobileMenuOpen(!mobileMenuOpen);
    console.log("Menu.js/mobileMenuOpen2/arg =", arg);
  };

  return (
    // Навігація
    <React.Fragment>
      {/* для десктопа */}
      <ul className="nav">
        {/* <li className="nav__item">
          <SwitcherExample />
        </li> */}

        <li className="nav__item">
          <Link href="/[lang]" as={`/${locale}`}>
            {/* <a>{t("headerMenu_iconTitleHomeIcon")}</a>  */}
            <a>home_hoer</a>
          </Link>
        </li>

        <li className="nav__item">
          <Link href="/[lang]/home_video" as={`/${locale}/home_video`}>
            {/* <a>{t("headerMenu_iconTitlePromotions")}</a> */}
            <a>home_video</a>
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/[lang]/home_animet" as={`/${locale}/home_animet`}>
            {/* <a>{t("headerMenu_iconTitlePromotions")}</a> */}
            <a>home_animet</a>
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/[lang]/home_mui" as={`/${locale}/home_mui`}>
            {/* <a>{t("headerMenu_iconTitlePromotions")}</a> */}
            <a>home_MUI</a>
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/[lang]/home_stan" as={`/${locale}/home_stan`}>
            {/* <a>{t("headerMenu_iconTitlePromotions")}</a> */}
            <a>home_stan</a>
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/[lang]/about" as={`/${locale}/about`}>
            <a>{t("headerMenu_iconTitleAboutME")}</a>
          </Link>
        </li>
        {/* іконка теми */}
        <i
          className="nav__item"
          title={t("headerMenu_iconTitleTheme")}
          onClick={themeMenuToggle}
        >
          {themeMenuOpen ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </i>
        {/* іконка мови */}
        <i className="nav__item" title={t("headerMenu_iconTitleLanguage")}>
          <FontAwesomeIcon icon={faGlobe} onClick={langMenuToggle} />
        </i>
      </ul>
      {/* Мобіцльна навігація*/}
      <div className="menu-icon">
        {/* іконк мобільного меню/гамбургер/ */}
        <i
          className="icon"
          onClick={() => mobileMenuToggle(mobileMenuOpen ? false : true)}
          title={t("headerMenu_iconTitleNavMenu")}
        >
          {/* <FontAwesomeIcon icon={faBars} /> */}
          <FontAwesomeIcon icon={faList} />
        </i>
        {/* іконка теми */}
        <i
          className="icon"
          title={t("headerMenu_iconTitleTheme")}
          onClick={themeMenuToggle}
        >
          {themeMenuOpen ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </i>
        {/* іконка мови */}
        <i className="icon">
          <FontAwesomeIcon
            icon={faGlobe}
            title={t("headerMenu_iconTitleLanguage")}
            onClick={langMenuToggle}
          />
        </i>
      </div>

      {/* випадаючий список мови-select */}
      {langMenuOpen ? <LocaleSwitcher langMenuToggle={langMenuToggle} /> : ""}
      {/* Список мобильної навігації */}
      <MobileNav
        mobileMenuOpen={mobileMenuOpen}
        mobileMenuToggle={mobileMenuToggle}
      />

      <style jsx>{`
        /* ------------ Desktop navigation ----------- */
        .nav {
          list-style-type: none; /**Отменяет маркеры для списка. */
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: flex-end; /* Вирівнювання елементів по головній осі(x) вправо */
          /*align-items: center; /* Вирівнювання елементів по перетину осі(y) центр??? Коли забрав то вирівняло */
        }
        /* Условие для экранов с шириной от 0 до 1200px */
        @media (max-width: 1200px) {
          .nav {
            display: none; /*Временно удаляет элемент из документа */
          }
        }

        .nav__item {
          margin-right: 20px; //відступи зправа
          margin: 10px;
          padding: 0px;
        }

        //last-child останній елемент
        .nav__item:last-child {
          margin-right: 10px; //відступи зправа
        }

        /* --------------- Mobile navigation button ----------- */
        .menu-icon {
          display: none;
          z-index: 19;
        }

        /* Для екранів з шириною  0 до 1200px */

        @media (max-width: 1200px) {
          .menu-icon {
            display: flex;
            /* justify-content: center; */
            justify-content: flex-end; /* Вирівнювання елементів по головній осі(x) вправо */
            align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
          }
          .icon {
            //margin: 5px;
            padding: 0px;
            margin-right: 5px; //відступи зправа
            align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
          }
        }
        .nav a,
        i {
          color: ${theme.colors.textHead};
          background: ${theme.colors.backgroundHead};
          font-family: ${theme.fontFamily.serif};
          //font-family: Blogger Sans; //Рукавичка
          font-size: 18px; //Рукавичка
          font-weight: 100; //шрубина
        }
        .nav a:hover {
          color: #ffd600;
        }
      `}</style>
    </React.Fragment>
  );
};

export default HeaderMenu;
