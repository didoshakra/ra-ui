//CarouselRa.js  на основі //CarouselAn.js //https://habr.com/ru/post/467079/

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
const VisibleElements = 4; // Кількість відображуваних елементів в каруселі
// const parLoop = true; // Нескінченне зациклення каруселі
// const parAuto = true; // Автоматична прокрутка
// const parInterval = 5000; // Інтервал між прокруткою елементів (мс)
// const parSpeed = 750; // Швидкість анімації (мс)
// const parTouch = true; // Прокрутка дотиком
// const parArrows = true; // Прокрутка стрілками
// const parDots = true; // Індикаторні

const CarouselRa = () => {
  //const elemAll = listSlides.length;
  const quantVisibleElements = VisibleElements; // Кількість відображуваних елементів в
  const [trans0s, setTransOs] = React.useState(false);
  const [transX, setTransX] = React.useState(0);
  const [transXpx, setTransXpx] = React.useState("200px");
  // const [actElement, setActElement] = React.useState(quantVisibleElements);
  const [actElement, setActElement] = React.useState(1);

  // const listBegin = listSlides.slice(-quantVisibleElements);
  const listBegin = listSlides.slice(-1);
  const listSlides1 = listBegin.concat(
    // listSlides.concat(listSlides.slice(0, quantVisibleElements))
    listSlides.concat(listSlides.slice(0, 1))
  );
  const elemAll = listSlides1.length;
  console.log(
    "listSlides1.length=",
    listSlides1.length + "/actElemen=t" + actElement
  );
  var urlz = "";
  const renderList = () => {
    return listSlides1.map((item) => {
      urlz = `url('${item.src}') center no-repeat`;
      return (
        <li
          className="ant-carousel-element"
          style={{
            background: urlz, //:"url('/minishop/images/gallery-1.jpg')",
            backgroundSize: "cover",
          }}
        ></li>
      );
    });
  };

  const arrowRisht = () => {
    setActElement(actElement + 1);
    setTransOs(false);
    if (actElement >= elemAll - quantVisibleElements) {
      setActElement(0);
      setTransOs(true);
    }
    console.log("arrowRisht/actElemen=" + actElement);
  };

  const arrowLeft = () => {
    setActElement(actElement - 1);
    setTransOs(false);
    if (actElement <= 1) {
      // setActElement(elemAll - quantVisibleElements);
      setActElement(1);
      setTransOs(true);
    }
    console.log("arrowLeft/actElemen=" + actElement);
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
            left: calc(100% / ${quantVisibleElements}*${actElement}*-1);
            position: relative;
            display: block;
            flex: 0 0 auto;
            height: 270px;
            width: calc(100% / ${quantVisibleElements});
            text-align: center;
            border: 1px solid #6e46ae;
            //overflow: hidden; //для обрізання img для background: не требе
            //transform: translateX(calc((100% / ${quantVisibleElements}*${actElement}*-1)));
            //transform: ${transXpx};
            //transition: transform 0.5s linear;
            //transition: left 0.5s linear;
            transition: left ${trans0s ? "0s" : "0.5s linear"};
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
