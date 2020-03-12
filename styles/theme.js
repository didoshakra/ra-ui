//*** */
export const themes = ["light", "dark", "other"];

export const themesNames = {
  light: "Світла",
  dark: "Темна",
  other: "Інша"
};

//Для тем будемо міняти тільки кольори(theme.colors.)
export const themeDark = {
  fontFamily: {
    sansSerif: "Arial, sans-serif", //звичайні шрифти без засічок
    serif: "Blogger Sans,Times, Times New Roman, serif", //звичайні шрифти з засічками
    fixedWidth: "Courier New,Andale Mono, monospace", //Fixed-width
    mimicHand: "Comic Sans MS, Comic Sans, cursive", //шрифти, що імітують почерк
    decorative: "Trattatello,Luminari, fantasy" //декоративні шрифти, для назв
  },
  colors: {
    // text: "#333",
    text: "#fff", //білий
    textHead: "#fff", //білий
    link: "#1eaaf1",
    linkHover: "#0d8ecf",
    border: "#ddd",
    warning: "#fff3cd",
    success: "#d4edda",
    // background1: "#000", //чорний
    // background: "#3f3f3f", //чорний grey[100] grey[900]
    // backgroundHead: "rgba(63,63,31,1)",
    // backgroundHeadMenu: "rgba(63,63,31,0.9)",
    // boxShadowPaper: "#3f3f3f",
    // backgroundPaper: "rgba(63,63,31,1)"
    background: "rgba(65,69,69,1)", //чорний grey[100] grey[900]
    backgroundHead: "rgba(23,25,25,1)",
    backgroundHeadMenu: "rgba(23,25,25,0.9)",
    backgroundPaper: "rgba(65,69,69,1)",
    boxShadowPaper: "2px 2px 2px rgba(0, 0, 0, 0.5)",
    backgroundPaperHead: "rgba(23,25,25,0.7)",
    boxShadowPaperHead: "rgba(23,25,25,0.9)",
    backgroundCard: "rgb(223, 222, 222)",
    boxShadowCard: "2px 2px 2px rgba(0, 0, 0, 0.5)"
  }
};

export const themeLith = {
  fontFamily: {
    sansSerif: "Arial, sans-serif", //звичайні шрифти без засічок
    serif: "Blogger Sans,Times, Times New Roman, serif", //звичайні шрифти з засічками
    fixedWidth: "Courier New,Andale Mono, monospace", //Fixed-width
    mimicHand: "Comic Sans MS, Comic Sans, cursive", //шрифти, що імітують почерк
    //mimicHand: "Snell Roundhand,Brush Script MT, Brush Script Std, cursive", //шрифти, що імітують почерк
    decorative: "Trattatello,Luminari, fantasy" //декоративні шрифти, для назв
  },
  colors: {
    link: "#1eaaf1",
    linkHover: "#0d8ecf",
    border: "#ddd",
    warning: "#fff3cd",
    success: "#d4edda",
    text: "#060214",
    // textHead: "#333", //чорний
    textHead: "#fff", //білий
    backgroundHead: "rgba(21,103,179,1)",
    backgroundHeadMenu: "rgba(21,103,179,0.9)",
    //background: "rgba(220,234,244,1)",
    background: "rgb(223, 222, 222)",
    backgroundPaper: "rgb(223, 222, 222)",
    boxShadowPaper: "2px 2px 2px rgba(0, 0, 0, 0.5)",
    backgroundCard: "rgb(223, 222, 222)",
    boxShadowCard: "2px 2px 2px rgba(0, 0, 0, 0.5)",
    //backgroundPaperHead: "rgb(223, 222, 222)",
    backgroundPaperHead: "rgba(187,190,190,1)",
    //backgroundPaperHead: "rgba(21,103,179,0.7)",
    boxShadowPaperHead: "2px 2px 2px rgba(0, 0, 0, 0.6)"
    // background: "#fff", //білий
    // background: "rgba(201,230,255,1)",
    //backgroundHead: "rgba(108,147,184,1)",
    //backgroundMenu: "rgba(108,147,184,0.9)",
  }
};
export const themeOther = {
  fontFamily: {
    sansSerif:
      '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI","Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    mono: "Menlo, Monaco, monospace"
    //   font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI",
    //     "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
    //   text-rendering: optimizeLegibility;
  },
  colors: {
    text: "#333",
    // text: "#121212",
    link: "#1eaaf1",
    linkHover: "#0d8ecf",
    border: "#ddd",
    warning: "#fff3cd",
    success: "#d4edda",
    background: "#f8f",
    background1: "#f88",
    // background1: "#333",
    color: "#354545"
  }
};
