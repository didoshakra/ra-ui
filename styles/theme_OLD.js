//*** */
export const themes = ["light", "dark", "other"];

export const themesNames = {
  light: "Світла",
  dark: "Темна",
  other: "Інша",
};

//Для тем будемо міняти тільки кольори(theme.colors.)
export const themeDark = {
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
    headText: "#fff", //білий// background1: "#000", //чорний
    headTextHover: "rgba(52,144,246,1)",
    headTextBackgroundHover: "rgba(62,107,156,1)",
    // background: "#3f3f3f", //чорний grey[100] grey[900]
    // headBackground: "rgba(63,63,31,1)",
    // headMenuBackground: "rgba(63,63,31,0.9)",
    // paperBoxShadowr: "#3f3f3f",
    // paperBackground: "rgba(63,63,31,1)"
    background: "rgba(65,69,69,1)", //чорний grey[100] grey[900]
    headBackground: "rgba(23,25,25,1)",
    headMenuBackground: "rgba(23,25,25,0.9)",
    paperBackground: "rgba(65,69,69,1)",
    paperBoxShadowr: "2px 2px 2px rgba(0, 0, 0, 0.5)",
    // paperHeadBackground: "rgba(23,25,25,0.7)",
    paperHeadBackground: "rgba(64,61,51,1)",
    paperHeadBoxShadowr: "2px 2px 2px rgba(23,25,25,0.9)",
    //cardBackground: "rgb(223, 222, 222)",
    cardBackground: "rgba(64,61,51,0.6)",
    cardBoxShadow: "2px 2px 2px rgba(23,25,25,0.9)",
  },
};

export const themeLith = {
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
    headText: "#fff", //білий
    headTextHover: "rgba(21,103,179,1)",
    headTextBackgroundHover: "#fff", //білий
    //headText: "#333", //чорний
    //headTextHover: "#e47328",
    //headTextBackgroundHover: "#0d8ecf",
    //headTextBackgroundHover: "rgba(20,92,173,1)",
    iconHead: "#fff", //білий
    iconHeadHover: "rgba(21,103,179,1)",
    iconHeadBackgroundHover: "#fff", //білий

    headBackground: "rgba(21,103,179,1)",
    headMenuBackground: "rgba(21,103,179,0.9)",
    headMenuBackground: "rgba(21,103,179,0.9)",
    headMenuBackgroundGorizActive: "red",
    headMenuBackgroundActive: "#f6d142",
    //background: "rgba(220,234,244,1)",
    background: "rgb(223, 222, 222)", //Основа
    paperBackground: "rgb(223, 222, 222)",
    paperBoxShadowr: "2px 2px 2px rgba(0, 0, 0, 0.6)",
    //cardBackground: "rgb(223, 222, 222)",
    cardBackground: "rgba(187,190,190,0.5)",
    cardBoxShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
    paperHeadBackground: "rgba(187,190,190,1)",
    paperHeadBoxShadowr: "2px 2px 2px rgba(0, 0, 0, 0.6)",
  },
};
