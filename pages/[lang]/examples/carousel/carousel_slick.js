//carousel_slick.js //https://github.com/akiran/react-slick
//https://www.newline.co/@dmitryrogozhny/how-to-show-carousel-in-react-applications-with-react-slick--07445c23
//!!! Rob plagin

import Slider from "react-slick";

const CarouselSlick = () => {
  var settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h3>
        (Plagin) Carousel_slick.js //https://github.com/akiran/react-slick
      </h3>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
          <p>
            <img src="/vegefoods/images/person_1.jpg" alt="img" />
          </p>
        </div>
        <div>
          <h3>2</h3>
          <img src="/vegefoods/images/person_2.jpg" alt="img" />
        </div>
        <div>
          <h3>3</h3>
          <img src="/vegefoods/images/person_3.jpg" alt="img" />
        </div>
        <div>
          <h3>4</h3>
          <img src="/vegefoods/images/person_4.jpg" alt="img" />
        </div>
        <div>
          <h3>5</h3>
          <img src="/vegefoods/images/person_1.jpg" alt="img" />
        </div>
        <div>
          <h3>6</h3>
          <img src="/vegefoods/images/person_2.jpg" alt="img" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselSlick;
