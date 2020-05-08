//Services.js //до 20200507
//Добавлено animat//Без контейнера
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
    <section className="servises">
      {/* servises__media */}
      <div className="servises__media">
        <div className="servises__media__icon bg-color-1">
          <div className="servises__media__icon1 ">
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
          <div className="servises__media__icon1">
            {/* <IconVegetable width="50" height="50" color="#fff" color1="black" /> */}
            <IconVegetable width="50" height="50" color="#fff" color1="#fff" />
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
          <div className="servises__media__icon1">
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
          <h3 className="servises__media__body__heading">Superior Quality</h3>
          <span>Quality Products</span>
        </div>
      </div>
      {/* servises__media */}
      <div className="servises__media">
        <div className="servises__media__icon bg-color-4">
          <div className="servises__media__icon1">
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

      <style jsx>{`
        .servises {
          // рядок іконок
          position: relative;
          width: 100%;
          padding: 90px 0; //em- FontSize*Х
          display: flex;
          flex-direction: row; //В рядок
          //justify-content: space-evenly; //Рівномірно,з країв  1/2 .
          justify-content: space-around; //Рівномірно всюди .
          //align-items: center; //Y-вертикально //R-щоб рівняло по верху
        }
        .conteiner{
          margin: 0 100px
          padding: 0 15px;
        }
        .servises__media {
          display: flex;
          padding: 5px;
          flex-direction: column; //в стовбець; //в
          //justify-content: center; //Тут по Y //R-щоб рівняло по верху
          align-items: center; //Y але тут по X
          //
          //width: calc((100% - 40px) / 4);
          //margin: 0 5px;
          width: calc((100% - 40vw) / 4);
          margin: 0 5vw;
          //min-width: 100px;
          height: 300px;
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
        .servises__media__icon1 {
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

        .servises__media__body__heading {
          margin: 0 0 8px;
          text-transform: uppercase;
          font-size: 15px;
          //line-height: 1.8;
          font-weight: 500;
          color: #000000;
        }
        .servises__media__body {
          text-transform: uppercase;
          font-size: 12px;
          font-weight: 500;
          color: gray;
        }

        //
        @media (min-width: 960px) {
          .servises__media {
            width: calc((100% - 20px) / 2);
            margin: 0 0 10px;
          }
        }
        @media (min-width: 600px) {
          .servises__media {
            width: calc((100% - 20px));
            margin: 0 0 10px;
          }
        }
      `}</style>
    </section>
  );
};
export default Services;
