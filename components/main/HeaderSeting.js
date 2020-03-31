//HeaderSeting //Зміна мови і теми

import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faGlobe } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";
import LocaleSwitcher from "./LocaleSwitcher";

const HeaderSeting = () => {
  const { t } = useTranslation();
  const { state, dispatch } = useContext(ComponentContext);
  const { theme, themeTypeLight } = state;
  // const [langMenuOpen, setLangMenuOpen] = React.useState(false);

  // const langMenuToggle = () => {
  //   setLangMenuOpen(!langMenuOpen);
  // };

  const themeMenuToggle = () => {
    var newTheme = "light";
    if (themeTypeLight) {
      newTheme = "dark";
    }
    // console.log("HeaderMenu.js/newTheme=", newTheme);
    dispatch({ type: "THEME", payload: newTheme }); //Змінюємо state.theme
  };

  return (
    <ul className="menu-icon">
      {/* іконка зміни теми */}
      <li
        className="icon"
        title={t("headerMenu_iconTitleTheme")}
        onClick={themeMenuToggle}
      >
        {themeTypeLight ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </li>

      {/* іконка+випадаючий список мови-select */}
      <LocaleSwitcher />

      <style jsx>{`
        .menu-icon {
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: flex-end; /* Вирівнювання елементів по головній осі(x) вправо */
          align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
          list-style-type: none; /**Отменяет маркеры для списка. */
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
        .icon:hover {
          color: ${theme.colors.textHeadHover};
          background: ${theme.colors.textBackgroundHeadHover};
          //cursor: pointer;
        }
      `}</style>
    </ul>
  );
};

export default HeaderSeting;
