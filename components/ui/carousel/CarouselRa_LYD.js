//CarouselRa.js  на основі //CarouselAn.js //https://habr.com/ru/post/467079/

const CarouselRa = () => {
  const [transX, setTransX] = React.useState("0px");
  const [actElement, setActElement] = React.useState(0);
  //RA//////////////////
  // const elemAll = 5; // Кількість всього елементів в каруселі
  const parElemVisible = 4; // Кількість відображуваних елементів в каруселі
  const parLoop = true; // Нескінченне зациклення каруселі
  const parAuto = true; // Автоматична прокрутка
  const parInterval = 5000; // Інтервал між прокруткою елементів (мс)
  const parSpeed = 750; // Швидкість анімації (мс)
  const parTouch = true; // Прокрутка дотиком
  const parArrows = true; // Прокрутка стрілками
  const parDots = true; // Індикаторні
  //

  //
  // const param = [
  //   // Default options for the carousel
  //   {
  //     elemVisible: 3, // Кол-во отображаемых элементов в карусели
  //     loop: true, // Бесконечное зацикливание карусели
  //     auto: true, // Автоматическая прокрутка
  //     interval: 5000, // Интервал между прокруткой элементов (мс)
  //     speed: 750, // Скорость анимации (мс)
  //     touch: true, // Прокрутка  прикосновением
  //     arrows: true, // Прокрутка стрелками
  //     dots: true, // Индикаторные точки
  //   },
  // ];
  const listSlides = [
    {
      src: "/minishop/images/gallery-1.jpg",
      p: "Опис 1",
    },
    {
      src: "/minishop/images/gallery-2.jpg",
      p: "Опис 2",
    },
    {
      src: "/minishop/images/gallery-3.jpg",
      p: "Опис 3",
    },
    {
      src: "/minishop/images/gallery-4.jpg",
      p: "Опис 4",
    },
    {
      src: "/minishop/images/gallery-5.jpg",
      p: "Опис 5",
    },
    {
      src: "/minishop/images/gallery-6.jpg",
      p: "Опис 6",
    },
  ];

  const elemAll = listSlides.length; // Кількість всього елементів в каруселі
  const renderList = () => {
    console.log("renderList/elemAll", elemAll);
    return listSlides.map((item, index) => {
      let urlz = "";
      urlz = `url('${item.src}') center no-repeat`;
      let displayStyle = "none";
      if (actElement + parElemVisible <= elemAll) {
        if (index >= actElement && index < actElement + parElemVisible) {
          displayStyle = "block";
        }
      } else {
        if (
          index >= actElement ||
          index < parElemVisible - (elemAll - actElement)
        ) {
          displayStyle = "block";
        }
      }
      console.log(
        "displayStyle=",
        displayStyle + "/index=" + index + "/actElement=",
        actElement
      );
      return (
        <li
          className="ant-carousel-element"
          style={{
            background: urlz, //:"url('/minishop/images/gallery-1.jpg')",
            backgroundSize: "cover",
            display: displayStyle,
          }}
        ></li>
      );
    });
  };

  const arrowRisht = () => {
    let newActEl = actElement + 1;
    if (Math.abs(actElement) > elemAll) {
      newActEl = 0;
    }
    setActElement(newActEl);
    console.log(
      "CarouselAn.js/arrowRisht/actElement=",
      actElement + "/elemAll=" + elemAll
    );
  };

  const arrowLeft = () => {
    let newActEl = actElement - 1;
    if (Math.abs(actElement) > elemAll) {
      newActEl = elemAll;
    }
    setActElement(newActEl);
    console.log(
      "CarouselAn.js/arrowLeft/actElement=",
      actElement + "/elemAll=" + elemAll
    );
  };

  return (
    // console.log("param.elemVisible",param.elemVisible)
    <div>
      <h3>CarouselRa1.js //https://habr.com/ru/post/467079/</h3>
      <div className="ant-carousel">
        <div className="ant-carousel-hider">
          <ul className="ant-carousel-list">{renderList()}</ul>
        </div>
        <div className="ant-carousel-arrow-left" onClick={arrowLeft}></div>
        <div className="ant-carousel-arrow-right" onClick={arrowRisht}></div>
        <div className="ant-carousel-dots"></div>

        <style jsx global>{`
          .ant-carousel-list {
            width: auto;
            margin: 0;
            padding: 0;
            list-style-type: none;
            display: flex;
            justify-content: flex-start;
            border: 1px solid #82ae46;
          }
          .ant-carousel-element {
            //left: ${transX};
            //left: calc(100% / ${parElemVisible}*${actElement});
            //right:  200px;
            position: relative;
            display: block;
            flex: 0 0 auto;
            height: 270px;
            width: calc(100% / ${parElemVisible});
            text-align: center;
            border: 1px solid #6e46ae;
            //overflow: hidden; //для обрізання img для background: не требе
            //transform: transX(calc(100% / ${parElemVisible}));
            //transform: transX(${transX});
            //transform: transX(200px);
          /*.carousel-element-img {
            padding: 0 0;
            height: 100%;
            width: 100%;
          }*/
          }
        `}</style>
        <style jsx>{`
          .ant-carousel {
            width: 100%;
          }
          @media screen and (min-width: 600px) {
            .ant-carousel {
              padding: 0 1vw;
            }
          }

          @media screen and (min-width: 900px) {
            .ant-carousel {
              padding: 0 1vw;
            }
          }
          .ant-carousel {
            margin: 50px auto auto;
            padding-top: 10px;
            border: 1px solid #ccd;
            background-color: white;
          }

          /* General styles */
          .ant-carousel {
            width: auto;
            position: relative;
          }

          .ant-carousel-hider {
            width: 100%;
            overflow: hidden;
            border: 1px solid #bd112e;
          }

          /* Navigation item styles */
          div.ant-carousel-arrow-left,
          div.ant-carousel-arrow-right {
            width: 22px;
            height: 40px;
            position: absolute;
            cursor: pointer;
            opacity: 0.6;
            z-index: 32;
          }

          div.ant-carousel-arrow-left {
            left: calc(1px+1vw);
            top: 40%;
            display: block;
            background: url("http://pvbk.spb.ru/inc/carousel/ant-files/ant-arrow-left.png")
              no-repeat;
          }

          div.ant-carousel-arrow-right {
            //right: calc(-1px-1vw);
            right: calc(1vw);
            top: 40%;
            display: block;
            background: url("http://pvbk.spb.ru/inc/carousel/ant-files/ant-arrow-right.png")
              no-repeat;
          }

          div.ant-carousel-arrow-left:hover {
            opacity: 1;
          }

          div.ant-carousel-arrow-right:hover {
            opacity: 1;
          }

          div.ant-carousel-dots {
            width: 100%;
            height: auto;
            position: absolute;
            left: 0;
            bottom: -30px;
            z-index: 30;
            text-align: center;
          }

          span.ant-dot {
            width: 10px;
            height: 10px;
            margin: 5px 7px;
            padding: 0;
            display: inline-block;
            background-color: #bbb;
            border-radius: 5px;
            cursor: pointer;
          }
        `}</style>
      </div>
    </div>
  );
};
export default CarouselRa;
