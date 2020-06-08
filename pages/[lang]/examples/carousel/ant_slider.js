//ant_slider.js  на основі //CarouselAn.js //https://habr.com/ru/post/467079/

const listSlides = [
  {
    src: "http://pvbk.spb.ru/inc/carousel/imgs/img0.jpg",
    p: "Опис 0",
  },
  {
    src: "http://pvbk.spb.ru/inc/carousel/imgs/img1.jpg",
    p: "Опис 1",
  },
  {
    src: "http://pvbk.spb.ru/inc/carousel/imgs/img2.jpg",
    p: "Опис 2",
  },
  {
    src: "http://pvbk.spb.ru/inc/carousel/imgs/img3.jpg",
    p: "Опис 3",
  },
  {
    src: "http://pvbk.spb.ru/inc/carousel/imgs/img4.jpg",
    p: "Опис 4",
  },
  {
    src: "http://pvbk.spb.ru/inc/carousel/imgs/img5.jpg",
    p: "Опис 5",
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

const AntSlider = () => {
  const quantVisibleElements = VisibleElements; // Кількість відображуваних елементів в
  const elementWidth = 270;
  // const [actElement, setActElement] = React.useState(1);
  const [translateX, setTranslateX] = React.useState(0);
  var translateXPx = `${translateX}px`;

  const listBegin = listSlides.slice(-1);
  const listSlides1 = listBegin.concat(
    listSlides.concat(listSlides.slice(0, 1))
  );

  var urlz = "";
  const renderList = () => {
    return listSlides.map((item) => {
      urlz = `url('${item.src}') center no-repeat`;
      return (
        <>
          <li
            className="ant-carousel-element"
            style={{
              background: urlz, //:"url('/minishop/images/gallery-1.jpg')",
              backgroundSize: "cover",
            }}
          >
            <p>${item.p}</p>
            <span className="ant-dot"></span>
          </li>
        </>
      );
    });
  };

  const arrowRisht = () => {
    let ttranslateX = translateX + elementWidth;
    setTranslateX(ttranslateX);
    console.log(
      "1-arrowRisht/translateX=",
      translateX + ttranslateX + "/ttranslateX=",
      translateX
    );
    translateXPx = `${ttranslateX}px`;
  };

  const arrowLeft = () => {
    let ttranslateX = translateX - elementWidth;
    setTranslateX(ttranslateX);
    console.log(
      "1-arrowLeft/translateX=",
      translateX + ttranslateX + "/ttranslateX=",
      translateX
    );
    translateXPx = `${ttranslateX}px`;
  };
  return (
    // console.log("param.elemVisible",param.elemVisible)
    <div>
      <h3>
        Ant-карусель на CSS и Javascript //https://habr.com/ru/post/467079/
      </h3>
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
            transform: translateX(${translateXPx});
            transition: transform 0.5s ease;
            list-style-type: none;
            display: flex;
            justify-content: flex-start;
            border: 1px solid #82ae46;
          }

          .ant-carousel-element {
            position: relative;
            display: block;
            flex: 0 0 auto;
            height: 270px;
            width: 270px;
            width: calc(100% / ${quantVisibleElements});
            text-align: center;
            border: 1px solid #6e46ae;
        `}</style>
        <style jsx>{`
          .ant-carousel {
            //width: 100%;
            width: auto;
            position: relative;
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
            border: 1px solid #ccd;
            background-color: white;
          }

          /* General styles */
          .ant-carousel-hider {
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
export default AntSlider;
