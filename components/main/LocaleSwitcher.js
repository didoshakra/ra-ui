//LocaleSwitcher.js
//Cвоє меню <select>+localesList.map((item, index)-список з мсиву
//Іконка і випадаючий список разом
//Не використовую. Використовую  LocaleSwitcherIcon з LocaleSwitcherDroop

import React, { useContext, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { locales, languageNames } from "../../translations/config";
import { ComponentContext } from "../../context/ComponentContext";
import useTranslation from "../../translations/useTranslation";

const LocaleSwitcher = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const { theme, locale } = state;
  const [langMenuOpen, setLangMenuOpen] = React.useState(false);

  const langMenuToggle = () => {
    setLangMenuOpen(!langMenuOpen);
    // console.log("langMenuToggle/langMenuOpen=", langMenuOpen);
  };
  //React.useCallback!!!???
  const handleLocaleChange = React.useCallback(
    (e) => {
      setLangMenuOpen(false); //Закриваєм меню
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
        // alert("Ти клацнув поза мною!");
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
          // className="localeSwitcher__dropdown__item--active"
          className={
            item.loc === locale
              ? "localeSwitcher__dropdown__item--active"
              : "localeSwitcher__dropdown__item"
          }
          onClick={handleLocaleChange}
        >
          {/* <p>{item}</p> */}
          {/* <a className="ls--items">{item.loc}</a> */}
          <a className="localeSwitcher__dropdown__item-a">{item.loc}</a>
          <img
            className="localeSwitcher__dropdown__item-a"
            src={item.flag}
            alert="flag"
          />
          <a className="localeSwitcher__dropdown__item-a">{item.name}</a>
        </li>
      );
    });
  };

  return (
    <div ref={wrapperRef} className="localeSwitcher">
      {/* іконка App */}
      <a className="localeSwitcher__icon" onClick={langMenuToggle}>
        <FontAwesomeIcon
          icon={faGlobe}
          title={t("headerMenu_iconTitleLanguage")}
        />
      </a>
      <ul className="localeSwitcher__dropdown">{renderMenu()}</ul>

      <style jsx global>{`
        //RA-Глобальні стилі для елементів headerMenu
        .localeSwitcher__dropdown__item {
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
        .localeSwitcher__dropdown__item:hover,
        .localeSwitcher__dropdown__item--active:hover {
          color: ${theme.colors.headTextHover};
          background: ${theme.colors.headTextBackgroundHover};
          cursor: pointer;
        }
        .localeSwitcher__dropdown__item--active {
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
        .localeSwitcher__dropdown__item-a {
          margin-left: 5px;
      `}</style>

      <style jsx>{`
        .localeSwitcher {
          position: relative;
          //display: inline-block;
          margin: 0;
          padding: 0;
          //align-items: center; /* Вирівнювання елементів по (y) */
          list-style-type: none; /*маркери для списка. */

        }
        .localeSwitcher__icon {
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
        .localeSwitcher__icon:hover {
          color: ${theme.colors.headIconHover};
          background: ${theme.colors.headIconBackgroundHover};
          cursor: pointer;
        }
        .localeSwitcher__dropdown {
          //плавно проявляється (opacity 0.5s)
          position: absolute;
          display: block; //+Блок по ширині контенту
          float: left; //+Блок по ширині контентуleft:-110px;//працює лівий край від  лівого краю об'єкту
          padding: 0;
          margin: 0;
          //width: 150px;
          //top:50px;//+Працює
          left:-120px;//+Працює
          //min-width: 100px;
          //overflow: auto; //якщо не поміщається
          border-radius: 3px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          opacity: ${langMenuOpen ? "1" : "0"};
          z-index:${langMenuOpen ? "1" : "-2"};
          transition: z-index 0.5s, opacity 0.5s linear;
          background: ${theme.colors.headMenuBackground};
        }
        /*.dropdown-content {
          //плавно виїжджає
                   position: absolute;
          border-radius: 0 0 5px 5px;
          padding: 0 0 5px 0;//Щоб зробити заокруглення (border-radius)
          margin: 0;
          right: 0px;
          min-width: 100px;
          top: -80px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          transform: ${langMenuOpen ? "translateY(100%)" : "translateY(0px)"};
          transition: transform 0.5s linear;
          z-index: -1;
          background: ${theme.colors.headMenuBackground};
        }*/
      `}</style>
    </div>
  );
};

export default LocaleSwitcher;
