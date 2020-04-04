//HeaderSeting.js
//Випадаюче меню з  menuList
//Не працює не зміг передати onClickTogle(назву ф-ції) в onClick

import React, { useContext, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTh,
  faMoon,
  faSun,
  faGlobe,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import { ComponentContext } from "../../context/ComponentContext";
import useTranslation from "../../translations/useTranslation";
import HeaderAppMenu from "./HeaderAppMenu";

const HeaderSeting = () => {
  const { t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const { theme, themeTypeLight } = state;
  const [setingMenuOpen, setSetingMenuOpen] = React.useState(false);
  const [appMenuOpen, setAppMenuOpen] = React.useState(false);

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
          setSetingMenuOpen(false); //Закриваєм меню
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

  const menuList = [
    {
      name: "Додатки",
      icon: <FontAwesomeIcon icon={faTh} />,
      onClickTogle: "appMenuToggle"
    },
    {
      name: "Теми",
      icon: <FontAwesomeIcon icon={themeTypeLight ? faSun : faMoon} />,
      onClickTogle: "appMenuToggle"
    },
    {
      name: "Мови",
      icon: <FontAwesomeIcon icon={faGlobe} />,
      onClickTogle: "appMenuToggle"
    }
  ];

  const appMenuToggle = () => {
    setAppMenuOpen(!appMenuOpen);
    console.log("appMenuToggle/appMenuOpen=", appMenuOpen);
  };

  const setingMenuToggle = () => {
    setSetingMenuOpen(!setingMenuOpen);
    // console.log("setingMenuToggle/setingMenuOpen=", setingMenuOpen);
  };

  const setingSelectToggle = e => {
    setingMenuToggle; //Закриваєм меню
    const newSeting = menuList[e.currentTarget.dataset.index].open;
    console.log("AppMenu.js/appSelectToggle/newSeting=", newSeting);
    {
      newSeting;
    }
    // dispatch({ type: "APP", payload: newApp }); //Змінюємо state.theme
  };

  const renderMenu = () => {
    // return locales.map((item, index) => {
    return menuList.map((item, index) => {
      return (
        <li
          data-index={index} //data-index->e.currentTarget.dataset.index
          className="g-nav__item"
          // onClick={setingSelectToggle}
          onClick={item.onClickTogle}
          // onClick={appMenuToggle}
        >
          {/* <FontAwesomeIcon icon={faSun} /> */}
          {/* <img className="ls--items" src={item.icon} alert="icon" /> */}
          <a className="ls--items">{item.onClickTogle}</a>
          <a className="ls--items">{item.icon}</a>
          <a className="ls--items">{item.name}</a>
        </li>
      );
    });
  };

  return (
    <div ref={wrapperRef} className="menu-icon">
      {/* іконка seting*/}
      <a className="icon">
        <FontAwesomeIcon
          icon={faCog}
          title={t("headerMenu_iconTitleSeting")}
          onClick={setingMenuToggle}
        />
      </a>
      {/* App меню*/}
      {appMenuOpen ? <HeaderAppMenu /> : ""}
      {/* список головного меню */}
      <ul className="dropdown-content">{renderMenu()}</ul>

      <style jsx global>{`
        .ls--items {
          margin-left: 10px;
          padding: 0;
          align-items: center; //Y Вирівнювання
        }
      `}</style>
      <style jsx>{`
        .menu - icon {
          position: relative;
          margin: 0;
          padding: 0;
        }
        .icon {
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
        .icon:hover {
          color: ${theme.colors.headIconHover};
          background: ${theme.colors.headIconBackgroundHover};
          cursor: pointer;
        }
        .dropdown-content {
          //плавно проявляється (opacity 0.5s)
          position: absolute;
          //top: 5px;
          //left: 5px;
          //right: 5px;
          display: block; /*Блок по ширині контенту+float: left*/
          float: left; /*Блок по ширині контенту+display: block*/
          margin: 0;
          padding: 0;
          //min-width: 200px;
          border-radius: 3px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          opacity: ${setingMenuOpen ? "1" : "0"};
          transition: opacity 0.5s linear;
          background: ${theme.colors.headMenuBackground};
        }
      `}</style>
    </div>
  );
};

export default HeaderSeting;
