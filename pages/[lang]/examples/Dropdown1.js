//Dropdown.jshttps:https://www.youtube.com/watch?v=5M4NB-P8gEk//https://codepen.io/divinector/pen/qgZKYQ
const Dropdown = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">
            Services
            <span className="arrow">&#x25BC;</span>
          </a>
          <ul className="submenu">
            <li>
              <a href="#">Android Dev</a>
            </li>
            <li>
              <a href="#">iOS Dev</a>
            </li>
            <li>
              <a href="#">
                Web Dev
                <span className="arrow">&#x25B6;</span>
              </a>
              <ul className="submenu-2">
                <li>
                  <a href="#">Node.js</a>
                </li>
                <li>
                  <a href="#">PHP</a>
                </li>
                <li>
                  <a href="#">Python</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Downloads</a>
        </li>
        <li>
          <a href="#">
            FAQs
            <span className="arrow">&#x25BC;</span>
          </a>
          <ul className="submenu">
            <li>
              <a href="#">Android</a>
            </li>
            <li>
              <a href="#">iOS</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        h1 {
          font-family: lato;
          font-size: 72px;
        }
        section {
          background: #f2f4f3;
          height: calc(100vh - 64px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .main-nav a {
          color: #f6f7f8;
          background: #254441;
          height: 64px;
          font-family: lato;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: background 0.4s;
        }
        .main-nav a:hover {
          background: #305753;
        }

        .main-nav {
        }

        .main-nav ul {
          list-style: none;
          display: flex;
        }

        .main-nav li {
          width: 100%;
          text-align: center;
          position: relative;
        }

        .main-nav li:hover .submenu > li {
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

        .submenu li {
          position: relative;
        }

        .submenu li:hover .submenu-2 li {
          display: block;
        }

        .submenu-2 li {
          display: none;
        }
        .submenu-2 {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 0px;
          left: 100%;
          width: 120px;
        }

        .arrow {
          margin-left: 8px;
          color: #eee;
          font-size: 12px;
        }
      `}</style>
    </nav>
  );
};

export default Dropdown;
