//Products.js
import IconMenu from "../../ui/icons/IconMenu";
import IconCart from "../../ui/icons/IconCart";
import IconHeart from "../../ui/icons/IconHeart";

const Products = () => {
  const products = [
    {
      name: "Перець",
      image: "/vegefoods/images/product-1.jpg",
      price: 128.0,
      discontProc: 30,
    },
    {
      name: "Полуниця",
      image: "/vegefoods/images/product-2.jpg",
      price: 120.0,
      discontProc: 0,
    },
    {
      name: "Зелена квасоля",
      image: "/vegefoods/images/product-3.jpg",
      price: 20.0,
      discontProc: 0,
    },
    {
      name: "Синя капуста",
      image: "/vegefoods/images/product-4.jpg",
      price: 20.0,
      discontProc: 30,
    },
    {
      name: "Помідори",
      image: "/vegefoods/images/product-5.jpg",
      price: 20.0,
      discontProc: 0,
    },
    {
      name: "Броколі",
      image: "/vegefoods/images/product-6.jpg",
      price: 20.0,
      discontProc: 0,
    },
    {
      name: "Морква",
      image: "/vegefoods/images/product-7.jpg",
      price: 20.0,
      discontProc: 0,
    },
    {
      name: "Фруктовий сік",
      image: "/vegefoods/images/product-8.jpg",
      price: 20.0,
      discontProc: 0,
    },
    {
      name: "Цибуля",
      image: "/vegefoods/images/product-9.jpg",
      price: 20.0,
      discontProc: 20,
    },
    {
      name: "Яблука",
      image: "/vegefoods/images/product-10.jpg",
      price: 20.0,
      discontProc: 0,
    },
    {
      name: "Часкик",
      image: "/vegefoods/images/product-11.jpg",
      price: 20.0,
      discontProc: 0,
    },
    {
      name: "Перець чілі",
      image: "/vegefoods/images/product-12.jpg",
      price: 20.0,
      discontProc: 0,
    },
  ];

  return (
    <section className="products-section">
      <div className="gallery">
        {/* {products.map((item, index) => { */}
        {products.map((item) => {
          return (
            <div className="products-container" key={item}>
              {item.discontProc > 0 ? (
                <div className="products-container__discount-proc">
                  {item.discontProc}%
                </div>
              ) : (
                ""
              )}
              <img className="products__img" src={item.image} alt="img" />
              <h3>
                <a>{item.name}</a>
              </h3>
              <a>
                <div className="products-container_icons-container">
                  <div className="products-container_icon">
                    <IconMenu
                      width="15"
                      height="15"
                      colorFill="#fff"
                      colorFill1="#fff"
                      colorFill2="#fff"
                      colorStroke="#fff"
                      colorStroke1="#fff"
                      colorStroke2="#fff"
                    />
                  </div>
                  <div className="products-container_icon">
                    <IconCart
                      width="15"
                      height="15"
                      colorFill="#fff"
                      colorFill1="#fff"
                      colorFill2="#fff"
                      colorFill3="#fff"
                      colorStroke="#fff"
                      colorStroke1="#fff"
                      colorStroke2="#fff"
                      colorStroke3="#fff"
                      colorStroke4="#fff"
                    />
                  </div>
                  <div className="products-container_icon">
                    <IconHeart
                      width="15"
                      height="15"
                      colorFill="#fff"
                      colorStroke="#fff"
                    />
                  </div>
                </div>
              </a>
              <div className="products-container__price-container">
                {item.discontProc > 0 ? (
                  <p className="products-container__discount">
                    {/* ToFixed () форматує число, використовуючи запис з фіксованою комою. */}
                    {(
                      item.price -
                      (item.price * item.discontProc) / 100
                    ).toFixed(2)}
                  </p>
                ) : (
                  ""
                )}
                <p className="products-container__price">
                  ₴{item.price.toFixed(2)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .products-section {
          padding: 20px 2vw;
          //border: 2px solid #82ae46;
        }
        .gallery {
          display: flex;
          flex: 0 1 auto;
          flex-wrap: wrap;
          //justify-content: stretch; //'авто-розмір'
          justify-content: space-between;
          //margin: 0 auto;
        }
        .products-container {
          position: relative;
          box-sizing: border-box; //Width і height включають в себе значення полів і кордонів
          //width: 375px;
          width: calc(100%-2vw);
          //height: 420px;
          border: 1px solid #c21d252d;
          //
          display: flex;
          flex: 0 1 auto;
          flex-direction: column; //в стовбець;
          justify-content: flex-start; //Тут по Y
          align-items: center; //по X
          text-align: center;
          flex: 1 1 auto;
          margin: 0 0 30px;
          overflow: hidden; //Не показує все за межами блоку
        }
        .products-container:hover .products-container_icons-container {
          //cursor: pointer; //рука
          opacity: 1;
          transition: opacity 0.5s ease-out;
        }
        .products-container:hover .products-container__price-container {
          opacity: 0;
          transition: opacity 0.5s ease-out;
        }
        .products-container:hover .products__img {
          //filter: blur(2px);//розмите зображення
          transform: scale(1.1);
          transition: scale 3s ease-out;
        }

        .products-container__discount-proc {
          position: absolute;
          left: 0;
          //bottom: 0;
          top: 0;
          font-size: 15px;
          //font-weight: bold;
          color: #fff;
          background-color: #82ae46;
          /* //text-transform: uppercase;//великі літери */
          text-decoration: none;
          z-index: 1;
        }
        .products-container_icons-container {
          position: absolute;
          bottom: 1rem;
          left: 0; //Привязка для absolute;/ Для вирівнювання по центру X
          width: 100%; //Для вирівнювання по центру X
          display: flex;
          flex-direction: row;
          justify-content: center; //X
          align-items: center; //Y
          opacity: 0;
        }
        .products-container_icon {
          display: flex;
          justify-content: center; //X
          align-items: center; //Y
          width: 40px; //
          height: 40px;
          border-radius: 50%;
          border: 1px solid #fff; /* Параметры границы */
          background: #82ae46;
        }
        /* .products__img-wrap {
          padding: 2vw 0;
          width: 100%;
          height: 100%;
          border-style: solid;
          overflow: hidden;
        } */
        .products__img {
          padding: 2vw 0;
          width: 100%;
          //height: 270px;//Висота вирахлвуються при маштабуванні картинки(для cover треба 2-а розміри)
          //object-fit: contain; //вся картинка з попорціями/контейнер не заповнений
          //object-fit: cover; //вся картинка з попорціями/контейнер не заповнений
        }

        .products-container h3 {
          margin: 0 0 15px;
        }
        .products-container a {
          font-size: 14px;
          text-transform: uppercase; //великі літери
          font-weight: normal;
        }
        .products-container__price-container {
          margin: 0 1rem 1rem;
          display: flex;
          flex-direction: row;
          text-align: center;
          justify-content: center; //Тут по Y //R-щоб рівняло по верху
          align-items: center; //Y але тут по X
        }
        .products-container__discount {
          margin: 0 10px;
          text-decoration: line-through;
          font-size: 15px;
          color: #83ae46e8;
        }
        .products-container__price {
          color: #82ae46;
          font-size: 15px;
          font-weight: bold;
        }

        @media (min-width: 600px) {
          .products-section {
            padding: 40px 5vw;
          }
          .products-container {
            margin: 10px;
            width: calc((100% - 40px - 10vw) / 2); //Щирина при 2-х колонках
            //width: calc((100% - 240px- 20vw) / 2); //Щирина при 2-х колонках
            //width: 700px; //Щирина при 2-х колонках
          }
        }
        @media (min-width: 960px) {
          .products-container {
            //height: 300px;
            width: calc((100% - 80px - 10vw) / 4); //Щирина при 2-х колонках
          }
        }
        //Mobi
      `}</style>
    </section>
  );
};

export default Products;
