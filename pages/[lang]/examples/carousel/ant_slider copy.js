const AntSlider = () => {
  const elementWidth = 270;
  // const [actElement, setActElement] = React.useState(1);
  const [marginLeft, setMarginLeft] = React.useState(0);
  var marginLeftPx = `${marginLeft}px`;

  const arrowRisht = () => {
    let tMarginLeft = marginLeft + elementWidth;
    setMarginLeft(tMarginLeft);
    console.log(
      "1-arrowRisht/marginLeft=",
      marginLeft + tMarginLeft + "/tMarginLeft=",
      marginLeft
    );
    marginLeftPx = `${tMarginLeft}px`;
  };

  const arrowLeft = () => {
    let tMarginLeft = marginLeft - elementWidth;
    setMarginLeft(tMarginLeft);
    console.log(
      "1-arrowLeft/marginLeft=",
      marginLeft + tMarginLeft + "/tMarginLeft=",
      marginLeft
    );
    marginLeftPx = `${tMarginLeft}px`;
  };

  return (
    <div>
      <h3>
        Ant-карусель на CSS и Javascript //https://habr.com/ru/post/467079/
      </h3>
      <div className="ant-carousel">
        <div className="ant-carousel-hider">
          <ul className="ant-carousel-list">
            <li className="ant-carousel-element">
              <img
                src="http://pvbk.spb.ru/inc/carousel/imgs/img0.jpg"
                alt="0"
              />
              <p>Описание 0</p>
            </li>
            <li className="ant-carousel-element">
              <img
                src="http://pvbk.spb.ru/inc/carousel/imgs/img1.jpg"
                alt="1"
              />
              <p>Описание 1</p>
            </li>
            <li className="ant-carousel-element">
              <img
                src="http://pvbk.spb.ru/inc/carousel/imgs/img2.jpg"
                alt="2"
              />
              <p>Описание 2</p>
            </li>
            <li className="ant-carousel-element">
              <img
                src="http://pvbk.spb.ru/inc/carousel/imgs/img3.jpg"
                alt="3"
              />
              <p>Описание 3</p>
            </li>
            <li className="ant-carousel-element">
              <img
                src="http://pvbk.spb.ru/inc/carousel/imgs/img4.jpg"
                alt="4"
              />
              <p>Описание 4</p>
            </li>
            <li className="ant-carousel-element">
              <img
                src="http://pvbk.spb.ru/inc/carousel/imgs/img5.jpg"
                alt="5"
              />
              <p>Описание 5</p>
            </li>
            <li className="ant-carousel-element">
              <img
                src="http://pvbk.spb.ru/inc/carousel/imgs/img6.jpg"
                alt="6"
              />
              <p>Описание 6</p>
            </li>
            <li className="ant-carousel-element">
              <img
                src="http://pvbk.spb.ru/inc/carousel/imgs/img7.jpg"
                alt="7"
              />
              <p>Описание 7</p>
            </li>
            <li className="ant-carousel-element">
              <img
                src="http://pvbk.spb.ru/inc/carousel/imgs/img8.jpg"
                alt="8"
              />
              <p>Описание 8</p>
            </li>
            <li className="ant-carousel-element">
              <img
                src="http://pvbk.spb.ru/inc/carousel/imgs/img9.jpg"
                alt="9"
              />
              <p>Описание 9</p>
            </li>
          </ul>
        </div>
        <div className="ant-carousel-arrow-left" onClick={arrowLeft}></div>
        <div className="ant-carousel-arrow-right" onClick={arrowRisht}></div>
        <div className="ant-carousel-dots"></div>
      </div>
      <style jsx global>{`
        /* User styles */
        @media screen and (min-width: 911px) {
          .ant-carousel {
            max-width: 810px;
          }
        }

        @media screen and (min-width: 641px) and (max-width: 910px) {
          .ant-carousel {
            max-width: 540px;
          }
        }

        @media screen and (max-width: 640px) {
          .ant-carousel {
            max-width: 270px;
          }
        }

        .ant-carousel {
          margin: 50px auto auto;
          padding-top: 10px;
          border: 1px solid #ccd;
          background-color: white;
        }

        .ant-carousel-element {
          width: 270px;
          text-align: center;
        }

        /* General styles */
        .ant-carousel {
          width: auto;
          position: relative;
        }

        .ant-carousel-hider {
          overflow: hidden;
        }
        //загальний контейнер
        .ant-carousel-list {
          width: auto;
          padding: 0;
          margin-left: ${marginLeftPx};
          transition: margin-left 0.5s ease;
          list-style-type: none;
          display: flex;
          justify-content: flex-start;
        }

        .ant-carousel-element {
          display: block;
          flex: 0 0 auto; //встановлює flex-shrink в 0 (за замовчуванням 1)
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
          left: -40px;
          top: 40%;
          display: block;
          background: url("http://pvbk.spb.ru/inc/carousel/ant-files/ant-arrow-left.png")
            no-repeat;
        }

        div.ant-carousel-arrow-right {
          right: -40px;
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
  );
};
export default AntSlider;
