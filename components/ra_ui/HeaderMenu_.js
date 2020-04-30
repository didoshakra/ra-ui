//HeaderMenu.js //Після розділення на HeaderMenu+HeaderSeting
//Горизонтальне меню що згортається в іконку яка викликає
//HeaderMenuDroop-випадаюче меню

//список меню з масиву menu

import React, { useContext } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";
import HeaderMenuDroop from "./HeaderMenuDroop";

const HeaderMenu = () => {
  const { locale, t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const { theme } = state;
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const mobileMenuToggle = (arg) => {
    setMobileMenuOpen(arg);
    // console.log("Menu.js/mobileMenuOpen2/arg =", arg);
  };

  const menu = [
    {
      a: "home_hover",
      link: "/",
    },
    {
      a: "home_video",
      link: "/ra_ui/home_video",
    },
    {
      a: "home_animet",
      link: "/ra_ui/home_animet",
    },
    {
      a: "home_MUI",
      link: "/ra_ui/home_MUI",
    },
  ];

  const renderMenu = () => {
    return menu.map((item, index) => {
      return (
        <li className="headerMenu__menu__item--goriz" key={index}>
          <Link href={`/[lang]${item.link}`} as={`/${locale}${item.link}`}>
            {/* <p className="g-nav__item-a">{item.a}</p> */}
            <a>{item.a}</a>
          </Link>
        </li>
      );
    });
  };

  return (
    // Навігація
    <div className="headerMenu">
      {/* для десктопа */}
      <ul className="headerMenu__menu">{renderMenu()}</ul>
      {/* Мобільна навігація*/}
      <div className="headerMenu__menu__icon">
        {/* іконка мобільного меню/faList/ */}
        <i
          onClick={() => mobileMenuToggle(mobileMenuOpen ? false : true)}
          title={t("headerMenu_iconTitleNavMenu")}
        >
          <FontAwesomeIcon icon={faList} />
        </i>
      </div>
      {/* Список мобильної навігації */}
      <HeaderMenuDroop
        mobileMenuOpen={mobileMenuOpen}
        mobileMenuToggle={mobileMenuToggle}
        // renderMenu={renderMenu}
        menu={menu}
      />

      <style jsx global>{`
        .headerMenu__menu__item--goriz {
          margin: 0;
          padding: 0; //Щоб зробити заокруглення
          padding: 5px 10px; //Щоб зробити заокруглення
          list-style-type: none; /**Отменяет маркеры для списка. */
          font-size: 18px; //Рукавичка
          font-weight: 100; //грубина
          font-family: ${theme.fontFamily.serif};
          text-decoration: none;
          color: ${theme.colors.headText};
          background: ${theme.colors.headBackground};
        }
        .headerMenu__menu__item--goriz:hover {
          border-bottom: 4px solid ${theme.colors.headMenuBackgroundGorizActive}; /* Параметры линии внизу */
        }
      `}</style>

      <style jsx>{`
        .headerMenu {
          display: flex;
          margin: 0;
          padding: 0;
          height: 64px;
          align-items: center; /* Вирівнювання елементів по перетину осі(y) центр*/
        }
        .headerMenu__menu {
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: flex-end; /* Вирівнювання елементів по головній осі(x) вправо */
          align-items: center; /* Вирівнювання елементів по перетину осі(y) центр*/
        }
        /* --- Mobile navigation icon -- */
        .headerMenu__menu__icon {
          display: none;
          //z-index: 19;
        }
        .headerMenu__menu__icon:hover {
          color: ${theme.colors.headIconHover};
          background: ${theme.colors.headIconBackgroundHover};
          cursor: pointer;
        }
        /* Для екранів з шириною  0 до 1200px */
        //@media (max-width: 1200px) {
        @media (max-width: 960px) {
          /*iPad<960px*/
          .headerMenu__menu {
            display: none; /*не показує */
          }

          .headerMenu__menu__icon {
          margin: 0;
          margin-right: 5px; //Відступ від кожного елемента зліва
          display: flex;
          align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
          justify-content: center; /* Вирівнювання елементів по головній осі(x) вправо */
          color: ${theme.colors.headIcon};
          background: ${theme.colors.headBackground};
          //border: 2px solid ${theme.colors.headIcon}; /* Параметры границы */
          border: ${theme.colors.headIconBorderWidht}
            ${theme.colors.headIconBorderStyle} ${theme.colors.headIcon}; /* Параметры границы */ //border-radius: 45px; /* Радіус*/
          border-radius: 36px; /* Радіус*/
          width: 36px;
          height: 36px;
        }
      `}</style>
    </div>
  );
};

export default HeaderMenu;
