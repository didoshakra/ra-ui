//Drawer.js
//Для кожного APP інший

import React, { useContext, useRef, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";

const Drawer = () => {
  const { locale, t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const { theme } = state;
  const [drawerMenuOpen, setDrawerMenuOpen] = React.useState(false);

  //Для клацання поза обєктом
  //Добавити в контрольований об'єкт-(ref={wrapperRef})- (<ul ref={wrapperRef}... )
  const wrapperRef = useRef(null); //Для клацання поза обєктом
  useOutsideAlerter(wrapperRef); //Для клацання поза обєктом
  function useOutsideAlerter(ref) {
    // console.log("DrawerMenu.JS/useOutsideAlerter(ref)");
    //*** Для клацання поза елементом Решение с React ^ 16.8 с использованием хуков
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        //Якщо поза елементом
        //alert("Ти клацнув поза мною!");
        if (drawerMenuOpen) {
          setDrawerMenuOpen(false); //Закриваєм меню
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
      a: "home_hover",
      link: "/ra/home_hover",
    },
    {
      a: "home_video",
      link: "/ra/home_video",
    },
    {
      a: "home_animet",
      link: "/ra/home_animet",
    },
    {
      a: "home_MUI",
      link: "/ra/home_MUI",
    },
  ];

  const drawerMenuToggle = () => {
    setDrawerMenuOpen(!drawerMenuOpen);
    // console.log("appMenuToggle/appDrawerOpen=", drawerMenuOpen);
  };

  const renderMenu = () => {
    return menu.map((item, index) => {
      return (
        <li className="drawer_item">
          <Link href={`/[lang]${item.link}`} as={`/${locale}${item.link}`}>
            {/* <a className="g-nav__item-a">{item.a}</a> */}
            <p>{item.a}</p>
          </Link>
        </li>
      );
    });
  };

  return (
    <div ref={wrapperRef} className="drawer">
      {/* іконка App */}
      <a
        className="drawer_icon"
        title={t("headerMenu_iconTitleDrawer")}
        onClick={drawerMenuToggle}
      >
        {drawerMenuOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </a>
      <ul className="drawer_dropdown">{renderMenu()}</ul>
      <style jsx global>
        {`
          //RA-Глобальні стилі для елементів headerMenu
          .drawer_item {
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
          .drawer_item:hover {
            color: ${theme.colors.headTextHover};
            background: ${theme.colors.headTextBackgroundHover};
          }
        `}
      </style>
      <style jsx>{`
        .drawer {
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
        .drawer_icon {
          margin: 0;
          margin-left: 10px; //Відступ від кожного елемента зліва
          display: flex;
          align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
          justify-content: center; /* Вирівнювання елементів по головній осі(x) вправо */
          color: ${theme.colors.headIcon};
          background: ${theme.colors.headBackground};
          //border: 2px solid ${theme.colors.headIcon}; /* Параметры границы */
          //border-radius: 45px; /* Радіус*/
          border: ${theme.colors.headIconBorderWidht} ${
        theme.colors.headIconBorderStyle
      } ${theme.colors.headIcon}; /* Параметры границы */
          border-radius: 36px; /* Радіус*/
          width: 36px;
          height: 36px;
        }
        .drawer_icon:hover {
          color: ${theme.colors.headIconHover};
          background: ${theme.colors.headIconBackgroundHover};
          cursor: pointer;
        }
        //
        /*Drawer--menu__dropdown--content {
          //показується раптово
          padding: 0;
          margin: 0;
          display: ${drawerMenuOpen ? "block" : "none"};
          right: 0px;
          min-width: 100px;
          overflow: auto; //якщо не поміщається
          border-radius: 3px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          position: absolute;
          //z-index: 1;
          background: ${theme.colors.headMenuBackground};

        }*/
        /*Drawer--menu__dropdown--content {
          //плавно виїжджає зверху зліва-> вниз вправо
          border: 0 0 5px 5px;
          border-radius: 0 0 5px 5px;
          padding: 0 0 5px 0;//Щоб зробити заокруглення (border-radius)
          margin: 0;
          left: -150px;
          top: -200px;
          width:150px;
          height: 250px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          position: absolute;
          transform: ${
            drawerMenuOpen ? "translate(100%,100%)" : "translate(0px,0px)"
          };
          transition: transform 0.5s linear;
          z-index: -1;
          background: ${theme.colors.headMenuBackground};
        }*/
        .drawer_dropdown {
          //плавно збільшується зверху зліва-> вниз вправо
          position: absolute;
          //overflow:auto;//Дає прокрутку по висоті
          overflow: hidden; //Обрізаєм все, що не влізає в область */
          border: 0 0 5px 5px;
          border-radius: 0 0 5px 5px;
          padding: 0 0 5px 0;//Щоб зробити заокруглення (border-radius)
          margin: 0;
          left: 0px;
          top: 50px;
          width: ${drawerMenuOpen ? "150px" : "0px"};
          height: ${drawerMenuOpen ? "160px" : "0px"};
          //box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          transition: width 1s, height 1s;
          z-index: -1;
          background: ${theme.colors.headMenuBackground};
        }
      `}</style>
    </div>
  );
};

export default Drawer;
