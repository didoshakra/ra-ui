//Partner.js
//Добавлено animat

const Partner = () => {
  return (
    <section className="partner-section">
      <div className="partner-container">
        {/* <div class="col-sm ftco-animate"> */}
        <div className="partner-item">
          <a href="#" className="partner">
            <img
              src="/vegefoods/images/partner-1.png"
              className="img-fluid"
              alt="Colorlib Template"
            />
          </a>
        </div>
        <div className="partner-item">
          <a href="#" className="partner">
            <img
              src="/vegefoods/images/partner-2.png"
              className="img-fluid"
              alt="Colorlib Template"
            />
          </a>
        </div>
        <div className="partner-item">
          <a href="#" className="partner">
            <img
              src="/vegefoods/images/partner-3.png"
              className="img-fluid"
              alt="Colorlib Template"
            />
          </a>
        </div>
        <div className="partner-item">
          <a href="#" className="partner">
            <img
              src="/vegefoods/images/partner-4.png"
              className="img-fluid"
              alt="Colorlib Template"
            />
          </a>
        </div>
        <div className="partner-item">
          <a href="#" className="partner">
            <img
              src="/vegefoods/images/partner-5.png"
              className="img-fluid"
              alt="Colorlib Template"
            />
          </a>
        </div>
      </div>

      <style jsx>{`
        .partner-section {
          padding: 6rem 2vw; //rem-шрифт кореневого
          position: relative;
          //display: block// по замовчуванню (для section)
          //border: 2px solid #82ae46;
        }
        .partner-container {
          display: flex;
          flex: 0 1 auto;
          flex-direction: column;
          justify-content: space-between; //Крайні елементи притискаються до країв
          align-items: center; //Y-вертикально //R-щоб рівняло по верху
        }

        //col-sm ftco-animate"
        .partner-item {
          position: relative;
          width: 100%;
        }
        @media (min-width: 600px) {
          .partner-section {
            padding: 6rem 2vw; //rem-шрифт кореневого
          }
          .partner-container {
            flex-direction: row; //row-по замовчуванню
          }
        }
      `}</style>
    </section>
  );
};
export default Partner;
