//
const CssExample = () => {
  return (
    <ul className="nav">
      <li>
        <a className="nav_link">Home</a>
      </li>
      <li>
        <a className="nav_link">
          Services
          <span className="arrow">&#x25BC;</span>
        </a>
      </li>
      <li>
        <a className="nav_link">Downloads</a>
      </li>
      <li>
        <a className="nav_link">
          FAQs
          <span className="arrow">&#x25BC;</span>
        </a>
      </li>
      <li>
        <a className="nav_link">About</a>
      </li>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .nav {
          list-style: none;
          display: flex;
        }
        .nav li {
          width: 100%;
          text-align: center;
          position: relative;
        }
        .nav_link {
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
        .nav_link:hover {
          background: #3d7a74;
        }
      `}</style>
    </ul>
  );
};

export default CssExample;
