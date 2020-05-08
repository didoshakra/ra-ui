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
        <div className="category__row">
          {/* category__media */}
          <div className="category__media">
            <div className="category__media__icon bg-color-1">
              <div className="category__media__icon1 ">
                <IconFreeShipingBant
                  width="50"
                  height="50"
                  color="#fff"
                  color1="#fff"
                />
                {/* <span>flaticon-diet</span> */}
              </div>
            </div>
            <div className="category__media__body">
              <h3 className="category__media__body__heading">Free Shipping</h3>
              <span>On order over $100</span>
            </div>
          </div>
          {/* category__media */}
          <div className="category__media">
            <div className="category__media__icon bg-color-2">
              <div className="category__media__icon1">
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
            <div className="category__media__body">
              <h3 className="category__media__body__heading">Always Fresh</h3>
              <span>Product well package</span>
            </div>
          </div>
          {/* category__media */}
          <div className="category__media">
            <div className="category__media__icon bg-color-3">
              <div className="category__media__icon1">
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
            <div className="category__media__body">
              <h3 className="category__media__body__heading">
                Superior Quality
              </h3>
              <span>Quality Products</span>
            </div>
          </div>
          {/* category__media */}
          <div className="category__media">
            <div className="category__media__icon bg-color-4">
              <div className="category__media__icon1">
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
            <div className="category__media__body">
              <h3 className="category__media__body__heading">Support1</h3>
              <span>24/7 Support1</span>
            </div>
          </div>
        </div>
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

        .category__row {
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

        .category__media {
          display: flex;
          padding: 5px;
          flex-direction: column; //в стовбець; //в
          //justify-content: center; //Тут по Y //R-щоб рівняло по верху
          align-items: center; //Y але тут по X

          //width: none;
          width: calc((100% - 40px) / 4);
          margin: 0 5px;
          //height: 300px;
        }
        .category__media__icon {
          display: flex;
          padding: 2px;
          justify-content: center; //X-горизонтально
          align-items: center; //Y-вертикально
          text-align: center; //X-для тексту(не flex)
          //flex: 1 0 110px;
          flex-basis: 100px; //R-щоб не розтягувало коли category__media/align-items: center;
          min-width: 100px;
          min-height: 100px;
          border-radius: 50%;
        }
        .category__media__icon1 {
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
        .category__media__icon:hover {
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

        .category__media__body__heading {
          margin: 0 0 8px;
          text-transform: uppercase;
          font-size: 15px;
          //line-height: 1.8;
          font-weight: 500;
          color: #000000;
        }
        .category__media__body {
          text-transform: uppercase;
          font-size: 12px;
          font-weight: 500;
          color: gray;
        }
        @media (max-width: 960px) {
          //плашшети<1024/нетбуки>1024
          .container {
            max-width: 960px;
          }
          .category__media {
            width: calc((100% - 40px) / 2);
            padding: 0 20px;
          }
        }

        @media (max-width: 600px) {
          //мобілки<768
          .container {
            max-width: 600px;
          }
          .category__media {
            width: auto;
          }
        }
        //
      `}</style>
    </section>
  );
};
export default Сategory;
