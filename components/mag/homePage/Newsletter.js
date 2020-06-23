//Newsletter.js//Розсилка

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-info">
          <h2
            style={{ fontSize: "22px", marginBottom: "0", color: "#000000 " }}
          >
            Subcribe to our Newsletter
          </h2>
          <span>
            Get e-mail updates about our latest shops and special offers
          </span>
        </div>
        {/* <div className="col-md-6 d-flex align-items-center"> */}
        <div className="newsletter-form">
          <form action="#" className="subscribe-form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter email address"
              />
              <input type="submit" value="Subscribe" className="submit" />
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .newsletter-section {
          //padding: 3rem 20vw; //rem-шрифт кореневого
          padding: 3rem 0; //rem-шрифт кореневого
          display: block;
          position: relative;
          background-color: #f7f6f2;
          //display: block// по замовчуванню (для section)
          //border: 2px solid #82ae46;
        }
        .newsletter-container {
          padding: 0 2vw; //rem-шрифт кореневого
          display: flex;
          flex: 0 1 auto;
          flex-direction: column;
          justify-content: space-between; //Крайні елементи притискаються до країв
          align-items: center; //Y-вертикально //R-щоб рівняло по верху
          color: gray;
        }
        .newsletter-info {
          position: relative;
          width: 100%;
        }
        .newsletter-form {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
        }
        .subscribe-form {
          width: 100%;
        }
        .form-group {
          position: relative;
          display: flex; //d-flex
          justify-content: space-between; //Крайні елементи притискаються до краївmargin-bottom: 0;
          border: none;
          background: #fff;
          border-radius: 0;
        }
        .form-group input {
          background: #fff;
          border: 1px solid transparent;
          color: black;
          font-size: 14px;
          font-weight: 300;
          border-radius: 30px;
        }
        .form-group .submit {
          padding-left: 1rem; //px-3
          border-left: 1px solid #82ae46;
          color: #fff;
          border-radius: 0;
          font-size: 12px;
          background: #82ae46;
          width: 100px;
        }
        .form-group .submit:hover {
          cursor: pointer;
        }
        .form-control {
          display: block;
          width: 100%;
          padding: 0.375rem 0.75rem;
          height: 52px;
          background: #fff;
          color: #000000;
          font-size: 18px;
          border-radius: 0px;
          box-shadow: none;
        }
        .form-control:focus,
        .form-control:active {
          border-color: #000000;
        }

        @media (min-width: 600px) {
          .newsletter-section {
            padding: 6rem 2vw; //rem-шрифт кореневого
          }
          .newsletter-container {
            flex-direction: row; //row-по замовчуванню
          }
        }
      `}</style>
    </section>
  );
};
export default Newsletter;
