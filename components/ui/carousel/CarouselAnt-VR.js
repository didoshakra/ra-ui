//CarouselAn.js //https://habr.com/ru/post/467079/

const CarouselAnt = () => {
  // Ant.defaults = {
  const defaults = [
    // Default options for the carousel
    {
      elemVisible: 3, // Кол-во отображаемых элементов в карусели
      loop: true, // Бесконечное зацикливание карусели
      auto: true, // Автоматическая прокрутка
      interval: 5000, // Интервал между прокруткой элементов (мс)
      speed: 750, // Скорость анимации (мс)
      touch: true, // Прокрутка  прикосновением
      arrows: true, // Прокрутка стрелками
      dots: true, // Индикаторные точки
    },
  ];

  //Початкова ф-ція
  function Ant(crslId) {
    let id = document.getElementById(crslId);
    if (id) {
      crslRoot = id;
    } else {
      crslRoot = document.querySelector(".ant-carousel");
    }

    // Carousel objects
    crslList = crslRoot.querySelector(".ant-carousel-list"); //лінія елементів
    crslElements = crslList.querySelectorAll(".ant-carousel-element");
    crslElemFirst = crslList.querySelector(".ant-carousel-element");
    leftArrow = crslRoot.querySelector("div.ant-carousel-arrow-left");
    rightArrow = crslRoot.querySelector("div.ant-carousel-arrow-right");
    indicatorDots = crslRoot.querySelector("div.ant-carousel-dots");

    // Initialization
    options = defaults;
    initialize();
  }

  //Прокрутка вправо
  Ant.prototype.elemPrev = function (num) {
    num = num || 1;

    if (options.dots) dotOn(currentElement);
    currentElement -= num;
    if (currentElement < 0) currentElement = dotsVisible - 1;
    if (options.dots) dotOff(currentElement);

    if (!options.loop) {
      // сдвиг вправо без цикла
      currentOffset += elemWidth * num;
      crslList.style.marginLeft = currentOffset + "px";
      if (currentElement == 0) {
        leftArrow.style.display = "none";
        touchPrev = false;
      }
      rightArrow.style.display = "block";
      touchNext = true;
    } else {
      // сдвиг вправо с циклом
      let elm,
        buf,
        this$ = this;
      for (let i = 0; i < num; i++) {
        elm = crslList.lastElementChild;
        buf = elm.cloneNode(true);
        crslList.insertBefore(buf, crslList.firstElementChild);
        crslList.removeChild(elm);
      }
      crslList.style.marginLeft = "-" + elemWidth * num + "px";
      let compStyle = window.getComputedStyle(crslList).marginLeft;
      crslList.style.cssText =
        "transition:margin " + options.speed + "ms ease;";
      crslList.style.marginLeft = "0px";
      setTimeout(function () {
        this$.crslList.style.cssText = "transition:none;";
      }, options.speed);
    }
  };

  //Прокрутка вліво
  Ant.prototype.elemNext = function (num) {
    num = num || 1;

    if (options.dots) dotOn(currentElement);
    currentElement += num;
    if (currentElement >= dotsVisible) currentElement = 0;
    if (options.dots) dotOff(currentElement);

    if (!options.loop) {
      // сдвиг влево без цикла
      currentOffset -= elemWidth * num;
      crslList.style.marginLeft = currentOffset + "px";
      if (currentElement == dotsVisible - 1) {
        rightArrow.style.display = "none";
        touchNext = false;
      }
      leftArrow.style.display = "block";
      touchPrev = true;
    } else {
      // сдвиг влево с циклом
      let elm,
        buf,
        this$ = this;
      crslList.style.cssText =
        "transition:margin " + options.speed + "ms ease;";
      crslList.style.marginLeft = "-" + elemWidth * num + "px";
      setTimeout(function () {
        this$.crslList.style.cssText = "transition:none;";
        for (let i = 0; i < num; i++) {
          elm = this$.crslList.firstElementChild;
          buf = elm.cloneNode(true);
          this$.crslList.appendChild(buf);
          this$.crslList.removeChild(elm);
        }
        this$.crslList.style.marginLeft = "0px";
      }, options.speed);
    }
  };

  Ant.prototype.dotOn = function (num) {
    indicatorDotsAll[num].style.cssText =
      "background-color:#BBB; cursor:pointer;";
  };

  Ant.prototype.dotOff = function (num) {
    indicatorDotsAll[num].style.cssText =
      "background-color:#556; cursor:default;";
  };

  Ant.initialize = function () {
    // Constants
    elemCount = crslElements.length; // Количество элементов
    dotsVisible = elemCount; // Число видимых точек
    let elemStyle = window.getComputedStyle(crslElemFirst);
    elemWidth =
      crslElemFirst.offsetWidth + // Ширина элемента (без margin)
      parseInt(elemStyle.marginLeft) +
      parseInt(elemStyle.marginRight);

    // Variables
    currentElement = 0;
    currentOffset = 0;
    touchPrev = true;
    touchNext = true;
    let xTouch, yTouch, xDiff, yDiff, stTime, mvTime;
    let bgTime = getTime();

    // Functions
    function getTime() {
      return new Date().getTime();
    }
    function setAutoScroll() {
      autoScroll = setInterval(function () {
        let fnTime = getTime();
        if (fnTime - bgTime + 10 > options.interval) {
          bgTime = fnTime;
          elemNext();
        }
      }, options.interval);
    }

    // Start initialization
    if (elemCount <= options.elemVisible) {
      // Отключить навигацию
      options.auto = false;
      options.touch = false;
      options.arrows = false;
      options.dots = false;
      leftArrow.style.display = "none";
      rightArrow.style.display = "none";
    }

    if (!options.loop) {
      // если нет цикла - уточнить количество точек
      dotsVisible = elemCount - options.elemVisible + 1;
      leftArrow.style.display = "none"; // отключить левую стрелку
      touchPrev = false; // отключить прокрутку прикосновением вправо
      options.auto = false; // отключить автопркрутку
    } else if (options.auto) {
      // инициализация автопрокруки
      setAutoScroll();
      // Остановка прокрутки при наведении мыши на элемент
      crslList.addEventListener(
        "mouseenter",
        function () {
          clearInterval(autoScroll);
        },
        false
      );
      crslList.addEventListener("mouseleave", setAutoScroll, false);
    }

    if (options.touch) {
      // инициализация прокрутки прикосновением
      crslList.addEventListener(
        "touchstart",
        function (e) {
          xTouch = parseInt(e.touches[0].clientX);
          yTouch = parseInt(e.touches[0].clientY);
          stTime = getTime();
        },
        false
      );
      crslList.addEventListener(
        "touchmove",
        function (e) {
          if (!xTouch || !yTouch) return;
          xDiff = xTouch - parseInt(e.touches[0].clientX);
          yDiff = yTouch - parseInt(e.touches[0].clientY);
          mvTime = getTime();
          if (
            Math.abs(xDiff) > 15 &&
            Math.abs(xDiff) > Math.abs(yDiff) &&
            mvTime - stTime < 75
          ) {
            stTime = 0;
            if (touchNext && xDiff > 0) {
              bgTime = mvTime;
              elemNext();
            } else if (touchPrev && xDiff < 0) {
              bgTime = mvTime;
              elemPrev();
            }
          }
        },
        false
      );
    }

    if (options.arrows) {
      // инициализация стрелок
      if (!options.loop)
        crslList.style.cssText =
          "transition:margin " + options.speed + "ms ease;";
      leftArrow.addEventListener(
        "click",
        function () {
          let fnTime = getTime();
          if (fnTime - bgTime > options.speed) {
            bgTime = fnTime;
            elemPrev();
          }
        },
        false
      );
      rightArrow.addEventListener(
        "click",
        function () {
          let fnTime = getTime();
          if (fnTime - bgTime > options.speed) {
            bgTime = fnTime;
            elemNext();
          }
        },
        false
      );
    } else {
      leftArrow.style.display = "none";
      rightArrow.style.display = "none";
    }

    if (options.dots) {
      // инициализация индикаторных точек
      let sum = "",
        diffNum;
      for (let i = 0; i < dotsVisible; i++) {
        sum += '<span class="ant-dot"></span>';
      }
      indicatorDots.innerHTML = sum;
      indicatorDotsAll = crslRoot.querySelectorAll("span.ant-dot");
      // Назначаем точкам обработчик события 'click'
      for (let n = 0; n < dotsVisible; n++) {
        indicatorDotsAll[n].addEventListener(
          "click",
          function () {
            diffNum = Math.abs(n - currentElement);
            if (n < currentElement) {
              bgTime = getTime();
              elemPrev(diffNum);
            } else if (n > currentElement) {
              bgTime = getTime();
              elemNext(diffNum);
            }
            // Если n ==  currentElement ничего не делаем
          },
          false
        );
      }
      dotOff(0); // точка[0] выключена, остальные включены
      for (let i = 1; i < dotsVisible; i++) {
        dotOn(i);
      }
    }
  };

  ////////////////////
  const arrowRisht = () => {
    console.log("CarouselAn.js/arrowRisht");
  };
  const arrowLeft = () => {
    console.log("CarouselAn.js/arrowLeft");
  };
  return (
    <div className="ant-carousel">
      <h3>CarouselAn.js //https://habr.com/ru/post/467079/</h3>
      <div classNake="ant-carousel-hider">
        <ul className="ant-carousel-list">
          <li className="ant-carousel-element">
            <img src="/vegefoods/images/person_1.jpg" alt="1" />
            <p>Опис 1</p>
          </li>
          <li className="ant-carousel-element">
            <img src="/vegefoods/images/person_2.jpg" alt="2" />
            <p>Опис 2</p>
          </li>
          <li className="ant-carousel-element">
            <img src="/vegefoods/images/person_3.jpg" alt="3" />
            <p>Опис 3</p>
          </li>
          <li className="ant-carousel-element">
            <img src="/vegefoods/images/person_4.jpg" alt="4" />
            <p>Опис 4</p>
          </li>
          <li className="ant-carousel-element">
            <img src="/vegefoods/images/person_1.jpg" alt="5" />
            <p>Опис 5</p>
          </li>
          <li className="ant-carousel-element">
            <img src="/vegefoods/images/person_2.jpg" alt="6" />
            <p>Опис 6</p>
          </li>
          <li className="ant-carousel-element">
            <img src="/vegefoods/images/person_3.jpg" alt="7" />
            <p>Опис 7</p>
          </li>
          <li className="ant-carousel-element">
            <img src="/vegefoods/images/person_4.jpg" alt="8" />
            <p>Опис 8</p>
          </li>
        </ul>
      </div>
      <div className="ant-carousel-arrow-left" onClick={arrowLeft}></div>
      <div className="ant-carousel-arrow-right" onClick={arrowRisht}></div>
      <div className="ant-carousel-dots"></div>

      <style jsx>{`
        /* User styles */
        @media screen and (min-width: 911px) {
          .ant-carousel {
            max-width: 1200px;
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
          //overflow: hidden;
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
          width: 100%;
          overflow: hidden;
        }

        .ant-carousel-list {
          width: auto;
          margin: 0;
          padding: 0;
          list-style-type: none;
          display: flex;
          justify-content: flex-start;
        }

        .ant-carousel-element {
          display: block;
          flex: 0 0 auto;
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
export default CarouselAnt;
