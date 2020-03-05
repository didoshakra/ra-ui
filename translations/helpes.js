import { locales } from "./config";

//Провіряє чи є в списку локалів(locales) передана
export function isLocale(locale) {
  const isLocale = locales.indexOf(locale);
  if (isLocale !== -1) {
    return true; // true, якщо хоть одно співпало
  } else {
    return false;
  }
}
