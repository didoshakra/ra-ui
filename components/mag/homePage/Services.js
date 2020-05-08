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
      <div className="container">
        <div className="servises__row">
          {/* servises__media */}
          <div className="servises__media">
            <div className="servises__media__icon bg-color-1">
              <div className="servises__media__icon__circle ">
                <IconFreeShipingBant
                  width="50"
                  height="50"
                  color="#fff"
                  color1="#fff"
                />
                {/* <span>flaticon-diet</span> */}
              </div>
            </div>
            <div className="servises__media__body">
              <h3 className="servises__media__body__heading">Free Shipping</h3>
              <span>On order over $100</span>
            </div>
          </div>
          {/* servises__media */}
          <div className="servises__media">
            <div className="servises__media__icon bg-color-2">
              <div className="servises__media__icon__circle">
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
            <div className="servises__media__body">
              <h3 className="servises__media__body__heading">Always Fresh</h3>
              <span>Product well package</span>
            </div>
          </div>
          {/* servises__media */}
          <div className="servises__media">
            <div className="servises__media__icon bg-color-3">
              <div className="servises__media__icon__circle">
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
            <div className="servises__media__body">
              <h3 className="servises__media__body__heading">
                Superior Quality
              </h3>
              <span>Quality Products</span>
            </div>
          </div>
          {/* servises__media */}
          <div className="servises__media">
            <div className="servises__media__icon bg-color-4">
              <div className="servises__media__icon__circle">
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
            <div className="servises__media__body">
              <h3 className="servises__media__body__heading">Support</h3>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        //https://codeconqueror.com/blog/using-google-fonts-with-next-js
        //Загрузка локального шрифта. Нетреба в _documrnts.js
        //Можна грузити декілька шрифтів зразу як локальні так і з сепверів
        @font-face {
          font-family: "AmaticSC", "Source Sans Pro","Amatic SC"
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

        .servises__row {
          position: relative;
          margin-right: -15px;
          margin-left: -15px;
          display: flex;
          flex-direction: row; //В рядок
          flex-wrap: wrap;
          //justify-content: space-evenly; //Рівномірно,з країв  1/2 .
          justify-content: space-around; //Рівномірно всюди .
          //align-items: center; //Y-вертикально //R-щоб рівняло по верху
        }

        .servises__media {
          display: flex;

          flex-direction: column; //в стовбець; //в
          //justify-content: center; //Тут по Y //R-щоб рівняло по верху
          align-items: center; //Y але тут по X
          flex: 1 1 auto;
          //метод: mobile-first - спочатку для мобілок(в 1 рядок) для більших екранів в @
          width: 600px;
          margin: 0 0 24px;
          //width: calc((100% - 40px) / 4); //40px-сума всіх margin
          //margin: 0 5px;}
        }
        .servises__media__icon {
          display: flex;
          padding: 2px;
          justify-content: center; //X-горизонтально
          align-items: center; //Y-вертикально
          text-align: center; //X-для тексту(не flex)
          //flex: 1 0 110px;
          flex-basis: 100px; //R-щоб не розтягувало коли servises__media/align-items: center;
          min-width: 100px;
          min-height: 100px;
          border-radius: 50%;
        }
        .servises__media__icon__circle {
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
        .servises__media__icon:hover {
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
        .servises__media__body {
          //font-family: "Amatic SC";
          text-transform: uppercase;
          font-size: 12px;
          font-weight: 500;
          color: gray;
        }
        .servises__media__body__heading {
          margin: 0 0 8px;
          text-transform: uppercase;
          font-size: 15px;
          line-height: 1.8;
          font-weight: 500;
          color: #000000;
        }
        /*@media (min-width: 576px) {
          .container {
            max-width: 540px;
          }
        }*/

        @media (min-width: 768px) {
          .container {
            max-width: 720px;
          }

          .servises__media {
            width: calc((100%) / 2);
            margin: 0 0 24px;
            padding: 0 0;
          }
        }
        @media (min-width: 992px) {
          .container {
            max-width: 960px;
          }
          .servises__media {
            width: calc((100% - 40px) / 4);
            margin: 0 5px;
          }
        }
        @media (min-width: 1200px) {
          .container {
            max-width: 1140px;
          }
        }
      `}</style>
    </section>
  );
};
export default Services;
