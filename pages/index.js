//fajka
import React from "react";
import Head from "next/head";
import { getInitialLocale } from "../translations/getInitialLocale";

const Index = () => {
  React.useEffect(() => {
    const locale = getInitialLocale();
    // console.log("*** 1/ pages/index.js/useEffect/glocale=", locale);
    window.location.replace(`/${locale}`);
    // window.location.replace(`/${getInitialLocale()}`);
  });
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default Index;
