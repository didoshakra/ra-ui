//fajka
import React from "react";
import Head from "next/head";
import { getInitialLocale } from "../translations/getInitialLocale";

const Index = () => {
  React.useEffect(() => {
    // console.log("=*=* 1 pages/index.js/useEffect/");
    const glocale = getInitialLocale();
    // console.log("=*=* 2 pages/index.js/useEffect/glocale=", glocale);
    window.location.replace(`/${glocale}`);
    // window.location.replace(`/${getInitialLocale()}`);
  });

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default Index;
