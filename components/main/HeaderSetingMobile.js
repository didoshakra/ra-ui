//HeaderSetingMobile.js
//Випадаюче шестерня меню без  menuList

import React, { useContext, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTh,
  faMoon,
  faSun,
  faGlobe,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { ComponentContext } from "../../context/ComponentContext";
import useTranslation from "../../translations/useTranslation";
// import HeaderAppMenu from "./HeaderAppMenu";
import LocaleSwitcherDroop from "./LocaleSwitcherDroop";

const HeaderSetingMobile = () => {
  const { t } = useTranslation();
  const { state, dispatch } = useContext(ComponentContext);
  const { theme, themeTypeLight } = state;
  const [setingMenuOpen, setSetingMenuOpen] = React.useState(false);
  const [appMenuOpen, setAppMenuOpen] = React.useState(false);
  const [langMenuOpen, setLangMenuOpen] = React.useState(false);
  //Для клацання поза обєктом
  const wrapperRef = useRef(null); //Для клацання поза обєктом
  useOutsideAlerter(wrapperRef); //Для клацання поза обєктом
  function useOutsideAlerter(ref) {
    //*** Для клацання поза елементом Решение с React ^ 16.8 с использованием хуков
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        //Якщо поза елементом
        // alert("Ти клацнув поза мною!");
        // MenuToggle(); //Погано-спрацьвує від іншого обєкту
        if (setingMenuOpen) {
          setSetingMenuOpen(false); //Закриваєм меню Seting
        }
        if (langMenuOpen) {
          setLangMenuOpen(false); //Закриваєм меню Lang
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

  const setingMenuToggle = () => {
    setSetingMenuOpen(!setingMenuOpen);
    if (langMenuOpen) {
      setLangMenuOpen(false); //Закриваєм меню Lang
    }
    // console.log("setingMenuToggle/setingMenuOpen=", setingMenuOpen);
  };

  const themeMenuToggle = () => {
    var newTheme = "light";
    if (themeTypeLight) {
      newTheme = "dark";
    }
    // console.log("HeaderMenu.js/newTheme=", newTheme);
    dispatch({ type: "THEME", payload: newTheme }); //Змінюємо state.theme
  };

  const langMenuOpenToggle = () => {
    setLangMenuOpen(!langMenuOpen);
    // console.log("HeaderSetingMobile.js/langMenuOpenTagle=", appMenuOpen);
  };

  const appMenuToggle = () => {
    setAppMenuOpen(!appMenuOpen);
    console.log("appMenuToggle/appMenuOpen=", appMenuOpen);
  };

  return (
    <div ref={wrapperRef} className="headerSetingMobile">
      {/* іконка seting*/}
      <a className="headerSetingMobile__icon" onClick={setingMenuToggle}>
        <FontAwesomeIcon icon={faCog} title={t("headerMenu_iconTitleSeting")} />
      </a>
      {/* App меню*/}
      {/* {appMenuOpen ? <HeaderAppMenu /> : ""} */}
      {/* список головного меню */}
      <ul className="headerSetingMobile__dropdown">
        <li
          className="headerSetingMobile__dropdown__item"
          onClick={appMenuToggle}
        >
          <FontAwesomeIcon icon={faTh} />
          <a className="headerSetingMobile__dropdown__item__a">Додатки</a>
        </li>
        <li
          className="headerSetingMobile__dropdown__item"
          onClick={themeMenuToggle}
        >
          <FontAwesomeIcon icon={themeTypeLight ? faSun : faMoon} />
          <a className="headerSetingMobile__dropdown__item__a">Теми</a>
        </li>
        <li
          className="headerSetingMobile__dropdown__item"
          onClick={langMenuOpenToggle}
        >
          <FontAwesomeIcon icon={faGlobe} />
          <LocaleSwitcherDroop
            langMenuOpen={langMenuOpen}
            setLangMenuOpen={setLangMenuOpen}
          />
          <a className="headerSetingMobile__dropdown__item__a">Мови</a>
        </li>
      </ul>
      <style jsx>{`
        .headerSetingMobile {
          position: relative;
          //display: inline-block;
          margin: 0;
          padding: 0;
        }
        .headerSetingMobile__icon {
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
        .headerSetingMobile__icon:hover {
          color: ${theme.colors.headIconHover};
          background: ${theme.colors.headIconBackgroundHover};
          cursor: pointer;
        }
        .headerSetingMobile__dropdown {
          //плавно проявляється (opacity 0.5s)
          position: absolute;
          display: block; //+Блок по ширині контенту
          float: left; //+Блок по ширині контентуleft:-110px;//працює лівий край від  лівого краю об'єкту
          padding: 0;
          margin: 0;
          width: 150px;
          //top: 20px; //+Працює
          //bottom: -20px;
          left: -110px; //+Працює
          //min-width: 100px;
          //overflow: auto; //якщо не поміщається
          border-radius: 3px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          opacity: ${setingMenuOpen ? "1" : "0"};
          z-index: ${setingMenuOpen ? "1" : "-2"};
          transition: z-index 0.5s, opacity 0.5s linear;
          background: ${theme.colors.headMenuBackground};
        }
      `}</style>
      <style jsx>{`
        .headerSetingMobile__dropdown__item {
          display: flex;
          //position: relative;
          margin: 0;
          padding: 0; //Щоб зробити заокруглення
          padding: 5px 10px; //Щоб зробити заокруглення
          font-size: 18px; //Рукавичка
          font-weight: 100; //грубина
          font-family: ${theme.fontFamily.serif};
          list-style-type: none; /**Отменяет маркеры для списка. */
          align-items: center; //Y Вирівнювання
          text-decoration: none;
          color: ${theme.colors.headText};
          background: ${theme.colors.headBackground};
        }
        .headerSetingMobile__dropdown__item:hover {
          color: ${theme.colors.headTextHover};
          background: ${theme.colors.headTextBackgroundHover};
          cursor: pointer;
        }
        .headerSetingMobile__dropdown__item__a {
          margin-left: 10px;
          padding: 0;
          align-items: center; //Y Вирівнювання
        }
      `}</style>
    </div>
  );
};

export default HeaderSetingMobile;
