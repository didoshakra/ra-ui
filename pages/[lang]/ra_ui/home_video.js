//Home.js//VIDEO/https://sitehere.ru/kak-sdelat-video-fonom-sajta-videostoki
import Layout from "../../../components/main/Layout";
import useTranslation from "../../../translations/useTranslation";

const Home = () => {
  const { t } = useTranslation();
  return (
    // <Layout title="Shops">
    <Layout>
      <div className="fullscreen-bg">
        <div className="overlay">
          {/* <img src="/SunMan.jpg" className="logo" alt="Logo" /> */}
          <h1>Вітаю на сайті 👋</h1>
        </div>
        <video
          loop="" //Не беде повторювати
          // loop //Циклічно повторює
          muted=""
          autoplay="" // автоматическое воспроизведение видео;
          // poster="/video/mountains-640.jpg"
          // poster="/video/we-boat-640.jpg" // зображення замість відео
          poster="/video/islands-640.jpg" // зображення замість відео
          className="fullscreen-bg__video"
        >
          {/* <source src="/video/we-boat.mp4" type="video/mp4" /> */}
          {/* <source src="/video/mountains-5m.mp4" type="video/mp4" /> */}
          <source src="/video/islands.mp4" type="video/mp4" />
        </video>
      </div>

      <style jsx>{`
        body {
          padding: 0;
          margin: 0;
          font-family: "Roboto Condensed", sans-serif;
        }

        .overlay h1 {
          text-align: center;
          color: #fff;
          font-size: 70px;
          margin-top: 17%;
        }

        .fullscreen-bg {
          overflow: hidden;
          z-index: -100;
          position: relative;
          height: 100%;
          width: 100%;
          padding-top: 45%;
        }

        .fullscreen-bg__video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
        }

        .overlay {
          background: rgba(0, 0, 0, 0.4);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 4;
        }

        .content {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .content h2 {
          text-align: center;
          font-size: 30px;
        }

        .content p {
          text-align: justify;
          font-size: 20px;
        }

        @media (max-width: 767px) {
          .fullscreen-bg {
            background: url("/images/plane.jpg") center center / cover no-repeat;
          }

          .fullscreen-bg__video {
            display: none;
          }

          .overlay h1 {
            font-size: 40px;
          }
        }

        /**/
        .backToSitehereBtn {
          display: block;
          width: 150px;
          height: 150px;
          background: #01bc78;
          text-align: center;
          line-height: 170px;
          font-size: 20px;
          border-radius: 50%;
          color: #fff;
          position: absolute;
          text-decoration: none;
          top: -40px;
          left: -40px;
          transform: rotate(-45deg) scale(1);
          transition: all 0.25s linear;
        }

        .backToSitehereBtn:hover {
          text-decoration: none;
          top: -10px;
          left: -10px;
          transform: rotate(-45deg) scale(1.3);
        }
      `}</style>
    </Layout>
  );
};

export default Home;
