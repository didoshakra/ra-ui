//index.js

import { useContext } from "react";
import Link from "next/link";

import Layout from "../../../../components/all/Layout";
import { ComponentContext } from "../../../../context/ComponentContext";
import FontAwecomIcons from "../../../../components/ui/FontAwecomIcons";
// import svgDelete from "../../../../components/ui/svg-delete";
import CatSVG from "../../../../public/icons/svg/cat.svg";
import DeleteSVG from "../../../../public/icons/svg/iosgluph-delete-30.svg";
import DocumentSVG from "../../../../public/icons/svg-stat/original/document.svg";
// import { ReactComponent as DocumentSVG} from "../../../../public/icons/svg-stat/original/document.svg";
import IconUmbrella from "../../../../components/ui/icons/IconUmbrella";
import IconCat from "../../../../components/ui/icons/IconCat";
import IconGoogle from "../../../../components/ui/icons/IconGoogle";
import IconHightQuality from "../../../../components/ui/icons/IconHightQuality";

const index = () => {
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  const disabled = false;
  const buttonClick = () => {
    // console.log("buttonClick");
  };
  return (
    <Layout
      // title={t("pageAboutMe_title")}
      title="ui"
      // description={t("pageAboutMe_description")}
      description="ui"
    >
      <section>
        <FontAwecomIcons />
        <p>Кнопка</p>
        <div className="button" onClick={buttonClick}>
          {/* Докладніше */}
          View Details
        </div>

        <div className="svg-items">
          <Link href="https://stackoverflow.com/questions/55175445/cant-import-svg-into-next-js/55180310">
            <a>
              SVG-як: компонент / import../public/icons/svg/cat.svg
              (next.config.js)
            </a>
          </Link>
          <p>Не регулюються (розмір і колір) </p>
          <DeleteSVG />
          <DocumentSVG />
          <CatSVG />
        </div>

        <div className="svg-items">
          <Link href="https://stackoverflow.com/questions/55175445/cant-import-svg-into-next-js/55180310">
            <a>
              SVG-як: background-image:
              //url("https://twemoji.maxcdn.com/svg/1f500.svg") (next.config.js)
            </a>
          </Link>
          <p>Регулюється style jsx (розмір і колір)</p>
          <span className="twa-arrow"></span>
          <span className="twa-arrow grey-out"></span>
          <span className="twa-arrow hue-rotate"></span>
          <span className="twa-arrow invert"></span>
        </div>

        <div className="svg-items">
          <Link href="https://ru.stackoverflow.com/questions/653140/%D0%98%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B8-%D1%86%D0%B2%D0%B5%D1%82%D0%B0-svg-img-%D0%B1%D0%B5%D0%B7-js">
            <a>SVG-як: img className="grey-out" src="/icons/svg/cat.svg" </a>
          </Link>
          <p>
            Регулюється style jsx (розмір і колір(filter:
            grayscale(100%))(next.config.js){" "}
          </p>
          <img className="grey-out" src="/icons/svg/cat.svg" />
          <img className="hue-rotate" src="/icons/svg/cat.svg" />
          <img className="invert" src="/icons/svg/cat.svg" />
          <img src="/icons/svg-stat/original/document.svg" />
        </div>

        <div className="svg-items">
          <Link href="https://stackoverflow.com/questions/56276103/how-to-import-svg-into-next-js-component">
            <a>
              !!! SVG-як компонент Rеact: import ../public/icons/svg/cat.svg)
            </a>
          </Link>
          <Link href="https://css-live.ru/articles/sozdanie-sistemy-svg-ikonok-s-pomoshhyu-react.html">
            <a>fffffffffffffffffffffff</a>
          </Link>
          <p>!!! Регулюється параметрами компонента (розмір і колір) </p>
          <IconUmbrella />
          <IconUmbrella umbrellafill="#333" width="64" height="64" />
          <IconUmbrella umbrellafill="#ccc" width="128" height="128" />
          <IconGoogle width="64" height="64" />
          <IconHightQuality umbrella color="#ccc" width="128" height="128" />
          <IconCat color="#34158a" width="64" height="64" />
        </div>
        <div></div>
      </section>
      <style jsx>{`
      .svg-items{
        //border: 2px solid #000000; /* Параметры границы */
        border: 2px solid #34158a; /* Параметры границы */
       //height: 128px;
        //width: 100%;
        }
        //
      .twa-arrow {
  background-image: url("https://twemoji.maxcdn.com/svg/1f500.svg");
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center center;
  height: 2em;
  width: 2em;
  margin: 0 0.15em 0 0.3em;
  vertical-align: -0.3em;
  background-size: 2em 2em;
}
.grey-out {
  opacity: 0.4;
  filter: grayscale(100%);
  height: 64px;
  width: 64px;
  background-size: 64px 64px;
}
.hue-rotate {
  filter: hue-rotate(90deg);
  height: 128px;
  width: 128px;
  background-size: 128px 128px;
}
.invert {
  filter: invert(100%);
  height: 256px;
  width: 256px;
  background-size: 256px 256px;
}
//


        .button {
          display: fllex-line; //щоб не переносилась і ширина по контексту
          position: relative;
          padding: 6px 12px;
          //background: #70b4e6;
          background: #82ae46;
          //width: "";
          height: "40зч";
          color: #fff;
          border: 2px solid #82ae46; /* Параметры границы */
          border-radius: 20px;
          //font-family: "Poppins,Geneva, Arial, sans-serif";
          //font-family: ${theme.fontFamily.sansSerif};
          font-size: 16px;
          //${theme.colors.headBackground};
          //font-weight: "";
          opacity: ${disabled ? ".5" : "1"};
        }
        .button:hover {
                  background-color:#83ae465b;
                color:#82ae46;
          border: 2px solid #82ae46; /* Параметры границы */
          cursor: ${disabled ? "not-allowed" : "pointer"};
        }
      `}</style>
    </Layout>
  );
};

export default index;
