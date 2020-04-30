//FlexBox.js
import Layout from "../../../../components/all/Layout";
import Link from "next/link";

const FlexBox = () => {
  return (
    <Layout
      // title={t("pageAboutMe_title")}
      title="FlexBox"
      // description={t("pageAboutMe_description")}
      description="FlexBox"
    >
      <body className="body">
        <p>FlexBox / Може вилізати за батька</p>
        {/* розділ - який не може бути представлений більш точним по семантиці елементом - всередині HTML-документа. */}
        <container className="section">
          <article className="article">item1</article>
          <article className="article">item2</article>
          <article className="article">item3</article>
          <article className="article">item4</article>
          <article className="article">item5</article>
          <article className="article">item6</article>
          <article className="article">item7</article>
          <article className="article">item8</article>
        </container>
        {/* Приклад 1: дисплей: flex */}
        <Link href="https://medium.com/@stasonmars/%D0%BC%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B8%CC%86-inline-flex-%D0%B8-%D1%87%D1%82%D0%BE-%D0%BE%D0%BD-%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D1%82-35997951ff03">
          <a>Приклад 1: дисплей: flex</a>
        </Link>
        <div className="container--flex">
          <div className="flex-child">1</div>
          {/* <div className="flex-child"></div> */}
          {/* <div className="flex-child"></div> */}
        </div>
        <div className="container--flex">
          <div className="flex-child">2</div>
          <div className="flex-child">3</div>
          {/* <div className="flex-child"></div> */}
        </div>
        <div className="container--flex">
          <div className="flex-child">4</div>
          <div className="flex-child">5</div>
          <div className="flex-child">6</div>
        </div>
        {/* Приклад 2: дисплей: inline-flex */}
        <p>
          <Link href="https://medium.com/@stasonmars/%D0%BC%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B8%CC%86-inline-flex-%D0%B8-%D1%87%D1%82%D0%BE-%D0%BE%D0%BD-%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D1%82-35997951ff03">
            <a>Приклад 2: дисплей: inline-flex</a>
          </Link>
        </p>
        <div className="container--inline-flex">
          <div className="flex-child">1</div>
          {/* <div className="flex-child"></div> */}
          {/* <div className="flex-child"></div> */}
        </div>
        <div className="container--inline-flex">
          <div className="flex-child">2</div>
          <div className="flex-child">3</div>
          {/* <div className="flex-child"></div> */}
        </div>
        <div className="container--inline-flex">
          <div className="flex-child">4</div>
          <div className="flex-child">5</div>
          <div className="flex-child">6</div>
        </div>
        {/* Центруємо текст горизонтально і вертикально, використовуючи CSS для вирівнювання по центру */}
        <p>
          <Link href="https:https://love2dev.com/blog/absolute-centering-css/">
            <a>
              Центруємо текст горизонтально і вертикально, використовуючи CSS
              для вирівнювання по центру
            </a>
          </Link>
        </p>
        <div className="text-example">
          <h1>How to Center</h1>
          <h2>Anything with HTML & CSS</h2>
        </div>
      </body>
      <style jsx>{`
        .body {
          margin: 64px;
        }
        .section {
          margin: 64px;
          //height: 100vh;
          //width: 100%;
          height: 150px;
          width: 100%;
          display: flex;
          //padding: 10px;
          flex-wrap: wrap;
          //justify-content: center;
          //align-items: center;
          border: 2px solid black; /* Параметры границы */
          //flex-direction: column
        }
        .article {
          //margin: 5px;
          height: 100px;
          width: 250px;
          border: 1px solid black; /* Параметры границы */
          background: gold;
        }

        //Приклад 1: дисплей: flex
        .container--flex {
          display: flex;
          flex-wrap: wrap;
        }
        .container--inline-flex {
          display: inline-flex;
          flex-wrap: wrap;
          margin: 10px;
        }
        .container--flex,
        .container--inline-flex {
          background-color: #64b5f6;
          margin-bottom: 10px; /* для эстетичности*/
        }

        .flex-child {
          flex: 1;
          min-width: 50px;
          min-height: 50px;
          margin: 10px;
          background-color: #f06292;
        }
        //Центруємо текст горизонтально і вертикально, використовуючи CSS для вирівнювання по центру
        .text-example {
          display: flex;
          align-items: center; //Y-вертикально
          justify-content: center; //X-горизонтально
          flex-direction: column; //в стовбець
          text-align: center;
          width: 100%;
          margin: 10% 0;
          min-height: 200px;
          background-color: rgba(33, 33, 33, 0.3);
          border: 1px solid black; /* Параметры границы */
        }
      `}</style>
    </Layout>
  );
};

export default FlexBox;
