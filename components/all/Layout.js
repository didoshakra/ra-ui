//https://reacttricks.com/learn-react-by-building-websites-with-next
//Layout.js
// динамічнИЙ імпорт <Header /> і <Footer /> для вибраного APP

import React, { useContext } from "react";
import Head from "next/head";
import dynamic from "next/dynamic"; //https://web.dev/code-splitting-with-dynamic-imports-in-nextjs/
// import Header from "./mag_stan/Header";
import HeaderTape from "../mag/HeaderTape"; //Верхня стрічка меню
// import Head0 from "../mag/Head0";
// import Footer from "./main/Footer";
import { ComponentContext } from "../../context/ComponentContext";
import useTranslation from "../../translations/useTranslation";
// const Header = dynamic(import("./Header"));//Тут теж працює

const Layout = ({ children, title, description }) => {
  const { t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const { theme, app } = state;

  //Динамічний import //https://web.dev/code-splitting-with-dynamic-imports-in-nextjs/
  const Header = dynamic(import(`../${app}/Header`)); //Динамічний import
  const Footer = dynamic(import(`../${app}/Footer`)); //Динамічний import

  return (
    <div className="site-wrapper">
      <Head>
        <title>
          {t("loyOut_title")} | {title ? `${title}  ` : ""}
          {/* {t("loyOut_title")}:{title ? `${title} | ` : ""} */}
          {/* {t("loyOut_title")} */}
        </title>
        {description ? <meta name="description" content={description} /> : null}
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> */}
      </Head>
      {/* <HeaderTape /> */}
      <Header />
      <div className="loyout-content">{children}</div>
      {/* <Footer /> */}
      <style jsx global>{`
        //global Next.js
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        html,
        body,
        #__next {
          height: 100%;
          width: 100%;
        }
        body {
          margin: 0;
          padding: 0;
          //overflow-x: hidden;//Обрізає лишнє
          font-size: 20px;
          line-height: 1.7;
          font-weight: 400;
          text-rendering: optimizeLegibility;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        a {
          color: #007bff;
          //text-decoration: none;
        }
        a:hover {
          color: #6610f2;
          text-decoration: none;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
        }

        h1 {
          font-size: 42px;
        }

        h2 {
          font-size: 36px;
        }

        p {
          // margin: 0 0 10px;
          margin: 0;
          padding: 0;
        }

        img {
          max-width: 100%;
        }
      `}</style>
      <style jsx>{`
        /* Layout */
        site-wrapper {
          display: block;
          width: 100%;
          padding: 0;
          margin: 0;
        }
        .loyout-content {
          position: relative;
          top: 0px;
          width: 100%;
          padding: 0;
          margin: 0;
          //min-height: 600px;
        }
      `}</style>
    </div>
  );
};

export default Layout;
