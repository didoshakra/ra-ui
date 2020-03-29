//fajka/https://medium.com/swlh/how-to-build-a-multilingual-website-in-next-js-2924eeb462bc
//useTranslation.js
import { useContext } from "react";
import { ComponentContext } from "../context/ComponentContext";
// import translations from "./translations";
import { defaultLocale } from "./config";
import mapTranslations from "./mapTranslations";

export default function useTranslation() {
  // const { locale } = useContext(LocaleContext);
  const { state } = useContext(ComponentContext);
  const locale = state.locale;
  // console.log("000/ useTranslation.js/locale=", locale);
  //Визначення файлу перекладу
  const req = require.context("./translation_api", false, /.*\.js$/);
  // console.log("useTranslation.js/req=", req);
  const api = "./ra_ui.js";
  const translations = mapTranslations(req, api).default;
  // console.log("useTranslation.js/trans=", translations);

  function t(key) {
    // const locale = "uk";
    // console.log("000/ useTranslation.js/key=", key);
    // if (!translations[locale][key]) {
    //   console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    // }
    return translations[locale][key] || translations[defaultLocale][key] || "";
  }

  return {
    t,
    locale
  };
}
