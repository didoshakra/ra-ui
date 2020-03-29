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
  const [langMenuOpen, setLangMenuOpen] = React.useState(false);

  const langMenuToggle = () => {
    setLangMenuOpen(!langMenuOpen);
  };

  return (
    <ul className="menu-icon">
      {/* іконка App */}
      <li className="icon">
        <FontAwesomeIcon
          icon={faTh}
          title={t("headerMenu_iconTitleLanguage")}
          onClick={langMenuToggle}
        />
      </li>
      {/* випадаючий список мови-select */}
      {langMenuOpen ? <LocaleSwitcher langMenuToggle={langMenuToggle} /> : ""}
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
          padding: 0px;
          margin-right: 5px; //відступи зправа
          align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
          /**/
          color: ${theme.colors.textHead};
          background: ${theme.colors.backgroundHead};
        }
        .icon:hover {
          color: ${theme.colors.textHeadHover};
        }
      `}</style>
    </ul>
  );
};

export default HeaderAppMenu;
