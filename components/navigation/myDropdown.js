//myDropdown.js //https://html5css.ru/edithtm/index.php
//Саме випадаюче меню

//MenuToggle.js //https://coursehunter.net/course/reactjs-s-nulya-do-profi
//Виїжджаюче меню зправа по гамбургеру
import React, { useContext, useRef, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";

const myDropdown = props => {
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
    <div className="dropdown-content">
      <Link href="/[lang]" as={`/${locale}`}>
        <a>eeeeeeeeeeeeeee</a>
      </Link>
      <Link href="/[lang]/about" as={`/${locale}/about`}>
        <a>fffffffffffffffff</a>
      </Link>
      <style jsx>{`
        /* ----------------- Мобліна навігація ----------------- */

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #f1f1f1;
          min-width: 160px;
          overflow: auto;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          z-index: 1;
        }

        .dropdown-content a {
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
        }

        .dropdown a:hover {
          background-color: #ddd;
        }
      `}</style>
    </div>
  );
};

export default myDropdown;
