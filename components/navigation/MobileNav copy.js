//MenuToggle.js //https://coursehunter.net/course/reactjs-s-nulya-do-profi
//Виїжджаюче меню зправа по гамбургеру
import React, { useContext, useRef, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";

const MobileNav = props => {
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  const wrapperRef = useRef(null); //Для клацання поза обєктом
  useOutsideAlerter(wrapperRef); //Для клацання поза обєктом
  const { locale, t } = useTranslation();

  function useOutsideAlerter(ref) {
    //*** Для клацання поза елементом Решение с React ^ 16.8 с использованием хуков
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        //Якщо поза елементом
        // alert("Ти клацнув поза мною!");
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

  return (
    //  Мобільна навігація
    <div className="mobile-nav">
      <i className="icon" onClick={() => props.mobileMenuToggle(false)}>
        <FontAwesomeIcon icon={faChevronRight} />
      </i>
      <div className="mobile-nav__title">{t("mobileNav_title")}</div>
      <ul ref={wrapperRef} className="mobile-nav__list">
        <li className="mobile-nav__item">
          <Link href="/[lang]" as={`/${locale}`}>
            <a className="mobile-nav__link">{t("mobileNav_itemHome")}</a>
          </Link>
        </li>
        <li className="mobile-nav__item">
          <Link href="/[lang]/about" as={`/${locale}/about`}>
            <a className="mobile-nav__link">{t("mobileNav_itemAboutME")}</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
      /* ----------------- Мобліна навігація ----------------- */

.mobile-nav {
  /*z-index: 9;*/
  /*position: absolute;*//*на мобілках видно мені коли переміститись вправо*стрілка)*/
  position: fixed;
  top: 0px;
  /*display:  ${props.mobileMenuOpen ? "block" : "none"};*/
  /*display: block;*/
  /* height: 100%; */
  height: 500px;
  width: 350px;
  right: -350px;
  padding: 10px 50px;
  border-radius: 10px;
  /* border-radius: 50px 0 0 50px; */
  background:${theme.colors.headMenuBackground};
  /*background:${theme.colors.backgroundMenu};*/
  transform: ${props.mobileMenuOpen ? "translateX(-100%)" : "translateX(0px)"};
   /*transform: ${
     props.mobileMenuOpen ? "translateX(-360px)" : "translateX(0px)"
   };*/
  transition: transform 0.4s ease-in;
}

/* При зменшенні екрану якщо не виключена кнопка щоб не показувало-не обовязково*/
@media (min-width: 1199px) {
  .mobile-nav {
       display: none; /* Не показує мобільне меню на екранах>1199px */
  }
}
.mobile-nav .icon {
  /* align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
  color: #fff;
  //margin: 5px;
  padding: 0px;
}
.mobile-nav__title {
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 30px;
  color: #f6d142;
}

.mobile-nav__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.mobile-nav__item {
  margin-bottom: 30px;
}

.mobile-nav__link {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 22px;
}

.mobile-nav__link:hover {
  color: #ffd600;
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

export default MobileNav;
