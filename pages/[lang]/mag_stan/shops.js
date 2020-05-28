//Shops.js
import Link from "next/link";
import { useContext } from "react";
import { ComponentContext } from "../../../context/ComponentContext";
import Layout from "../../../components/all/Layout";
import useTranslation from "../../../translations/useTranslation";
import GoogleMaps from "../../../components/mag_stan/React-google-map";

const Shops = () => {
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  const { t } = useTranslation();
  return (
    <Layout
      title={t("pageShops_title")}
      description={t("pageShops_description")}
    >
      <div className="conteiner">
        {/* //<div>-потрібен для того що чітко окреслити розміри внутрішнього контейнера */}
        <div className="paper">
          <h1>{t("pageShops_title")}</h1>
          <div className="card__list">
            <Link href="#map">
              <div className="card__item" title={t("pageShops_onMap")}>
                <h3 id="m1">{t("pageShops_m1Title")}</h3>
                <img src="/shops/Ctan2-500-375.jpg" alt="Ctan2 " />
                <p>{t("pageShops_m1Descr")}</p>
              </div>
            </Link>
            <Link href="#map">
              <div className="card__item" title={t("pageShops_onMap")}>
                <h3 id="m2">{t("pageShops_m2Title")}</h3>
                <img src="/shops/m66-500-375.jpg" alt="m66" />
                <p>{t("pageShops_m2Descr")}</p>
              </div>
            </Link>
            <Link href="#map">
              <div className="card__item" title={t("pageShops_onMap")}>
                <h3 id="m3">{t("pageShops_m3Title")}</h3>
                <img src="/shops/Pushk-500-375.jpg" alt="Pushk" />
                <p>{t("pageShops_m3Descr")}</p>
              </div>
            </Link>
            <Link href="#map">
              <div className="card__item" title={t("pageShops_onMap")}>
                <h3 id="m4">{t("pageShops_m4Title")}</h3>
                <img src="/shops/Dvoruk-500-375.jpg" alt="Dvoruk" />
                <p>{t("pageShops_m4Descr")}</p>
              </div>
            </Link>
            <Link href="#map">
              <div className="card__item" title={t("pageShops_onMap")}>
                <h3 id="m5">{t("pageShops_m5Title")}</h3>
                <img src="/shops/Tytyn-500-375.jpg" alt="Tytyn" />
                <p>{t("pageShops_m5Descr")}</p>
              </div>
            </Link>
            <Link href="#map">
              <div className="card__item" title={t("pageShops_onMap")}>
                <h3 id="m6">{t("pageShops_m6Title")}</h3>
                <img src="/shops/m55-500-375.jpg" alt="m55" />
                <p>{t("pageShops_m6Descr")}</p>
              </div>
            </Link>
            <Link href="#map">
              <div className="card__item" title={t("pageShops_onMap")}>
                <h3 id="m7">{t("pageShops_m7Title")}</h3>
                <img src="/shops/mStan-500-355.jpg" alt="mStan" />
                <p>{t("pageShops_m7Descr")}</p>
              </div>
            </Link>
          </div>
        </div>
        <p id="map">
          <GoogleMaps />
        </p>
      </div>

      <style jsx>{`
        .conteiner {
          display: flex;
          flex-direction: column;
          justify-content: center;
          //padding-top: 20px;
          padding: 20px;

          flex-grow: 1; //Кофіцієнт збільшення
          width: 100%;
          background: ${theme.colors.background};
        }
        .paper {
          width: 100%;
          padding-bottom: 20px;
          padding: 0 20px; //Внутріщні відступи Paper
          margin-bottom: 10px;
          display: flex;
          flex-direction: column;
          border-radius: 15px;
          background: ${theme.colors.backgroundPaper};
          box-shadow: ${theme.colors.boxShadowPaper};
        }
        .paper h1 {
          padding: 5px;
          margin: 15px 10px;
          text-align: center;
          border-radius: 15px;
          color: ${theme.colors.text};
          font-family: ${theme.fontFamily.serif};
          background: ${theme.colors.backgroundPaper};
          box-shadow: ${theme.colors.boxShadowPaper};
        }
        .card__list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between; /*Перший ел зпочатку останній вкінці */
          max-width: 1240px;
          margin: auto;
        }
        .card__item {
          padding: 10px;
          margin: 0 0 20px;
          width: calc((100% - 40px) / 3); //Щирина при 3-х колонках
          overflow: hidden; //щоб изображение не выходило за рамки блока при увеличении. Не працює!!!
          border-radius: 15px;
          color: ${theme.colors.text};
          font-family: ${theme.fontFamily.serif};
          background: ${theme.colors.backgroundPaper};
          box-shadow: ${theme.colors.boxShadowPaper};
        }

        .card__item img:hover {
          transform: scale(1.1);
          transition: transform 0.4s ease-in;
          cursor: pointer; //рука
        }
        img {
          max-width: 100%;
        }
        h2,
        h3,
        p {
          margin: 0 0 5px 0;
        }
        p {
          font-size: 18px;
          color: #777;
        }

        //iPad
        @media (max-width: 960px) {
          .card__item {
            width: calc((100% - 40px) / 2); //Щирина при 2-х колонках
            padding: 10px 20px;
          }
        }
        @media (max-width: 600px) {
          .card__item {
            width: auto;
            padding: 10px 20px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Shops;
