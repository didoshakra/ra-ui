//LocaleSwitcher.js
//Використовую своє меню як <select>
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
      const newLocale = e.currentTarget.dataset.index;
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

  const renderMenu = () => {
    // return locales.map((item, index) => {
    return locales.map((item) => {
      return (
        <li
          data-index={item} //data-ХХ->Для передачі даних в e.currentTarget.dataset.XX
          className={item === locale ? "g-nav__item__active" : "g-nav__item"}
          onClick={handleLocaleChange}
        >
          {/* <a className="g-nav__item-a">{item}</a> */}
          <p>{item}</p>
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
      <style jsx>{`
        .menu-icon {
          margin: 0;
          padding: 0;
          align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
          list-style-type: none; /**Отменяет маркеры для списка. */
          position: relative;
          display: inline-block;
        }
        .icon {
          margin: 0;
          margin-right: 5px; //Відступ від кожного елемента зліва
          display: flex;
          align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
          justify-content: center; /* Вирівнювання елементів по головній осі(x) вправо */
          color: ${theme.colors.iconHead};
          background: ${theme.colors.headBackground};
          border: 2px solid ${theme.colors.iconHead}; /* Параметры границы */
          //border-radius: 45px; /* Радіус*/
          border-radius: 36px; /* Радіус*/
          width: 36px;
          height: 36px;
        }
        .icon:hover {
          color: ${theme.colors.headTextHover};
          background: ${theme.colors.headTextBackgroundHover};
          //cursor: pointer;
        }
        .dropdown-content {
          //плавно проявляється (opacity 0.5s)
          position: absolute;
          padding: 0;
          margin: 0;
          width: 150px;
          left:-100px;
          //right: 0px;
          //min-width: 100px;
          //overflow: auto; //якщо не поміщається
          border-radius: 3px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          position: absolute;
          opacity: ${langMenuOpen ? "1" : "0"};
          transition: opacity 0.5s linear;
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
