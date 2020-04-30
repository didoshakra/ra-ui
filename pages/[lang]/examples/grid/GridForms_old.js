//GridForms.js
import Layout from "../../../../components/all/Layout";

const GridForms = () => {
  return (
    <Layout
      // title={t("pageAboutMe_title")}
      title="GridSiteTemplate"
      // description={t("pageAboutMe_description")}
      description="GridSiteTemplate"
    >
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
        //
      `}</style>
    </Layout>
  );
};

export default GridForms;
