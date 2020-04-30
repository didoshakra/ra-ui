//HeaderTape.js
import { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

import { ComponentContext } from "../../context/ComponentContext";

const HeaderTape = () => {
  const { state } = useContext(ComponentContext);
  const { theme } = state;

  return (
    // <div className="headerTape">
    <div className="headerTape__wrapper">
      <span className="headerTape__items__text">
        <FontAwesomeIcon icon={faPhoneAlt} /> + 1235 2355 98
      </span>
      <span className="headerTape__items__text">
        <FontAwesomeIcon icon={faTelegramPlane} /> mag@ukr.net
      </span>
      <span className="headerTape__items__text">
        Доставка в робочі дні & Безкоштовне повернення
      </span>
      {/* </div> */}

      <style jsx>{`
        .headerTape {

            top: 0;
          height: "24px";
          //z-index: 100;
        }

        .headerTape__wrapper {
          position: relative;
          display: flex;
          justify-content: space-around; /*по-X  рівномірно, крайні 1/2*/
          align-items: center; /* по Y */
          background: ${theme.colors.headTapeBackground};
        }

        .headerTape__items__text {
          display: block;
          padding: 5px;
          font-size: 10px;
          color: ${theme.colors.headTapeText};
          text-transform: uppercase;
          letter-spacing: 1px;//відстань між буквами в тексті
        }
        //іконка перед меню- https://fontawesome.com/how-to-use/on-the-web/advanced/css-pseudo-elements
        /*.headerTape__items__text::before {
          //font-family: "Font Awesome 5 Brands";
          //content: "\f3fe"; //fa-telegram-plane
          font-family: "Font Awesome 5 Solid Style";
          content: "\f879"; //fa-phone-alt
          font-weight: 900;
        }*/

        @media (max-width: 600px) {
          /*iPhone<600px*/
          .headerTape {
          /* Для того щоб плавно сховати шапку*/
          height: "64px";
        }
        .headerTape__wrapper {
          display: flex;
          flex-direction:column;
          align-items: flex-start; /*Якщо flex-direction:column то по-X*/
          justify-content: flex-start; /*Якщо flex-direction:column то по-Y*/
        }
      `}</style>
    </div>
  );
};

export default HeaderTape;
