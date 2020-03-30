//Працювало в rob20200201_next-with-context-api-app-fajka-languages
//Зроблено на базі nexst_context_app + два блоги нижче
//https://codeguida.com/post/1818
//https://blog.logrocket.com/use-hooks-and-context-not-react-and-redux/
//Тільки 2-і теми(themeTypeLight)

// AdminContext.js
import React, { createContext, useReducer } from "react";
import { useRouter } from "next/router";

import { isLocale } from "../translations/helpes";
import { themeDark, themeLith, themeOther } from "../styles/theme";

const reducer = (state, action) => {
  switch (action.type) {
    case "APP":
      // console.log("***store/reducer/action=", action);
      return { ...state, app: action.payload };
    case "LOCALE":
      // console.log("***store/reducer/action=", action);
      return { ...state, locale: action.payload };
    case "THEME":
      if (action.payload === "light") {
        // return { ...state, theme: themeLith, themeType: "light" };
        return { ...state, theme: themeLith, themeTypeLight: true };
      } else if (action.payload === "dark") {
        // return { ...state, theme: themeDark, themeType: "dark" };
        return { ...state, theme: themeDark, themeTypeLight: false };
        // } else {
        //   return { ...state, theme: themeOther, themeType: "other" };
      }
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const initialState = {
  locale: "en",
  theme: themeLith,
  // themeType: "light"
  themeTypeLight: true,
  app: "ra"
};

export const ComponentContext = createContext(initialState);

// export const CounterProvider = ({ children }) => {
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //************************* */
  const { query } = useRouter(); //Параметри роутера
  // console.log("+++1/ ComponentContext.js/query=", query);
  // console.log("+++2/ ComponentContext.js/locale=", locale);

  React.useEffect(() => {
    const localSetting = localStorage.getItem("locale"); //інформація про останнє локале
    // console.log(
    //   "+++3/ ComponentContext.js/useEffect/localStorage.localSetting=",
    //   localSetting
    // );
    // console.log(
    //   "+++3+/ ComponentContext.js/useEffect/state.locale=",
    //   state.locale
    // );
    //localStorage.getItem("locale")-останнє локале у браузері(localStorage)
    if (state.locale !== localSetting) {
      // console.log("+++4/ ComponentContext.js/usEf/locStor.setItem/locale=", locale);
      localStorage.setItem("locale", state.locale); //встановлюємо нове значення в localStorage браузера
    }
    // const localSetting1 = localStorage.getItem("locale"); //інформація про останнє локале
    // console.log(
    //   // "+++5/ ComponentContext.js/localStorage.locale=",
    //   localSetting1
    // );
  }, [state.locale]); // виконується тільки при зміні locale

  React.useEffect(() => {
    //query.lang-значення роутера яке передалося як [lang]/може бути query.lamp якщо папку назвем [lamp]
    // Міняємо locale в LocaleContext  Якщо локаль в[] змінилася і вона є в сиску локалів(config.js)
    //isLocale() - провіряє чи є в списку доступних локалів
    if (
      typeof query.lang === "string" &&
      -isLocale(query.lang) &&
      state.locale !== query.lang
    ) {
      // setLocale(query.lang);//Змінюємо state.locale
      dispatch({ type: "LOCALE", payload: query.lang }); //Змінюємо state.locale
    }
    // console.log("+++ 4/ComponentContext.js/useEffect2/query.lang=", query.lang);
  }, [query.lang, state.locale]); // виконується тільки при зміні query.lang або locale

  // console.log("!!!+++5/ LComponentContext.js/state.locale=", state.locale);

  //************************ */

  return (
    <ComponentContext.Provider value={{ state, dispatch }}>
      {/* {props.children} */}
      {children}
    </ComponentContext.Provider>
  );
};
