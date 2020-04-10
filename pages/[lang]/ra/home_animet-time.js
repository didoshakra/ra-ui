//Homepage/home_animet-time/
import { useContext } from "react";
import Link from "next/link";
import Layout from "../../../components/main/Layout";
import useTranslation from "../../../translations/useTranslation";
import { ComponentContext } from "../../../context/ComponentContext";

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
        </div>
        <div className="welcom">
          <h1>{t("pageHome_Welcome")}</h1>
          {/* Не працює */}
          {/* <h3 class="animated flash">Hello</h3> */}
          <h2 className="animated wobble">👋</h2>
        </div>
        <Link href="/[lang]/about" as={`/${locale}/about`}>
          <a className="view-more">{t("pageHome_buttonAboutMe")}</a>
        </Link>
      </div>

      <style jsx>{`
        //не працює
        .animated {
          -webkit-animation-duration: 200ms;
          -moz-animation-duration: 200ms;
          animation-duration: 200ms;
        }
        .cover {
          /*z-index: -100; //Якщо ставити то :hover не працює???*/
          position: relative;
          overflow: hidden; //Обрізає все що виходить за межі елементу
          padding-top: 10%; //Поле зверху до тексту
          min-height: 600px;
          max-width: 1280px;
          // background: transparent url(/cover.jpg) no-repeat center center;
          // background: transparent url(/sunrise-over-planet-earth-in.jpg) no-repeat
          // background: transparent url(/photo/Karpaty.jpg) no-repeat
          //background: transparent url(/photo/karpaty-morning1.jpg) no-repeat
          background: transparent url(/photo/Everest.jpg) no-repeat center
            center;
          //background: transparent url(/photo/karpaty-morning.jpg) no-repeat
          // background: transparent url(/photo/bananu-alkogol.jpg) no-repeat
          //background: transparent url(/photo/bananu-alkogol-obr.jpg) no-repeat
          background-size: cover; //Маштабує зображення.
          word-wrap: break-word; //Перенос рядків автоматично.
          //
          animation-duration: 6s;
          animation-name: cover;
          animation-iteration-count: 1; //infinite для нескінченного повтору
          animation-fill-mode: forwards; //Залишається в кінцевому стані
        }
        .hello {
          position: absolute;
          top: 30px;
          left: 50px;
          max-width: 500px;
        }
        .welcom {
          display: flex;
          padding: 30px;
          /* justify-content: center; */
          justify-content: center; /* Вирівнювання елементів по головній осі(x) вправо */
          align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
          //
          animation-duration: 3s;
          animation-name: welcom;
          animation-iteration-count: 2; //infinite для нескінченного повтору
          animation-direction: alternate; //Анімація туда і назад
        }
        .welcom h1 {
          color: #0000ff;
          font-size: 60px;
        }

        //https://developer.mozilla.org/uk/docs/Web/CSS/CSS_Animations/%D0%92%D0%B8%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D1%82%D0%B0%D0%BD%D0%BD%D1%8F_CSS_%D0%B0%D0%BD%D1%96%D0%BC%D0%B0%D1%86%D1%96%D0%B9
        @keyframes hand {
          from {
            transform: rotate(45deg);
          }
          to {
            transform: rotate(-45deg);
          }
        }
        @keyframes welcom {
          from {
            transform: scale(1);
            color: #0000ff;
          }
          to {
            transform: scale(3);
            color: #ffcccc;
          }
        }
        @keyframes cover {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.2);
          }
        }
      `}</style>
    </Layout>
  );
};

export default Homepage;
