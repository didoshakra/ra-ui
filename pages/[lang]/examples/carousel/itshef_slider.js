//itshef_slider.js  https://itchief.ru/javascript/how-to-create-slider
//nr

const ItsShefSlider = () => {
  return (
    <div className="slider">
      ItShefSlider
      <div className="slider__wrapper">
        <div className="slider__items">
          <div className="slider__item slider__item_1">
            <div className="slider__item_inner">
              <span className="slider__item_img">
                <img
                  className="slider__item_photo"
                  src="/minishop/images/gallery-1.jpg"
                  alt=""
                />
              </span>
              <span className="slider__item_testimonial">
                <span className="slider__item_name">Ismael Matsuura</span>
                <span className="slider__item_post">Web Developer</span>
                <span className="slider__item_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  nihil quo molestiae perspiciatis qui vero?
                </span>
              </span>
            </div>
          </div>
          <div className="slider__item slider__item_2">
            <div className="slider__item_inner">
              <span className="slider__item_img">
                <img src="/minishop/images/gallery-2.jpg" alt="" />
              </span>
              <span className="slider__item_testimonial">
                <span className="slider__item_name">Lawanda Batchelder</span>
                <span className="slider__item_post">Web Designer</span>
                <span className="slider__item_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  nihil quo molestiae perspiciatis qui vero?
                </span>
              </span>
            </div>
          </div>
          <div className="slider__item slider__item_3">
            <div className="slider__item_inner">
              <span className="slider__item_img">
                <img src="/minishop/images/gallery-3.jpg" alt="" />
              </span>
              <span className="slider__item_testimonial">
                <span className="slider__item_name">Bennett Arbogast</span>
                <span className="slider__item_post">Web Developer</span>
                <span className="slider__item_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  nihil quo molestiae perspiciatis qui vero?
                </span>
              </span>
            </div>
          </div>
          <div className="slider__item slider__item_4">
            <div className="slider__item_inner">
              <span className="slider__item_img">
                <img src="/minishop/images/gallery-4.jpg" alt="" />
              </span>
              <span className="slider__item_testimonial">
                <span className="slider__item_name">Shanna Parcell</span>
                <span className="slider__item_post">Web Designer</span>
                <span className="slider__item_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  nihil quo molestiae perspiciatis qui vero?
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <a
        className="slider__control slider__control_prev"
        href="#"
        role="button"
      ></a>
      <a
        className="slider__control slider__control_next"
        href="#"
        role="button"
      ></a>
      <style jsx global>{`
        // стили для элемента body
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol";
          color: #fff;
          height: 3000px;
        }

        ol,
        ul,
        dl {
          margin-top: 0;
          margin-bottom: 1rem;
        }

        // стили основного контейнера слайдера
        .slider {
          position: relative;
          overflow: hidden;
          max-width: 960px;
          margin-left: auto;
          margin-right: auto;
        }

        // стили для обёртки, в которой заключены слайды
        .slider__wrapper {
          position: relative;
          overflow: hidden;
        }

        // стили для контейнера слайдов
        .slider__items {
          display: flex;
          transition: transform 0.6s ease;
        }

        стили для слайдов .slider__item {
          flex: 0 0 100%;
          max-width: 100%;
        }

        //стили для кнопок "вперед" и "назад"
        .slider__control {
          position: absolute;
          top: 50%;
          display: none;
          align-items: center;
          justify-content: center;
          width: 40px;
          color: #fff;
          text-align: center;
          opacity: 0.5;
          height: 50px;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
        }

        .slider__control_show {
          display: flex;
        }

        .slider__control:hover,
        .slider__control:focus {
          color: #fff;
          text-decoration: none;
          outline: 0;
          opacity: 0.9;
        }

        .slider__control_prev {
          left: 0;
        }

        .slider__control_next {
          right: 0;
        }

        .slider__control::before {
          content: "";
          display: inline-block;
          width: 20px;
          height: 20px;
          background: transparent no-repeat center center;
          background-size: 100% 100%;
        }

        .slider__control_prev::before {
          //background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
          background-color: rgba(143, 230, 143, 1);
        }

        .slider__control_next::before {
          //background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
          background-color: rgb(143, 230, 218);
        }

        /* стили для индикаторов */
        .slider__indicators {
          position: absolute;
          right: 0;
          bottom: 10px;
          left: 0;
          z-index: 15;
          display: flex;
          justify-content: center;
          padding-left: 0;
          margin-right: 15%;
          margin-left: 15%;
          list-style: none;
          margin-top: 0;
          margin-bottom: 0;
        }

        .slider__indicators li {
          box-sizing: content-box;
          flex: 0 1 auto;
          width: 30px;
          height: 4px;
          margin-right: 3px;
          margin-left: 3px;
          text-indent: -999px;
          cursor: pointer;
          background-color: rgba(255, 255, 255, 0.5);
          background-clip: padding-box;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
        }

        .slider__indicators li.active {
          background-color: #fff;
        }

        img {
          display: inline-block;
          height: auto;
          max-width: 100%;
          border-radius: 50%;
        }

        .slider__item_1 {
          background: linear-gradient(45deg, #085078 10%, #85d8ce 90%);
        }

        .slider__item_2 {
          background: linear-gradient(to right, #dd1818, #333333);
        }

        .slider__item_3 {
          background: linear-gradient(to right, #093028, #237a57);
        }

        .slider__item_4 {
          background: linear-gradient(to right, #243b55, #141e30);
        }

        .slider__item {
          height: 320px;
          overflow: hidden;
          position: relative;
        }

        .slider__item_inner {
          position: absolute;
          left: 15%;
          right: 15%;
          top: 36px;
          bottom: 36px;
          overflow: hidden;
          color: #fff;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .slider__item_img {
          flex: 0 0 80px;
          max-width: 80px;
        }

        .slider__item_testimonial {
          flex: 1 0 0;
          display: flex;
          flex-direction: column;
          text-align: center;
        }

        @media (min-width: 576px) {
          .slider__item {
            height: 250px;
          }

          .slider__item_inner {
            flex-direction: row;
          }

          .slider__item_testimonial {
            margin-left: 15px;
          }

          .slider__item_img {
            flex: 0 0 150px;
            max-width: 150px;
          }

          .slider__item_testimonial {
            text-align: left;
          }
        }

        .slider__item_name {
          font-size: 20px;
          margin-bottom: 8px;
          color: rgba(255, 255, 255, 0.8);
        }

        .slider__item_post {
          font-size: 14px;
          margin-bottom: 8px;
          color: rgba(255, 255, 255, 0.8);
        }

        .slider__item_text {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};
export default ItsShefSlider;
