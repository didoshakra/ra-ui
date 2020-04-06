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

  //***Для клацання поза обєктом
  const wrapperRef = useRef(null); //Для клацання поза обєктом
  useOutsideAlerter(wrapperRef); //Для клацання поза обєктом
  function useOutsideAlerter(ref) {
    //*** Для клацання поза елементом Решение с React ^ 16.8 с использованием хуков
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        //Якщо поза елементом
        //alert("Ти клацнув поза мною!");
        // langMenuToggle(); //Погано-спрацьвує від іншого обєкту
        if (langMenuOpen) {
          setLangMenuOpen(false); //Закриваєм меню
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

  const langMenuOpenToggle = () => {
    // if (!langMenuOpen) {
    setLangMenuOpen(!langMenuOpen);
    // }
    // console.log("langMenuToggle/langMenuOpen=", langMenuOpen);
  };

  return (
    <div ref={wrapperRef} className="localeSwitcherIcon">
      {/* <div className="localeSwitcherIcon"> */}
      {/* іконка */}
      <a className="localeSwitcherIcon__icon" onClick={langMenuOpenToggle}>
        <FontAwesomeIcon
          icon={faGlobe}
          title={t("headerMenu_iconTitleLanguage")}
        />
      </a>
      {/* Випадаюче меню */}
      <LocaleSwitcherDroop
        langMenuOpen={langMenuOpen}
        setLangMenuOpen={setLangMenuOpen}
      />
      <style jsx>{`
        .localeSwitcherIcon {
          position: relative;
          //position: absolute;
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
