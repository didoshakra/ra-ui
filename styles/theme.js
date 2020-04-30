//theme.js*/
//20080425-добавлені шрифти //Amatic SC,Poppins,Lora-https://fonts.googleapis.com/ з шаблону

export const themes = ["light", "dark", "other"];

export const themesNames = {
  light: "Світла",
  dark: "Темна",
  other: "Інша",
};

//Для тем будемо міняти тільки кольори(theme.colors.)

export const themeDark = {
  fontFamily: {
    //fontTertiary: "Amatic SC, cursive", //третинний
    sansSerif: "Poppins,Geneva, Arial, sans-serif", //звичайні шрифти без засічок
    serif: "Lora, Georgia,Blogger Sans,Times, Times New Roman, serif", //звичайні шрифти з засічками
    fixedWidth: "Courier New,Andale Mono, monospace", //Всі гліфи мають однакову фіксовану ширину
    mimicHand: "Amatic SC, Comic Sans MS, Comic Sans, cursive", //шрифти, що імітують почерк
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

    // text: "#fff", //білий
    text: "rgba(65,69,69,1)", //чорний
    // background: "rgba(65,69,69,1)", //чорний
    background: "#000",

    headTapeBackground: "#000",
    headTapeText: "#fff", //білий
    // headTextHover: "rgba(21,103,179,1)",
    headTapeTextHover: "#fff", //білий/
    // headTextBackgroundHover: "#fff", //білий
    headTapeTextBackgroundHover: "rgba(65,69,69,1)",

    // headBackground: "rgba(23,25,25,1)",
    headBackground: "rgba(65,69,69,1)",
    headText: "#fff", //білий
    // headTextHover: "rgba(65,69,69,1)",
    headTextHover: "rgba(23,25,25,1)",
    headTextBackgroundHover: "#fff", //білий
    //headTextHover: "rgba(52,144,246,1)",
    //headTextBackgroundHover: "rgba(62,107,156,1)",

    headMobileBackground: "rgba(65,69,69,1)",
    headMobileText: "#fff", //білий
    headMobileIcon: "#fff", //білий,
    headMobileTextHover: "rgba(23,25,25,0.9)",
    headMobileTextBackgroundHover: "#fff", //білий

    headIcon: "#fff", //білий
    headIconHover: "rgba(23,25,25,1)",
    headIconBackgroundHover: "#fff", //білий
    //headIconBorderWidht: "2px",
    headIconBorderWidht: "0px",
    //headIconBorderStyle: "solid",
    headIconBorderStyle: "dotted",

    // headMenuBackground: "rgba(23,25,25,0.9)",
    headMenuBackground: "#fff", //білий
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

export const themeLith = {
  //Amatic SC,Poppins,Lora-https://fonts.googleapis.com/
  fontFamily: {
    //notoSans: "Noto Sans", ////Локальний шрифт не працює(без засічок)
    sansSerif: "Poppins,Geneva, Arial, sans-serif", //звичайні шрифти без засічок
    serif: "Lora, Georgia,Blogger Sans,Times, Times New Roman, serif", //звичайні шрифти з засічками
    fixedWidth: "Courier New,Andale Mono, monospace", //Всі гліфи мають однакову фіксовану ширину
    mimicHand: "Amatic SC, Comic Sans MS, Comic Sans, cursive", //шрифти, що імітують почерк
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
    background: "rgba(220,234,244,1)",
    // background: "rgb(223, 222, 222)", //Основа

    headTapeBackground: "#82AE46", //білий
    headTapeText: "#fff",
    // headTextHover: "rgba(21,103,179,1)",
    headTapeTextHover: "#fff", //білий/
    // headTextBackgroundHover: "#fff", //білий
    headTapeTextBackgroundHover: "rgba(65,69,69,1)",

    // headBackground: "rgba(21,103,179,1)",
    headBackground: "#fff", //білий
    // headText: "#fff", //білий
    headText: "rgba(65,69,69,1)",
    // headTextHover: "rgba(21,103,179,1)",
    headTextHover: "#fff", //білий/
    // headTextBackgroundHover: "#fff", //білий
    headTextBackgroundHover: "rgba(65,69,69,1)",

    headMobileBackground: "rgba(65,69,69,1)",
    headMobileText: "#fff", //білий
    headMobileIcon: "#fff", //білий,
    headMobileTextHover: "rgba(23,25,25,0.9)",
    headMobileTextBackgroundHover: "#fff", //білий

    // headIcon: "#fff", //білий
    headIcon: "rgba(23,25,25,1)",
    // headIconHover: "rgba(21,103,179,1)",
    headIconHover: "#fff", //білий
    // headIconBackgroundHover: "#fff", //білий
    headIconBackgroundHover: "rgba(23,25,25,1)",
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
