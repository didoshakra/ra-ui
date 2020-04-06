//HeaderAppMenu.js

import React, { useContext, useRef, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";

const HeaderAppMenu = () => {
  const { locale, t } = useTranslation();
  const { state, dispatch } = useContext(ComponentContext);
  const { theme, app } = state;
  const [appMenuOpen, setAppMenuOpen] = React.useState(false);

  //Для клацання поза обєктом
  //Добавити в контрольований об'єкт-(ref={wrapperRef})- (<ul ref={wrapperRef}... )
  const wrapperRef = useRef(null); //Для клацання поза обєктом
  useOutsideAlerter(wrapperRef); //Для клацання поза обєктом
  function useOutsideAlerter(ref) {
    // console.log("HeaderAppMenu.JS/useOutsideAlerter(ref)");
    //*** Для клацання поза елементом Решение с React ^ 16.8 с использованием хуков
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        //Якщо поза елементом
        //alert("Ти клацнув поза мною!");
        if (appMenuOpen) {
          setAppMenuOpen(false); //Закриваєм меню
        }
      }
    }
    useEffect(() => {
      // Додаєм(привязуєм) прослуховувач події
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("scroll", handleClickOutside); //Для скролу
      return () => {
        // Від’єднайте слухача події під час очищення
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("scroll", handleClickOutside);
      };
    });
  }

  const menu = [
    {
      a: "home_hoer",
      link: "/",
    },
    {
      a: "home_video",
      link: "/home_video",
    },
    {
      a: "home_animet",
      link: "/home_animet",
    },
    {
      a: "home_MUI",
      link: "/home_MUI",
    },
    {
      a: "home_stan",
      link: "/home_stan",
    },
    {
      a: t("headerMenu_iconTitleAboutME"),
      link: "/about",
    },
  ];
  const appMenuToggle = () => {
    setAppMenuOpen(!appMenuOpen);
    // console.log("appMenuToggle/appMenuOpen=", appMenuOpen);
  };
  const appSelectToggle = (e) => {
    appMenuToggle(); //Закриваєм меню
    //setAppMenuOpen(false); //Закриваєм меню
    //   e.currentTarget.dataset.index // !!! не e.target, а e.currentTarget
    // const i = e.currentTarget.dataset.index;
    const newApp = menu[e.currentTarget.dataset.index].a;
    // setApp(newApp);
    console.log("AppMenu.js/appSelectToggle/newApp=", newApp);
    dispatch({ type: "APP", payload: newApp }); //Змінюємо state.theme
  };

  const renderMenu = () => {
    return menu.map((item, index) => {
      return (
        <li
          data-index={index} //data-ХХ->Для передачі даних в e.currentTarget.dataset.XX
          className={
            item.a === app
              ? "headerAppMenu__dropdown__item--active"
              : "headerAppMenu__dropdown__item"
          }
          onClick={appSelectToggle}
        >
          <Link href={`/[lang]${item.link}`} as={`/${locale}${item.link}`}>
            {/* <a className="HeaderAppMenu__nav-item-a">{item.a}</a> */}
            <p>{item.a}</p>
          </Link>
        </li>
      );
    });
  };

  return (
    <div ref={wrapperRef} className="headerAppMenu" onClick={appMenuToggle}>
      {/* іконка App */}
      <a className="headerAppMenu__icon">
        <FontAwesomeIcon icon={faTh} title={t("headerMenu_iconTitleApp")} />
      </a>
      <ul className="headerAppMenu__dropdown">{renderMenu()}</ul>

      <style jsx global>{`
        //RA-Глобальні стилі для елементів headerMenu
        .headerAppMenu__dropdown__item {
          margin: 0;
          padding: 0; //Щоб зробити заокруглення
          padding: 5px 10px; //Щоб зробити заокруглення
          font-size: 18px; //Рукавичка
          font-weight: 100; //грубина
          font-family: ${theme.fontFamily.serif};
          list-style-type: none; /**Отменяет маркеры для списка. */
          text-decoration: none;
          color: ${theme.colors.headText};
          background: ${theme.colors.headBackground};
        }
        .headerAppMenu__dropdown__item:hover,
        .headerAppMenu__dropdown__item--active:hover {
          color: ${theme.colors.headTextHover};
          background: ${theme.colors.headTextBackgroundHover};
          cursor: pointer;
        }
        .headerAppMenu__dropdown__item--active {
          margin: 0;
          padding: 5px 10px;
          display: block;
          //text-decoration: none;
          font-family: ${theme.fontFamily.serif};
          font-size: 18px; //Рукавичка
          font-weight: 100; //грубина
          color: ${theme.colors.headTextHover};
          background: ${theme.colors.headMenuBackgroundActive};
        }
      `}</style>
      <style jsx>{`
        .headerAppMenu {
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
        .headerAppMenu__icon {
          margin: 0;
          margin-right: 5px; //Відступ від кожного елемента зліва
          display: flex;
          align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
          justify-content: center; /* Вирівнювання елементів по головній осі(x) вправо */
          color: ${theme.colors.headIcon};
          background: ${theme.colors.headBackground};
          border: 2px solid ${theme.colors.headIcon}; /* Параметры границы */
          border-radius: 36px; /* Радіус*/
          width: 36px;
          height: 36px;
        }
        .headerAppMenu__icon:hover {
          color: ${theme.colors.headIconHover};
          background: ${theme.colors.headIconBackgroundHover};
          cursor: pointer;
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
          background: ${theme.colors.headMenuBackground};

        }*/
        .headerAppMenu__dropdown {
          //плавно виїжджає
          position: absolute;
          display: block; //Блок по ширині контенту
          float: left; //Блок по ширині контентуleft:-110px;//працює лівий край від  лівого краю об'єкту
          top: -200px;
          left:-20px;
          padding: 0;
          margin: 0;
         //min-width: 100px;
          //max-height: : 150px;
          //overflow: auto; //якщо не поміщається
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          border-radius: 0 0 5px 5px;
          transform: ${appMenuOpen ? "translateY(100%)" : "translateY(0px)"};
          transition: transform 0.5s linear;
          z-index: -1;
          background: ${theme.colors.headMenuBackground};
        }
      `}</style>
    </div>
  );
};

export default HeaderAppMenu;
