//Services.js / Muiv4.5.1
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

const Services = () => {
  // export default function HomePage() {
  // const { t } = useTranslation();
  // const { state } = useContext(ComponentContext);
  // const theme = state.theme;

  return (
    // <section className="ftco-section">
    <section className="servises__section">
      <div className="servises__row">
        {/* servises__item */}
        <div className="servises__item">
          <div className="servises__item__icon bg-color-1">
            <div className="servises__item__icon__circle ">
              <IconFreeShipingBant
                width="50"
                height="50"
                color="#fff"
                color1="#fff"
              />
              {/* <span>flaticon-diet</span> */}
            </div>
          </div>
          <div className="servises__item__body">
            <h3 className="servises__item__body__heading">Free Shipping</h3>
            <span>On order over $100</span>
          </div>
        </div>
        {/* servises__item */}
        <div className="servises__item">
          <div className="servises__item__icon bg-color-2">
            <div className="servises__item__icon__circle">
              {/* <IconVegetable width="50" height="50" color="#fff" color1="black" /> */}
              <IconVegetable
                width="50"
                height="50"
                color="#fff"
                color1="#fff"
              />
              {/* <span>flaticon-diet</span> */}
            </div>
          </div>
          <div className="servises__item__body">
            <h3 className="servises__item__body__heading">Always Fresh</h3>
            <span>Product well package</span>
          </div>
        </div>
        {/* servises__item */}
        <div className="servises__item">
          <div className="servises__item__icon bg-color-3">
            <div className="servises__item__icon__circle">
              <IconSuperiorQuality
                width="60"
                height="60"
                // color1="#fff"
                color="#fff"
                color1="#fff"
              />
              {/* <span>flaticon-diet</span> */}
            </div>
          </div>
          <div className="servises__item__body">
            <h3 className="servises__item__body__heading">Superior Quality</h3>
            <span>Quality Products</span>
          </div>
        </div>
        {/* servises__item */}
        <div className="servises__item">
          <div className="servises__item__icon bg-color-4">
            <div className="servises__item__icon__circle">
              <IconSupport
                width="60"
                height="60"
                color="#fff"
                color1="#fff"
                color2="#fff"
                color3="#fff"
                color4="#fff"
              />
              {/* <span>flaticon-diet</span> */}
            </div>
          </div>
          <div className="servises__item__body">
            <h3 className="servises__item__body__heading">Support</h3>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
      {/* </div> */}
      <style jsx global>{`
        //https://codeconqueror.com/blog/using-google-fonts-with-next-js
        //Загрузка локального шрифта. Нетреба в _documrnts.js
        //Можна грузити декілька шрифтів зразу як локальні так і з сепверів
        @font-face {
          font-family: "AmaticSC", "Source Sans Pro", "Amatic SC";
          src: url("/public/vegefoods/fonts/Amatic_SC/AmaticSC-Bold.ttf"),
            url("https://fonts.googleapis.com/css?family= Source + Sans + Pro & display = swap"),
            url("https://fonts.googleapis.com/css?family=Amatic+SC:400,700&display=swap");
          //font-weight: bold;
          //font-style: cursive;
          //font-display: swap;
        }
      `}</style>
      <style jsx>{`
        .servises__section {
          padding: 0 2vw;
          position: relativ3 їe;
        }

        .servises__row {
          position: relative;
          //margin-right: -15px;
          // margin-left: -15px;
          display: flex;
          flex-direction: row; //В рядок
          flex-wrap: wrap;
          //justify-content: space-evenly; //Рівномірно,з країв  1/2 .
          justify-content: space-around; //Рівномірно всюди .
          //align-items: center; //Y-вертикально //R-щоб рівняло по верху
        }

        .servises__item {
          display: flex;
          flex-direction: column; //в стовбець;
          //justify-content: center; //Тут по Y //R-щоб рівняло по верху
          align-items: center; //Y але тут по X
          flex: 1 1 auto;
          width: 600px;
          margin: 20px 0;
        }
        .servises__item__icon {
          display: flex;
          padding: 2px;
          justify-content: center; //X-горизонтально
          align-items: center; //Y-вертикально
          text-align: center; //X-для тексту(не flex)
          //flex: 1 0 110px;
          flex-basis: 100px; //R-щоб не розтягувало коли servises__item/align-items: center;
          min-width: 100px;
          min-height: 100px;
          border-radius: 50%;
        }
        .servises__item__icon__circle {
          display: flex;
          padding: 2px;
          justify-content: center; //X-горизонтально
          align-items: center; //Y-вертикально
          text-align: center; //X-для тексту(не flex)
          //flex: 1 0 80px;
          min-width: 80px; //
          min-height: 80px;
          border-radius: 50%;
          border: 1px solid #fff; /* Параметры границы */
        }
        .servises__item__icon:hover {
          background: #82ae46;
        }
        .bg-color-1 {
          background: #e4b2d6;
        }

        .bg-color-2 {
          background: #dcc698;
        }

        .bg-color-3 {
          background: #a2d1e1;
        }

        .bg-color-4 {
          background: #dcd691;
        }
        .servises__item__body {
          //font-family: "Amatic SC";
          text-transform: uppercase;
          font-size: 12px;
          font-weight: 500;
          color: gray;
        }
        .servises__item__body__heading {
          margin: 0 0 8px;
          text-transform: uppercase;
          font-size: 15px;
          line-height: 1.8;
          font-weight: 500;
          color: #000000;
        }

        @media (min-width: 768px) {
          //планшети
          .servises__item {
            width: calc((100%) / 2);
            margin: 0 0 24px;
            padding: 0 0;
          }
        }
        @media (min-width: 992px) {
          //нетбуки деякі планшети
          .servises__item {
            width: calc((100% - 40px) / 4);
          }
        }
      `}</style>
    </section>
  );
};
export default Services;
