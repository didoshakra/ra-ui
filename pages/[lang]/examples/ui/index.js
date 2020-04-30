//index.js

import { useContext } from "react";
import Layout from "../../../../components/all/Layout";
import FontAwecomIcons from "../../../../components/ui/FontAwecomIcons";
import { ComponentContext } from "../../../../context/ComponentContext";

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
        <div className="button" onClick={buttonClick}>
          {/* Докладніше */}
          View Details
        </div>
      </section>
      <style jsx>{`
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
