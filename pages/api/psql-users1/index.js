///https://medium.com/@dannibla/connecting-nodejs-postgresql-f8967b9f5932
// const { Client } = require("pg");

const { pgclient } = require("../../../config/db");
pgclient.connect();

//node-postgres.com/features/queries
const text = "INSERT INTO users(name, age) VALUES($1, $2) RETURNING *";
const values = ["QQQQQQQQQQQ", "555"];
export default async function(request, response) {
  // Додати запис в БД
  pgclient.query(text, values, (err, results) => {
    if (err) {
      console.log(err.stack);
    } else {
      // console.log(results.rows[0]);
      response.status(200).json(results.rows);
    }
  });
}
