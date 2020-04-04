//LocaleSwitcher.js
//Використовую своє меню як <select>
import React, { useContext, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { locales, languageNames } from "../../translations/config";
import { ComponentContext } from "../../context/ComponentContext";
import useTranslation from "../../translations/useTranslation";
import Index from "./../../pages/index";

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
      // const newLocale = e.currentTarget.dataset.index;
      const newLocale = localesList[e.currentTarget.dataset.index].loc;
      console.log("LocaleSwitcher.js/newLocale=", newLocale);
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
    // return locales.map((item, index) => {
    return localesList.map((item, index) => {
      return (
        <li
          data-index={index} //data-ХХ->Для передачі даних в e.currentTarget.dataset.XX
          className={
            item.loc === locale ? "g-nav__item__active" : "g-nav__item"
          }
          onClick={handleLocaleChange}
        >
          <a className="ls--items">{item.loc}</a>
          <img className="ls--items" src={item.flag} alert="flag" />
          <a className="ls--items">{item.name}</a>
        </li>
      );
    });
  };

  return (
    <div ref={wrapperRef} className="menu-icon">
      {/* іконка App */}
      <a className="icon">
        <FontAwesomeIcon
          icon={faGlobe}
          title={t("headerMenu_iconTitleLanguage")}
          onClick={langMenuToggle}
        />
      </a>
      <ul className="dropdown-content">{renderMenu()}</ul>

      <style jsx global>{`
        .ls--items {
          margin-left: 10px;
          //padding: 10px;
          align-items: center; //Y Вирівнювання
        }
      `}</style>
      <style jsx>{`
        .menu-icon {
          margin: 0;
          padding: 0;
          елементів по перетину осі(y) центр */
          list-style-type: none; /**Отменяет маркеры для списка. */
          position: relative;
          //display: inline-block; //Блок стане широкий як найширший контент
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
          display: block; //Блок по ширині контенту
          float: left; //Блок по ширині контенту
          padding: 0;
          margin: 0;
         left: 110px;
          //min-width: 200px;
          overflow: auto; //якщо не поміщається
          border-radius: 3px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          position: absolute;
          display: : ${langMenuOpen ? "block" : "none"};
          opacity: ${langMenuOpen ? "1" : "0"};
          z-Index: ${langMenuOpen ? "1" : "-2"};
          transition: z-Index 0s,display 0s, opacity 0.5s linear;
          background: ${theme.colors.headMenuBackground};
        }
        /*.dropdown-content {
          //плавно виїжджає
          border-radius: 0 0 5px 5px;
          padding: 0 0 5px 0;//Щоб зробити заокруглення (border-radius)
          margin: 0;
          right: 0px;
          min-width: 100px;
          top: -80px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          position: absolute;
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
