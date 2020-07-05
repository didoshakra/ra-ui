//fontNext-Global.js //https://www.youtube.com/watch?v=qWWoIPLSeec
// CSS: index.module.scc
///Fonts працює загрузка ззовні і локально!
// Загрузка Fonts  зовні: _document * <link //   href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800&display=swap"
// Загрузка Fonts  локально : https://codeconqueror.com/blog/using-google-fonts-with-next-js
//_app.js * style jsx global>{` @font-face {font-family: "Amatic SC"; src: url("/fonts/AmaticSC-Regular.woff2");...

import styles from "./fonts.module.css";

const Fonts = () => {
  return (
    <div className={styles.div}>
      <h1 style={{ color: "rgba(226,101,75,1)" }}>Стилі з fonts.module.scc</h1>
      <h2 style={{ color: "rgba(219,75,226,1)" }}>Шрифти локальні</h2>
      <p style={{ color: "#000" }}>
        Загрузка Fonts локально: __app.js * style jsx global>
        <p className={styles.one}>
          <b style={{ color: "red" }}>Roboto-Regular: </b> "Almost before we
          knew it, we had left the ground."
        </p>
        <p className={styles.two}>
          <b style={{ color: "red" }}>Roboto-Medium:</b> "Almost before we knew
          it, we had left the ground."
        </p>
        <p className={styles.three}>
          <b style={{ color: "red" }}>RobotoCondensed-Bold:</b> "Almost before
          we knew it, we had left the ground."
        </p>
        <p className={styles.four}>
          <b style={{ color: "red" }}>RobotoCondensed-Regular:</b> "Almost
          before we knew it, we had left the ground."
        </p>
        <p className={styles.five}>
          <b style={{ color: "red" }}>Dosis-Light:</b> "Almost before we knew
          it, we had left the ground."
        </p>
        <p className={styles.six}>
          <b style={{ color: "red" }}>Dosis-Medium:</b> "Almost before we knew
          it, we had left the ground."
        </p>
        <h2 style={{ color: "rgba(14,7,47,1)" }}>Шрифти зовнішні </h2>
        <p style={{ color: "#000" }}>
          Загрузка Fonts зовні: _document.js/Head/*** link
          href="https://fonts.googleapis.com/css2?family=Tangerine&display=swap"
          rel="stylesheet" / `
        </p>
      </p>
      <p className={styles.external__one}>
        <b style={{ color: "rgba(98,75,226,1)" }}>Amatic SC:</b> "Almost before
        we knew it, we had left the ground."
      </p>
      <p className={styles.external__two}>
        <b style={{ color: "rgba(98,75,226,1)" }}>Poppins:</b> "Almost before we
        knew it, we had left the ground."
      </p>
      <p className={styles.external__three}>
        <b style={{ color: "rgba(98,75,226,1)" }}>Tangerine:</b> "Almost before
        we knew it, we had left the ground."
      </p>
    </div>
  );
};

export default Fonts;
