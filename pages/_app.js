import App from "next/app";
// import { CounterProvider } from "../store";
import CssBaseline from "@material-ui/core/CssBaseline";

import { LocaleProvider } from "../modules/main/context/LocaleContext";

import { isLocale } from "../translations/helpes";
import { ThemeProvider } from "../modules/main/components/ThemeContext"; //Це є типу MuiThemeWrapper.js

class MyApp extends App {
  //з //_app.js/sceletMUI
  componentDidMount() {
    // Remove the server-side injected CSS.//Видаліть CSS на стороні сервера.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }
  render() {
    const { Component, pageProps } = this.props;
    console.log("+++ 1/_app.js/render");
    return (
      // <LocaleProvider lang={locale}>
      <LocaleProvider>
        <CssBaseline />
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </LocaleProvider>
    );
  }
}

export default MyApp;
