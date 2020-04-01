//MenuToggle.js //https://coursehunter.net/course/reactjs-s-nulya-do-profi
//Виїжджаюче меню зправа по гамбургеру
import React, { useContext, useRef, useEffect } from "react";
import Link from "next/link";
// import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";

const HeaderMenuMobile = props => {
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
        <li className="g-nav__item" key={index}>
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
    <div className="mobile-nav">
      <i className="icon" onClick={() => props.mobileMenuToggle(false)}>
        <FontAwesomeIcon icon={faChevronRight} />
      </i>
      <div className="mobile-nav__title">{t("mobileNav_title")}</div>
      {/* <ul ref={wrapperRef}>{props.renderMenu()}</ul> */}
      <ul ref={wrapperRef}>{renderMenu()}</ul>

      <style jsx>{`
        .mobile-nav {
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

        .mobile-nav ul{
          padding:  0;//треба
          margin:0;//треба
        }

        //При зменшенні екрану якщо не виключена кнопка щоб не показувало-не обовязково*/
        @media (min-width: 1199px) {
          .mobile-nav {
              display: none; /* Не показує мобільне меню на екранах>1199px */
          }
        }
        .icon {
          //align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
          margin: 10px;
          //padding: 10px;
          color: ${theme.colors.headText};
        }
        .mobile-nav__title {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 30px;
          color: #f6d142;
        }

        .icon:hover {
          color: ${theme.colors.headTextHover};
        }

        /*Для iphone 5*/
        @media (max-width: 600px) {
          .mobile-nav {
            width: 320px;
            right: -320px;
        }
      `}</style>
    </div>
  );
};

export default HeaderMenuMobile;
