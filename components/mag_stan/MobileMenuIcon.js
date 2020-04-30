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
    <div className="mobileMenu__droop__icon">
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
        /* --- Mobile navigation icon -- */
        .mobileMenu__droop__icon {
          display: none;
          //z-index: 19;
        }

        @media (max-width: 960px) {
          .mobileMenu__droop__icon {
          margin: 0;
          margin-right: 5px; //Відступ від кожного елемента зліва
          display: flex;
          align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
          justify-content: center; /* Вирівнювання елементів по головній осі(x) вправо */
          color: ${theme.colors.headMobileIcon};
            background: ${theme.colors.headMobileBackground};
          //border: 2px solid ${theme.colors.headIcon}; /* Параметры границы */
          border: ${theme.colors.headIconBorderWidht}
            ${theme.colors.headIconBorderStyle} ${theme.colors.headIcon}; /* Параметры границы */ //border-radius: 45px; /* Радіус*/
          border-radius: 36px; /* Радіус*/
          width: 36px;
          height: 36px;
          }
          .mobileMenu__droop__icon:hover {
            color: ${theme.colors.headIconHover};
            background: ${theme.colors.headIconBackgroundHover};
            cursor: pointer;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileMenuIcon;
