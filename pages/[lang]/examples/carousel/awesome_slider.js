//awesome_slider.js https://www.npmjs.com/package/react-awesome-slider
//rob plagin

import AwesomeSlider from "react-awesome-slider";
// import 'react-awesome-slider/dist/styles.css';

const AwesomeSliderPlag = () => (
  <div>
    <h3>
      (plagin) AwesomeSlider.js
      https://www.npmjs.com/package/react-awesome-slider
    </h3>
    <AwesomeSlider>
      {/* //опадати +++ */}
      {/* <AwesomeSlider animation="fallAnimation"> */}
      {/* <AwesomeSlider animation="cubeAnimation"> */}
      {/* //накладання +++ */}
      {/* <AwesomeSlider animation="openAnimation"> */}
      {/* <AwesomeSlider animation="scaleOutAnimation"> */}
      {/* <AwesomeSlider animation="foldOutAnimation"> */}
      <div data-src="/vegefoods/images/person_1.jpg" />
      <div data-src="/vegefoods/images/person_2.jpg" />
      <div data-src="/vegefoods/images/person_3.jpg" />
      <div data-src="/vegefoods/images/person_4.jpg" />
      <div data-src="/vegefoods/images/person_1.jpg" />
    </AwesomeSlider>
  </div>
);
export default AwesomeSliderPlag;
// Підтримка startupScreen визначає перший екран, який відображається, коли компонент змонтується, він працює як екран попереднього завантаження. Якщо не визначено, компонент буде за замовчуванням для першого дочірнього екрана або до екрана, визначеного у вибраній опорі.

// .jsx
// import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';

// const startupScreen = (
//   <div>
//     <img src="/path/to/image-loader.png" />
//   </div>
// );

// const slider = (
//   <AwesomeSlider
//     startupScreen={startupScreen}
//     cssModule={styles}
//   >
//     /* ... */
//   </AwesomeSlider>
// );
// Tри основні гачки - це FirstFount, onAnimationStart і onAnimationEnd. Вони викликаються об'єктом, що містить основний компонент, currentIndex, nextIndex, currentScreen і nextScreen

// // .jsx
// const onAnimationStart = ({
//   element,
//   currentIndex,
//   nextIndex,
//   currentScreen,
//   nextScreen,
// }) => {
//   /*
//     ... do Something
//   */
// }

// /* ... */

// const slider = (
//   <AwesomeSlider
//     cssModule={styles}
//     onFirstMount={onFirstMount}
//     onAnimationStart={onAnimationStart}
//     onAnimationEnd={onAnimationEnd}
//   >
//     <div data-src="/path/to/image-0.png" />
//     <div data-src="/path/to/image-1.png" />
//     <div data-src="/path/to/image-2.jpg" />
//   </AwesomeSlider>
// );
