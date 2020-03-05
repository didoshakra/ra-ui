//create-next-app-examples
import React from "react";
import Head from "next/head";
import Nav from "./nav";
import AppFrame from "../../../modules/main/components/AppFrame";

const PostApp = () => (
  <AppFrame>
    <div>
      <Head>
        <title>PostApp</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Nav />
    </div>
  </AppFrame>
);

export default PostApp;
