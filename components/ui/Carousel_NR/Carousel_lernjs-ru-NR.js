//Carouse.jscarousel //https://plnkr.co/edit/eFvS0I4Ms3ohJwOi?p=preview&preview

const Carousel = () => {
  return (
    <div>
      <div className="carousel">
        <h3>
          carousel https://plnkr.co/edit/eFvS0I4Ms3ohJwOi?p=preview&preview
        </h3>
        <div className="gallery">
          <ul className="images">
            <button className="arrow prev">⇦</button>
            <li>
              <img src="/vegefoods/images/person_1.jpg" alt="img" />
            </li>
            <li>
              <img src="/vegefoods/images/person_2.jpg" />
            </li>
            <li>
              <img src="/vegefoods/images/person_3.jpg" />
            </li>
            <li>
              <img src="/vegefoods/images/person_4.jpg" />
            </li>
            <li>
              <img src="/vegefoods/images/person_1.jpg" />
            </li>
            <li>
              <img src="/vegefoods/images/person_2.jpg" />
            </li>
            <li>
              <img src="/vegefoods/images/person_3.jpg" />
            </li>
            <li>
              <img src="/vegefoods/images/person_4.jpg" />
            </li>
            <li>
              <img src="/vegefoods/images/person_1.jpg" />
            </li>
            <button className="arrow prev">⇨</button>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .carousel {
          text-align: center;
        }
        .images {
          display: flex;
          padding: 0;
          width: 100%;
          height: 120px;
          align-items: center;
          text-align: center;
          padding: 5px 10px;
          list-style-type: none;
          overflow: hidden;
        }
        .images img {
          margin: 10px;
          padding: 0 10px;
          //height: 100%;
          width: 100%;
          //object-fit: contain; //вся картинка з попорціями/контейнер не заповнений
          object-fit: cover; //вся картинка з попорціями/контейнер не заповнений
        }
      `}</style>
    </div>
  );
};
export default Carousel;
