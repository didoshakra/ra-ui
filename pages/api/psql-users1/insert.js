///pages/api/psql-users/insert.js
//Insert- добавлення даних в tabl.users
//node-postgres.com/features/queries

import { pgclient } from "../../../config/db";

pgclient.connect();

const text = "INSERT INTO users1(name, age) VALUES($1, $2) RETURNING *";
const values = ["rrrrrrrrrrr", "55"];
export default async function(request, response) {
  pgclient.query(text, values, (err, results) => {
    if (err) {
      console.log(err.stack);
    } else {
      // console.log(results.rows[0]);
      response.status(200).json(results.rows);
    }
  });
}
