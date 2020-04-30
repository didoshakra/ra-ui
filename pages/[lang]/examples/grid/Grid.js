//grod1.js
import Layout from "../../../../components/all/Layout";
// import GridSiteTemplate from "./GridSiteTemplate";
// import GridForms from "./GridForms";

const Grid = () => {
  return (
    <Layout
      // title={t("pageAboutMe_title")}
      title="GridSiteTemplate"
      // description={t("pageAboutMe_description")}
      description="GridSiteTemplate"
    >
      <section>
        <div className="grid1">
          <div>1-150px </div>
          <div>2-2fr </div>
          <div>3-7em </div>
          <div>4-30%</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
        Адаптивний Grid (Auto-fill і auto-fit), які дозволяють вам створювати
        грід з безліччю треків певного розміру, які будуть міститися в контейнер
        <div className="grid auto-fill">
          <div>auto-fill</div>
          <div>auto-fill</div>
        </div>
        <div className="grid auto-fit">
          <div>auto-fit</div>
          <div>auto-fit</div>
        </div>
        Вкладений грід
        <div className="outer-grid">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div className="inner-grid">
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
          </div>
        </div>
        Підгрід
        <ul>
          <li>
            <label>Name:</label>
            <input name="first_name" />
          </li>
          <li>
            <label>Address:</label>
            <input name="phone" />
          </li>
          <li>
            <label>Phone:</label>
            <input name="address" />
          </li>
        </ul>
      </section>
      <section>
        *** GridSiteTemplate***
        <body className="body">
          <header className="pageHeader">Header</header>
          <article className="mainArticle">Article</article>
          <nav className="mainNav">Nav</nav>
          <div className="siteAds">Ads</div>
          <footer className="pageFooter">Footer</footer>
        </body>
      </section>
      <section>
        *** Форма з авто-розміщенням ***
        <form className="myForm">
          <label for="customer_name">Name </label>
          <input
            type="text"
            name="customer_name"
            className="customer_name"
            required
          />
          <label for="email_address">Email </label>
          <input type="email" name="email_address" className="email_address" />
          <label for="comments">Comments</label>
          <textarea
            name="comments"
            className="comments"
            maxlength="500"
          ></textarea>
          <button>Submit</button>
        </form>
        *** Складна форма ***
        <form className="myForm1">
          <label for="customer_name">Name </label>
          <input type="text" name="customer_name" id="customer_name" required />
          <label for="phone_number">Phone </label>
          <input type="tel" name="phone_number" id="phone_number" />
          <label for="email_address">Email </label>
          <input type="email" name="email_address" id="email_address" />
          {/* <fieldset>  для групування елементів форми */}
          <fieldset>
            <legend>Which taxi do you require?</legend>
            <label>
              <input
                type="radio"
                name="taxi"
                id="taxi_car"
                required
                value="car"
              />
              Car
            </label>
            <label>
              <input
                type="radio"
                name="taxi"
                id="taxi_van"
                required
                value="van"
              />
              Van
            </label>
            <label>
              <input
                type="radio"
                name="taxi"
                id="taxi_tuk"
                required
                value="tuktuk"
              />
              Tuk Tuk
            </label>
          </fieldset>
          <fieldset>
            <legend>Extras</legend>
            <label>
              <input
                type="checkbox"
                name="extras"
                id="extras_baby"
                value="baby"
              />
              Baby Seat
            </label>
            <label>
              <input
                type="checkbox"
                name="extras"
                id="extras_wheel"
                value="wheelchair"
              />
              Wheelchair Access
            </label>
            <label>
              <input
                type="checkbox"
                name="extras"
                id="extras_tip"
                value="tip"
              />
              Stock Tip
            </label>
          </fieldset>
          <label for="pickup_time">Pickup Date/Time</label>
          <input
            type="datetime-local"
            name="pickup_time"
            id="pickup_time"
            required
          />
          <label for="pickup_place">Pickup Place</label>
          <select name="pickup_place" id="pickup_place">
            <option value="" selected="selected">
              Select One
            </option>
            <option value="office">Taxi Office</option>
            <option value="town_hall">Town Hall</option>
            <option value="telepathy">We’ll Guess!</option>
          </select>
          <label for="dropoff_place">Dropoff Place</label>
          <input
            type="text"
            name="dropoff_place"
            id="dropoff_place"
            required
            list="destinations"
          />
          {/* <datalist>- список варіантів, які можна вибирати при наборі в текстовому полі */}
          <datalist id="destinations">
            <option value="Airport" />
            <option value="Beach" />
            <option value="Fred Flinstone’s House" />
          </datalist>
          <label for="comments">Special Instructions</label>
          <textarea name="comments" id="comments" maxlength="500"></textarea>
          <button>Submit Booking</button>
        </form>
      </section>

      <style jsx>{`
        .grid1 {
          display: grid;
          //display: inline-grid; //Cтворити рядковий грід-контейнер.??
          //display: subgrid; //Створити підсітку??
          //grid-template-rows: 1fr 2fr 0.5fr;
          grid-template-rows: repeat(2, 1fr) 0.5fr;
          //grid-template-rows: 200px 7em 30%;
          //grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-columns: 150px 2fr 7em 30%;
          grid-gap: 2vw; //прогалини між грід елементами//Відносно 1% ширини вікна перегляду bbbbbbbbbbbbbbb
          border: 1px solid black;
          margin: 10px;
        }
        .grid {
          display: grid;
          grid-gap: 2vw;
          border: 1px solid black;
          margin: 10px;
        }
        //різні стилі для елементів grid
        .grid > div,
        .grid1 > div {
          font-size: 3vw; //Відносно 1% ширини вікна перегляду
          padding: 0.5em; //Відносно розміру шрифту елемента (0ю5em означає в 2 рази менше розміру поточного шрифту)
          background: gold;
          text-align: center; //вирівнювання по Х
        }

        /*Адаптивний Grid-Auto-fill і auto-fit, які дозволяють вам створювати грід з безліччю треків певного розміру, які будуть міститися в контейнер*/
        .auto-fill {
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        }
        .auto-fit {
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        }
        /*вкладений грід*/
        .outer-grid {
          display: grid;
          grid-template-rows: 1fr 1fr;
          grid-template-columns: 1fr 1fr;
          grid-gap: 8px;
        }
        .outer-grid > div {
          background-color: limegreen;
          color: white;
          font-size: 4vw;
          padding: 8px;
        }
        .inner-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 5px;
        }
        .inner-grid > div {
          background: lightgreen;
          padding: 8px;
        }
        //підгрід
        ul {
          display: grid;
          grid: auto-flow / auto 1fr;
        }
        li {
          display: subgrid;
          grid-column: span 2;
          margin: 0.5em;
          border: solid;
          padding: 0.5em;
        }
        label {
          grid-column: 1;
        }
        input {
          grid-column: 2;
        }
        //GridSiteTemplate
        body {
          display: grid;
          grid-template-areas:
            "header header header"
            "nav article ads"
            "footer footer footer";
          grid-template-rows: 80px 1fr 70px;
          grid-template-columns: 20% 1fr 15%;
          grid-gap: 10px;
          height: 100vh;
          margin: 0;
        }
        .pageHeader,
        .mainArticle,
        .mainNav,
        .siteAds,
        .pageFooter {
          padding: 20px;
          background: gold;
        }
        .pageHeader {
          grid-area: header;
        }
        .pageFooter {
          grid-area: footer;
        }
        .mainArticle {
          grid-area: article;
        }
        .mainNav {
          grid-area: nav;
        }
        .siteAds {
          grid-area: ads;
        }
        //Для мобілок
        @media all and (max-width: 600px) {
          body {
            grid-template-areas:
              "header"
              "article"
              "ads"
              "nav"
              "footer";
            grid-template-rows: 80px 1fr 70px 1fr 70px;
            grid-template-columns: 1fr;
          }
        }
        //GridForms
        .myForm {
          display: grid;
          grid-template-columns: [labels] auto [controls] 1fr;
          grid-auto-flow: row;
          grid-gap: 0.8em;
          background: beige;
          padding: 1.2em;
        }
        .myForm > label {
          grid-column: labels;
          grid-row: auto;
        }
        .myForm > input,
        .myForm > textarea {
          grid-column: controls;
          grid-row: auto;
        }
        .myForm > button {
          grid-column: span 2;
        }
        /* //Складна форма */
        .myForm1 {
          display: grid;
          grid-template-columns: [labels] auto [controls] 1fr;
          grid-auto-flow: row;
          grid-gap: 0.8em;
          background: beige;
          padding: 1.2em;
        }
        .myForm1 > label,
        .myForm1 > fieldset {
          grid-column: labels;
          grid-row: auto;
        }
        .myForm1 > input,
        .myForm1 > select,
        .myForm1 > textarea {
          grid-column: controls;
          grid-row: auto;
          padding: 0.4em;
          border: 0;
        }
        .myForm1 > fieldset,
        .myForm1 > button {
          grid-column: span 2;
        }
        .myForm1 > button {
          padding: 1em;
          background: darkkhaki;
          border: 0;
          color: white;
        }
      `}</style>
    </Layout>
  );
};

export default Grid;
