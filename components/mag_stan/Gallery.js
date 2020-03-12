//Gallery.js
import { useContext } from "react";
import { ComponentContext } from "../../context/ComponentContext";

const Gallery = ({ images }) => {
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  return (
    <div className="gallery">
      {/* <div class="paper"> */}
      {images.map(image => {
        return (
          <div className="image" key={image}>
            <img src={image} alt="img" />
          </div>
        );
      })}
      {/* </div> */}
      <style jsx>{`
        .gallery {
          display: flex;
          //flex-grow: 1; //Кофіцієнт збільшення
          flex-wrap: wrap;
          //justify-content: stretch; /* элементы имеют "авто-размер", чтобы соответствовать   контейнеру*/
          justify-content: space-between; /*Первый элемент вначале, последний в конце */
          //margin-bottom: 50px;
          max-width: 1240px;
          margin: 0 auto;
        }
        .gallery .image {
          padding: 20px;
          //margin: 5px;
          width: calc((100% - 40px) / 3); //Щирина при 3-х колонках
          margin: 0 0 20px;
          border-radius: 15px;
          //background: rgb(223, 222, 222);
          //box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
          //box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
          box-shadow: ${theme.colors.boxShadowPaper};
          background: ${theme.colors.backgroundPaper};
        }
        //iPad
        @media (max-width: 960px) {
          .gallery .image {
            width: calc((100% - 40px) / 2); //Щирина при 2-х колонках
            //width: 49%;
            padding: 10px 20px;
          }
        }
        //Mobi
        @media (max-width: 600px) {
          .gallery .image {
            width: auto;
            padding: 10px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
