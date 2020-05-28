//HeaderMenu.js/ra-ui //Після розділення на HeaderMenu+HeaderSeting
//first-mobile
//Горизонтальне меню що згортається в іконку яка викликає
//HeaderMenuDroop-випадаюче меню

//список меню з масиву menu

import React, { useContext } from "react";
import Link from "next/link";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";

const HeaderMenu = (props) => {
  const { locale, t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const { theme } = state;

  const renderMenu = () => {
    return props.menu.map((item, index) => {
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
      {/* Меню для десктопа */}
      <ul className="headerMenu__menu">{renderMenu()}</ul>

      <style jsx global>{`
        a {
          //text-decoration: none; /**Відміняє підкреслення для Linc<a> */
          font-size: 18px; //Рукавичка
          font-weight: 100; //грубина
          font-family: ${theme.fontFamily.serif};
          text-decoration: none;
          color: ${theme.colors.headText};
        }
        .headerMenu__menu__item--goriz {
          margin: 0;
          padding: 0; //Щоб зробити заокруглення
          padding: 5px 10px; //Щоб зробити заокруглення
          list-style-type: none; /**Отменяет маркеры для списка. */

          background: ${theme.colors.headBackground};
        }
        .headerMenu__menu__item--goriz:hover {
          border-bottom: 4px solid ${theme.colors.headMenuBackgroundGorizActive}; /* Параметры линии внизу */
        }
      `}</style>

      <style jsx>{`
        //first-mobile
        .headerMenu {
          display: none;
        }

        @media (min-width: 960px) {
          .headerMenu {
            display: flex;
            margin: 0;
            padding: 0;
            height: 64px;
            align-items: center; // Вирівнювання елементів по перетину осі(y) центр
          }
          .headerMenu__menu {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: flex-end; // Вирівнювання елементів по головній осі(x) вправо
            align-items: center; // Вирівнювання елементів по перетину осі(y) центр
          }
        }
      `}</style>
    </div>
  );
};

export default HeaderMenu;
