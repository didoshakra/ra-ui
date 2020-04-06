//LocaleSwitcherIcon.js //
//Іконка мови окремо (випадаючий список викликається)

import React, { useContext, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { ComponentContext } from "../../context/ComponentContext";
import useTranslation from "../../translations/useTranslation";
import LocaleSwitcherDroop from "./LocaleSwitcherDroop";

const LocaleSwitcherIcon = () => {
  const { t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const { theme } = state;
  const [langMenuOpen, setLangMenuOpen] = React.useState(false);

  const langMenuOpenToggle = () => {
    if (!langMenuOpen) {
      setLangMenuOpen(true);
    }
    // console.log("langMenuToggle/langMenuOpen=", langMenuOpen);
  };

  return (
    <div className="localeSwitcherIcon">
      {/* іконка App */}
      <a className="localeSwitcherIcon__icon" onClick={langMenuOpenToggle}>
        <FontAwesomeIcon
          icon={faGlobe}
          title={t("headerMenu_iconTitleLanguage")}
        />
      </a>
      <LocaleSwitcherDroop
        langMenuOpen={langMenuOpen}
        setLangMenuOpen={setLangMenuOpen}
      />
      <style jsx>{`
        .localeSwitcherIcon {
          position: relative;
          //display: inline-block;
          margin: 0;
          padding: 0;
          //align-items: center; /* Вирівнювання елементів по (y) */
          list-style-type: none; /*маркери для списка. */
        }
        .localeSwitcherIcon__icon {
          margin: 0;
          margin-right: 5px; //Відступ від кожного елемента зліва
          display: flex;
          align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
          justify-content: center; /* Вирівнювання елементів по головній осі(x) вправо */
          color: ${theme.colors.headIcon};
          background: ${theme.colors.headBackground};
          border: 2px solid ${theme.colors.headIcon}; /* Параметры границы */
          //border-radius: 45px; /* Радіус*/
          border-radius: 36px; /* Радіус*/
          width: 36px;
          height: 36px;
        }
        .localeSwitcherIcon__icon:hover {
          color: ${theme.colors.headIconHover};
          background: ${theme.colors.headIconBackgroundHover};
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default LocaleSwitcherIcon;
