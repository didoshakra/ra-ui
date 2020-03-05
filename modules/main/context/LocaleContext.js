import React from "react";
import { useRouter } from "next/router";
import { isLocale } from "../../../translations/helpes";

const initialState = {
  locale: "uk",
  setLocale: () => null
};

export const LocaleContext = React.createContext(initialState);

// export const LocaleProvider = ({ lang, children }) => {
export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = React.useState("uk"); //Створюємо змінну і ф-цію що її змінює
  const { query } = useRouter(); //Параметри роутера
  // console.log("+++1/ LocaleContext.js/query=", query);
  // console.log("+++2/ LocaleContext.js/locale=", locale);

  React.useEffect(() => {
    const localSetting = localStorage.getItem("locale"); //інформація про останнє локале
    console.log(
      "+++3/ LocaleContext.js/useEffect/localStorage.locale=",
      localSetting
    );
    //localStorage.getItem("locale")-останнє локале у браузері(localStorage)
    if (locale !== localStorage.getItem("locale")) {
      // console.log("+++4/ LocaContext.js/usEf/locStor.setItem/locale=", locale);
      localStorage.setItem("locale", locale); //встановлюємо нове значення в localStorage браузера
    }
    // const localSetting1 = localStorage.getItem("locale"); //інформація про останнє локале
    // console.log(
    //   // "+++5/ getInitialLocale.js/localStorage.locale=",
    //   localSetting1
    // );
  }, [locale]); // виконується тільки при зміні locale

  React.useEffect(() => {
    //query.lang-значення роутера яке передалося як [lang]/може бути query.lamp якщо папку назвем [lamp]
    // Міняємо locale в LocaleContext  Якщо локаль в[] змінилася і вона є в сиску локалів(config.js)
    //isLocale() - провіряє чи є в спискудоступних локалів
    if (
      typeof query.lang === "string" &&
      -isLocale(query.lang) &&
      locale !== query.lang
    ) {
      setLocale(query.lang);
    }
    console.log(
      "+++ 4/ getInitialLocale.js/useEffect2/query.lang=",
      query.lang
    );
  }, [query.lang, locale]); // виконується тільки при зміні query.lang або locale

  console.log("!!!+++5/ LocaleContext.js/locale=", locale);
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
