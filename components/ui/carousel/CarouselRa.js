//CarouselRa.js  на основі //CarouselAn.js //https://habr.com/ru/post/467079/

const listSlides = [
  {
    // src: "/minishop/images/gallery-1.jpg",
    src: "http://pvbk.spb.ru/inc/carousel/imgs/img0.jpg",
    p: "Опис 1",
  },
  {
    src: "http://pvbk.spb.ru/inc/carousel/imgs/img1.jpg",
    // src: "/minishop/images/gallery-2.jpg",
    p: "Опис 2",
  },
  {
    src: "http://pvbk.spb.ru/inc/carousel/imgs/img2.jpg",
    // src: "/minishop/images/gallery-3.jpg",
    p: "Опис 3",
  },
  {
    src: "http://pvbk.spb.ru/inc/carousel/imgs/img3.jpg",
    // src: "/minishop/images/gallery-4.jpg",
    p: "Опис 4",
  },
  {
    src: "http://pvbk.spb.ru/inc/carousel/imgs/img4.jpg",
    // src: "/minishop/images/gallery-5.jpg",
    p: "Опис 5",
  },
  {
    src: "http://pvbk.spb.ru/inc/carousel/imgs/img5.jpg",
    // src: "/minishop/images/gallery-6.jpg",
    p: "Опис 6",
  },
  {
    src: "http://pvbk.spb.ru/inc/carousel/imgs/img6.jpg",
    // src: "/minishop/images/gallery-6.jpg",
    p: "Опис 7",
  },
  {
    src: "http://pvbk.spb.ru/inc/carousel/imgs/img7.jpg",
    // src: "/minishop/images/gallery-6.jpg",
    p: "Опис 8",
  },
  {
    src: "http://pvbk.spb.ru/inc/carousel/imgs/img8.jpg",
    // src: "/minishop/images/gallery-6.jpg",
    p: "Опис 9",
  },
  {
    src: "http://pvbk.spb.ru/inc/carousel/imgs/img9.jpg",
    // src: "/minishop/images/gallery-6.jpg",
    p: "Опис 10",
  },
];
const parVisibleElements = 4; // Кількість відображуваних елементів в каруселі
const parAuto = false; // Автоматична прокрутка
const parHeight = "270px"; // Висота зображення
const parInterval = 5000; // Інтервал між прокруткою елементів (мс)
const parSpeed = 0.75; // Швидкість анімації (с)
// const parTouch = true; // Прокрутка дотиком
// const parArrows = true; // Прокрутка стрілками
const parDots = true; // Індикаторні
//////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

