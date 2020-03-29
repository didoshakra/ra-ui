//HeaderAppMenu.js

import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";
import LocaleSwitcher from "./LocaleSwitcher";

const HeaderAppMenu = () => {
  const { t } = useTranslation();
  const { state, dispatch } = useContext(ComponentContext);
  const { theme } = state;
  const [appMenuOpen, setAppMenuOpen] = React.useState(false);

  const appMenuToggle = () => {
    setAppMenuOpen(!appMenuOpen);
  };

  return (
    <div className="menu-icon">
      {/* іконка App */}
      <a className="icon">
        <FontAwesomeIcon
          icon={faTh}
          title={t("headerMenu_iconTitleApp")}
          onClick={appMenuToggle}
        />
      </a>
      <ul className="dropdown-content">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <style jsx>{`
        .menu-icon {
          margin: 0;
          padding: 0;
          //display: flex;
          //justify-content: flex-end; /* Вирівнювання елементів по головній осі(x) вправо */
          align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
          list-style-type: none; /**Отменяет маркеры для списка. */
          //
          position: relative;
          display: inline-block;
        }
        .icon {
          margin: 0;
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
        .icon:hover {
          color: ${theme.colors.textHeadHover};
          background: ${theme.colors.textBackgroundHeadHover};
          //cursor: pointer;
        }
        //
        /*.dropdown-content {
          //показується раптово
          padding: 0;
          margin: 0;
          display: ${appMenuOpen ? "block" : "none"};
          right: 0px;
          min-width: 100px;
          overflow: auto; //якщо не поміщається
          border-radius: 3px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          position: absolute;
          //z-index: 1;
          background: ${theme.colors.backgroundHeadMenu};

        }*/
       /*.dropdown-content {
          //плавно проявляється (opacity 0.5s)
          padding: 0;
          margin: 0;
          right: 0px;
          min-width: 100px;
          overflow: auto; //якщо не поміщається
          border-radius: 3px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          position: absolute;
         opacity: ${appMenuOpen ? "1" : "0"};
         transition: opacity 0.5s linear;
          //visibility: ${appMenuOpen ? "visible" : "hidden"};
          //transition:  visibility 0s, opacity 0.5s linear;
          background: ${theme.colors.backgroundHeadMenu};
        }*/
        .dropdown-content {
          //плавно виїжджає
          border-radius: 0 0 5px 5px;
          padding: 0 0 5px 0;//Щоб зробити заокруглення (border-radius)
          margin: 0;
          right: 0px;
          min-width: 100px;
          max-height: : 150px;
          top: -150px;
          //overflow: auto; //якщо не поміщається
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          position: absolute;
          transform: ${appMenuOpen ? "translateY(200px)" : "translateY(0px)"};
         transition: transform 0.5s linear;
         z-index: -1;
         background: ${theme.colors.backgroundHeadMenu};
        }

        .dropdown-content li {
          margin: 0;
          padding: 0px 5px;
          display: block;
          text-decoration: none;
          font-family: ${theme.fontFamily.serif};
          font-size: 18px; //Рукавичка
          font-weight: 100; //грубина
          color: ${theme.colors.textHead};
        }

        .dropdown-content li:hover {
          color: ${theme.colors.textHeadHover};
          background: ${theme.colors.textBackgroundHeadHover};
        }
      `}</style>
    </div>
  );
};

export default HeaderAppMenu;
