//portfolio.js
import { useContext } from "react";
import { ComponentContext } from "../../../context/ComponentContext";
import Layout from "../../../components/all/Layout";
import Gallery from "../../../components/mag_stan/Gallery";
import useTranslation from "../../../translations/useTranslation";

const Promotions = () => {
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  const { t } = useTranslation();
  const images = [];
  const imageCount = 17;

  for (let i = imageCount; i > 0; i--) {
    images.push(`/promotions/${i}.jpg`); //Добавляє в масив
  }

  return (
    // <Layout title="Portfolio">
    <Layout
      title={t("pagePromotions_title")}
      description={t("pagePromotions_description")}
    >
      <div className="conteiner">
        {/* //<div>-потрібен для того що чітко окреслити розміри внутрішнього контейнера */}
        <div className="paper">
          <h1>{t("pagePromotions_title")}</h1>
          <Gallery images={images} />
        </div>
      </div>
      <style jsx>{`
        .conteiner {
          display: flex;
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
          border-radius: 10px;
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
          background: ${theme.colors.backgroundPaperHead};
          box-shadow: ${theme.colors.boxShadowPaperHead};
        }
      `}</style>
    </Layout>
  );
};

export default Promotions;
