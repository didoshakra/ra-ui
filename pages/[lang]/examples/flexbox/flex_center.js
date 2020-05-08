//flex_centr.js.js
import Layout from "../../../../components/all/Layout";
import Link from "next/link";
import IconFreeShiping from "../../../../components/ui/icons/IconFreeShiping";

const FlexCenter = () => {
  return (
    <Layout
      // title={t("pageAboutMe_title")}
      title="FlexBox"
      // description={t("pageAboutMe_description")}
      description="FlexBox"
    >
      {/* <body className="body"> */}
      {/* Приклад 4: дисплей: inline-flex */}
      <p>
        <Link href="https://medium.com/@stasonmars/%D0%BC%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B8%CC%86-inline-flex-%D0%B8-%D1%87%D1%82%D0%BE-%D0%BE%D0%BD-%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D1%82-35997951ff03">
          <a>Приклад 4: 4-колонки</a>
        </Link>
      </p>
      <section className="center__row">
        <div className="center__column">
          <div className="center__child">
            {/* child */}
            <div className="center__child1">
              {/* child1 */}
              <div className="center__child2">
                {/* child2 */}
                <div className="center__child3">
                  <IconFreeShiping
                    width="50"
                    height="50"
                    fill="#fff"
                    fill2="black"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="center__child">1-2</div>
          <div className="center__child">1-3333-</div>
        </div>
        <div className="center__column">
          <div className="center__child">2-1</div>
          <div className="center__child">2-2</div>
          <div className="center__child">2-3</div>
        </div>
        <div className="center__column">
          <div className="center__child">3-1</div>
          <div className="center__child">3-2</div>
          <div className="center__child">3-3</div>
        </div>
        <div className="center__column">
          <div className="center__child">4-1</div>
          <div className="center__child">4-2</div>
          <div className="center__child">4-3</div>
        </div>
        {/* </div> */}
      </section>
      {/* </body> */}
      <style jsx>{`
        .center__row {
          display: flex;
          //flex-wrap: wrap;
          align-items: center; //Y-вертикально
          justify-content: space-evenly; //X-рівно,end-1/2
          //
          width: 100%;
          height: 600px;
          border: 1px solid black; /* Параметры границы */
        }
        .center__column {
          display: flex;
          padding: 5px;
          flex-direction: column; //в стовбець; //в
          justify-content: center;
          align-items: center;
          //
          background-color: #64b5f6;
          width: calc((100% - 40px) / 4);
          height: 550px;
          margin: 0 5px;
          border: 1px solid black; /* Параметры границы */
        }
        .center__child {
          display: flex;
          padding: 2px;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 200px;
          height: 150px;
          background-color: #f06292;
          border: 1px solid black; /* Параметры границы */
        }
        .center__child1 {
          display: flex;
          padding: 2px;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background-color: #62f069;
          border: 1px solid black; /* Параметры границы */
        }
        .center__child2 {
          display: flex;
          flex-direction: column; //в стовбець; //в
          padding: 2px;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: #8862f0;
          border: 1px solid black; /* Параметры границы */
        }
        .center__child3 {
          display: flex;
          padding: 2px;
          flex-direction: column; //в стовбець; //в
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 50px;
          height: 50px;
          background-color: #f062e9;
          border: 1px solid black; /* Параметры границы */
        }
      `}</style>
    </Layout>
  );
};

export default FlexCenter;
