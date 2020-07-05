// pages/_app.js
import React from "react";
import App, { Container } from "next/app";
// import Layout from "../components/Layout";
import { ThemeProvider } from "../context/ComponentContext";
//@fortawesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Скажіть шрифту Awesome пропустити додавання CSS автоматично, оскільки він імпортується вище
//mag-Vegefoods
//import "../components/mag/homePage/Сategory_css.css";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      // <LocaleProvider>
      <ThemeProvider>
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
        <style jsx global>{`
          //global Next.js
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          #__next,
          body,
          html {
            height: 100%;
            width: 100%;
            //font-size: 20px; //-по замовч/Визначає 1rem для всього сайту
          }
          body {
            margin: 0;
            padding: 0;
            //overflow: hidden;//Обрізає лишнє
            text-rendering: optimizeLegibility;
            font-family: "Poppins", Arial, sans-serif;
            font-size: 15px;
            line-height: 1.8;
            font-weight: 400;
            color: #212529;
            text-align: left;
            background-color: #fff;
          }
          hr {
            -webkit-box-sizing: content-box;
            box-sizing: content-box;
            height: 0;
            overflow: visible;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin: 0;
            line-height: 1.5;
            font-weight: 400;
          }
          h1 {
            font-size: 42px;
          }

          h2 {
            font-size: 36px;
          }

          p {
            margin: 0;
            padding: 0;
          }

          a {
            color: #007bff;
            text-decoration: none;
          }
          a:hover {
            color: #6610f2;
            cursor: pointer;
          }
          img {
            max-width: 100%;
            margin: 0;
            padding: 0;
            vertical-align: middle;
          }
          //sans-serif===
          @font-face {
            font-family: "Poppins-Regular";
            src: url("/fonts/Poppins-Regular.woff2") format("woff2"),
              url("/fonts/Poppins-Regular.woff") format("woff");
            font-weight: 500;
            font-style: normal;
            font-display: swap; //
          }
          @font-face {
            font-family: "Roboto-Regular";
            src: url("/fonts/Roboto-Regular.woff2"),
              url("/fonts/Roboto-Regular.woff") format("woff");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Roboto-Medium";
            src: url("/fonts/Roboto-Medium.woff2") format("woff2"),
              url("/fonts/Roboto-Medium.woff") format("woff");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "RobotoCondensed-Bold";
            src: url("/fonts/RobotoCondensed-Bold.woff2") format("woff2"),
              url("/fonts/RobotoCondensed-Bold.woff") format("woff");
            font-weight: 700;
            font-style: bold;
            font-display: swap;
          }
          @font-face {
            font-family: "RobotoCondensed-Regular";
            src: url("/fonts/RobotoCondensed-Regular.woff2") format("woff2"),
              url("/fonts/RobotoCondensed-Regular.woff") format("woff");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Dosis-Light";
            src: url("/fonts/Dosis-Light.woff2") format("woff2"),
              url("/fonts/Dosis-Light.woff") format("woff");
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Dosis-Medium";
            src: url("/fonts/Dosis-Medium.woff2") format("woff2"),
              url("/fonts/Dosis-Medium.woff") format("woff");
            font-weight: 500;
            font-style: normal;
            font-display: swap; //
          }

          // serif - звичайні шрифти з засічками
          @font-face {
            font-family: "Lora-Regular";
            src: url("/public/fonts/Lora-Regular.woff2") format("woff2"),
              url("/fonts/Lora-Regular.woff") format("woff");
            font-weight: 500;
            font-style: normal;
            font-display: swap; //
          }
          // cursive" - шрифти, що імітують почерк
          @font-face {
            font-family: "AmaticSC-Regular";
            src: url("/fonts/AmaticSC-Regular.woff2") format("woff2"),
              url("/fonts/AmaticSC-Regular.woff") format("woff");
            font-weight: 500;
            font-style: normal;
            font-display: swap; //
          }
          @font-face {
            font-family: "Tangerine-Regular";
            src: url("/fonts/Tangerine-Regular.woff2") format("woff2"),
              url("/fonts/Tangerine-Regular.woff") format("woff");
            font-weight: 500;
            font-style: normal;
            font-display: swap; //
          }
          // monospace - Всі гліфи мають однакову фіксовану ширину
          @font-face {
            font-family: "MajorMonoDisplay-Regular";
            src: url("/fonts/MajorMonoDisplay-Regular.woff2") format("woff2"),
              url("/fonts/MajorMonoDisplay-Regular") format("woff");
            font-weight: 500;
            font-style: normal;
            font-display: swap; //
          }
          // fantasy - декоративні шрифти, для назв
          @font-face {
            font-family: "Trattatello";
            src: url("/fonts/Trattatello.woff2") format("woff2"),
              url("/fonts/Trattatello") format("woff");
            font-weight: 500;
            font-style: normal;
            font-display: swap; //
          }
        `}</style>
      </ThemeProvider>
      // </LocaleProvider>
    );
  }
}

export default MyApp;
