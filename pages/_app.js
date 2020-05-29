// pages/_app.js
import React from "react";
import App, { Container } from "next/app";
// import Layout from "../components/Layout";
import { ThemeProvider } from "../context/ComponentContext";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Скажіть шрифту Awesome пропустити додавання CSS автоматично, оскільки він імпортується вище
import "../components/mag/homePage/Сategory_css.css";
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
          }
          body {
            margin: 0;
            padding: 0;
            //overflow: hidden;//Обрізає лишнє
            text-rendering: optimizeLegibility;
            font-family: "Poppins", Arial, sans-serif;
            /*font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              "Helvetica Neue", Arial, "Noto Sans", sans-serif,
              "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
              "Noto Color Emoji";*/
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
            //display: block;
            //margin-block-start: 1em;
            //margin-block-end: 1em;
            //margin-inline-start: 0px;
            //margin-inline-end: 0px;
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
          }
          @font-face {
            /* font-family: 'Roboto', sans-serif; */
            font-family: "Roboto-Regular";
            //Грузити тільки 1 варіант шрифта
            /* src: url("/fonts/Roboto-Regular.woff2") format("woff2"),
              url("/fonts/Roboto-Regular.woff") format("woff"); */
            src: url("/fonts/Roboto-Regular.woff2");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            /* font-family: 'Roboto', sans-serif; */
            font-family: "Roboto-Medium";
            src: url("/fonts/Roboto-Medium.woff2") format("woff2"),
              url("/fonts/Roboto-Medium.woff") format("woff");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            /* font-family: 'Roboto Condensed', sans-serif; */
            font-family: "Roboto Condensed-Bold";
            src: url("/fonts/RobotoCondensed-Bold.woff2") format("woff2"),
              url("/fonts/RobotoCondensed-Bold.woff") format("woff");
            font-weight: 700;
            font-style: bold;
            font-display: swap;
          }
          @font-face {
            /* font-family: 'Roboto Condensed', sans-serif; */
            font-family: "Roboto Condensed-Regular";
            src: url("/fonts/RobotoCondensed-Regular.woff2") format("woff2"),
              url("/fonts/RobotoCondensed-Regular.woff") format("woff");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            /* font-family: 'Dosis', sans-serif; */
            font-family: "Dosis";
            src: url("/fonts/Dosis-Light.woff2") format("woff2"),
              url("/fonts/Dosis-Light.woff") format("woff");
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            /* font-family: 'Dosis', sans-serif; */
            font-family: "Dosis-Medium";
            src: url("/fonts/Dosis-Medium.woff2") format("woff2"),
              url("/fonts/Dosis-Medium.woff") format("woff");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
        `}</style>
      </ThemeProvider>
      // </LocaleProvider>
    );
  }
}

export default MyApp;
