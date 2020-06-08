//Testimony.js / Muiv4.5.1

import OwlCarousel from "react-owl-carousel2";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import img1 from "/public/vegefoods/images/person_1.jpg";
// import img2 from "/public/vegefoods/images/person_2.jpg";
// import img3 from "/public/vegefoods/images/person_3.jpg";
// import img4 from "/public/vegefoods/images/person_4.jpg";
// import img5 from "/public/vegefoods/images/person_1.jpg";
// import img6 from "/public/vegefoods/images/person_2.jpg";
// import img7 from "/public/vegefoods/images/person_3.jpg";
// import img8 from "/public/vegefoods/images/person_4.jpg";
import Carousel from "./CarouselAnt";
// import Carousel from "./CarousellReact";

const Testimony = () => {
  return (
    <section className="testimony__section">
      {/* <div class="row justify-content-center mb-5 pb-3"> */}
      <div className="heading-section_row">
        <div className="heading-section_col">
          <span className="subheading">Testimony</span>
          <h2>Our satisfied customer says</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in
          </p>
        </div>
      </div>
      {/*  */}
      <Carousel />
      {/* {mounted ? renderCarousel : ""} */}
      {/*  */}
      <style jsx>{`
        .heading-section_row {
          display: flex;
          flex-direction: row; //В рядок
          justify-content: center; //Рівномірно всюди .
        }
        .heading-section_col {
          position: relative;
          width: 100%;
          flex: 0 0 58.33333%;
          max-width: 58.33333%;
          padding-right: 15px;
          padding-left: 15px;
          //
          position: relative;
          display: flex;
          flex-direction: column; //в стовбець;
          //align-items: center; //Y але тут по X
          text-align: center;
        }

        .heading-section_col .subheading {
          font-size: 18px;
          display: block;
          margin-bottom: 10px;
          font-family: "Lora", Georgia, serif;
          font-style: italic;
          color: #82ae46;
        }
        .heading-section_col h2 {
          position: relative;
          margin-bottom: 1.5rem;
          //margin-bottom: 24px;
          font-size: 28px;
          font-weight: 600;
          color: #000000;
          font-family: "Poppins", Arial, sans-serif;
        }
        .heading-section_col p {
          margin-bottom: 1rem;
        }
        @media (min-width: 600px) {
          .heading-section_col h2 {
            font-size: 40px;
          }
        }
      `}</style>
    </section>
  );
};
export default Testimony;
