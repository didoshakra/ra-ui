import { useContext } from "react";
import { LocaleContext } from "../modules/main/context/LocaleContext";
import strings from "./strings";
import { defaultLocale } from "./config";

export default function useTranslation() {
  const { locale } = useContext(LocaleContext);
  // console.log("000/ useTranslation.js/locale=", locale);

  function t(key) {
    // const locale = "uk";
    // console.log("000/ useTranslation.js/key=", key);
    // if (!strings[locale][key]) {
    //   console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    // }
    return strings[locale][key] || strings[defaultLocale][key] || "";
  }

  return {
    t,
    locale
  };
}
