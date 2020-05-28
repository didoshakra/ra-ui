//mobile_first.js //https://www.youtube.com/watch?v=qWWoIPLSeec

import Layout from "../../../../components/all/Layout";

const MobileFirst = () => {
  const colors = () => {
    accent: "#284074";
  };

  return (
    <Layout>
      {/* <section className="header-section"> */}
      <header className="header">
        <div className="conteiner">
          <div className="header__inner">
            <div className="logo">
              <a className="logo__link" href="#"></a>
              <img
                className="logo__link-img"
                src="/icons/SunRa-60.jpg"
                alt="logo"
              ></img>
            </div>
            <nav className="menu">
              <button className="menu__btn"></button>
            </nav>
          </div>
        </div>
      </header>
      {/* </section> */}
      <style jsx>{`
        .header-section {
          min-width: 320px;
          overflow-x: hidden;//Обрізає лишнє
        }
        .header-conteiner {
          padding: 0 20px;
        }
        .header {
          margin: 0;
          padding: 0;
          //background-color: ${colors.accent};
          background-color: #284074;
          //height: 80px;
        }
        .header__inner{
          margin: 0;
          padding: 0;
          min-height: 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo__link {
          margin-left: 8px;
          background-color: #284074;
        }

        .menu__btn {
          width: 40px;
          height: 40px;
          border-radius: 3px;
          background-color: #fff;
          padding: 0;
          //border: none;
          position: relative;
          margin-right: 8px;
        }
        .menu__btn::after {
          content: "";
          width: 12px;
          height: 2px;
          border-radius: 1px;
          background-color: #284074;
          position: absolute;
          top:15px;
          left: 14px;
          box-shadow: 0 4px 0 0 #284074,0 8px 0 0 #284074;
        }
      `}</style>
    </Layout>
  );
};

export default MobileFirst;
