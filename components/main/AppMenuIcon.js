//AppMenuIcon.js //
//Іконка мови окремо (випадаючий список викликається)

import React, { useContext, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import { ComponentContext } from "../../context/ComponentContext";
import useTranslation from "../../translations/useTranslation";
import AppMenuDroop from "./AppMenuDroop";

const AppMenuIcon = () => {
  const { t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const { theme } = state;
  const [appMenuOpen, setAppMenuOpen] = React.useState(false);

  //***Для клацання поза обєктом
  const wrapperRef = useRef(null); //Для клацання поза обєктом
  useOutsideAlerter(wrapperRef); //Для клацання поза обєктом
  function useOutsideAlerter(ref) {
    //*** Для клацання поза елементом Решение с React ^ 16.8 с использованием хуков
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        //Якщо поза елементом
        //alert("Ти клацнув поза мною!");
        // appMenuToggle(); //Погано-спрацьвує від іншого обєкту
        if (appMenuOpen) {
          setAppMenuOpen(false); //Закриваєм меню
        }
      }
    }
    useEffect(() => {
      // Прив’яжіть прослуховувач події
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("scroll", handleClickOutside); //Для скролу
      return () => {
        // Від’єднайте слухача події під час очищення
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("scroll", handleClickOutside);
      };
    });
  }

  const appMenuOpenToggle = () => {
    // if (!appMenuOpen) {
    setAppMenuOpen(!appMenuOpen);
    // }
    // console.log("appMenuToggle/appMenuOpen=", appMenuOpen);
  };

  return (
    <div ref={wrapperRef} className="appMenuIcon">
      {/* <div className="appMenuIcon"> */}
      {/* іконка */}
      <a className="appMenuIcon__icon" onClick={appMenuOpenToggle}>
        <FontAwesomeIcon icon={faTh} title={t("headerMenu_iconTitleappuage")} />
      </a>
      {/* Випадаюче меню */}
      <AppMenuDroop appMenuOpen={appMenuOpen} setAppMenuOpen={setAppMenuOpen} />

      <style jsx>{`
        .appMenuIcon {
          position: relative;
          //position: absolute;
          margin: 0;
          padding: 0;
          //align-items: center; /* Вирівнювання елементів по (y) */
          list-style-type: none; /*маркери для списка. */
        }
        .appMenuIcon__icon {
          margin: 0;
          margin-right: 5px; //Відступ від кожного елемента зліва
          display: flex;
          align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
          justify-content: center; /* Вирівнювання елементів по головній осі(x) вправо */
          color: ${theme.colors.headIcon};
          background: ${theme.colors.headBackground};
          //border: 2px solid ${theme.colors.headIcon}; /* Параметры границы */
          border: ${theme.colors.headIconBorderWidht} ${theme.colors.headIconBorderStyle} ${theme.colors.headIcon}; /* Параметры границы */
          //border-radius: 45px; /* Радіус*/
          border-radius: 36px; /* Радіус*/
          width: 36px;
          height: 36px;
        }
        .appMenuIcon__icon:hover {
          color: ${theme.colors.headIconHover};
          background: ${theme.colors.headIconBackgroundHover};
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default AppMenuIcon;
