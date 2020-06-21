//Carousel_react_slider.js https://www.npmjs.com/package/react-carousel-slider
// Не ПРАЦЮЄ    Global CSS cannot be imported from within node_modules.
// Read more: https://err.sh/next.js/css-npm

import React from "react";
import CarouselSlider from "react-carousel-slider";

let data = [
  {
    imgSrc:
      "https://c.pxhere.com/photos/b5/40/architecture_skyscraper_glass_facades_modern_facade_sky_building_d_sseldorf-1184497.jpg!d",
    des1: "Black",
    des2: "White",
  },
  {
    imgSrc:
      "https://c.pxhere.com/photos/4a/92/architecture_skyscraper_glass_facades_modern_facade_sky_building_d_sseldorf-1289274.jpg!d",
    des1: "Black",
    des2: "White",
  },
  {
    imgSrc:
      "https://c.pxhere.com/photos/01/00/architecture_skyscraper_glass_facades_modern_facade_sky_building_d_sseldorf-1191017.jpg!d",
    des1: "Black",
    des2: "White",
  },
];

let sliderBoxStyle = {
  height: "250px",
  width: "300px",
  background: "transparent",
  border: "1px solid #e1e4e8",
};

let itemsStyle = {
  height: "80%",
  padding: "0px",
  background: "transparent",
  border: "1px solid #e1e4e8",
  borderRadius: "2px",
};

let textBoxStyle = {
  width: "60%",
  background: "rgba(155, 108, 27, 0.5)",
  top: "80%",
  textAlign: "right",
  color: "#ffffff",
};

let textBoxStyle2 = {
  width: "30%",
  top: "30%",
  color: "#ffffff",
  marginRight: "0%",
};
// margin to tune the textbox
let buttonSetting = {
  placeOn: "middle-outside",
  style: {
    left: {
      color: "#929393",
      background: "transparent",
      border: "1px solid #e1e4e8",
      borderRadius: "50%",
    },
    right: {
      color: "#929393",
      background: "transparent",
      border: "1px solid #e1e4e8",
      borderRadius: "50%",
    },
  },
};

let dotsSetting = {
  placeOn: "top",
  style: {
    dotSize: "5px",
    currDotColor: "rgba(155, 108, 27, 0.5)",
    marginTop: "0px",
  },
};

let customSlideCpnts = data.map((item, index) => (
  <Link to={"/page" + index} key={index}>
    <img src={item.imgSrc} />
    <p style={textBoxStyle}>{item.des1}</p>
    <p style={textBoxStyle2}>{item.des2}</p>
  </Link>
));

const CarouselReactSlider = () => {
  return (
    <div style={{ width: "400px", margin: "0 auto", position: "relative" }}>
      <CarouselSlider
        slideCpnts={customSlideCpnts}
        manner={{ circular: false }}
        sliderBoxStyle={sliderBoxStyle}
        dotsSetting={dotsSetting}
        buttonSetting={buttonSetting}
        itemsStyle={itemsStyle}
      />
    </div>
  );
};

export default CarouselReactSlider;
