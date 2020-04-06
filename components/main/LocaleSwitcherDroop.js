//LocaleSwitcherDroop.js
//Саме випадаюче меню мови

import React, { useContext, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { locales } from "../../translations/config";
import { ComponentContext } from "../../context/ComponentContext";
import useTranslation from "../../translations/useTranslation";

const LocaleSwitcherDroop = (props) => {
  const router = useRouter();
  const { t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const { theme, locale } = state;
  console.log("LocaleSwitcherDroop/props.langMenuOpen=", props.langMenuOpen);

  //Зміна locfle/ React.useCallback!!!???
  const handleLocaleChange = React.useCallback(
    (e) => {
      props.setLangMenuOpen(false); //Закриваєм меню
      //langMenuToggle(); //Закриває меню
      const newLocale = localesList[e.currentTarget.dataset.index].loc;
      // console.log("LocaleSwitcher.js/newLocale=", newLocale);
      const regex = new RegExp(`^/(${locales.join("|")})`);
      router.push(
        router.pathname,
        router.asPath.replace(regex, `/${newLocale}`)
      );
    },
    [router]
  );

  const localesList = [
    {
      loc: "uk",
      name: "Українська",
      flag: "/flags/flag_ukraine-20.jpg",
    },
    {
      loc: "en",
      name: "English",
      flag: "/flags/flag_usa-20.jpg",
    },
    {
      loc: "pl",
      name: "Polski",
      flag: "/flags/flag_poland-20.jpg",
    },
  ];
  const renderMenu = () => {
    return localesList.map((item, index) => {
      return (
        <li
          data-index={index} //data-ХХ->Для передачі даних в e.currentTarget.dataset.XX
          className={
            item.loc === locale
              ? "localeSwitcherDroop__menu__item--active"
              : "localeSwitcherDroop__menu__item"
          }
          onClick={handleLocaleChange}
        >
          <a className="localeSwitcherDroop__menu__item-a">{item.loc}</a>
          <img
            className="localeSwitcherDroop__menu__item-a"
            src={item.flag}
            alert="flag"
          />
          <a className="localeSwitcherDroop__menu__item-a">{item.name}</a>
        </li>
      );
    });
  };

  return (
    <div className="localeSwitcherDroop">
      <ul className="localeSwitcherDroop__menu">{renderMenu()}</ul>
      <style jsx global>{`
        //RA-Глобальні стилі для елементів headerMenu
        .localeSwitcherDroop__menu__item {
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
        .localeSwitcherDroop__menu__item:hover,
        .localeSwitcherDroop__menu__item--active:hover {
          color: ${theme.colors.headTextHover};
          background: ${theme.colors.headTextBackgroundHover};
          cursor: pointer;
        }
        .localeSwitcherDroop__menu__item--active {
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
        .localeSwitcherDroop__menu__item-a {
          margin-left: 5px;
      `}</style>
      <style jsx>{`
        .ocaleSwitcherDroop {
          position: relative;
          margin: 0;
          padding: 0;
        }
        .localeSwitcherDroop__menu {
          //плавно проявляється (opacity 0.5s)
          position: absolute; /*Щоб працювали(top,bottom,left,right) материнський блок обовязково = position: relative;*/
          display: inline-block; //-(сам)Блок по ширині контенту
          //display: block; //+(з float: left;) Блок по ширині контенту
          //float: left; //+(з display: block)Блок по ширині контенту
          padding: 0;
          margin: 0;
          //min-width: 150px;
          //top: 10px; //Від верхнього краю обох об'єктів((+)вниз,(-)вверх)
          //bottom: -20px; //Від нижнього краю обох об'єктів()((+)вверх,(-)вниз)
          left: -150px; //Від лівого краю обох об'єктів((+)вправо,(-)вліво/)правий край:(-)виходить за материнський блок (+)не виходить  поки дозволяє розмір(включається перенос в стовбець не зважаючи на display: inline-block)
          //right: 0px; //Від правого краю обох об'єктів((+)вліво,(-)впрво/лівий край:(-)виходить за материнський блок (+)не виходить поки дозволяє розмір(включається перенос в стовбець не зважаючи на display: inline-block)
          //overflow: visible; //якщо не поміщається(відображається/auto-полоса прокрутки)
          border-radius: 5px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          opacity: ${props.langMenuOpen ? "1" : "0"};
          z-index: ${props.langMenuOpen ? "1" : "-2"};
          transition: z-index 0.5s, opacity 0.5s linear;
          background: ${theme.colors.headMenuBackground};
        }
      `}</style>
    </div>
  );
};

export default LocaleSwitcherDroop;