const CarouselRa = () => {
  //
  const elemAll = listSlides.length; //Глоловний масив
  // var visiElement = Math.min(parVisibleElements, elemAll); // Кількість відображуваних елементів в
  const [visiElement, setVisiElement] = React.useState(
    Math.min(parVisibleElements, elemAll)
  );
  const listSlides1 = listSlides.concat(
    //робочий масив
    listSlides.slice(0, visiElement)
  );

  const [widthScreen, setWidthScreen] = React.useState(600);
  const [actElement, setActElement] = React.useState(0);
  // const [actElement, setActElement] = React.useState(0);
  const [transitionCss, setTransitionCss] = React.useState(
    `transform ${parSpeed}s ease`
  );

  // console.log("CarouselRa.js/visiElement", visiElement);

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
    return listSlides.map((item, index) => {
      return (
        <span
          data-index={index} //data-ХХ->Для передачі даних в e.currentTarget.dataset.XX
          className="ant-dot"
          style={{
            backgroundColor:
              index == actElement ? "rgba(219,50,17,1)" : "rgba(219,50,17,0.2)",
            // backgroundColor: index == actElement ? "#556" : "#BBB",
            cursor: index == 0 ? "default" : "pointer",
          }}
          onClick={onDots}
        ></span>
      );
    });
  };

  const arrowRisht = () => {
    let newActElement = actElement + 1;
    let newTransitionCss = `transform ${parSpeed}s ease`;
    // actEl>=elemAll-> actEl=0
    if (actElement >= elemAll) {
      newTransitionCss = "none";
      newActElement = 0;
    }
    setTransitionCss(newTransitionCss);
    setActElement(newActElement);
    // console.log("arrowRisht/actElemen=" + actElement);
  };

  const arrowLeft = () => {
    let newActElement = actElement - 1;
    let newTransitionCss = `transform ${parSpeed}s ease`;
    if (actElement <= 0) {
      newTransitionCss = "none";
      newActElement = elemAll;
    }
    setTransitionCss(newTransitionCss);
    setActElement(newActElement);
    // console.log("arrowLeft/actElemen=" + actElement);
  };

  const onDots = (e) => {
    const i = e.currentTarget.dataset.index;
    let newActElement = Number(i);
    setActElement(newActElement);
    renderDots(); //Пересвітка ативності Dots
  };

  //https://qna.habr.com/q/703981
  const updateDimensions = () => {
    setWidthScreen(window.innerWidth); //Заппамятовуємо ширину екрану
    if (widthScreen < 600) {
      setVisiElement(1);
    } else {
      setVisiElement(Math.min(parVisibleElements, elemAll));
    }
    console.log(
      "useEffect/updateDimensions/visiElement=",
      visiElement + "/widthScreen=",
      widthScreen
    );
  };

  React.useEffect(() => {
    document.addEventListener("resize", updateDimensions);
    document.removeEventListener("resize", updateDimensions);
    window.addEventListener("resize", updateDimensions);
    window.removeEventListener("resize", updateDimensions);
    //
    const widthScreen = screen.width; // ширина екрану
    // const heightScreen = document.body.clientHeight; // высота екрану
    // const widthBrauser = screen.height; // высота Браузера
    // const heightBrauser = document.body.clientHeight; // высота Браузера
    // const widthId = document.getElementById("block").style.width;
    // const heightId = document.getElementById("block").style.height;

    if (parAuto) {
      setTimeout(() => {
        arrowRisht();
      }, parInterval);
    }
  }, []);

  return (
    // console.log("param.elemVisible",param.elemVisible)
    <div>
      <h3>CarouselRa1.js //https://habr.com/ru/post/467079/</h3>
      <div className="ant-carousel">
        <div className="ant-carousel-hider">
          <ul className="ant-carousel-list">{renderList()}</ul>
          <div className="ant-carousel-dots">{parDots ? renderDots() : ""}</div>
        </div>
        <div className="ant-carousel-arrow-left" onClick={arrowLeft}></div>
        <div className="ant-carousel-arrow-right" onClick={arrowRisht}></div>
        <div div className="ant-carousel-dots">
          {parDots ? renderDots() : ""}
        </div>

        <style jsx global>{`
          .ant-carousel-list {
            width: auto;
            margin: 0;
            padding: 0;
            list-style-type: none;
            display: flex;
            justify-content: flex-start;
            //border: 1px solid #82ae46;
            transform: translateX(
              calc(100% / ${visiElement}* ${actElement}*-1)
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
            //height: 270px;
            height: ${parHeight};
            width: calc(100% / ${visiElement});
            text-align: center;
            //border: 1px solid #6e46ae;
          }
          .ant-carousel-element_p {
            color: red;
            font-size: 20px;
            font-weight: 800;
          }
          .ant-dot {
            width: 10px;
            width: 10px;
            height: 10px;
            height: 10px;
            margin: 5px 7px;
            //margin: 5px calc(100%/${visiElement});
            padding: 0;
            display: inline-block;
            //background-color: #bbb;
            background-color: rgba(219, 50, 17, 1) bb;
            border-radius: 5px;
            border: 1px solid red;
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

          .ant-carousel-dots {
            width: 100%;
            height: auto;
            position: absolute;
            left: 0;
            bottom: -10px;
            //bottom: 5px;
            z-index: 30;
            text-align: center;
          }
        `}</style>
      </div>
    </div>
  );
};
export default CarouselRa;
