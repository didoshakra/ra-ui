//fajka/https://medium.com/swlh/how-to-build-a-multilingual-website-in-next-js-2924eeb462bc
//getInitialLocale.js
import { defaultLocale } from "./config";
import { isLocale } from "./helpes";

export function getInitialLocale() {
  //localStorage-це локальне сховище браузера
  const localSetting = localStorage.getItem("locale"); //інформація про останнє локале
  // console.log("==== getInitialLocale.js/localSetting=", localSetting);
  //!!!localSetting-!!!-означає що змінна не визначени== "undefined"
  if (localSetting !== "undefined" && isLocale(localSetting)) {
    return localSetting;
  }

  const [browserSetting] = navigator.language.split("-");
  if (isLocale(browserSetting)) {
    return browserSetting;
  }

  return defaultLocale;
}
