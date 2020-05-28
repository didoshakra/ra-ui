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
        {/* <img
              className="category-img"
              src="/vegefoods/images/category-1.jpg"
              alt="Fruits"
            /> */}
        <a href="#" className="category-bottom-text">
          Fruits
        </a>
      </div>
      {/* juices */}
      <div className="category__juices-container">
        {/* <img
              className="category-img"
              src="/vegefoods/images/category-2.jpg"
              alt="juices"
            /> */}
        <a href="#" className="category-bottom-text">
          Juices
        </a>
      </div>
      {/*  */}
      <div className="category__vegetables-container">
        {/* <img
              className="category-img"
              src="/vegefoods/images/category-3.jpg"
              alt="vegetables"
            /> */}
        <a href="#" className="category-bottom-text">
          Vegetables
        </a>
      </div>
      {/*  */}
      <div className="category__drued-container">
        {/* <img
              className="category-img"
              src="/vegefoods/images/category-4.jpg"
              alt="drued"
            /> */}
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
        {/* <img
              className="category-img"
              src="/vegefoods/images/category.jpg"
              alt="category"
            /> */}
      </div>
    </section>
  );
};
export default Сategory;
