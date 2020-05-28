//Сategory.js
//Добавлено animat
import React, { useContext } from "react";


const Сategory = () => {
    <section className="category__section">
      <div className="container">
        <div className="grid">
          <div className="grid__fruits">fruits</div>
          <div className="grid__tittle">
            {/* //class="category-wrap-2 ftco-animate img align-self-stretch d-flex" */}
            <div className="category-wrap">
              {/* <div className="text-center">
                <h2>Vegetables</h2>
                <p>Protect the health of every home</p>
                <p>
                  <a href="#" class="btn btn-primary">
                    Shop now
                  </a>
                </p>
              </div> */}
            </div>
          </div>
          <div className="grid__juices">juices</div>
          <div className="grid__vegetables">vegetables</div>
          <div className="grid__drued">drued</div>
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

        //GridSiteTemplate
        .grid {
          //display: grid;
          grid-template-areas:
            "tittle"
            "tittle"
            "fruits"
            "juices"
            "vegetables"
            "drued";
          grid-template-rows: 100px  repeat(4,1fr); //Рядки
          grid-template-columns: 1fr; //Колонки
          //grid-gap: 10px;
          height: 100vh;
          margin: 0;
          border: 1px solid black;
        }
        .grid__fruits,
        .grid__juices,
        .grid__vegetables,
        .grid__drued {
          padding: 20px;
          //background: gold;
          font-size: 3vw; //Відносно 1% ширини вікна перегляду
          background: rgba(75, 173, 226, 1);
          //text-align: center; //вирівнювання по Х
        }
        .grid__tittle {
          padding: 20px;
          //background: gold;
          //background: 100%  url(/vegefoods/images/bg_1.jpg) no-repeat;
          background: 100%  url(/vegefoods/images/category.jpg) no-repeat;
          //background-image: url(/vegefoods/images/category.jpg);
          font-size: 3vw; //Відносно 1% ширини вікна перегляду
          //background: rgba(161, 226, 75, 1);
          //text-align: center; //вирівнювання по Х
        }
        .grid__fruits {
          grid-area: fruits;
        }
        .grid__tittle {
          grid-area: tittle;
        }
        .grid__juices {
          grid-area: juices;
        }
        .grid__vegetables {
          grid-area: vegetables;
        }
        .grid__drued {
          grid-area: drued;
        }
        .category-wrap {
           //width: 100%;
           display: flex;
           width: 300px;
           //align-self: stretch;//окремий элемент растягиваются на весь рядок
           //page-break-inside: avoid;//img//Забороняє розрив сторінки всередині елемента
           //background-image: url(/vegefoods/images/category.jpg);
           background:  url(/vegefoods/images/category.jpg) 100% 100% no-repeat;;
           //background-size: cover;//Пропорційно одна сторона
           background-size: 300px;//
           //background-size: contain;//Все в блоці
            text-align: center;
        }
        .category-wrap  h2 {
          color: #82ae46;
          font-family: "Lora", Georgia, serif;
          font-style: italic;
          font-size: 24px;
         }
        @media (min-width: 768px) {
          .container {
            max-width: 720px;
          }
          .grid {

            grid-template-areas:
              "fruits tittle juices"
              "vegetables tittle drued";
            grid-template-rows: repeat(2,1fr); //Рядки
            grid-template-columns: repeat(3,1fr); //Колонки
            align-items: center; 
            justify-items: center;
             
          }
        }
        @media (min-width: 992px) {
          .container {
            max-width: 960px;
          }
        }

      `}</style>
    </section>
  );
};
export default Сategory;
