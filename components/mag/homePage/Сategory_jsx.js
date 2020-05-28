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
      <style jsx>{`
      .products-section {
  padding: 20px 2vw;
}
.products-content {
  margin: 0;
  display: grid;
  grid-gap: 2vw;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 340px);
}

.products-img {
  width: auto;
  height: 100%;
  object-fit: cover;
}
.products__product-container {
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.products__img-container {
  width: 343px;
  height: 274px;
}

.products__juices-container {
  grid-area: juices;
  position: relative;
  background: url("/vegefoods/images/image_2.jpg") 100% 100% no-repeat;
  background-size: cover;
  background-position-x: 50%;
}

.products__vegetables-container {
  grid-area: vegetables;
  position: relative;
  background: url("/vegefoods/images/image_3.jpg") 100% 100% no-repeat;
  background-size: cover;
  background-position-x: 50%;
}

.products__drued-container {
  grid-area: drued;
  position: relative;
  background: url("/vegefoods/images/image_4.jpg") 100% 100% no-repeat;
  background-size: cover;
  background-position-x: 50%;
}

.products__tittle-container {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  text-align: center;
}

.products__tittle-container span {
  font-size: 18px;
  font-family: "Lora", Georgia, serif;
  color: #8db557;
  margin: 0 0 10px;
}
.products__tittle-container h2 {
  font-size: 40px;
  font-family: "Poppins", Arial, sans-serif;
  font-weight: bold;
  color: #000;
  margin: 0 0 24px;
}

.products__tittle-container p {
  font-size: 15px;
  font-family: "Poppins", Arial, sans-serif;
  color: #8b8b8b;
  margin: 0 0 16px;
}

.products-bottom-text {
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background-color: #82ae46;
  text-decoration: none;
}

.products__tittle-button {
  /* щоб не переносилась і ширина по контексту */
  display: fllex-line;
  position: relative;
  padding: 6px 12px;
  background: #82ae46;
  height: "40зч";
  color: #fff;
  border: 1px solid #82ae46;
  border-radius: 20px;
  font-family: "Poppins", Geneva, Arial, sans-serif;
  font-size: 16px;
  text-decoration: none;
}

.products__tittle-button:hover {
  background-color: rgba(132, 177, 71, 0);
  border: 1px solid #82ae46;
  color: #82ae46;
}
@media (min-width: 768px) {
  .products-section {
    padding: 40px 5vw;
  }
  .products__product-container {
    width: 390px;
    height: 360px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 330px);
    grid-gap: 2vw;
    border: 1px solid black;
  }
  .products__img-container {
    width: 328px;
    /* width: auto; */
    height: 260px;
  }
}

@media (min-width: 992px) {
  .products-section {
    padding: 40px 5vw;
  }
  .products__product-container {
    width: 240px;
    height: 290px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 2vw;
    border: 1px solid black;
  }
  .products__img-container {
    width: 208px;
    height: 167px;
  }

      `}</style>
    </section>
  );
};
export default Сategory;
