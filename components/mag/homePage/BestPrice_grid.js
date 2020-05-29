//BestPrice.js
const BestPrice = () => {
  return (
    <section className="best-price__section">
      <h3>BestPrice</h3>
      {/* <div className="best-price__row"> */}
      {/* <div className="best-price__context"></div> */}
      <div className="best-price__context">
        <span className="best-price__subheading">Best Price For You</span>
        <h2 class="mb-4">Deal of the day</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
        <h3>
          <a href="#">Spinach</a>
        </h3>
        <span className="best-price_price">
          $10 <a href="#">now $5 only</a>
        </span>
        <div id="timer" class="d-flex mt-5">
          <div class="time" id="days"></div>
          <div class="time pl-3" id="hours"></div>
          <div class="time pl-3" id="minutes"></div>
          <div class="time pl-3" id="seconds"></div>
        </div>
        {/* </div> */}
      </div>
      <style jsx>{`
        .best-price__section {
          // position: relative;
          margin: 0;
          padding: 90px 2vw;
          width: 100%;
          display: grid;
          grid-template-areas: "" "content";
          grid-gap: 2vw;
          //grid-template-rows: 0 250px;
          background: 100% transparent url(/vegefoods/images/bg_3.jpg) no-repeat;
        }
        @media (min-width: 600px) {
          .best-price__section {
            padding: 40px 5vw;
            display: grid;
            grid-template-areas: ". content";
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .best-price__context {
          grid-area: fruits;
          display: flex;
          flex-direction: column;
          //justify-content:end;
          border: 1px solid #82ae46;
        }
        .best-price__subheading {
          font-size: 18px;
          display: block;
          margin-bottom: 10px;
          //font-family: "Dosis", "Lora", Georgia, serif;
          font-family: "Lora", Georgia, serif;
          font-style: italic;
          color: #82ae46;
        }
        .best-price__context h2 {
          //margin-bottom: 1.5rem;
          position: relative;
          font-size: 40px;
          font-weight: 600;
          color: #000000;
        }
        .best-price__context p {
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 15px;
          line-height: 1.8;
          font-weight: 400;
          color: gray;
        }
        .best-price__context h3 {
          margin-bottom: 0.5rem;
        }
        .best-price__context a {
          font-size: 30px;
          font-weight: 400;
          font-family: "Lora", Georgia, serif;
          font-style: italic;
          line-height: 1.5;
          color: #82ae46;
          //background-color: transparent;
        }
        .best-price_price {
          font-weight: 500;
          font-size: 18px;
          color: rgba(0, 0, 0, 0.5);
        }
        .best-price_price a {
          font-weight: 500;
          font-size: 18px;
          line-height: 1.8;
          color: #82ae46;
        }
      `}</style>
    </section>
  );
};
export default BestPrice;
