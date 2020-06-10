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
const visibleElements = 4; // Кількість відображуваних елементів в каруселі
// const parLoop = true; // Нескінченне зациклення каруселі
// const parAuto = true; // Автоматична прокрутка
// const parInterval = 5000; // Інтервал між прокруткою елементів (мс)
// const parSpeed = 750; // Швидкість анімації (мс)
// const parTouch = true; // Прокрутка дотиком
// const parArrows = true; // Прокрутка стрілками
// const parDots = true; // Індикаторні

const CarouselRa = () => {
  const quantVisibleElements = visibleElements; // Кількість відображуваних елементів в
  const [actElement, setActElement] = React.useState(quantVisibleElements);
  const [transitionCss, setTransitionCss] = React.useState(
    "transform 0.5s ease"
  );

  const listBegin = listSlides.slice(-quantVisibleElements);
  const listSlides1 = listBegin.concat(
    listSlides.concat(listSlides.slice(0, quantVisibleElements))
  );
  const elemAll = listSlides.length;
  console.log(
    "listSlides1.length=",
    listSlides1.length + "/actElemen=" + actElement + "/quantVisibleElements",
    quantVisibleElements
  );

  const renderList = () => {
    var urlz = "";
    return listSlides1.map((item) => {
      urlz = `url('${item.src}') center no-repeat`;
      return (
        <li
          className="ant-carousel-element"
          style={{
            background: urlz, //:"url('/minishop/images/gallery-1.jpg')",
            backgroundSize: "cover",
          }}
        >
          <p className="ant-carousel-element_p">{item.p}</p>
        </li>
      );
    });
  };
  const renderDots = () => {
    let newActDots = 0;
    if (actElement - quantVisibleElements >= 0 && actElement < elemAll) {
      newActDots - quantVisibleElements;
    }
    if (actElement > elemAll) {
      newActDots = actElement - elemAll;
    }
    if (actElement - quantVisibleElements < 0) {
      newActDots = elemAll - actElement;
    }
    console.log(
      "newActDots/newActDots=",
      newActDots + "/actElemen=" + actElement
    );
    return listSlides.map((item, index) => {
      return (
        <span
          data-index={index} //data-ХХ->Для передачі даних в e.currentTarget.dataset.XX
          className="ant-dot"
          style={{
            backgroundColor: index == newActDots ? "#556" : "#BBB",
            cursor: index == 0 ? "default" : "pointer",
          }}
          onClick={onDots}
        ></span>
      );
    });
  };
  const arrowRisht = () => {
    let newActElement = actElement + 1;
    let newTransitionCss = "transform 0.5s ease";
    if (actElement >= elemAll) {
      newTransitionCss = "none";
      newActElement = 0;
    }
    setTransitionCss(newTransitionCss);
    setActElement(newActElement);
    console.log("arrowRisht/actElemen=" + actElement);
  };

  const arrowLeft = () => {
    let newActElement = actElement - 1;
    let newTransitionCss = "transform 0.5s ease";
    if (actElement <= 0) {
      newTransitionCss = "none";
      newActElement = elemAll;
    }
    setTransitionCss(newTransitionCss);
    setActElement(newActElement);
    console.log("arrowLeft/actElemen=" + actElement);
  };

  const onDots = (e) => {
    const i = e.currentTarget.dataset.index;
    let newActElement = Number(i) + quantVisibleElements;
    setActElement(newActElement);
    setActDots(newActElement);
    renderDots(); //Пересвітка ативності Dots
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
        <div className="ant-carousel-dots">{renderDots()}</div>

        <style jsx global>{`
          .ant-carousel-list {
            width: auto;
            margin: 0;
            padding: 0;
            list-style-type: none;
            display: flex;
            justify-content: flex-start;
            border: 1px solid #82ae46;
            transform: translateX(
              calc(100% / ${quantVisibleElements}* ${actElement}*-1)
            );
            transition: ${transitionCss};
          }
          .ant-carousel-element {
            position: relative;
            //display: block;
            display: flex;
            flex-direction: column;
            //justify-content:center;
            align-items: center;
            flex: 0 0 auto;
            height: 270px;
            width: calc(100% / ${quantVisibleElements});
            text-align: center;
            border: 1px solid #6e46ae;
          }
          .ant-carousel-element_p {
            color: red;
            font-size: 20px;
            font-weight: 800;
          }
          .ant-dot {
            width: 10px;
            height: 10px;
            margin: 5px 7px;
            padding: 0;
            display: inline-block;
            background-color: #bbb;
            border-radius: 5px;
            //border: 1px solid red;
            cursor: pointer;
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

          .ant-carousel-arrow-left {
            left: calc(1px+1vw);
            top: 40%;
            display: block;
            background: url("http://pvbk.spb.ru/inc/carousel/ant-files/ant-arrow-left.png")
              no-repeat;
            color: red;
          }

          .ant-carousel-arrow-right {
            //right: calc(-1px-1vw);
            right: calc(1vw);
            top: 40%;
            display: block;
            background: url("http://pvbk.spb.ru/inc/carousel/ant-files/ant-arrow-right.png")
              no-repeat;
            color: red;
          }

          .ant-carousel-arrow-left:hover {
            opacity: 1;
          }

          .ant-carousel-arrow-right:hover {
            opacity: 1;
          }

          .ant-carousel-dots {
            width: 100%;
            height: auto;
            position: absolute;
            left: 0;
            bottom: -30px;
            z-index: 30;
            text-align: center;
          }
        `}</style>
      </div>
    </div>
  );
};
export default CarouselRa;
