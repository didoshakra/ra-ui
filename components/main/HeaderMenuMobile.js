//MenuToggle.js //https://coursehunter.net/course/reactjs-s-nulya-do-profi
//Виїжджаюче меню зправа по гамбургеру
import React, { useContext, useRef, useEffect } from "react";
import Link from "next/link";
// import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";
import Index from "./../../pages/index";

const HeaderMenuMobile = (props) => {
  // const { menu } = props;
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  const { locale, t } = useTranslation();

  //Для клацання поза обєктом
  //Добавити в контрольований об'єкт-(ref={wrapperRef})- (<ul ref={wrapperRef}... )
  const wrapperRef = useRef(null); //Для клацання поза обєктом
  useOutsideAlerter(wrapperRef); //Для клацання поза обєктом
  function useOutsideAlerter(ref) {
    //*** Для клацання поза елементом Решение с React ^ 16.8 с использованием хуков
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        //Якщо поза елементом
        //alert("Ти клацнув поза мною!");
        if (props.mobileMenuOpen) {
          props.mobileMenuToggle(false); //Закриваєм меню
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
    return props.menu.map((item, index) => {
      return (
        <li className="headerMenuMobile__dropdown__item" key={index}>
          <Link href={`/[lang]${item.link}`} as={`/${locale}${item.link}`}>
            {/* <p className="g-nav__item-a">{item.a}</p> */}
            <p>{item.a}</p>
          </Link>
        </li>
      );
    });
  };

  return (
    //  Мобільна навігація
    <div className="headerMenuMobile">
      <a className="headerMenuMobile__icon">
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={() => props.mobileMenuToggle(false)}
        />
      </a>
      <div className="headerMenuMobile__title">{t("mobileNav_title")}</div>
      {/* <ul ref={wrapperRef}>{props.renderMenu()}</ul> */}
      <ul className="headerMenuMobile__dropdown" ref={wrapperRef}>
        {renderMenu()}
      </ul>

      <style jsx global>{`
        .headerMenuMobile__dropdown__item {
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

        .headerMenuMobile__dropdown__item:hover {
          color: ${theme.colors.headTextHover};
          background: ${theme.colors.headTextBackgroundHover};
          cursor: pointer;
        }
      `}</style>

      <style jsx>{`
        .headerMenuMobile {
          z-index: 9;
          /*position: absolute;*//*на мобілках видно мені коли переміститись вправо*стрілка)*/
          position: fixed;
          top: 0px;
          /*display:  ${props.mobileMenuOpen ? "block" : "none"};*/
          /* height: 100%; */
          min-height: 200px;
          width: 350px;
          right: -350px;
          padding: 10px 0 10px 0;
          border-radius: 5px;
          //border-radius: 50px 0 0 50px;
          list-style-type: none; /**Отменяет маркеры для списка. */
          background:${theme.colors.headMenuBackground};
          transform: ${
            props.mobileMenuOpen ? "translateX(-100%)" : "translateX(0px)"
          };
          /*transform: ${
            props.mobileMenuOpen ? "translateX(-360px)" : "translateX(0px)"
          };*/
          transition: transform 0.4s ease-in;
        }
        .headerMenuMobile__icon {
          margin: 0;
          margin-left: 10px; //Відступ від кожного елемента зліва
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
        .headerMenuMobile__icon:hover {
          //color: #f6d142;
          color: ${theme.colors.headIconHover};
          background: ${theme.colors.headIconBackgroundHover};
          cursor: pointer;
        }
        .headerMenuMobile__title {
          font-size: 28px;
          font-weight: 800;
          //margin-bottom: 30px;
          //padding: 0px 0px 0px 10px;
          margin: 30px 10px;
          color: #f6d142;
        }
        .headerMenuMobile__dropdown{
          padding:  0;//треба
          margin:0;//треба
        }
         //При зменшенні екрану якщо не виключена кнопка щоб не показувало-не обовязково*/
        /*@media (min-width: 959px) {
          .headerMenuMobile {
              display: none; // Не показує мобільне меню на екранах>1199px
          }
        }*/
        //Для iphone 5
        @media (max-width: 600px) {
          .headerMenuMobile {
            width: 320px;
            right: -320px;
        }
      `}</style>
    </div>
  );
};

export default HeaderMenuMobile;
