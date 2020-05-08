//Сategory.js
//Добавлено animat
import React, { useContext } from "react";
// import useTranslation from "../../../translations/useTranslation";
// import { ComponentContext } from "../../../context/ComponentContext";
//import IconFreeShiping from "../../ui/icons/IconFreeShiping";
import IconFreeShipingBant from "../../ui/icons/IconFreeShipingBant";
import IconVegetable from "../../ui/icons/IconVegetable";
import IconSupport from "../../ui/icons/IconSupport";
// import IconHightQuality from "../../ui/icons/IconHightQuality";
import IconSuperiorQuality from "../../ui/icons/IconSuperiorQuality";

const Сategory = () => {
  // export default function HomePage() {
  // const { t } = useTranslation();
  // const { state } = useContext(ComponentContext);
  // const theme = state.theme;

  return (
    // <section className="ftco-section">
    <section className="category__section">
      <div className="container">
        3333333333333333333
        {/* <div className="grid">
          <div>1-1 cat-Fruits</div>
          <div>1-2 h2-Vegetable</div>
          <div>1-3 cat-Juices</div>
          <div>2-1 cat-Vegetables</div>
          <div>2-2 h2-Vegetable </div>
          <div>2-3 cat-Drued</div>
        </div> */}
      </div>
      <style jsx>{`
        .category__section {
          padding: 6em 0;
          position: relative;
        }
        .container {
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
        }

        .grid {
          display: grid;
          grid-template-rows: repeat(2, 1fr) 0.5fr;
          grid-template-columns: 150px 2fr;
          grid-gap: 2vw; //між грід елементами//1% Відносно ширини вікна перегляду
          border: 1px solid black;
          margin: 10px;
        }
        .grid > div {
          font-size: 3vw; //Відносно 1% ширини вікна перегляду
          padding: 0.5em; //Відносно розміру шрифту елемента (0ю5em означає в 2 рази менше розміру поточного шрифту)
          background: gold;
          text-align: center; //вирівнювання по Х
        }
      `}</style>
    </section>
  );
};
export default Сategory;
