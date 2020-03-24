// import React from "react";
// import { useContext } from "react";
import React, { useContext, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { locales, languageNames } from "../../translations/config";
import { ComponentContext } from "../../context/ComponentContext";
import useTranslation from "../../translations/useTranslation";

const LocaleSwitcher = props => {
  const wrapperRef = useRef(null); //Для клацання поза обєктом
  useOutsideAlerter(wrapperRef); //Для клацання поза обєктом
  const { t } = useTranslation();
  const router = useRouter();
  const { state } = useContext(ComponentContext);
  const locale = state.locale;
  const theme = state.theme;

  const handleLocaleChange = React.useCallback(
    e => {
      props.langMenuToggle(); //Закриває меню
      const regex = new RegExp(`^/(${locales.join("|")})`);
      router.push(
        router.pathname,
        router.asPath.replace(regex, `/${e.target.value}`)
      );
    },
    [router]
  );

  function useOutsideAlerter(ref) {
    //*** Для клацання поза елементом Решение с React ^ 16.8 с использованием хуков
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        //Якщо поза елементом
        // alert("Ти клацнув поза мною!");
        props.langMenuToggle(); //Закриваєм меню
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
      title={t("localeSwitcher_title")}
      value={locale}
      onChange={handleLocaleChange}
      className="select"
    >
      {locales.map(locale => (
        <option key={locale} value={locale}>
          {languageNames[locale]}
        </option>
      ))}
      <style jsx>{`
        .select {
          z-index: 9;
          /* display: flex; */
          position: fixed;
          top: 50px;
          right: 0px;
          margin: 0 10px; //між блоками
          //justify-content: space-center; //Вирівнювання вправо
          // justify-content: space-between; //Вирівнювання вправо
          align-items: center;
          font-size: 20px;
          cursor: pointer; //Рука
          // transform: translate(-50%, -50%);
        }

        @media (max-width: 600px) {
          .select {
            margin: 0 5px; //між блоками
            font-size: 16px;
          }
        }
      `}</style>
      <style jsx>
        {`
      .select {
        color: ${theme.colors.text};
        font-family: ${theme.fontFamily.sansSerif};
        background: ${theme.colors.background};`}
      </style>
    </select>
  );
};

export default LocaleSwitcher;
