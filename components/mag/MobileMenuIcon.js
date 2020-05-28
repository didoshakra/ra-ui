//MobileMenuIcon.js //Після розділення на HeaderMenu+HeaderSeting
//Іконка яка викликає MobileMenuDroop-випадаюче меню

import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";

const MobileMenuIcon = (props) => {
  const { t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const { theme } = state;

  return (
    // Навігація
    <div className="mobileMenuIcon">
      {/* іконка мобільного меню/faList/ */}
      <i
        onClick={() =>
          props.mobileMenuToggle(props.mobileMenuOpen ? false : true)
        }
        title={t("headerMenu_iconTitleNavMenu")}
      >
        <FontAwesomeIcon icon={faList} />
      </i>

      <style jsx>{`
        .mobileMenu__droop__icon {
          margin: 0;
          margin-right: 5px; //Відступ від кожного елемента зліва
          display: flex;
          align-items: center; //Вирівнювання елементів по перетину осі(y) центр
          justify-content: center; // Вирівнювання елементів по головній осі(x) вправо
          color: ${theme.colors.headIcon};
          background: ${theme.colors.headIconBackground};
          border: ${theme.colors.headIconBorderWidht}
            ${theme.colors.headIconBorderStyle} ${theme.colors.headIcon};
          border-radius: 36px;
          width: 36px;
          height: 36px;
        }
        .mobileMenu__droop__icon:hover {
          color: ${theme.colors.headIconHover};
          background: ${theme.colors.headIconBackgroundHover};
          cursor: pointer;
        }
        @media (min-width: 960px) {
          .mobileMenu__droop__icon {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileMenuIcon;
