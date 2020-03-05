//Muiv4.5.1
const CODE_VARIANTS = {
  JS: "JS",
  TS: "TS"
};

const ACTION_TYPES = {
  OPTIONS_CHANGE: "OPTIONS_CHANGE"
};

// Valid languages to server-side render in production
const LANGUAGES = ["en", "uk", "ru", "pl"];

// Server side rendered languages
const LANGUAGES_SSR = ["en", "uk", "ru", "pl"];

// Work in progress
const LANGUAGES_IN_PROGRESS = [...LANGUAGES];

// Valid languages to use in production
const LANGUAGES_LABEL = [
  {
    code: "en",
    text: "English"
  },
  {
    code: "uk",
    text: "Українська"
  },
  {
    code: "pl",
    text: "Polska"
  },
  {
    code: "ru",
    text: "Русский"
  }
];
//JDconstants
const MY_NAME = "Roman Didoshak";
const BLOG_NAME = "Programming with Roman";

module.exports = {
  CODE_VARIANTS,
  ACTION_TYPES,
  LANGUAGES,
  LANGUAGES_SSR,
  LANGUAGES_LABEL,
  LANGUAGES_IN_PROGRESS,
  MY_NAME,
  BLOG_NAME
};
