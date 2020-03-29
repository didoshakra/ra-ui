//HeaderMenu.js//Селектор мови+Дві теми-іконки(themeTypeLight)
//Після розділення на HeaderMenu+HeaderSeting
//список меню з масиву links

import React, { useContext } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";
import HeaderMenuMobile from "./HeaderMenuMobile";

const HeaderMenu = () => {
  const { locale, t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const { theme } = state;
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const mobileMenuToggle = arg => {
    setMobileMenuOpen(arg);
    // console.log("Menu.js/mobileMenuOpen2/arg =", arg);
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
    },
    {
      a: t("headerMenu_iconTitleAboutME"),
      link: "/about"
    }
  ];

  const renderLinks = () => {
    return links.map((item, index) => {
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
      <div className="icon">
        {/* іконка мобільного меню/faList/ */}
        <i
          onClick={() => mobileMenuToggle(mobileMenuOpen ? false : true)}
          title={t("headerMenu_iconTitleNavMenu")}
        >
          <FontAwesomeIcon icon={faList} />
        </i>
      </div>
      {/* Список мобильної навігації */}
      <HeaderMenuMobile
        mobileMenuOpen={mobileMenuOpen}
        mobileMenuToggle={mobileMenuToggle}
        renderLinks={renderLinks}
      />
      <style jsx global>{`
        .nav__item {
          //margin-right: 20px; //відступи зправа
          //margin: 10px;
          //padding: 10px;
          list-style-type: none; /**Отменяет маркеры для списка. */
          //
        }

        /*last-child останній елемент*/
        /*.nav__item:last-child {
          margin-right: 5px; //відступи зправа
        }*/
        /*a {*/
        .nav__item-a {
          margin: 0;
          padding: 10px 10px;
          color: ${theme.colors.textHead};
          //background: ${theme.colors.backgroundHead};
          font-family: ${theme.fontFamily.serif};
          font-size: 18px; //Рукавичка
          font-weight: 100; //грубина
        }

        .nav__item-a:hover {
          color: ${theme.colors.textHeadHover};
          background: ${theme.colors.textBackgroundHeadHover};
        }
      `}</style>
      <style jsx>{`
        .nav {
          //margin: 0;
          //padding: 0;
          display: flex;
          justify-content: flex-end; /* Вирівнювання елементів по головній осі(x) вправо */
          align-items: center; /* Вирівнювання елементів по перетину осі(y) центр*/
        }
        /* --- Mobile navigation icon -- */
        .icon {
          display: none;
          //z-index: 19;
        }
        .icon :hover {
          color: ${theme.colors.textHeadHover};
          background: ${theme.colors.textBackgroundHeadHover};
        }
        /* Для екранів з шириною  0 до 1200px */
        //@media (max-width: 1200px) {
        @media (max-width: 960px) {
          /*iPad<960px*/
          .nav {
            display: none; /*не показує */
          }

          .icon {
            //margin-left: 10px; //Відступ від кожного елемента зліва
            display: flex;
            align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
            justify-content: center; /* Вирівнювання елементів по головній осі(x) вправо */
            color: ${theme.colors.textHead};
            background: ${theme.colors.backgroundHead};
            border-radius: 45px; /* Радіус*/
            width: 45px;
            height: 45px;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default HeaderMenu;
