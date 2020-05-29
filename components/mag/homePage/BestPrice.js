//BestPrice.js

const BestPrice = () => {
  //Таймер зворотнього виклику
  //https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks
  const calculateTimeLeft = () => {
    const difference = +new Date("2021-01-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <section className="best-price__section">
      <div className="best-price__context">
        <span className="best-price__subheading">Best Price For You</span>
        <h2 className="best-price__dial">Deal of the day</h2>
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
        <div className="best-price_timer">
          <div className="best-price_time">
            {timeLeft.days}
            <span>days</span>
          </div>
          <div className="best-price_time">
            {timeLeft.hours}
            <span>hours</span>
          </div>
          <div className="best-price_time">
            {timeLeft.minutes}
            <span>minutes</span>
          </div>
          <div className="best-price_time">
            {timeLeft.seconds}
            <span>seconds</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .best-price__section {
          padding: 90px 2vw;
          //position: relative;
          display: flex;
          justify-content: flex-end;
          height: 650px;
          background: 100% transparent url(/vegefoods/images/bg_3.jpg) no-repeat;
          background-size: cover; //Маштабує зображення.
          background-position: center center;
        }

        .best-price__context {
          display: flex;
          flex-direction: column;
          //justify-content: centr;
          align-items: center;
          //border: 1px solid #82ae46;
        }

        .best-price__subheading {
          font-size: 18px;
          display: block;
          margin-bottom: 10px;
          //font-family: "Dosis", "Lora", Georgia, serif;
          font-family: "Lora", Georgia, serif;
          font-style: italic;
          color: #82ae46;
          font-weight: 500;
        }
        //h2
        .best-price__dial {
          margin-bottom: 1.5rem;
          position: relative;
          font-size: 28px;
          font-weight: 600;
          font-family: "Poppins", Arial, sans-serif;
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
          font-weight: 500;
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
        .best-price_timer {
          width: 90%;
          display: flex;
        }
        //
        .best-price_time {
          padding-left: 1rem;
          width: 25%;
          font-size: 30px;
          font-weight: 500;
          border-left: 1px solid rgba(0, 0, 0, 0.05);
          color: #82ae46;
        }

        .best-price_time:first-child {
          border-left: transparent;
        }
        .best-price_time span {
          font-size: 12px;
          display: block;
          color: #000000;
          text-transform: uppercase;
        }
        @media (min-width: 768px) {
          //h2
          .best-price__dial {
            margin-bottom: 1.5rem;
            position: relative;
            font-size: 40px;
          }
          .best-price__context {
            display: flex;
            width: 50%;
            padding-right: 15px;
            padding-left: 15px;
            //flex: 0 0 50%;
            //max-width: 50%;
          }
        }
        @media (min-width: 960px) {
          .best-price_timer {
            width: 80%;
          }
          .best-price_time {
            font-size: 40px;
          }
        }
      `}</style>
    </section>
  );
};
export default BestPrice;
