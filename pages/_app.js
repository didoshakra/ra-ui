// pages/_app.js
import React from "react";
import App, { Container } from "next/app";
// import Layout from "../components/Layout";
import { ThemeProvider } from "../context/ComponentContext";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Скажіть шрифту Awesome пропустити додавання CSS автоматично, оскільки він імпортується вище
import "../components/mag/homePage/Сategory.css";
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
          #__next,
          body,
          html {
            height: 100%;
            width: 100%;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin: 0;
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
