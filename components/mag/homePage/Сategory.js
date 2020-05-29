//Сategory.js
//Добавлено animat
import React, { useContext } from "react";

const Сategory = () => {
  return (
    // {/* Щоб зробити грід  */}
    <section className="category-section">
      {/*Грід з привязкою grid-area:fruits/картинка і позиціонувння кнопки */}
      {/* Картинка може бути як background: url, так і <img> */}
      <div className="category__fruits-container">
        <a href="#" className="category-bottom-text">
          Fruits
        </a>
      </div>
      {/* juices */}
      <div className="category__juices-container">
        <a href="#" className="category-bottom-text">
          Juices
        </a>
      </div>
      {/*  */}
      <div className="category__vegetables-container">
        <a href="#" className="category-bottom-text">
          Vegetables
        </a>
      </div>
      {/*  */}
      <div className="category__drued-container">
        <a href="#" className="category-bottom-text">
          Drued
        </a>
      </div>
      <div className="category__tittle-container">
        <h2>Vegetables</h2>
        <p>Protect the health of every home</p>
        <p>
          <a href="#" className="category__tittle-button">
            Shop now
          </a>
        </p>
      </div>
      <style jsx>{`
        .category-section {
          padding: 20px 2vw;
          margin: 0;
          display: grid;
          grid-template-areas: "tittle" "fruits" "juices" "vegetables" "drued";
          grid-gap: 2vw;
          grid-template-rows: 300px repeat(4, 250px);
        }
        @media (min-width: 600px) {
          .category-section {
            margin: 0;
            padding: 40px 5vw;
            display: grid;
            grid-template-areas: "fruits tittle juices" "vegetables tittle drued";
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 250px);
          }
        }

        .category__fruits-container {
          grid-area: fruits;
          /* Щоб кнопку позиціонувати absolute */
          position: relative;
          background: url("/vegefoods/images/category-1.jpg") 100% 100%
            no-repeat;
          background-size: cover;
          background-position-x: 50%;
        }

        .category__juices-container {
          grid-area: juices;
          position: relative;
          background: url("/vegefoods/images/category-3.jpg") 100% 100%
            no-repeat;
          background-size: cover;
          background-position-x: 50%;
        }

        .category__vegetables-container {
          grid-area: vegetables;
          position: relative;
          background: url("/vegefoods/images/category-2.jpg") 100% 100%
            no-repeat;
          background-size: cover;
          background-position-x: 50%;
        }

        .category__drued-container {
          grid-area: drued;
          position: relative;
          background: url("/vegefoods/images/category-4.jpg") 100% 100%
            no-repeat;
          background-size: cover;
          background-position-x: 50%;
        }

        .category__tittle-container {
          grid-area: tittle;
          background: url("/vegefoods/images/category.jpg") 100% 100% no-repeat;
          background-position-x: 50%;
          background-size: cover;
          display: flex;
          flex-direction: column;
          /* justify-content: center; */
          text-align: center;
          text-decoration: none;
        }

        .category__tittle-container h2 {
          font-size: 24px;
          font-family: "Lora", Georgia, serif;
          color: #8db557;
          margin: 0 0 8px;
        }

        .category__tittle-container p {
          font-size: 15px;
          font-family: "Poppins", Arial, sans-serif;
          color: #8b8b8b;
          margin: 0 0 8px;
        }

        .category-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .category-bottom-text {
          position: absolute;
          left: 0;
          bottom: 0;
          font-size: 20px;
          font-weight: bold;
          color: #fff;
          background-color: #82ae46;
          text-decoration: none;
        }

        .category__tittle-button {
          display: fllex-line;
          position: relative;
          padding: 6px 12px;
          background: #82ae46;
          height: "40зч";
          color: #fff;
          border: 2px solid #82ae46;
          border-radius: 20px;
          font-family: "Poppins", Geneva, Arial, sans-serif;
          font-size: 16px;
          text-decoration: none;
        }

        .category__tittle-button:hover {
          background-color: rgba(132, 177, 71, 0);
          border: 1px solid #82ae46;
          color: #82ae46;
        }
      `}</style>
    </section>
  );
};
export default Сategory;
