//fontNext-Global.js //https://www.youtube.com/watch?v=qWWoIPLSeec
//<style jsx>{` всередині модуля
//Fonts працює загрузка ззовні і локально!
// Загрузка Fonts  зовні: _document * <link //   href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800&display=swap"
// Загрузка Fonts  локально : https://codeconqueror.com/blog/using-google-fonts-with-next-js
//_app.js * style jsx global>{` @font-face {font-family: "Amatic SC"; src: url("/fonts/AmaticSC-Regular.woff2");...
import { ComponentContext } from "../../../context/ComponentContext";

const Fonts = () => {
  const { state } = React.useContext(ComponentContext);
  const theme = state.theme;
  return (
    <div className="div">
      <h1 style={{ color: "rgba(16,69,16,1)" }}>Стилі з style jsx</h1>
      <p style={{ color: "#000" }}>
        <h2 style={{ color: "rgba(219,75,226,1)" }}>
          Загрузка Fonts локально: __app.js * style jsx global
        </h2>
        ----------------------------------------------------------------------------------------------
        <h3>********** sans-serif - звичайні шрифти без засічок ****</h3>
        <p className="sans-serif">
          <b style={{ color: "red" }}>Poppins-Regular:</b> "Almost before we
          knew it, we had left the ground."
        </p>
        <p className="sans-serif-one">
          <b style={{ color: "red" }}>Roboto-Regular,sans-serif: </b> "Almost
          before we knew it, we had left the ground."
        </p>
        <p className="sans-serif-two">
          <b style={{ color: "red" }}>Roboto-Medium, sans-serif:</b> "Almost
          before we knew it, we had left the ground."
        </p>
        <p className="sans-serif-three">
          <b style={{ color: "red" }}>RobotoCondensed-Bold:</b> "Almost before
          we knew it, we had left the ground."
        </p>
        <p className="sans-serif-four">
          <b style={{ color: "red" }}>RobotoCondensed-Regular:</b> "Almost
          before we knew it, we had left the ground."
        </p>
        <p className="sans-serif-five">
          <b style={{ color: "red" }}>Dosis-Light:</b> "Almost before we knew
          it, we had left the ground."
        </p>
        <p className="sans-serif-six">
          <b style={{ color: "red" }}>Dosis-Medium:</b> "Almost before we knew
          it, we had left the ground."
        </p>
        ----------------------------------------------------------------------------------------------
        <h3>********** serif - звичайні шрифти з засічками***</h3>
        <p className="ext__four">
          <b style={{ color: "red" }}>Lora-Regular:</b> "Almost before we knew
          it, we had left the ground."
        </p>
        ----------------------------------------------------------------------------------------------
        <h3>********** cursive" - шрифти, що імітують почерк ***</h3>
        <p className="cursive__one">
          <b style={{ color: "red" }}>AmaticSC-Regular:</b> "Almost before we
          knew it, we had left the ground."
        </p>
        <p className="cursive__two">
          <b style={{ color: "red" }}>Tangerine-Regular:</b> "Almost before we
          knew it, we had left the ground."
        </p>
        ----------------------------------------------------------------------------------------------
        <h3>
          ********** monospace - Всі гліфи мають однакову фіксовану ширину***
        </h3>
        <p className="monospace__one">
          <b style={{ color: "red" }}>MajorMonoDisplay-Regular:</b> "Almost
          before we knew it, we had left the ground."
        </p>
        ----------------------------------------------------------------------------------------------
        <h3>********** fantasy - декоративні шрифти, для назв***</h3>
        <p className="fantasy__one">
          <b style={{ color: "red" }}>Trattatello:</b> "Almost before we knew
          it, we had left the ground."
        </p>
      </p>
      <p style={{ color: "#000" }}>
        <h2 style={{ color: "rgba(219,75,226,1)" }}>
          Загрузка Fonts через змінну $theme.fontFamily:
        </h2>
        ----------------------------------------------------------------------------------------------
        <h3>
          *** $theme.fontFamily:sans-serif - звичайні шрифти без засічок ****
        </h3>
        <p className="theme__sans-serif">
          <b style={{ color: "red" }}>$theme__sans-serif:</b> "Almost before we
          knew it, we had left the ground."
        </p>
        ----------------------------------------------------------------------------------------------
        <h3>*** $theme.fontFamily:serif - звичайні шрифти з засічками***</h3>
        <p className="theme__serif">
          <b style={{ color: "red" }}>$theme__serif:</b> "Almost before we knew
          it, we had left the ground."
        </p>
        ----------------------------------------------------------------------------------------------
        <h3>*** $theme.fontFamily:cursive" - шрифти, що імітують почерк ***</h3>
        <p className="theme__cursive">
          <b style={{ color: "red" }}>$theme__cursive:</b> "Almost before we
          knew it, we had left the ground."
        </p>
        ----------------------------------------------------------------------------------------------
        <h3>
          *** $theme.fontFamily:monospace - Всі гліфи мають однакову фіксовану
          ширину***
        </h3>
        <p className="theme__monospace">
          <b style={{ color: "red" }}>$theme__monospace:</b> "Almost before we
          knew it, we had left the ground."
        </p>
        ----------------------------------------------------------------------------------------------
        <h3>********** fantasy - декоративні шрифти, для назв***</h3>
        <p className="theme__fantasy">
          <b style={{ color: "red" }}>Trattatello:</b> "Almost before we knew
          it, we had left the ground."
        </p>
      </p>
      {/* ************** */}
      {/* ************** */}
      <p style={{ color: "rgba(98,75,226,1)" }}>
        ==========================================================================================
        <h2>
          Загрузка Fonts зовні: _document.js/Head/*** link
          href="https://fonts....
        </h2>
        <p className="external__one">
          <b style={{ color: "red" }}>Amatic SC:</b> "Almost before we knew it,
          we had left the ground."
        </p>
        <p className="external__two">
          <b style={{ color: "red" }}>Poppins(зовн):</b> "Almost before we knew
          it, we had left the ground."
        </p>
        <p className="external__three">
          <b style={{ color: "red" }}>Tangerine:</b> "Almost before we knew it,
          we had left the ground."
        </p>
        <p className="external__four">
          <b style={{ color: "red" }}>Lora:</b> "Almost before we knew it, we
          had left the ground."
        </p>
      </p>
      <style jsx>{`
        .div {
          //text-align: center;
          padding: 10px 30px;
          text-align: left;
          color: forestgreen;
        }

        .sans-serif-one {
          font-size: 22px;
          font-family: "Roboto-Regular"; //sans-serif
        }

        .sans-serif-two {
          font-size: 22px;
          font-family: "Roboto-Medium"; //sans-serif
        }
        .sans-serif-three {
          font-size: 22px;
          font-family: "RobotoCondensed-Bold"; //sans-serif
        }

        .sans-serif-four {
          font-size: 22px;
          font-family: "RobotoCondensed-Regular";
        }

        .sans-serif-five {
          font-size: 22px;
          font-family: "Dosis-Light";
        }

        .sans-serif-six {
          font-size: 22px;
          font-family: "Dosis-Medium"; //sans-serif
        }
        //////////////////////
        .cursive__one {
          font-size: 22px;
          font-family: "AmaticSC-Regular"; //cursive
        }

        .sans-serif {
          font-size: 22px;
          font-family: "Poppins-Regular"; //sans-serif
        }
        .cursive__two {
          font-size: 22px;
          font-family: "Tangerine-Regular"; //sans-serif
        }
        .ext__four {
          font-size: 22px;
          /* font-family: "Tangerine", cursive; */
          font-family: "Lora-Regular";
        }
        .external__one {
          font-size: 22px;
          font-family: "Amatic SC";
        }
        .external__two {
          font-size: 22px;
          font-family: "Poppins";
        }

        .external__three {
          font-size: 22px;
          font-family: "Tangerine";
        }
        .external__four {
          font-size: 22px;
          font-family: "Lora";
        }
        .monospace__one {
          font-size: 22px;
          font-family: "MajorMonoDisplay-Regular";
        }
        .fantasy__one {
          font-size: 22px;
          font-family: "Trattatello";
        }
        ////////////////////////////
        .theme__sans-serif {
          font-size: 22px;
          font-family: ${theme.fontFamily.sansSerif};
        }
        .theme__serif {
          font-size: 22px;
          font-family: ${theme.fontFamily.serif};
        }
        .theme__cursive {
          font-size: 22px;
          font-family: ${theme.fontFamily.cursive};
        }
        .theme__monospace {
          font-size: 22px;
          font-family: ${theme.fontFamily.monospace};
        }
        .theme__fantasy {
          font-size: 22px;
          font-family: ${theme.fontFamily.fantasy};
        }
      `}</style>
    </div>
  );
};

export default Fonts;
