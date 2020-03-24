//
import { Container } from "next/app";
const CssExample = () => {
  return (
    <ul className="nav">
      <li className="nav_item">
        <a href="#" className="nav_link">
          Home11111111111111111
        </a>
      </li>
      <li className="nav_item">
        <a className="nav_link">
          Services
          <span className="arrow">&#x25BC;</span>
        </a>
        {/* <ul className="submenu">
            <li>
              <a className="nav_link">Android Dev</a>
            </li>
            <li>
              <a className="nav_link">iOS Dev</a>
            </li>
            <li>
              <a className="nav_link">
                Web Dev
                <span className="arrow">&#x25B6;</span>
              </a>
              <ul className="submenu-2">
                <li>
                  <a hclassName="nav_link">Node.js</a>
                </li>
                <li>
                  <a hclassName="nav_link">PHP</a>
                </li>
                <li>
                  <a className="nav_link">Python</a>
                </li>
              </ul>
            </li>
          </ul> */}
      </li>
      <li className="nav_item">
        <a className="nav_link">Downloads</a>
      </li>
      <li className="nav_item">
        <a className="nav_link">
          FAQs
          <span className="arrow">&#x25BC;</span>
        </a>
        {/* <ul className="submenu">
            <li>
              <a className="nav_link">Android</a>
            </li>
            <li>
              <a className="nav_link">iOS</a>
            </li>
          </ul> */}
      </li>
      <li>
        <a className="nav_link">About</a>
      </li>
      <style jsx>{`
        .nav {
          margin: 0;
          padding: 0;
          box-sizing: border-box; /*Width і height задають ширину і висоту контенту і не включають в себе значення відступів, полів і кордонів.*/
          display: flex;
          //justify-content: flex-end; //X-Вирів ел вправо
          //justify-content: center; //Х-Вирів по центру
          //justify-content: space-around; //Х-рівномірно
          justify-content: space-between; //Х-по краях і рівномірно
          align-items: center; //Y-Вирівнювання
          list-style-type: none; //маркери(крапочки коло li) забрати
          //height: 50px; //Якщо не задано то приймає значення блочного елемента що входить в контейнер
          width: 100ph; //Якщо не задавати то ...
          //width: 325px;//Якщо не задавати то ...
          background: #254441;
          //background: #9ba5b3;
          //padding: 5px;
        }

        .nav__item {
          display: flex;
          //width: 100%;
          text-align: center;
          position: relative;
        }

        .nav_link {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1  auto;
          color: #f6f7f8;
          //background: #254441;
          width: 100%;
          height: 40px;
          //font-size: 22px;
          font-family: lato;
          font-weight: bold;
          text-decoration: none; //
          transition: background 0.4s;
        }
        /*.main-nav a:hover {*/
        .nav_link:hover {
          color: #ba952a;
          background: #3d7a74;
        }
      `}</style>
    </ul>
  );
};

export default CssExample;
