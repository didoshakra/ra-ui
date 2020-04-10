//*** */
export const themes = ["light", "dark", "other"];

export const themesNames = {
  light: "Світла",
  dark: "Темна",
  other: "Інша",
};

//Для тем будемо міняти тільки кольори(theme.colors.)
export const themeDark1 = {
  fontFamily: {
    sansSerif: "Arial, sans-serif", //звичайні шрифти без засічок
    serif: "Blogger Sans,Times, Times New Roman, serif", //звичайні шрифти з засічками
    fixedWidth: "Courier New,Andale Mono, monospace", //Fixed-width
    mimicHand: "Comic Sans MS, Comic Sans, cursive", //шрифти, що імітують почерк
    decorative: "Trattatello,Luminari, fantasy", //декоративні шрифти, для назв
  },
  colors: {
    // link: "#1eaaf1",
    // linkHover: "#0d8ecf",
    // border: "#ddd",
    // warning: "#fff3cd",
    // success: "#d4edda",
    //
    // text: "#333",

    text: "#fff", //білий
    background: "rgba(65,69,69,1)", //чорний

    headBackground: "rgba(23,25,25,1)",
    headText: "#fff", //білий// background1: "#000", //чорний
    headTextHover: "rgba(65,69,69,1)",
    headTextBackgroundHover: "#fff", //білий
    //headTextHover: "rgba(52,144,246,1)",
    //headTextBackgroundHover: "rgba(62,107,156,1)",

    headIcon: "#fff", //білий
    headIconHover: "rgba(23,25,25,1)",
    headIconBackgroundHover: "#fff", //білий
    //headIconBorderWidht: "2px",
    headIconBorderWidht: "0px",
    //headIconBorderStyle: "solid",
    headIconBorderStyle: "dotted",

    headMenuBackground: "rgba(23,25,25,0.9)",
    //headMenuBackgroundActive: "#f6d142",
    //headMenuBackgroundActive: "red",
    headMenuBackgroundActive: "#f64532",
    headMenuBackgroundGorizActive: "#f64532",
    //headMenuBackgroundGorizActive: "#f17b72",

    paperBackground: "rgba(65,69,69,1)",
    paperBoxShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
    paperHeadBackground: "rgba(64,61,51,1)",
    paperHeadBoxShadow: "2px 2px 2px rgba(23,25,25,0.9)",

    //cardBackground: "rgb(223, 222, 222)",
    cardBackground: "rgba(64,61,51,0.6)",
    cardBoxShadow: "2px 2px 2px rgba(23,25,25,0.9)",
  },
};

export const themeLith1 = {
  fontFamily: {
    sansSerif: "Arial, sans-serif", //звичайні шрифти без засічок
    serif: "Blogger Sans,Times, Times New Roman, serif", //звичайні шрифти з засічками
    fixedWidth: "Courier New,Andale Mono, monospace", //Fixed-width
    mimicHand: "Comic Sans MS, Comic Sans, cursive", //шрифти, що імітують почерк
    //mimicHand: "Snell Roundhand,Brush Script MT, Brush Script Std, cursive", //шрифти, що імітують почерк
    decorative: "Trattatello,Luminari, fantasy", //декоративні шрифти, для назв
  },
  colors: {
    //   link: "#1eaaf1",
    //   linkHover: "#0d8ecf",
    //   border: "#ddd",
    //   warning: "#fff3cd",
    //   success: "#d4edda",

    text: "#060214",
    //background: "rgba(220,234,244,1)",
    background: "rgb(223, 222, 222)", //Основа

    headBackground: "rgba(21,103,179,1)",
    headText: "#fff", //білий
    headTextHover: "rgba(21,103,179,1)",
    headTextBackgroundHover: "#fff", //білий
    //headText: "#333", //чорний
    //headTextHover: "#e47328",
    //headTextBackgroundHover: "#0d8ecf",
    //headTextBackgroundHover: "rgba(20,92,173,1)",

    headIcon: "#fff", //білий
    headIconHover: "rgba(21,103,179,1)",
    headIconBackgroundHover: "#fff", //білий
    //headIconBorderWidht: "2px",
    headIconBorderWidht: "0px",
    //headIconBorderStyle: "solid",
    headIconBorderStyle: "dotted",

    headMenuBackground: "rgba(21,103,179,0.9)",
    headMenuBackgroundActive: "#f6d142",
    //headMenuBackgroundGorizActive: "red",
    headMenuBackgroundGorizActive: "#f6d142",

    paperBackground: "rgb(223, 222, 222)",
    paperBoxShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
    paperHeadBackground: "rgba(187,190,190,1)",
    paperHeadBoxShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",

    //cardBackground: "rgb(223, 222, 222)",
    cardBackground: "rgba(187,190,190,0.5)",
    cardBoxShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
  },
};
