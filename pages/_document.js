//_document.js/MuiScelet+ Muiv4.5.1
import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import { themeColor } from "../modules/main/components/ThemeContext";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          {/* Використовуйте мінімальний масштаб \u003d 1, щоб увімкнути растерізацію GPU. */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          {/*(взято з MUIv.4.5.1)
            manifest.json надає метадані, для Android.  See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
          */}
          {/* iOS Icon(взято з MUIv.4.5.1) */}
          {/* PWA primary color (взято з MUIv.4.5.1)*/}
          <meta name="theme-color" content={themeColor} />
          {/*було в scelet */}
          <link rel="shortcut icon" href="/favicon.ico" />

          {/* //  шрифти material-ui та шрифтів Roboto(може бути в _APP.js) */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  //Візуалізує додаток та сторінку та отримує контекст сторінки зі зібраними побічними ефектами.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Фрагмент стилів відображається після закінчення візуалізації програми та сторінки.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement()
    ]
  };
};
