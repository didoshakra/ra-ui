import React, { useContext, useRef, useEffect } from "react";
import { ComponentContext } from "../context/ComponentContext";
// import { themes, themesNames } from "../styles/theme";
import useTranslation from "../translations/useTranslation";

const ThemeSwitcher = (props) => {
  const wrapperRef = useRef(null); //Для клацання поза обєктом
  useOutsideAlerter(wrapperRef); //Для клацання поза обєктом

  const { t } = useTranslation();
  const themes = ["light", "dark", "other"];
  const themesNames = {
    light: t("theme_Light"),
    dark: t("theme_Dark"),
    other: t("theme_Other"),
  };

  const { state, dispatch } = useContext(ComponentContext);
  const themeType = state.themeType;
  const theme = state.theme;

  const handleThemeChange = React.useCallback((e) => {
    // console.log("+++ /ThemeSwitcher.js/e.target.value=", e.target.value);
    dispatch({ type: "THEME", payload: e.target.value }); //Змінюємо state.theme
    props.themeMenuToggle(); //Закриваєм меню
  });

  function useOutsideAlerter(ref) {
    //*** Для клацання поза елементом Решение с React ^ 16.8 с использованием хуков
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        //Якщо поза елементом
        // alert("Ти клацнув поза мною!");
        props.themeMenuToggle(); //Закриваєм меню
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
    <select
      ref={wrapperRef} //Для клацання поза обєктом
      size="3"
      title={t("themeSwitcher_title")}
      value={themeType}
      onChange={handleThemeChange}
      className="select"
    >
      {themes.map((item) => (
        <option key={item} value={item}>
          {themesNames[item]}
        </option>
      ))}

      <style jsx>{`
        .select {
          width: 150px;
          /* z-index: 9; */
          /*display: flex;*/
          position: fixed;
          top: 50px;
          right: 30px;
          /* //justify-content: space-center; //Вирівнювання вправо
          // justify-content: space-between; //Вирівнювання вправо
          align-items: center; */
          margin: 0 5px; //між блоками
          font-size: 16px;
          cursor: pointer; //Рука
        }
        select:focus {
          min-width: 150px;
          width: auto;
        }

        @media (max-width: 600px) {
          .select {
            margin: 0 10px; //між блоками
            font-size: 20px;
          }
        }
      `}</style>
      <style jsx>
        {`
      .select {
        color: ${theme.colors.text};
        font-family: ${theme.fontFamily.sansSerif};
        background: ${theme.colors.background1};
        `}
      </style>
    </select>
  );
};

export default ThemeSwitcher;
