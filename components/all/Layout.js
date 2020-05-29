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
