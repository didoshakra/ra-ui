//https://reacttricks.com/learn-react-by-building-websites-with-next
//Layout.js
// динамічнИЙ імпорт <Header /> і <Footer /> для вибраного APP

import React, { useContext } from "react";
import Head from "next/head";
import dynamic from "next/dynamic"; //https://web.dev/code-splitting-with-dynamic-imports-in-nextjs/
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontawesome
// import Header from "./Header";
import Footer from "./Footer";
import { ComponentContext } from "../../context/ComponentContext";
import useTranslation from "../../translations/useTranslation";

// const Hader = dynamic(import("./Header"));//Тут теж працює

const Layout = ({ children, title, description }) => {
  const { t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const { theme, app } = state;
  // const Hader = dynamic(import("../mag_stan/Header"));

  const Hader = dynamic(import(`../${app}/Header`)); //Динамічний import //https://web.dev/code-splitting-with-dynamic-imports-in-nextjs/

  return (
    // <div className="site-wrapper">
    <div>
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

      <Hader />

      <div className="loyout__content-wrapper">
        {/* <FontAwecomIcons /> */}
        {children}
      </div>
      <Footer />

      <style jsx global>{`
        //global Next.js
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-size: 20px;
          line-height: 1.7;
          font-weight: 400;
          text-rendering: optimizeLegibility;
        }

        h1,
        h2,
        h3 {
          margin: 40px 0 30px;
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
      <style jsx global>{`
        //Для динамічних стилів окремо
        body {
          background: ${theme.colors.background};
          color: ${theme.colors.text};
          font-family: ${theme.fontFamily.sansSerif};
        }
      `}</style>
      <style jsx>{`
        /* Layout */
        .loyout__content-wrapper {
          margin-top: 64px; /*Щоб контент не заїжджав під шапку*/
          min-height: 600px;
          text-align: center;
          padding: 0px;
        }
      `}</style>
    </div>
  );
};

export default Layout;
