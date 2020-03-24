//
import { Container } from "next/app";
const CssExample = () => {
  return (
    <ul className="nav">
      <li className="nav__item">
        <a className="nav__link">Home</a>
      </li>
      <li className="nav__item">
        <a className="nav__link">
          Services
          <span className="arrow">&#x25BC;</span>
        </a>
      </li>
      <li className="nav__item">
        <a className="nav__link">Downloads</a>
      </li>
      <li className="nav__item">
        <a className="nav__link">
          FAQs
          <span className="arrow">&#x25BC;</span>
        </a>
        {/* випадаюче меню */}
        <ul className="submenu">
          <li>
            <a className="nav__link">Android</a>
          </li>
          <li>
            <a className="nav__link">iOS</a>
          </li>
        </ul>
        {/* ВМ/к */}
      </li>
      <li className="nav__item">
        <a className="nav__link">About</a>
      </li>
      <style jsx>{`
        .nav {
          margin: 0;
          padding: 0;
          box-sizing: border-box; /*Width і height без відступів,полів...*/
          display: flex;
          justify-content: space-around; //Х-Вирів по центру
          list-style: none; //маркери li(забрати)
          //background: #254441;
        }

        .nav__item {
          width: 100%;
          text-align: center;
          position: relative;
        }

        .nav__link {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1  auto;
          color: #f6f7f8;
          background: #254441;
          width: 100%;
          height: 40px;
          //font-size: 22px;
          font-family: lato;
          font-weight: bold;
          text-decoration: none; //
          transition: background 0.4s;
        }
        /*.main-nav a:hover {*/
        .nav__link:hover {
          color: #ba952a;
          background: #3d7a74;
        }
        .nav__link:hover .submenu > li {
          display: block;
          flex-direction: column;
          top: 0px;
        }

        .submenu li {
          display: none;
          position: absolute;
          top: 0px;
        }

        .submenu {
          display: flex;
          flex-direction: column;
          position: absolute;
          width: 100%;
        }
      `}</style>
    </ul>
  );
};

export default CssExample;
