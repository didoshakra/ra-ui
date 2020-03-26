//Праве меню з написами і їконками/змінюється при зменшенні
//Селектор мови/Дві теми-іконки(themeTypeLight)

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
import myDropdown from "../navigation/myDropdown";
// import HeaderSeting from "./HeaderSeting"

const HeaderMenu = () => {
  const { locale, t } = useTranslation();
  const { state, dispatch } = useContext(ComponentContext);
  const { theme, themeTypeLight } = state;
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [langMenuOpen, setLangMenuOpen] = React.useState(false);
  // const [myDropdownOpen, setMyDropdownOpen] = React.useState(true);

  const langMenuToggle = () => {
    setLangMenuOpen(!langMenuOpen);
  };

  // const myDropdownToggle = () => {
  //   setMyDropdownOpen(!myDropdown);
  // };

  //Використаємо старі змінні для 2-х тем setThemeMenuOpen='true'-theme: light
  const themeMenuToggle = () => {
    var newTheme = "light";
    if (themeTypeLight) {
      newTheme = "dark";
    }
    // console.log("HeaderMenu.js/newTheme=", newTheme);
    dispatch({ type: "THEME", payload: newTheme }); //Змінюємо state.theme
  };

  const mobileMenuToggle = arg => {
    setMobileMenuOpen(arg);
    console.log("Menu.js/mobileMenuOpen2/arg =", arg);
  };

  const links = [
    {
      a: "home_hoer",
      link: "/"
    },
    {
      a: "home_video",
      link: "/home_video"
    },
    {
      a: "home_animet",
      link: "/home_animet"
    },
    {
      a: "home_MUI",
      link: "/home_MUI"
    },
    {
      a: "home_stan",
      link: "/home_stan"
    }
    // {
    //   a: t("headerMenu_iconTitleAboutME"),
    //   link: "/about"
    // }
  ];

  const renderLinks = () => {
    return links.map((item, index) => {
      console.log("item.link", item.link);
      return (
        <li className="nav__item" key={index}>
          <Link href={`/[lang]${item.link}`} as={`/${locale}${item.link}`}>
            <a className="nav__item-a">{item.a}</a>
          </Link>
        </li>
      );
    });
  };

  return (
    // Навігація
    <React.Fragment>
      {/* для десктопа */}
      <ul className="nav">{renderLinks()}</ul>
      {/* Мобільна навігація*/}
      <div className="menu-icon">
        {/* іконка мобільного меню/faList/ */}
        <i
          className="icon"
          onClick={() => mobileMenuToggle(mobileMenuOpen ? false : true)}
          title={t("headerMenu_iconTitleNavMenu")}
        >
          <FontAwesomeIcon icon={faList} />
        </i>
      </div>
      {/* Список мобильної навігації */}
      <MobileNav
        mobileMenuOpen={mobileMenuOpen}
        mobileMenuToggle={mobileMenuToggle}
        renderLinks={renderLinks}
      />
      <style jsx global>{`
        .nav__item {
          margin-right: 20px; //відступи зправа
          //margin: 10px;
          padding: 0px;
          list-style-type: none; /**Отменяет маркеры для списка. */
        }

        /*last-child останній елемент*/
        .nav__item:last-child {
          margin-right: 5px; //відступи зправа
        }
        /*a {*/
        .nav__item-a {
          margin: 0;
          color: ${theme.colors.textHead};
          background: ${theme.colors.backgroundHead};
          font-family: ${theme.fontFamily.serif};
          font-size: 18px; //Рукавичка
          font-weight: 100; //шрубина
        }

        .nav__item-a:hover {
          color: rgba(238, 136, 49, 1);
        }
      `}</style>
      <style jsx>{`
        .nav {
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: flex-end; /* Вирівнювання елементів по головній осі(x) вправо */
          align-items: center; /* Вирівнювання елементів по перетину осі(y) центр*/
        }
        /* --- Mobile navigation icon -- */
        .menu-icon {
          display: none;
          //z-index: 19;
        }
        /* Для екранів з шириною  0 до 1200px */

        /*@media (max-width: 1200px) {*/
        @media (max-width: 960px) {
          /*iPad<960px*/
          .nav {
            display: none; /*Временно удаляет элемент из документа */
          }
          .menu-icon {
            display: flex;
            justify-content: flex-end; /* Вирівнювання елементів по головній осі(x) вправо */
            align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
          }
          .icon {
            padding: 0px;
            margin-right: 5px; //відступи зправа
            align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
            color: ${theme.colors.textHead};
            background: ${theme.colors.backgroundHead};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default HeaderMenu;
