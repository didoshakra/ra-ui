//home_stan.js
//
import { useContext } from "react";
import Link from "next/link";
import Layout from "../../../components/main/Layout";
import Gallery from "../../../components/mag_stan/Gallery";
// import theme from "../../styles/theme";
import useTranslation from "../../../translations/useTranslation";
import { ComponentContext } from "../../../context/ComponentContext";

const images = [
  "/promotions/14.jpg",
  "/promotions/13.jpg",
  "/promotions/12.jpg",
  "/promotions/11.jpg",
  "/promotions/10.jpg",
  "/promotions/9.jpg",
];

const Homepage = () => {
  const { locale, t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  return (
    <Layout title={t("pageHome_title")} description={t("pageHome_description")}>
      <div className="cover">
        <div className="hello">
          <img src="/Ctan-400-231.jpg" className="logo" alt="StanLogo" />
          <h1>{t("pageHome_Welcome")}👋</h1>
          <h3>{t("pageHome_aboutPage")}</h3>
          <Link href="/[lang]/about" as={`/${locale}/about`}>
            <a className="view-more">{t("pageHome_buttonAboutMe")}</a>
          </Link>
        </div>
      </div>
      <div className="conteiner">
        {/* //<div>-потрібен для того що чітко окреслити розміри внутрішнього контейнера */}
        {/* <div className="paper-conteiner"> */}
        <div className="paper">
          <h1>{t("pageHome_oldPromotions")}</h1>
          <Gallery images={images} />
          <div className="">
            <Link href="/[lang]/promotions" as={`/${locale}/promotions`}>
              <a className="view-more">{t("pageHome_viewAll")}</a>
            </Link>
          </div>
        </div>
        {/* </div> */}
      </div>

      <style jsx>{`
        .cover {
          position: relative;
          min-height: 600px;
          // background: transparent url(/cover.jpg) no-repeat center center;
          // background: transparent url(/sunrise-over-planet-earth-in.jpg) no-repeat
          // background: transparent url(/Karpaty.jpg) no-repeat
          // background: transparent url(/photo/bananu-alkogol.jpg) no-repeat
          background: transparent url(/photo/bananu-alkogol-obr.jpg) no-repeat
            center center;
          background-size: cover;
          word-wrap: break-word;
        }
        .hello {
          display: flex;
          flex-direction: column;
          position: relative;
          top: 10px;
          left: 50px;
          // height: 300px;
          padding: 5px;
          // margin: 5 px;
          max-width: 250px;
          font-family: ${theme.fontFamily.serif};
          color: ${theme.colors.text};
          background: ${theme.colors.background};
        }
        .hello h1 {
          //margin: 0 0 5px 0;
          margin: 0;
        }
        .hello h3 {
          margin: 0;
        }
        a.view-more {
          text-transform: uppercase;
          font-size: 16px;
        }
        .latest-work {
          text-align: center;
          // padding: 30px 0;
          padding: 10px 0;
          // margin-bottom: 60px;
          margin-bottom: 20px;
        }
        .logo {
          display: block; //Блок стремится расшириться на всю доступную ширину. Можно указать ширину и высоту явно
          width: 400px;
          top: 20px; //відступ
        }

        @media (max-width: 480px) {
          .hello {
            left: 30px;
            right: 30px;
            font-size: 18px;
            padding: 10px;
            /*word-wrap: break-word;  Перенос слів */
          }
          h1 {
            font-size: 28px;
            word-wrap: break-word; /* Перенос слів */
          }
        }
        .conteiner {
          display: flex;
          justify-content: center;
          //padding-top: 20px;
          padding: 20px;
          flex-grow: 1; //Кофіцієнт збільшення
          width: 100%;
          background: ${theme.colors.background};
        }
        //Невидимий кониейнер над Paper
        /* .paper-conteiner {
          width: 100%;
        } */
        .paper {
          width: 100%;
          padding-bottom: 20px;
          padding: 20px; //Внутріщні відступи Paper
          border-radius: 15px;
          background: ${theme.colors.paperBackground};
          box-shadow: ${theme.colors.paperBoxShadowr};
          //box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
          //background: #eee;
        }
        .paper h1 {
          text-align: center;
          border-radius: 15px;
          padding: 5px;
          color: ${theme.colors.headText};
          font-family: ${theme.fontFamily.serif};
          background: ${theme.colors.paperHeadBackground};
          box-shadow: ${theme.colors.paperHeadBoxShadowr};
        }
      `}</style>
    </Layout>
  );
};

export default Homepage;
