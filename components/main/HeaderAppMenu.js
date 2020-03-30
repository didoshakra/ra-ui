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
  // const [app, setApp] = React.useState("home_video");

  const appMenuToggle = () => {
    setAppMenuOpen(!appMenuOpen);
  };

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
      link: "/"
    },
    {
      a: "home_video",
      link: "/home_video"
    },
    {
      a: "home_animet",
      link: "/home_animet"
    },
    {
      a: "home_MUI",
      link: "/home_MUI"
    },
    {
      a: "home_stan",
      link: "/home_stan"
    },
    {
      a: t("headerMenu_iconTitleAboutME"),
      link: "/about"
    }
  ];
  const appSelectToggle = e => {
    // console.log("AppMenu.js/appSelectToggle/e.target.dataset.index=",
    //   e.currentTarget.dataset.index // !!! не e.target, а e.currentTarget
    // );
    // setApp(menu[e.currentTarget.dataset.index+1].a);
    const i = e.currentTarget.dataset.index;
    const newApp = menu[i].a;
    // setApp(newApp);
    console.log("AppMenu.js/appSelectToggle/newApp=", newApp);
    dispatch({ type: "APP", payload: newApp }); //Змінюємо state.theme
  };
  const renderMenu = () => {
    return menu.map((item, index) => {
      return (
        <li
          data-index={index} //data-ХХ->Для передачі даних в e.currentTarget.dataset.XX
          className={item.a === app ? "nav__item__active" : "nav__item"}
          onClick={appSelectToggle}
        >
          <Link href={`/[lang]${item.link}`} as={`/${locale}${item.link}`}>
            <a className="nav__item-a">{item.a}</a>
          </Link>
        </li>
      );
    });
  };

  return (
    <div ref={wrapperRef} className="menu-icon">
      {/* іконка App */}
      <a className="icon">
        <FontAwesomeIcon
          icon={faTh}
          title={t("headerMenu_iconTitleApp")}
          onClick={appMenuToggle}
        />
      </a>
      <ul className="dropdown-content">{renderMenu()}</ul>
      <style jsx global>{`
        .nav__item {
          margin: 0;
          padding: 5px10px;
          display: block;
          text-decoration: none;
          font-family: ${theme.fontFamily.serif};
          font-size: 18px; //Рукавичка
          font-weight: 100; //грубина
          color: ${theme.colors.textHead};
        }

        .nav__item:hover {
          color: ${theme.colors.textHeadHover};
          background: ${theme.colors.textBackgroundHeadHover};
        }
        .nav__item__active {
          margin: 0;
          padding: 5px 10px;
          display: block;
          //text-decoration: none;
          font-family: ${theme.fontFamily.serif};
          font-size: 18px; //Рукавичка
          font-weight: 100; //грубина
          color: ${theme.colors.textHead};
          //
          background: red;
          color: white;
        }
      `}</style>
      <style jsx>{`
        .menu-icon {
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
        .icon {
          margin: 0;
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
          background: ${theme.colors.backgroundHeadMenu};

        }*/
       /*.dropdown-content {
          //плавно проявляється (opacity 0.5s)
          padding: 0;
          margin: 0;
          right: 0px;
          min-width: 100px;
          overflow: auto; //якщо не поміщається
          border-radius: 3px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          position: absolute;
         opacity: ${appMenuOpen ? "1" : "0"};
         transition: opacity 0.5s linear;
          //visibility: ${appMenuOpen ? "visible" : "hidden"};
          //transition:  visibility 0s, opacity 0.5s linear;
          background: ${theme.colors.backgroundHeadMenu};
        }*/
        .dropdown-content {
          //плавно виїжджає
          border-radius: 0 0 5px 5px;
          padding: 0 0 5px 0;//Щоб зробити заокруглення (border-radius)
          margin: 0;
          right: 0px;
          min-width: 100px;
          top: -200px;
          //max-height: : 150px;
          //overflow: auto; //якщо не поміщається
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          position: absolute;
          transform: ${appMenuOpen ? "translateY(100%)" : "translateY(0px)"};
         transition: transform 0.5s linear;
         z-index: -1;
         background: ${theme.colors.backgroundHeadMenu};
        }
      `}</style>
    </div>
  );
};

export default HeaderAppMenu;
