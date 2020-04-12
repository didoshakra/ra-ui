//https://reacttricks.com/learn-react-by-building-websites-with-next/
//До динамічного імпорту <Header />

import { useContext } from "react";
import Head from "next/head";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontawesome
// import {
//   faTimes,
//   faCoffee,
//   faThumbsUp,
//   faBars,
//   faUser
// } from "@fortawesome/free-solid-svg-icons";
// import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
// // import { faCoffee } from "@fortawesome/free-regular-svg-icons";

import Header from "./Header";
import Footer from "./Footer";
import { ComponentContext } from "../../context/ComponentContext";
import useTranslation from "../../translations/useTranslation";
//import FontAwecomIcons from "../ui/FontAwecomIcons";

const Layout = ({ children, title, description }) => {
  const { t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  // console.log("*** /Layout.js/theme=", theme);

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
      <Header />

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
