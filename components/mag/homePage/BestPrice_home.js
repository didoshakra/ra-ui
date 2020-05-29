//BestPrice.js / Muiv4.5.1

const BestPrice = () => {
  return (
    // <AppFrame classes={{ drawer: className.drawer }}>
    <section className="home-slider-section">
      {/* елемент слайдеру */}
      <div className="slider-item image">
        {/* overlay/перекривати-Робить тінь */}
        <div className="overlay"></div>
        <div className="slider-text">
          <h1>100% свіжа та органічна їжа</h1>
          <h2 className="subheading">
            Ми постачаємо органічні овочі та фрукти
          </h2>
          {/* <a href="#" className="button" onClick={buttonClick2}> */}
          <div></div>
        </div>
      </div>
      <style jsx>{`
        .home-slider-section {
          position: relative;
          height: 650px;
          background: 100% transparent url(/vegefoods/images/bg_3.jpg) no-repeat;
          height: 650px;
          background-size: cover; //Маштабує зображення.
          background-repeat: no-repeat;
          //background-position: center center;
        }
        .slider-text h1 {
          font-size: 40px;
          color: white;
        }
        .image {
          //background: 100% transparent url(/vegefoods/images/bg_3.jpg) no-repeat;
        }
        .slider-item {
          //position: absolute; //Щоб не бачити цей <div> !!! Інакше 1-й слайд буде відкириватись за 1-м
          position: relative; //1-й слайд буде відкириватись за 1-м
          //0,0,0,0-розтягує position: absolute; на весь батьківський блок не залежно від контенту
          //top: 0;
          //bottom: 0;
          //left: 0;
          //right: 0;
          align-items: end;
          justify-content: end;
          height: 650px;
          background-size: cover; //Маштабує зображення.
          background-repeat: no-repeat;
          background-position: center center;
        }
        .overlay {
          position: absolute;
          //0,0,0,0-розтягує на весь батьківський блок не залежно від контенту
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: black;
          opacity: 0.2;
        }

        .slider-text {
          //position: absolute;//З аbsolute не працює центрування
          padding: 0 15px;
          display: flex;
          align-items: center; //Y-вертикально
          justify-content: center; //X-горизонтально
          flex-direction: column; //в стовбець
          text-align: center;
          height: 650px; //Треба
        }

        .subheading {
          color: black;
          font-weight: 300;
          font-size: 12px;
          letter-spacing: 4px;
          text-transform: uppercase;
          display: inline-block;
          color: white;
        }
        .slider-text h1 {
          font-size: 40px;
          color: white;
          line-height: 1.3;
          font-weight: 200;
        }

        .slider-text p {
          color: rgba(0, 0, 0, 0.8);
          font-weight: 400;
        }
      `}</style>
    </section>
  );
};
export default BestPrice;
