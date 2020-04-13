//appMenuDroop.js
//Саме випадаюче меню мови

import React, { useContext, useRef, useEffect } from "react";
import Link from "next/link";
import { ComponentContext } from "../../context/ComponentContext";
import useTranslation from "../../translations/useTranslation";

const appMenuDroop = (props) => {
  const { locale, t } = useTranslation();
  const { state, dispatch } = useContext(ComponentContext);
  const { theme, app } = state;

  // console.log("appMenuDroop/props.appMenuOpen=", props.appMenuOpen);f

  const menu = [
    {
      a: "ra_ui",
    },
    {
      a: "mag_stan",
    },
    {
      a: "examples",
    },
  ];

  const renderMenu = () => {
    return menu.map((item, index) => {
      return (
        <li
          data-index={index} //data-ХХ->Для передачі даних в e.currentTarget.dataset.XX
          className={
            item.a === app
              ? "appMenuDroop__menu__item--active"
              : "appMenuDroop__menu__item"
          }
          onClick={appSelectToggle}
        >
          {/* <Link href={`/[lang]${item.link}`} as={`/${locale}${item.link}`}> */}
          <p>{item.a}</p>
          {/* </Link> */}
        </li>
      );
    });
  };

  const appSelectToggle = (e) => {
    props.setAppMenuOpen(false);
    const newApp = menu[e.currentTarget.dataset.index].a;
    // console.log("AppMenu.js/appSelectToggle/newApp=", newApp);
    dispatch({ type: "APP", payload: newApp }); //Змінюємо state.theme
  };

  return (
    <div className="appMenuDroop">
      <ul className="appMenuDroop__menu">{renderMenu()}</ul>

      <style jsx global>{`
        .appMenuDroop__menu__item {
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
        .appMenuDroop__menu__item:hover,
        .appMenuDroop__menu__item--active:hover {
          color: ${theme.colors.headTextHover};
          background: ${theme.colors.headTextBackgroundHover};
          cursor: pointer;
        }
        .appMenuDroop__menu__item--active {
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
        .appMenuDroop__menu__item-a {
          margin-left: 5px;
      `}</style>
      <style jsx>{`
        .appMenuDroop {
          position: relative;
          margin: 0;
          padding: 0;
        }
        .appMenuDroop__menu {
          //плавно проявляється (opacity 0.5s)
          position: absolute; //Щоб працювали(top,bottom,left,right) материнський блок обовязково = position: relative;
          display: inline-block; //-(сам)Блок по ширині контенту
          //display: block; //+(з float: left;) Блок по ширині контенту
          //float: left; //+(з display: block)Блок по ширині контенту
          padding: 0;
          margin: 0;
          //min-width: 150px;//якщо не працює display: inline-block(переносить слова)
          //bottom: -220px; //Від нижнього краю обох об'єктів()((+)вверх,(-)вниз)
          top: -0px; //Від верхнього краю обох об'єктів((+)вниз,(-)вверх)
          right: 0px; //Від правого краю обох об'єктів((+)вліво,(-)впрво/лівий край:(-)виходить за материнський блок (+)не виходить поки дозволяє розмір(включається перенос в стовбець не зважаючи на display: inline-block)
          //left: -140px; //Від лівого краю обох об'єктів((+)вправо,(-)вліво/)правий край:(-)виходить за материнський блок (+)не виходить  поки дозволяє розмір(включається перенос в стовбець не зважаючи на display: inline-block)
          //overflow: visible; //якщо не поміщається(відображається/auto-полоса прокрутки)
          border-radius: 5px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          opacity: ${props.appMenuOpen ? "1" : "0"};
          z-index: ${props.appMenuOpen ? "1" : "-2"};
          transition: z-index 0.5s, opacity 0.5s linear;
          background: ${theme.colors.headMenuBackground};
        }
        /*.appMenuDroop__menu {
          //плавно виїжджає
          position: absolute;
          display: block; //Блок по ширині контенту
          float: left; //Блок по ширині контентуleft:-110px;//працює лівий край від  лівого краю об'єкту
          top: -250px;
          left:-20px;
          padding: 0;
          margin: 0;
         //min-width: 100px;
          //max-height: : 150px;
          //overflow: auto; //якщо не поміщається
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          border-radius: 0 0 5px 5px;
          transform: ${
            props.appMenuOpen ? "translateY(100%)" : "translateY(0px)"
          };
          transition: transform 0.5s linear;
          z-index: -1;
          background: ${theme.colors.headMenuBackground};
        }*/
      `}</style>
    </div>
  );
};

export default appMenuDroop;
