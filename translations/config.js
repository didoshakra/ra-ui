//fajka/https://medium.com/swlh/how-to-build-a-multilingual-website-in-next-js-2924eeb462bc
//config.js
export const defaultLocale = "en";

export const locales = ["uk", "en", "pl"];

// export const languageNames = {
//   uk: "Українська",
//   en: "English",
//   pl: "Polski"
// };
//в LocaleSwitcher...
export const localesList = [
  {
    loc: "uk",
    name: "Українська",
    flag: "/flags/flag_ukraine-20.jpg",
  },
  {
    loc: "en",
    name: "English",
    flag: "/flags/flag_usa-20.jpg",
  },
  {
    loc: "pl",
    name: "Polski",
    flag: "/flags/flag_poland-20.jpg",
  },
];
