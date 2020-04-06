//LocaleSwitcherDroop.js
//Саме випадаюче меню мови

import React, { useContext, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { locales, languageNames } from "../../translations/config";
import { ComponentContext } from "../../context/ComponentContext";
import useTranslation from "../../translations/useTranslation";

const LocaleSwitcherDroop = (props) => {
  const router = useRouter();
  const { t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const { theme, locale } = state;
  console.log("LocaleSwitcherDroop/props.langMenuOpen=", props.langMenuOpen);

  //React.useCallback!!!???
  const handleLocaleChange = React.useCallback(
    (e) => {
      props.setLangMenuOpen(false); //Закриваєм меню
      //langMenuToggle(); //Закриває меню
      const newLocale = localesList[e.currentTarget.dataset.index].loc;
      // const newLocale = e.currentTarget.dataset.index;
      // console.log("LocaleSwitcher.js/newLocale=", newLocale);
      const regex = new RegExp(`^/(${locales.join("|")})`);
      router.push(
        router.pathname,
        // router.asPath.replace(regex, `/${e.target.value}`)
        router.asPath.replace(regex, `/${newLocale}`)
      );
    },
    [router]
  );

  //Для клацання поза обєктом
  const wrapperRef = useRef(null); //Для клацання поза обєктом
  useOutsideAlerter(wrapperRef); //Для клацання поза обєктом
  function useOutsideAlerter(ref) {
    //*** Для клацання поза елементом Решение с React ^ 16.8 с использованием хуков
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        //Якщо поза елементом
        //alert("Ти клацнув поза мною!");
        // langMenuToggle(); //Погано-спрацьвує від іншого обєкту
        if (props.langMenuOpen) {
          props.setLangMenuOpen(false); //Закриваєм меню
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
      // return locales.map((item) => {
      return (
        <li
          data-index={index} //data-ХХ->Для передачі даних в e.currentTarget.dataset.XX
          className={
            item.loc === locale
              ? "localeSwitcherDroop__item--active"
              : "localeSwitcherDroop__item"
          }
          onClick={handleLocaleChange}
        >
          <a className="localeSwitcherDroop__item-a">{item.loc}</a>
          <img
            className="localeSwitcherDroop__item-a"
            src={item.flag}
            alert="flag"
          />
          <a className="localeSwitcherDroop__item-a">{item.name}</a>
        </li>
      );
    });
  };

  return (
    <div ref={wrapperRef} className="localeSwitcherDroop">
      <ul className="localeSwitcherDroop">{renderMenu()}</ul>
      <style jsx global>{`
        //RA-Глобальні стилі для елементів headerMenu
        .localeSwitcherDroop__item {
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
        .localeSwitcherDroop__item:hover,
        .localeSwitcheDroopr__item--active:hover {
          color: ${theme.colors.headTextHover};
          background: ${theme.colors.headTextBackgroundHover};
          cursor: pointer;
        }
        .localeSwitcherDroop__item--active {
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
        .localeSwitcherDroop__item-a {
          margin-left: 5px;
      `}</style>
      <style jsx>{`
        .localeSwitcherDroop {
          position: relative;
          //display: inline-block;
          margin: 0;
          padding: 0;
          //align-items: center; /* Вирівнювання елементів по (y) */
          list-style-type: none; /*маркери для списка. */
        }
        .localeSwitcherDroop {
          //плавно проявляється (opacity 0.5s)
          position: absolute;
          display: block; //+Блок по ширині контенту
          float: left; //+Блок по ширині контентуleft:-110px;//працює лівий край від  лівого краю об'єкту
          padding: 0;
          margin: 0;
          width: 150px;
          //top: 10px; //+Працює
          left: -70px; //+Працює
          //min-width: 100px;
          //overflow: auto; //якщо не поміщається
          border-radius: 3px;
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
