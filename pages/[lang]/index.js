//Homepage/hover
import { useContext } from "react";
import Link from "next/link";
import Layout from "../../components/main/Layout";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";

const Homepage = () => {
  const { locale, t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  return (
    // <Layout title="Home">
    <Layout title={t("pageHome_title")} description={t("pageHome_description")}>
      <div className="cover">
        <div className="hello">
          <img src="/SunMan.jpg" className="logo" alt="Logo" />
          <h1>{t("pageHome_Welcome")}👋</h1>
          {/* <h3>{t("pageHome_aboutPage")}</h3> */}
          <Link href="/[lang]/about" as={`/${locale}/about`}>
            <a className="view-more">{t("pageHome_buttonAboutMe")}</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .cover {
          position: relative;
          min-height: 600px;
          // background: transparent url(/cover.jpg) no-repeat center center;
          // background: transparent url(/sunrise-over-planet-earth-in.jpg) no-repeat
          // background: transparent url(/photo/Karpaty.jpg) no-repeat
          //background: transparent url(/photo/karpaty-morning1.jpg) no-repeat
          background: transparent url(/photo/Everest.jpg) no-repeat
            //background: transparent url(/photo/karpaty-morning.jpg) no-repeat
            // background: transparent url(/photo/bananu-alkogol.jpg) no-repeat
            //background: transparent url(/photo/bananu-alkogol-obr.jpg) no-repeat
            center center;
          background-size: cover; //Масштабирует изображение с сохранением пропорций так, чтобы его ширина или высота равнялась ширине или высоте блока.
          word-wrap: break-word; //Перенос строк добавляется автоматически, чтобы слово поместилось в заданную ширину блока.
          //transition: transform 0.4s ease-in;
          transition: transform 0.4s;
        }
        .cover:hover {
          transform: scale(1.1);
          cursor: pointer; //рука
        }
        .hello {
          position: absolute;
          top: 30px;
          left: 50px;
          max-width: 500px;
          // height: 300px;
          padding: 10px;
          // margin: 5 px;
          background: ${theme.colors.background};
          color: ${theme.colors.text};
          font-family: ${theme.fontFamily.sansSerif};
          // background: #3f3f3f;
        }
        .hello h1 {
          // margin: 0 0 10px 0;
          line-height: 0.01;
        }
        .hello h3 {
          line-height: inherit;
          line-height: 0.01;
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
          //display: flex; //Блок стремится расшириться на всю доступную ширину. Можно указать ширину и высоту явно
          //margin-left: 30px; //відступи зправа
          //max-width: 350px;
          top: 10px; //відступ
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
      `}</style>
    </Layout>
  );
};

export default Homepage;
